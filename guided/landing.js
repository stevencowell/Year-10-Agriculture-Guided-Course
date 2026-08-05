(function () {
  "use strict";
  const course = window.COURSE_DATA;
  const grid = document.querySelector("[data-module-grid]");
  if (!course || !grid) return;
  const escapeHtml = (value) => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  grid.innerHTML = course.modules.map((module, index) => `<article class="card module-card"><span class="stage">Term ${escapeHtml(module.term)} · Module ${index + 1} · ${escapeHtml(module.weeks || "two-week sequence")}</span><h3>${escapeHtml(module.title)}</h3><p>${escapeHtml(module.summary)}</p><a class="module-link" href="module.html?module=${index + 1}">Open module →</a></article>`).join("") + `<article class="card module-card"><span class="status-pill">12 evidence cards</span><h3>Year 10 Agriculture folio</h3><p>Collect progressive evidence across the four term programmes, formal task preparation and final evaluation.</p><a class="module-link" href="folio.html">Open folio →</a></article>`;
  const outcomeGrid = document.querySelector("[data-outcome-grid]");
  if (outcomeGrid && Array.isArray(course.outcomes) && course.outcomes.length) {
    outcomeGrid.innerHTML = course.outcomes.map((outcome) => `<article class="card"><h3>${escapeHtml(outcome.code)}</h3><p>${escapeHtml(outcome.wording)}</p></article>`).join("");
  }
}());
