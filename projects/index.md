---
translation: en/projects/
title: Produtos
nav:
  order: 2
  tooltip: Publicações, protocolos, códigos e dados
---

# {% include icon.html icon="fa-solid fa-wrench" %}Produtos

Abaixo estão as publicações do laboratório e os repositórios de protocolos, códigos e dados. Tudo o que o laboratório produz fica na organização [HymenopteraLab-MZUSP](https://github.com/HymenopteraLab-MZUSP) no GitHub, com autoria, versão e financiamento registrados.
Cada repositório traz etiquetas de tipo (`protocolo`, `pipeline`, `analise`, `dados`, `ensino`), de responsável e de financiamento (por exemplo, `fapesp-2023-12809-0`).

{% include section.html %}

## Publicações {#publicacoes}

Lista atualizada automaticamente a partir do ORCID.

{% include search-box.html %}

{% include search-info.html %}

{% include list.html data="citations" component="citation" %}

{% include section.html %}

## Em destaque

{% include list.html component="card" data="projects" filter="group == 'featured'" %}

{% include section.html %}

## Todos os repositórios

Lista atualizada automaticamente a partir do GitHub. Clique em uma etiqueta para filtrar.

{% include org-repos.html org="HymenopteraLab-MZUSP" exclude=".github,hymenopteralab-mzusp.github.io" %}
