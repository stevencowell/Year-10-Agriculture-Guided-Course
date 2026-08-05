import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const repo = path.resolve(import.meta.dirname, "..");
const read = (file) => fs.readFileSync(path.join(repo, file), "utf8");
const must = (condition, message) => { if (!condition) throw new Error(message); };

function walk(folder) {
  return fs.readdirSync(folder, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name === ".git") return [];
    const full = path.join(folder, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const requiredFiles = [
  "index.html", "module.html", "folio.html", "plans/index.html",
  "guided/data.js", "guided/course.js", "guided/course.css", "guided/landing.js",
  "assessment/index.html", "assessment/task-1.html", "assessment/task-2.html", "assessment/task-3.html",
  "busy-work/index.html", "youtube-learning/index.html",
  "assets/agriculture-hero.png",
  "source-notes/COURSE-CONTRACT.md", "source-notes/CHANGE-RECORD.md", "source-notes/DRIVE-SOURCE-INVENTORY.csv",
  "source-notes/PLANS-DRAWINGS-AUTHORITY.md",
  "source-notes/QUESTION-BANK.json", "source-notes/VISUAL-MANIFEST.json",
  "source-notes/VISUAL-SEMANTIC-AUDIT.md", "source-notes/YOUTUBE-LEARNING-MANIFEST.json"
];
requiredFiles.forEach((file) => must(fs.existsSync(path.join(repo, file)), `Missing ${file}`));

for (const file of walk(repo).filter((file) => new Set([".html", ".js", ".mjs", ".css", ".md", ".json", ".txt"]).has(path.extname(file).toLowerCase()))) {
  if (path.resolve(file) === path.resolve(import.meta.filename)) continue;
  const content = fs.readFileSync(file, "utf8");
  const relative = path.relative(repo, file);
  if (!relative.startsWith(`source-notes${path.sep}`)) {
    must(!/Year 8 Agriculture|Stage 4 Technology|TE4-[A-Z]+-01|Module 11.*poultry|Build a Beef Farm/i.test(content), `Stale Year 8 Agriculture content found in ${relative}.`);
  }
  must(!/[Ã�ï¿½]/.test(content), `Broken text encoding found in ${path.relative(repo, file)}.`);
}

const sandbox = { window: {} };
vm.runInNewContext(read("guided/data.js"), sandbox);
const course = sandbox.window.COURSE_DATA;
must(course && Array.isArray(course.modules), "Course data did not load.");
must(course.draft !== true, "Course data is still the draft scaffold.");
must(course.shortTitle === "Year 10 Agriculture", "Course title is incorrect.");
must(course.storagePrefix === "year-10-agriculture", "Course storage prefix is not unique.");
must(course.modules.length === 20, "Course must contain exactly 20 two-week modules.");
must(course.modules.every((module, index) => module.projectModule === index + 1), "Module order must remain 1–20.");
must(course.modules.every((module) => module.cadence === "Two-week module"), "Every module must retain the two-week cadence.");
must(course.modules.every((module) => module.sections?.length === 3), "Every module must contain exactly three named theory sections.");
must(course.modules.flatMap((module) => module.sections).length === 60, "Course must contain exactly 60 named theory sections.");
must(course.modules.every((module) => module.checks?.length === 30), "Every module must contain exactly 30 knowledge checks.");
must(course.modules.every((module) => module.sections.every((_, theoryIndex) => module.checks.filter((check) => check.theoryIndex === theoryIndex).length === 10)), "Every named theory section must contain exactly ten checks.");
must(course.modules.every((module) => module.sections.every((_, theoryIndex) => new Set(module.checks.filter((check) => check.theoryIndex === theoryIndex).map((check) => check.answerIndex)).size === 4)), "Every named theory section must distribute correct answers across all four option positions.");

const allChecks = course.modules.flatMap((module) => module.checks);
must(allChecks.length === 600, "Course must contain exactly 600 student-learning checks.");
must(allChecks.every((check) => check.options?.length === 4 && Number.isInteger(check.answerIndex) && check.answerIndex >= 0 && check.answerIndex < 4), "Every check must contain four options and a valid answer index.");
must(allChecks.every((check) => check.question?.trim() && check.correctFeedback?.trim() && check.incorrectFeedback?.trim()), "Every check must include a question and useful feedback.");

const quizBan = /\b(?:AG5-\d+|outcome codes?|syllabus outcomes?|programme labels?|teacher|assessment (?:task|metadata|date|weighting)|task number|weighting|due date|total marks?|file names?|filename|folders?|Google Drive|source IDs?|website labels?)\b/i;
allChecks.forEach((check) => {
  const testedText = [check.question, ...check.options].join(" ");
  must(!quizBan.test(testedText), `Knowledge check tests prohibited curriculum/admin metadata: ${check.question}`);
});

const sections = course.modules.flatMap((module) => module.sections);
sections.forEach((section) => {
  const words = section.theory.join(" ").trim().split(/\s+/).length;
  must(words >= 250 && words <= 420, `${section.id} theory must contain 250–420 words; found ${words}.`);
  must(section.takeaways?.length >= 3 && section.takeaways.length <= 5, `${section.id} must contain 3–5 takeaways.`);
  must(section.boundary?.trim(), `${section.id} is missing a source boundary.`);
  must(section.sources?.length, `${section.id} is missing source records.`);
  must(section.visual?.image && section.visual?.alt && section.visual?.caption, `${section.id} is missing a complete visual record.`);
  must(fs.existsSync(path.join(repo, section.visual.image)), `${section.id} links to missing ${section.visual.image}.`);
});
must(course.modules.every((module) => module.written?.length >= 3 && module.written.length <= 6), "Every module must contain one or two written tasks per theory section.");
must(course.modules.flatMap((module) => module.written).every((item) => item.prompt?.trim() && item.clarification?.trim() && item.model?.trim()), "Every written task must include a prompt, clarification and Appropriate response example.");
const pedigreeLearning = course.modules[10]?.sections[1]?.drawingGuidance;
must(pedigreeLearning?.sheets?.length === 1 && pedigreeLearning.sheets[0].open === pedigreeLearning.sheets[0].preview, "Module 11 section 2 must contain one full-resolution pedigree-reading guide.");
must(!/Border Leicester|Poll Dorset|White Suffolk/i.test(JSON.stringify(pedigreeLearning)), "Pedigree-reading guidance must not complete the student's variable-ram or terminal-sire breed choices.");

const questionBank = JSON.parse(read("source-notes/QUESTION-BANK.json"));
must(questionBank.authoredVia === "Signed-in ChatGPT in the in-app browser, one named theory section at a time", "Question-bank authoring provenance is missing.");
must(questionBank.sections?.length === 60, "Question bank must contain 60 named sections.");
must(questionBank.sections.every((section) => section.questions?.length === 10), "Every question-bank section must contain exactly ten questions.");

const folio = read("folio.html");
must((folio.match(/class="card folio-card"/g) || []).length === 12, "Folio must contain exactly 12 evidence cards.");
must((folio.match(/class="folio-visual"/g) || []).length === 12, "Every folio card must include one visual hook.");
for (let index = 1; index <= 12; index += 1) must(folio.includes(`id="folio-card-${String(index).padStart(2, "0")}"`), `Missing folio card ${index}.`);
must(folio.includes("Print / Save PDF") && folio.includes("Download backup") && folio.includes("Restore backup"), "Folio evidence controls are incomplete.");

const courseScript = read("guided/course.js");
must(courseScript.includes("Print / Save PDF"), "Modules must include Print / Save PDF.");
must(courseScript.includes("localStorage") && courseScript.includes("indexedDB"), "Course evidence persistence is incomplete.");
must(courseScript.includes('target = "_blank"') || courseScript.includes('target="_blank"'), "Teaching visuals must provide Open larger in a new tab.");

const visualManifest = JSON.parse(read("source-notes/VISUAL-MANIFEST.json"));
const visualRecords = visualManifest.assets || visualManifest.records || [];
const visualPath = (record) => record.asset_path ?? record.path ?? record.relative_path ?? record.file;
const theoryVisualRecords = visualRecords.filter((record) => record.role === "theory_visual");
must(visualRecords.filter((record) => record.role === "hero").length === 1, "Visual manifest must contain one hero record.");
must(visualRecords.filter((record) => record.role === "folio_card").length === 12, "Visual manifest must contain twelve folio-card records.");
must(theoryVisualRecords.length === 60, "Visual manifest must contain sixty theory-visual records.");
must(visualRecords.filter((record) => record.role === "pedigree_guide").length === 1, "Visual manifest must contain the source-derived pedigree-reading guide.");
visualRecords.forEach((record) => {
  const status = record.semantic_status ?? record.semanticStatus ?? record.semantic_audit ?? record.qa?.semanticStatus;
  const assetPath = visualPath(record);
  must(/^PASS\b/.test(status || ""), `Visual ${record.asset_id ?? record.id ?? assetPath} is not a semantic PASS.`);
  must(assetPath && fs.existsSync(path.join(repo, assetPath)), `Visual asset is missing: ${assetPath}.`);
  must((record.alt ?? record.alt_text)?.trim() && record.caption?.trim(), `Visual ${assetPath} is missing alt or caption text.`);
});
must(new Set(theoryVisualRecords.map(visualPath)).size === 60, "Theory visuals must use sixty distinct in-use paths; repeated contextual images are not permitted.");
must(theoryVisualRecords.every((record) => /^[a-f0-9]{64}$/i.test(record.sha256 || "")), "Every theory visual must record a SHA-256 hash.");
must(new Set(theoryVisualRecords.map((record) => record.sha256.toLowerCase())).size === 60, "Theory visuals must use sixty distinct SHA-256 hashes; byte-identical contextual images are not permitted.");
for (let moduleNumber = 1; moduleNumber <= 20; moduleNumber += 1) {
  must(theoryVisualRecords.some((record) => Number(record.module) === moduleNumber), `Module ${moduleNumber} lacks a purposeful theory visual.`);
}
must(new Set(course.modules.flatMap((module) => module.sections.map((section) => section.visual.image))).size === 60, "Rendered theory sections repeat a contextual visual path.");
const visualAudit = read("source-notes/VISUAL-SEMANTIC-AUDIT.md");
must(!/\b(?:PENDING|REPLACE|REMOVE)\b/.test(visualAudit), "Visual semantic audit contains an unresolved item.");
must(visualAudit.includes("## Visual repetition gate") && visualAudit.includes("60 distinct in-use paths") && visualAudit.includes("60 distinct SHA-256"), "Visual semantic audit does not prove the repetition gate.");
must(visualAudit.includes("module.html?module=11#theory-11-2") && visualAudit.includes("plans/index.html"), "Visual semantic audit does not document the exact justified pedigree-guide reuse locations.");

const videoManifest = JSON.parse(read("source-notes/YOUTUBE-LEARNING-MANIFEST.json"));
must(videoManifest.validationDate === "2026-08-05" && /oEmbed/i.test(videoManifest.validationMethod) && /17.*200/.test(videoManifest.thumbnailValidation || ""), "YouTube manifest must record the current oEmbed, embed and thumbnail validation.");
must(videoManifest.videos?.length === 17, "YouTube learning must contain the 17 validated course clips.");
must(new Set(videoManifest.videos.map((clip) => clip.id)).size === 17, "YouTube video IDs must be unique.");
must(videoManifest.videos.every((clip) => /^[A-Za-z0-9_-]{11}$/.test(clip.id) && clip.title && clip.author && clip.topic && clip.module && clip.moduleTitle && clip.purpose && clip.watchFor && clip.url && clip.oembed === 200 && clip.embed === 200), "Every video record is incomplete or lacks a successful current check.");
const youtubePage = read("youtube-learning/index.html");
const youtubeScript = read("youtube-learning/app.js");
must(youtubePage.includes("Open in YouTube") && youtubeScript.includes("youtube-nocookie.com/embed/"), "YouTube route lacks privacy-enhanced playback or fallbacks.");

const landing = read("index.html");
must(landing.includes("plans/index.html") && landing.includes("busy-work/index.html") && landing.includes("youtube-learning/index.html") && landing.includes("assessment/index.html") && landing.includes("folio.html"), "Landing navigation omits a required destination.");
must(/2019 syllabus controls the 2026 course/i.test(landing) && /2024 syllabus is scheduled for implementation from 2027/i.test(landing), "Landing page does not state the verified 2026 syllabus implementation boundary.");
const plansPage = read("plans/index.html");
must(plansPage.includes("Open larger") && plansPage.includes("Print / Save PDF") && plansPage.includes("Teacher to confirm"), "Plans route lacks its full-resolution, print or authority-boundary controls.");
must(!/Border Leicester|Poll Dorset|White Suffolk/i.test(plansPage), "Plans route must not complete the student's variable-ram or terminal-sire breed choices.");
const busyBridge = read("busy-work/index.html");
must(busyBridge.includes("https://stevencowell.github.io/busy-worksheets/index.html?library=agriculture-year-10"), "Busy Work route does not target the approved shared library.");
const busyRepo = path.resolve(process.env.BUSY_WORK_REPO || path.join(repo, "..", "busy-worksheets"));
const busyLibrariesPath = path.join(busyRepo, "libraries.js");
must(fs.existsSync(busyLibrariesPath), `Busy Work source repository is missing at ${busyRepo}.`);
const busySandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(busyLibrariesPath, "utf8"), busySandbox);
const busyLibrary = busySandbox.window.BUSY_LIBRARY_DEFINITIONS?.["agriculture-year-10"];
must(busyLibrary, "Busy Work library agriculture-year-10 is missing.");
must(busyLibrary.config?.storageKey === "busy-worksheets:agriculture-year-10:v1", "Busy Work storage key is incorrect.");
must(busyLibrary.home === "https://stevencowell.github.io/Year-10-Agriculture-Guided-Course/", "Busy Work return destination is incorrect.");
const busyActivities = busyLibrary.config?.activities || [];
must(busyActivities.length === 24, "Busy Work must contain exactly 24 Year 10 Agriculture activities.");
must(new Set(busyActivities.map((activity) => activity.id)).size === 24, "Busy Work activity IDs must be unique.");
must(busyActivities.every((activity) => activity.title && activity.category && activity.questions?.length), "Every Busy Work activity must contain a title, category and answerable questions.");
const busyMechanics = new Set(busyActivities.flatMap((activity) => activity.questions.map((question) => question.type)));
must(busyMechanics.size >= 7 && ["sort", "route", "evidenceSelect", "text", "match", "flow", "table"].every((type) => busyMechanics.has(type)), "Busy Work activity mechanics are not sufficiently varied.");

const studentSurface = [landing, read("module.html"), folio, read("assessment/index.html"), read("assessment/task-1.html"), read("assessment/task-2.html"), read("assessment/task-3.html")].join("\n");
must(!/ANSWERS?\.docx|answer key/i.test(studentSurface.replace(/does not publish the test paper or answer key/i, "")), "Student-facing pages expose an answer-key reference.");
const publicText = walk(repo).filter((file) => new Set([".html", ".js", ".mjs", ".md", ".json", ".csv"]).has(path.extname(file).toLowerCase())).map((file) => fs.readFileSync(file, "utf8")).join("\n");
const controlledFilePattern = new RegExp(`(?:${["ANSWERS?", "docx"].join("\\.")}|${["2026 Assessment Task 1 - Topic Test", "docx"].join("\\.")})`, "i");
must(!controlledFilePattern.test(publicText), "Public release exposes a controlled paper or answer-copy filename or link.");
must(!/INSERT CODE/.test(studentSurface), "Student-facing pages expose a placeholder Classroom code.");
must(/Task 1[\s\S]*25%[\s\S]*Task 2[\s\S]*35%[\s\S]*Task 3[\s\S]*40%/.test(read("assessment/index.html")), "Assessment schedule metadata is incomplete.");
must(/Plant Density Trial/.test(read("assessment/index.html")) && /Teacher to confirm/.test(read("assessment/index.html")), "Task 2 authority conflict is not visible.");

for (const file of ["index.html", "module.html", "folio.html", "plans/index.html", "assessment/index.html", "assessment/task-1.html", "assessment/task-2.html", "assessment/task-3.html", "busy-work/index.html", "youtube-learning/index.html"]) {
  const html = read(file);
  must((html.match(/<h1\b/g) || []).length === 1, `${file} must contain exactly one H1.`);
  for (const match of html.matchAll(/(?:href|src)="([^"#?]+)(?:\?[^"#]*)?"/g)) {
    const target = match[1];
    if (/^(?:https?:|mailto:|data:)/.test(target)) continue;
    must(fs.existsSync(path.resolve(repo, path.dirname(file), target)), `${file} links to missing ${target}.`);
  }
}

console.log("Course validation passed: 20 modules, 60 theory sections, 600 student-learning checks, 12 folio cards, 24 Busy Work activities and 17 validated clips.");
