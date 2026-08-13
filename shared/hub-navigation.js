(function () {
  "use strict";

  const HUB_URL = "https://stevencowell.github.io/Main-Page/";
  const script = document.currentScript;
  const stylesheetUrl = script ? new URL("sister-site.css", script.src).href : "";
  const courseRoot = script ? new URL("../", script.src) : new URL("./", location.href);

  if (stylesheetUrl && !document.querySelector('link[data-sister-site-styles]')) {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = stylesheetUrl;
    stylesheet.dataset.sisterSiteStyles = "";
    document.head.append(stylesheet);
  }

  if (!document.querySelector(".course-family-nav")) {
    const path = location.pathname.toLowerCase();
    const rootPath = courseRoot.pathname.replace(/\/$/, "").toLowerCase();
    const isCourseHome = path === `${rootPath}/` || path === `${rootPath}/index.html`;
    const bar = document.createElement("nav");
    bar.className = "course-family-nav screen-only";
    bar.setAttribute("aria-label", "Year 10 Agriculture course navigation");

    const inner = document.createElement("div");
    inner.className = "course-family-nav__inner";

    const brand = document.createElement("a");
    brand.className = "course-family-nav__brand";
    brand.href = new URL("index.html", courseRoot).href;
    brand.innerHTML = '<span class="course-family-nav__mark" aria-hidden="true">10A</span><span>Year 10 Agriculture</span>';

    const links = document.createElement("div");
    links.className = "course-family-nav__links";
    const items = [
      { label: "Course", href: "index.html", current: isCourseHome },
      { label: "Modules", href: "index.html#pathway", current: path.endsWith("/module.html") },
      { label: "Video learning", href: "youtube-learning/index.html", current: path.includes("/youtube-learning/") },
      { label: "Busy Work", href: "busy-work/index.html", current: path.includes("/busy-work/") },
      { label: "My folio", href: "folio.html", current: path.endsWith("/folio.html") },
      { label: "Plans", href: "plans/index.html", current: path.includes("/plans/") },
      { label: "Assessment", href: "assessment/index.html", current: path.includes("/assessment/") },
      { label: "Teacher resources", href: "teacher-resources/", current: path.includes("/teacher-resources/") },
      { label: "Main Menu", href: HUB_URL, external: true }
    ];

    items.forEach((item) => {
      const link = document.createElement("a");
      link.href = item.external ? item.href : new URL(item.href, courseRoot).href;
      link.textContent = item.label;
      if (item.current) link.setAttribute("aria-current", "page");
      links.append(link);
    });

    inner.append(brand, links);
    bar.append(inner);
    document.body.prepend(bar);
    document.documentElement.classList.add("has-course-family-nav");
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
