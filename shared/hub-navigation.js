(function () {
  "use strict";

  const HUB_URL = "https://stevencowell.github.io/Main-Page/";
  const script = document.currentScript;
  const stylesheetUrl = script ? new URL("sister-site.css", script.src).href : "";

  if (stylesheetUrl && !document.querySelector('link[data-sister-site-styles]')) {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = stylesheetUrl;
    stylesheet.dataset.sisterSiteStyles = "";
    document.head.append(stylesheet);
  }

  if (document.querySelector(".hub-return-bar")) return;

  const heading = document.querySelector("h1");
  const courseLabel = heading && heading.textContent.trim() ? heading.textContent.trim() : document.title;
  const bar = document.createElement("nav");
  bar.className = "hub-return-bar screen-only";
  bar.setAttribute("aria-label", "Industrial Arts Learning Hub navigation");

  const inner = document.createElement("div");
  inner.className = "hub-return-inner";

  const link = document.createElement("a");
  link.className = "hub-return-link";
  link.href = HUB_URL;
  link.innerHTML = '<span aria-hidden="true">←</span><span>Main menu · Industrial Arts Learning Hub</span>';

  const label = document.createElement("span");
  label.className = "hub-course-label";
  label.textContent = courseLabel;

  inner.append(link, label);
  bar.append(inner);
  document.body.prepend(bar);

  const primaryNavigation = document.querySelector(".nav-links");
  if (primaryNavigation && !primaryNavigation.querySelector('[data-teacher-resources-link]')) {
    const teacherResources = document.createElement("a");
    teacherResources.href = "https://stevencowell.github.io/Year-10-Agriculture-Guided-Course/teacher-resources/";
    teacherResources.textContent = "Teacher Resources";
    teacherResources.dataset.teacherResourcesLink = "";
    primaryNavigation.append(teacherResources);
  }

  if (!location.pathname.includes("/teacher-resources")) {
    document.querySelector("#outcomes")?.remove();
    document.querySelectorAll("[data-outcomes]").forEach((element) => element.removeAttribute("data-outcomes"));
    const teacherOnly = /(?:teacher to confirm|source boundary|teacher-controlled|source conflicts|notification conflict|placeholder classroom|scheduled outcomes|\bAG5-\d+\b|exact calendar dates|outcome codes?)/i;
    document.querySelectorAll(".card.pending").forEach((card) => {
      if (teacherOnly.test(card.textContent)) card.remove();
    });
    document.querySelectorAll(".callout, .evidence-note, p, li, h2, h3, details").forEach((element) => {
      if (teacherOnly.test(element.textContent)) element.remove();
    });
  }
})();
