import fs from "node:fs";
import path from "node:path";

const repo = path.resolve(import.meta.dirname, "..");
const taskRoot = path.resolve(repo, "..", "..", "..");
const handoffRoots = ["18b-theory", "18f-theory", "18e-theory", "18g-theory"]
  .map((name) => path.join(taskRoot, "work", "handoffs", name));
const visualManifestPath = path.join(repo, "source-notes", "VISUAL-MANIFEST.json");
const must = (condition, message) => { if (!condition) throw new Error(message); };

const metadata = [
  ["Agriculture in Australia and its industries", "Connect Australian agricultural systems with diverse industries, enterprises, careers and community needs."],
  ["Living systems and integrated pest management", "Distinguish helpful and harmful organisms, then apply integrated approaches to agricultural pest decisions."],
  ["Agricultural data and marketing strategies", "Interpret livestock data and explain how producers use marketing evidence and strategies."],
  ["Marketing research and value adding", "Gather market evidence and examine how value adding changes products, customers and returns."],
  ["Alternative production systems and topic-test preparation", "Compare alternative systems and consolidate the Agricultural Systems & Management learning required by the formal topic test."],
  ["Plant anatomy, performance and identification", "Use observable plant structures and characteristics to explain pasture and crop performance and identify agricultural plants."],
  ["Soil health and technology in plant systems", "Relate soil condition and management to the purposeful use of technology in plant production."],
  ["Pasture deterioration and cropping finance", "Diagnose pasture decline and interpret financial evidence used in cropping decisions."],
  ["Crop monitoring and weed, pest and disease management", "Use monitoring evidence to recognise problems and justify responsible management responses."],
  ["Sustainability, evaluation and plant careers", "Evaluate environmental management and reflect on outcomes, evidence quality and agricultural pathways."],
  ["Prime lamb breeding and reproductive technologies", "Explain breeding-system choices and evaluate the purposes and limits of reproductive technologies."],
  ["Sheep nutrition and feed availability", "Connect nutrient needs, pasture sampling and feed evidence to prime lamb management decisions."],
  ["Management calendar and production technology", "Sequence major management decisions and examine technology used to monitor and improve production."],
  ["Genetic engineering, ethics, welfare and husbandry", "Evaluate emerging genetics alongside animal-welfare responsibilities and source-grounded husbandry principles."],
  ["WHS, risk and farm profitability", "Use documented risk thinking and business evidence without substituting for teacher-issued local procedures."],
  ["Dairy farming, breeds and cow anatomy", "Relate dairy breed characteristics and body systems to production purposes and management decisions."],
  ["Milk processing, marketing and the Australian dairy industry", "Trace milk beyond the farm and examine processing, markets, industry change and value."],
  ["Female reproduction, hormones and the oestrous cycle", "Explain the connected reproductive structures and hormonal patterns taught in the supplied sources."],
  ["Male reproduction and the mammary system", "Relate male reproductive anatomy and mammary structure to dairy production while maintaining source boundaries."],
  ["Production cycles, emerging technologies and dairy careers", "Integrate the dairy production cycle with new technologies, work roles and informed course evaluation."]
];

const outcomes = [
  ["AG5-1", "Explains why identified plant species and animal breeds have been used in agricultural enterprises and developed for the Australian environment and/or markets."],
  ["AG5-2", "Explains the interactions within and between agricultural enterprises and systems."],
  ["AG5-3", "Explains the interactions within and between the agricultural sector and Australia’s economy, culture and society."],
  ["AG5-4", "Investigates and implements responsible production systems for plant and animal enterprises."],
  ["AG5-5", "Investigates and applies responsible marketing principles and processes."],
  ["AG5-6", "Explains and evaluates the impact of management decisions on plant production enterprises."],
  ["AG5-7", "Explains and evaluates the impact of management decisions on animal production enterprises."],
  ["AG5-8", "Evaluates the impact of past and current agricultural practices on agricultural sustainability."],
  ["AG5-9", "Evaluates management practices in terms of profitability, technology, sustainability, social issues and ethics."],
  ["AG5-10", "Implements and justifies the application of animal welfare guidelines to agricultural practices."],
  ["AG5-11", "Designs, undertakes, analyses and evaluates experiments and investigates problems in agricultural contexts."],
  ["AG5-12", "Collects and analyses agricultural data and communicates results using a range of technologies."],
  ["AG5-13", "Applies Work Health and Safety requirements when using, maintaining and storing chemicals, tools and agricultural machinery."],
  ["AG5-14", "Demonstrates plant and/or animal management practices safely and in collaboration with others."]
].map(([code, wording]) => ({ code, wording }));

const manifest = fs.existsSync(visualManifestPath) ? JSON.parse(fs.readFileSync(visualManifestPath, "utf8")) : {};
const visualRecords = manifest.assets || manifest.records || [];
const assetPath = (record) => record?.asset_path || record?.relative_path || record?.file || record?.path;
const moduleNumberFrom = (value) => {
  const match = String(value ?? "").match(/\d+/);
  return match ? Number(match[0]) : Number.NaN;
};
const weeksLabel = (value, fallback) => {
  if (Array.isArray(value) && value.length) return `Weeks ${value.join("–")}`;
  return value || fallback;
};
const visualFor = (moduleNumber, sectionNumber, title) => {
  const adjacentPattern = new RegExp(`M${String(moduleNumber).padStart(2, "0")}-S${String(sectionNumber).padStart(2, "0")}$`, "i");
  const record = visualRecords.find((item) => (item.role === "theory_visual" && Number(item.module) === moduleNumber && Number(item.section) === sectionNumber)
    || (item.role === "theory-source-preview" && adjacentPattern.test(item.adjacentSection?.id || "")));
  const image = assetPath(record) || `assets/theory/theory-m${String(moduleNumber).padStart(2, "0")}-s${String(sectionNumber).padStart(2, "0")}.png`;
  return {
    image,
    alt: record?.alt || record?.alt_text || `Teaching visual supporting ${title}`,
    caption: record?.caption || `Teaching visual for ${title}. The adjacent theory and cited source control its meaning.`
  };
};

function findModuleFile(moduleNumber) {
  const name = `MODULE-${String(moduleNumber).padStart(2, "0")}.json`;
  const candidates = handoffRoots.map((root) => path.join(root, name)).filter(fs.existsSync);
  must(candidates.length === 1, `Expected exactly one ${name}; found ${candidates.length}.`);
  return candidates[0];
}

function paragraphs(text) {
  return String(text).replace(/\r/g, "").split(/\n\s*\n/).map((part) => part.trim()).filter(Boolean);
}

function normaliseCheck(question, theoryIndex, questionIndex) {
  const options = [...question.options];
  const correctOption = options[question.answerIndex];
  const distractors = options.filter((_, optionIndex) => optionIndex !== question.answerIndex);
  const shift = theoryIndex % distractors.length;
  const rotatedDistractors = [...distractors.slice(shift), ...distractors.slice(0, shift)];
  const targetAnswerIndex = (questionIndex + theoryIndex) % options.length;
  const balancedOptions = [];
  let distractorIndex = 0;
  for (let optionIndex = 0; optionIndex < options.length; optionIndex += 1) {
    balancedOptions.push(optionIndex === targetAnswerIndex ? correctOption : rotatedDistractors[distractorIndex++]);
  }
  const result = { theoryIndex, ...question, question: question.question || question.prompt, options: balancedOptions, answerIndex: targetAnswerIndex };
  delete result.prompt;
  must(result.question?.trim(), "Every MCQ must contain a question or prompt.");
  return result;
}

function normaliseSection(section, moduleNumber, sectionNumber) {
  const mcqs = section.mcqs || section.knowledgeChecks || [];
  must(mcqs.length === 10, `${section.id} must contain exactly ten MCQs.`);
  must(section.writtenEvidence?.length >= 1 && section.writtenEvidence.length <= 2, `${section.id} must contain one or two written evidence prompts.`);
  const theory = paragraphs(section.theory);
  const wordCount = theory.join(" ").trim().split(/\s+/).length;
  must(wordCount >= 250 && wordCount <= 420, `${section.id} theory contains ${wordCount} words.`);
  const result = {
    id: section.id,
    title: section.title,
    theory,
    takeaways: section.takeaways,
    boundary: section.sourceBoundary,
    sources: section.sources.map((source) => ({ label: source.title, url: source.url, id: source.id || source.driveId })),
    visual: visualFor(moduleNumber, sectionNumber, section.title),
    authoringProvenance: section.authoringProvenance || section.provenance
  };
  if (moduleNumber === 11 && sectionNumber === 2) {
    const pedigree = visualRecords.find((item) => /pedigree/i.test(`${item.role || ""} ${item.asset_id || item.id || ""} ${assetPath(item) || ""}`));
    must(pedigree, "Module 11 requires the source-derived pedigree-reading visual.");
    const pedigreePath = assetPath(pedigree);
    result.drawingGuidance = {
      heading: "Read the Task 3 prime-lamb pedigree structure",
      paragraphs: [
        "Read each cross from the two parents towards their offspring. The first cross produces a first-cross ewe; the second cross uses that ewe and a terminal sire to produce prime lambs.",
        "The formal task requires each student to choose and justify the variable ram and terminal-sire breeds from evidence. The guide shows the structure only and is not a model answer."
      ],
      takeaways: [
        "Trace parent-to-offspring links in the direction shown by the connectors.",
        "Distinguish the first-cross ewe from the terminal sire and the final prime-lamb offspring.",
        "Justify every student-selected breed with relevant characteristics and intended contribution."
      ],
      boundary: "Task 3 supplies the crossbreeding structure but no completed pedigree. Student-selected breeds and the final response remain the student’s evidence-based work.",
      sheets: [{
        title: "Prime-lamb pedigree-reading guide",
        preview: pedigreePath,
        open: pedigreePath,
        alt: pedigree.alt || pedigree.alt_text || "Neutral pedigree-reading guide showing two parent-to-offspring crosses for the formal prime-lamb task",
        caption: pedigree.caption || "Source-derived reading guide for the Task 3 pedigree requirement; no student breed choice is completed.",
        sourceUrl: "https://drive.google.com/file/d/1rh8Tedl_c2XQ3-aw0KqpOBCWfmmqef-w/view"
      }]
    };
  }
  return result;
}

const modules = metadata.map(([fallbackTitle, summary], index) => {
  const moduleNumber = index + 1;
  const raw = JSON.parse(fs.readFileSync(findModuleFile(moduleNumber), "utf8"));
  must(moduleNumberFrom(raw.module) === moduleNumber, `Module number mismatch in MODULE-${String(moduleNumber).padStart(2, "0")}.json.`);
  must(raw.sections?.length === 3, `Module ${moduleNumber} must contain three sections.`);
  const sections = raw.sections.map((section, sectionIndex) => normaliseSection(section, moduleNumber, sectionIndex + 1));
  return {
    project: "Year 10 Agriculture",
    projectModule: moduleNumber,
    term: Number(raw.term) || Math.ceil(moduleNumber / 5),
    weeks: weeksLabel(raw.weeks, raw.sourceLessonPair || `Weeks ${(moduleNumber - 1) % 5 * 2 + 1}–${(moduleNumber - 1) % 5 * 2 + 2}`),
    cadence: "Two-week module",
    sourceLessonMinutes: "Teacher to confirm",
    title: raw.moduleTitle || raw.enterprise || fallbackTitle,
    summary,
    programmeTopics: raw.programmeTopics || (raw.sourceLessonPair ? [raw.sourceLessonPair] : []),
    sections,
    checks: raw.sections.flatMap((section, theoryIndex) => (section.mcqs || section.knowledgeChecks || []).map((question, questionIndex) => normaliseCheck(question, theoryIndex, questionIndex))),
    written: raw.sections.flatMap((section, theoryIndex) => section.writtenEvidence.map((item, writtenIndex) => ({
      theoryIndex,
      title: `${section.title} · Evidence ${writtenIndex + 1}`,
      prompt: item.prompt,
      clarification: item.scaffold.join(" "),
      model: item.appropriateResponseExample || item.model || item.example
    })))
  };
});

const course = {
  shortTitle: "Year 10 Agriculture",
  fileSlug: "year-10-agriculture",
  storagePrefix: "year-10-agriculture",
  draft: false,
  outcomes,
  modules
};
fs.writeFileSync(path.join(repo, "guided", "data.js"), `window.COURSE_DATA = ${JSON.stringify(course, null, 2)};\n`, "utf8");

const questionBank = {
  authoredVia: "Signed-in ChatGPT in the in-app browser, one named theory section at a time",
  generatedAt: new Date().toISOString(),
  sections: modules.flatMap((module) => module.sections.map((section, theoryIndex) => ({
    id: section.id,
    title: section.title,
    authoringProvenance: section.authoringProvenance,
    questions: module.checks.filter((check) => check.theoryIndex === theoryIndex).map(({ theoryIndex: _theoryIndex, ...question }) => question)
  })))
};
fs.writeFileSync(path.join(repo, "source-notes", "QUESTION-BANK.json"), `${JSON.stringify(questionBank, null, 2)}\n`, "utf8");
console.log(`Built ${modules.length} modules, ${modules.flatMap((module) => module.sections).length} sections, ${modules.flatMap((module) => module.checks).length} MCQs and ${modules.flatMap((module) => module.written).length} written evidence prompts.`);
