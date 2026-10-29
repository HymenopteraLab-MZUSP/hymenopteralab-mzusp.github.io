---
title: Research
lang: en
translation: research/
nav:
  order: 1
  tooltip: Research lines
---

# {% include icon.html icon="fa-solid fa-microscope" %}Research

We study how Hymenoptera diversity arose and how it is distributed, combining taxonomy, genomic data and museum collections.
The lab's publications are listed on the [Outputs]({{ "en/projects" | relative_url }}#publications) page.

{% include section.html %}

## Research lines

{% capture text %}

We investigate the diversity and phylogenetic endemism of Atlantic Forest ants with genomic and collection data, in the FAPESP Young Investigator project 2023/12809-0, *Unraveling hidden patterns*.

{% endcapture %}

<div class="linha-pesquisa">
{%
  include feature.html
  image="images/pesquisa/formigas-mata-atlantica.jpg"
  title="Phylogenomics and biogeography of Atlantic Forest ants"
  text=text
%}
</div>

{% capture text %}

We use ultraconserved elements (UCEs) to infer relationships among poorly known wasp lineages and to test the robustness of different inference methods.

{% endcapture %}

<div class="linha-pesquisa">
{%
  include feature.html
  image="images/pesquisa/filogenomica-hymenoptera.jpg"
  title="Hymenoptera phylogenomics"
  flip=true
  text=text
%}
</div>

{% capture text %}

Taxonomic revisions, species descriptions and identification keys, based on the MZUSP collection and other collections.

{% endcapture %}

<div class="linha-pesquisa">
{%
  include feature.html
  image="images/pesquisa/taxonomia-formigas.jpg"
  title="Ant taxonomy and revisions"
  text=text
%}
</div>

{% capture text %}

DNA from museum specimens, including old material and type specimens, with protocols that preserve the specimen.

{% endcapture %}

<div class="linha-pesquisa">
{%
  include feature.html
  image="images/pesquisa/museomica.jpg"
  title="Museomics"
  flip=true
  text=text
%}
</div>

{% capture text %}

Organization, digitization and conservation of the collection, with open [standard operating procedures](https://github.com/HymenopteraLab-MZUSP/pops-hymenoptera-mzusp) (in Portuguese).

{% endcapture %}

<div class="linha-pesquisa">
{%
  include feature.html
  image="images/pesquisa/colecao-hymenoptera.jpg"
  title="Curation of the MZUSP Hymenoptera Collection"
  text=text
%}
</div>

<style>
  .linha-pesquisa {
    border: 1px solid var(--light-gray, #ddd);
    border-radius: var(--rounded, 10px);
    padding: 20px;
    margin: 30px 0;
    background: var(--background, transparent);
  }
  .linha-pesquisa .feature { margin: 0; }
</style>

{% include section.html %}

## Field expeditions {#field-expeditions}

Much of the material we study comes from field expeditions, which also expand the MZUSP Hymenoptera Collection. Click an expedition to see photos, location and news.

{% include expedicoes-lista.html %}
