/*
  lista automaticamente os repositórios públicos de uma organização do GitHub,
  com descrição e topics, e permite filtrar por topic (tipo, pessoa,
  financiamento). usado pelo include org-repos.html.
*/

{
  const escapeHtml = (text) =>
    String(text ?? "").replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[char]
    );

  const isEn = () => document.documentElement.lang === "en";

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString(isEn() ? "en" : "pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const fetchRepos = async (org) => {
    const repos = [];
    for (let page = 1; page <= 10; page++) {
      const url = `https://api.github.com/orgs/${org}/repos?type=public&per_page=100&page=${page}`;
      const response = await fetch(url, {
        headers: { Accept: "application/vnd.github+json" },
      });
      if (!response.ok) throw new Error(`GitHub respondeu ${response.status}`);
      const batch = await response.json();
      repos.push(...batch);
      if (batch.length < 100) break;
    }
    return repos;
  };

  const renderCard = (repo) => {
    const topics = repo.topics || [];
    const image = `https://opengraph.githubassets.com/1/${repo.full_name}`;
    const tags = topics
      .map(
        (topic) =>
          `<a class="tag" href="#" data-topic="${escapeHtml(topic)}">${escapeHtml(topic)}</a>`
      )
      .join("");
    return `
      <div class="card" data-style="small" data-topics="${escapeHtml(topics.join(" "))}">
        <a href="${escapeHtml(repo.html_url)}" class="card-image" aria-label="${escapeHtml(repo.name)}">
          <img src="${image}" alt="${escapeHtml(repo.name)}" loading="lazy">
        </a>
        <div class="card-text">
          <a href="${escapeHtml(repo.html_url)}" class="card-title">${escapeHtml(repo.name)}</a>
          <span class="card-subtitle card-meta">${isEn() ? "Updated" : "Atualizado em"} ${formatDate(repo.pushed_at)}</span>
          ${repo.description ? `<p>${escapeHtml(repo.description)}</p>` : ""}
          ${tags ? `<div class="tags">${tags}</div>` : ""}
        </div>
      </div>`;
  };

  const onLoad = async () => {
    const container = document.querySelector(".org-repos[data-org]");
    if (!container) return;

    const org = container.dataset.org.trim();
    const exclude = (container.dataset.exclude || "")
      .split(",")
      .map((name) => name.trim().toLowerCase())
      .filter(Boolean);
    const select = document.querySelector(".org-repos-filter");
    const count = document.querySelector(".org-repos-count");

    let repos;
    try {
      repos = await fetchRepos(org);
    } catch (error) {
      container.innerHTML = `<p class="org-repos-status">${isEn() ? "Could not load the list right now. See the repositories at" : "Não foi possível carregar a lista agora. Veja os repositórios diretamente em"} <a href="https://github.com/${escapeHtml(org)}">github.com/${escapeHtml(org)}</a>.</p>`;
      console.log("org-repos", error);
      return;
    }

    repos = repos
      .filter((repo) => !exclude.includes(repo.name.toLowerCase()))
      .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

    if (!repos.length) {
      container.innerHTML = `<p class="org-repos-status">${isEn() ? "No public repositories yet." : "Ainda não há repositórios públicos."}</p>`;
      return;
    }

    container.innerHTML = repos.map(renderCard).join("");

    // opções do filtro: todos os topics usados
    const topics = [...new Set(repos.flatMap((repo) => repo.topics || []))].sort(
      (a, b) => a.localeCompare(b, "pt-BR")
    );
    for (const topic of topics) {
      const option = document.createElement("option");
      option.value = topic;
      option.textContent = topic;
      select.append(option);
    }

    const applyFilter = (topic) => {
      let shown = 0;
      container.querySelectorAll(".card").forEach((card) => {
        const match =
          !topic || card.dataset.topics.split(" ").includes(topic);
        card.style.display = match ? "" : "none";
        if (match) shown++;
      });
      count.textContent = isEn()
        ? `${shown} of ${repos.length} repositories`
        : `${shown} de ${repos.length} repositórios`;
      select.value = topic;
    };

    select.addEventListener("change", () => applyFilter(select.value));
    container.addEventListener("click", (event) => {
      const tag = event.target.closest("[data-topic]");
      if (!tag) return;
      event.preventDefault();
      applyFilter(tag.dataset.topic);
      select.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    // permite link direto: produtos/?topic=fapesp-2023-12809-0
    const initial = new URLSearchParams(window.location.search).get("topic");
    applyFilter(initial && topics.includes(initial) ? initial : "");
  };

  window.addEventListener("load", onLoad);
}
