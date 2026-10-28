---
title: Outputs
lang: en
translation: projects/
nav:
  order: 2
  tooltip: Protocols, code, scripts and data
---

# {% include icon.html icon="fa-solid fa-wrench" %}Outputs

Everything the lab produces lives in the [HymenopteraLab-MZUSP](https://github.com/HymenopteraLab-MZUSP) organization on GitHub, with authorship, version and funding recorded.
Each repository is tagged by type (`protocolo`, `pipeline`, `analise`, `dados`, `ensino`), by person and by funding source (for example, `fapesp-2023-12809-0`).

{% include section.html %}

## Featured

{% include list.html component="card" data="projects" filter="group == 'featured'" %}

{% include section.html %}

## All repositories

Updated automatically from GitHub. Click a tag to filter.

{% include org-repos.html org="HymenopteraLab-MZUSP" exclude=".github,hymenopteralab-mzusp.github.io" %}
