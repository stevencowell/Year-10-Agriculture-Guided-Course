import fs from "node:fs";
import path from "node:path";

const { chromium } = await import("file:///C:/Users/scowell1/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs");
const { server } = await import("./serve.mjs");
const repo = path.resolve(import.meta.dirname, "..");
const output = path.resolve(repo, "..", "..", "..", "outputs", process.env.AGRICULTURE_QA_OUTPUT || "qa-browser");
fs.mkdirSync(output, { recursive: true });

let base = process.env.AGRICULTURE_QA_BASE || "";
const selfHosted = !process.env.AGRICULTURE_QA_BASE;
if (selfHosted) await new Promise((resolve, reject) => {
  server.once("error", reject);
  server.listen(0, "127.0.0.1", resolve);
});
if (selfHosted) base = `http://127.0.0.1:${server.address().port}`;
const failures = [];
const results = [];
const must = (condition, message) => { if (!condition) failures.push(message); };

const browser = await chromium.launch({
  headless: true,
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe"
});

async function inspectPage(page, label, route) {
  await page.goto(`${base}/${route}`, { waitUntil: "networkidle" });
  must(await page.locator("h1").count() === 1, `${label}: ${route} must have one H1`);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  must(overflow <= 1, `${label}: ${route} overflows horizontally by ${overflow}px`);
  const broken = await page.evaluate(() => [...document.images]
    .filter((image) => image.src.startsWith(location.origin) && (!image.complete || image.naturalWidth === 0))
    .map((image) => image.getAttribute("src")));
  must(broken.length === 0, `${label}: ${route} has broken images: ${broken.join(", ")}`);
}

async function checkViewport(label, viewport) {
  const context = await browser.newContext({ viewport, deviceScaleFactor: 1 });
  const page = await context.newPage();
  const browserErrors = [];
  page.on("response", (response) => {
    const local = response.url().startsWith(base);
    if (local && response.status() >= 400) browserErrors.push(`${response.status()} ${response.url()}`);
  });
  page.on("pageerror", (error) => browserErrors.push(`pageerror ${error.message}`));

  await inspectPage(page, label, "index.html");
  must(await page.locator('.module-card:has(a[href^="module.html"])').count() === 20, `${label}: landing page must show 20 modules`);
  must(await page.getByRole("link", { name: "Teacher Resources" }).count() > 0, `${label}: Teacher Resources link is missing`);
  for (const destination of ["Plans and drawings", "Busy Work", "YouTube learning", "Assessment", "Folio"]) {
    must(await page.getByRole("link", { name: new RegExp(destination, "i") }).count() > 0, `${label}: landing page omits ${destination}`);
  }
  await page.screenshot({ path: path.join(output, `${label}-index.png`), fullPage: true });

  for (let moduleNumber = 1; moduleNumber <= 20; moduleNumber += 1) {
    const route = `module.html?module=${moduleNumber}`;
    await inspectPage(page, label, route);
    must(await page.locator(".theory-section").count() >= 3, `${label}: module ${moduleNumber} must show three theory sections`);
    must(await page.getByRole("button", { name: "Check answer" }).count() === 30, `${label}: module ${moduleNumber} must show 30 checks`);
    must(await page.getByRole("radio").count() === 120, `${label}: module ${moduleNumber} must show 120 options`);
    must(await page.locator("textarea").count() >= 3, `${label}: module ${moduleNumber} must include written evidence`);
    must(await page.getByRole("link", { name: /Open larger/i }).count() >= 3, `${label}: module ${moduleNumber} needs at least three Open larger links`);
    must(await page.getByRole("button", { name: "Print / Save PDF" }).count() === 1, `${label}: module ${moduleNumber} lacks Print / Save PDF`);
  }
  await page.goto(`${base}/module.html?module=1`, { waitUntil: "networkidle" });
  await page.locator(".theory-section").first().screenshot({ path: path.join(output, `${label}-module-01-theory.png`) });
  await page.goto(`${base}/module.html?module=20`, { waitUntil: "networkidle" });
  await page.locator(".theory-section").first().screenshot({ path: path.join(output, `${label}-module-20-theory.png`) });

  await page.goto(`${base}/module.html?module=1`, { waitUntil: "networkidle" });
  const correctIndex = await page.evaluate(() => window.COURSE_DATA.modules[0].checks[0].answerIndex);
  const firstQuestion = page.locator(".check").first();
  const radios = firstQuestion.getByRole("radio");
  const wrongIndex = correctIndex === 0 ? 1 : 0;
  await radios.nth(wrongIndex).check();
  await firstQuestion.getByRole("button", { name: "Check answer" }).click();
  must((await firstQuestion.locator(".feedback").innerText()).startsWith("Not yet."), `${label}: useful incorrect feedback is missing`);
  await radios.nth(correctIndex).check();
  await firstQuestion.getByRole("button", { name: "Check answer" }).click();
  must((await firstQuestion.locator(".feedback").innerText()).startsWith("Correct."), `${label}: correct feedback is missing`);
  await page.locator("textarea").first().fill("Module autosave QA");
  await page.waitForTimeout(450);
  await page.reload({ waitUntil: "networkidle" });
  must(await page.locator("textarea").first().inputValue() === "Module autosave QA", `${label}: module autosave did not restore`);
  await page.evaluate(() => localStorage.clear());

  await inspectPage(page, label, "folio.html");
  must(await page.locator(".folio-card").count() === 12, `${label}: folio must contain 12 cards`);
  must(await page.locator("textarea[data-required]").count() === 36, `${label}: folio must contain three required evidence areas on each of 12 cards`);
  must(await page.locator("input[data-photo]").count() === 12, `${label}: folio must provide 12 optional photo controls`);
  must(await page.getByRole("link", { name: /Open larger/i }).count() === 12, `${label}: folio needs 12 Open larger links`);
  must(await page.getByRole("button", { name: "Print / Save PDF" }).count() === 1, `${label}: folio lacks Print / Save PDF`);
  await page.locator("textarea").first().fill("Folio autosave QA");
  await page.waitForTimeout(450);
  await page.reload({ waitUntil: "networkidle" });
  must(await page.locator("textarea").first().inputValue() === "Folio autosave QA", `${label}: folio autosave did not restore`);
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: "networkidle" });
  must(await page.locator("textarea").first().inputValue() === "", `${label}: QA folio data did not clear`);
  await page.locator("#folio-card-06").screenshot({ path: path.join(output, `${label}-folio-assessment-evidence.png`) });

  for (const route of [
    "plans/index.html", "assessment/index.html", "assessment/task-1.html", "assessment/task-2.html", "assessment/task-3.html",
    "busy-work/index.html", "youtube-learning/index.html"
  ]) await inspectPage(page, label, route);
  await page.goto(`${base}/plans/index.html`, { waitUntil: "networkidle" });
  must(await page.getByRole("link", { name: /Open larger/i }).count() === 1, `${label}: plans route needs one visible Open larger drawing link`);
  await page.goto(`${base}/youtube-learning/index.html`, { waitUntil: "networkidle" });
  must(await page.locator(".video-card").count() === 17, `${label}: YouTube route must show 17 clip cards`);
  must(await page.getByRole("button", { name: /^Play / }).count() === 17, `${label}: every video needs a click-to-load control`);
  must(await page.getByRole("link", { name: /Open in YouTube/i }).count() === 17, `${label}: every video needs a direct fallback`);
  const firstPlay = page.getByRole("button", { name: /^Play / }).first();
  await firstPlay.click();
  must(await page.locator('iframe[src*="youtube-nocookie.com/embed/"]').count() === 1, `${label}: Play must create one privacy-enhanced embed`);
  await page.keyboard.press("Escape");
  must(await page.locator('iframe[src*="youtube-nocookie.com/embed/"]').count() === 0, `${label}: closing a video must remove its embed`);

  await page.goto(`${base}/index.html`, { waitUntil: "networkidle" });
  await page.keyboard.press("Tab");
  must(await page.evaluate(() => document.activeElement && document.activeElement !== document.body), `${label}: keyboard focus did not enter the page`);
  must(browserErrors.length === 0, `${label}: browser errors: ${browserErrors.join(" | ")}`);
  results.push({ label, viewport, browserErrors });
  await context.close();
}

await checkViewport("desktop", { width: 1440, height: 1000 });
await checkViewport("mobile-390", { width: 390, height: 844 });
await browser.close();
if (selfHosted) await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()));

const report = { passed: failures.length === 0, results, failures };
fs.writeFileSync(path.join(output, "qa-report.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log("Browser QA passed across all 20 modules and every required destination at 1440 px and 390 px.");
