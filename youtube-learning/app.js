(() => {
  const groupsHost = document.querySelector("#video-groups");
  const topicNav = document.querySelector("#topic-nav");
  const validationNote = document.querySelector("#validation-note");
  const dialog = document.querySelector("#video-dialog");
  const closeButton = document.querySelector("#dialog-close");
  const playerWrap = document.querySelector("#player-wrap");
  const title = document.querySelector("#dialog-title");
  const topic = document.querySelector("#dialog-topic");
  const purpose = document.querySelector("#dialog-purpose");
  const youtubeLink = document.querySelector("#dialog-youtube");
  const moduleLink = document.querySelector("#dialog-module");
  let videos = [];
  let activeTopic = "All clips";
  let returnFocus = null;

  const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[character]);

  const topicSlug = (value) => value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  function openVideo(video, trigger) {
    returnFocus = trigger;
    title.textContent = video.title;
    topic.textContent = video.topic;
    purpose.textContent = video.purpose;
    youtubeLink.href = video.url;
    moduleLink.href = `../module.html?module=${video.module}`;
    moduleLink.textContent = `Open Module ${video.module}`;
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.id)}?autoplay=1&rel=0`;
    iframe.title = video.title;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    playerWrap.replaceChildren(iframe);
    dialog.hidden = false;
    document.body.classList.add("dialog-open");
    closeButton.focus();
  }

  function closeVideo() {
    if (dialog.hidden) return;
    dialog.hidden = true;
    playerWrap.replaceChildren();
    document.body.classList.remove("dialog-open");
    if (returnFocus && document.contains(returnFocus)) returnFocus.focus();
  }

  function cardHtml(video) {
    return `<article class="video-card" data-video-id="${escapeHtml(video.id)}">
      <div class="thumbnail-wrap">
        <img src="https://i.ytimg.com/vi/${escapeHtml(video.id)}/hqdefault.jpg" alt="Thumbnail for ${escapeHtml(video.title)}" loading="lazy">
        <button class="play-button" type="button" aria-label="Play ${escapeHtml(video.title)}"><span class="visually-hidden">Play video</span></button>
      </div>
      <div class="video-card-body">
        <h4>${escapeHtml(video.title)}</h4>
        <p class="author">${escapeHtml(video.author)}</p>
        <p>${escapeHtml(video.purpose)}</p>
        <p class="watch-for"><strong>Watch for:</strong> ${escapeHtml(video.watchFor)}</p>
        <a class="module-link" href="../module.html?module=${video.module}">Module ${video.module}: ${escapeHtml(video.moduleTitle)}</a>
        <div class="card-actions"><a class="text-link" href="${escapeHtml(video.url)}" target="_blank" rel="noopener">Open in YouTube <span aria-hidden="true">↗</span></a></div>
      </div>
    </article>`;
  }

  function renderGroups() {
    const visible = activeTopic === "All clips" ? videos : videos.filter((video) => video.topic === activeTopic);
    const grouped = new Map();
    visible.forEach((video) => {
      if (!grouped.has(video.topic)) grouped.set(video.topic, []);
      grouped.get(video.topic).push(video);
    });
    groupsHost.innerHTML = [...grouped.entries()].map(([group, items]) => `<section class="video-topic" id="${topicSlug(group)}">
      <div class="video-topic-heading"><h3>${escapeHtml(group)}</h3><span class="clip-count">${items.length} ${items.length === 1 ? "clip" : "clips"}</span></div>
      <div class="video-grid">${items.map(cardHtml).join("")}</div>
    </section>`).join("");
    groupsHost.querySelectorAll(".video-card").forEach((card) => {
      const video = videos.find((item) => item.id === card.dataset.videoId);
      card.querySelector(".play-button").addEventListener("click", (event) => openVideo(video, event.currentTarget));
    });
  }

  function renderFilters() {
    const topics = ["All clips", ...new Set(videos.map((video) => video.topic))];
    topicNav.innerHTML = topics.map((item) => `<button class="topic-filter" type="button" aria-pressed="${item === activeTopic}" data-topic="${escapeHtml(item)}">${escapeHtml(item)}</button>`).join("");
    topicNav.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
      activeTopic = button.dataset.topic;
      renderFilters();
      renderGroups();
    }));
  }

  closeButton.addEventListener("click", closeVideo);
  dialog.addEventListener("click", (event) => { if (event.target === dialog) closeVideo(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !dialog.hidden) closeVideo(); });
  dialog.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const focusable = [...dialog.querySelectorAll('button:not([disabled]), a[href], iframe')];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });

  fetch("manifest.json", { cache: "no-store" })
    .then((response) => { if (!response.ok) throw new Error(`Manifest request returned ${response.status}`); return response.json(); })
    .then((manifest) => {
      videos = manifest.videos;
      validationNote.textContent = `${videos.length} clips · oEmbed and privacy-enhanced embed checks recorded ${manifest.validationDate}`;
      renderFilters();
      renderGroups();
    })
    .catch((error) => {
      validationNote.textContent = "The clip manifest could not be loaded.";
      groupsHost.innerHTML = `<p class="load-error">Video library unavailable: ${escapeHtml(error.message)}</p>`;
    });
})();
