---
translation: en/research/
title: Pesquisa
nav:
  order: 1
  tooltip: Linhas de pesquisa
---

# {% include icon.html icon="fa-solid fa-microscope" %}Pesquisa

Estudamos como a diversidade de Hymenoptera se formou e se distribui, combinando taxonomia, dados genômicos e coleções de museu.
As publicações do laboratório estão na página [Produtos]({{ "projects" | relative_url }}#publicacoes).

{% include section.html %}

## Linhas de pesquisa

{% capture text %}

Investigamos a diversidade e o endemismo filogenético das formigas da Mata Atlântica com dados genômicos e de coleções, no projeto Jovem Pesquisador FAPESP 2023/12809-0, *Desvendando padrões ocultos*.

{% endcapture %}

<div class="linha-pesquisa">
{%
  include feature.html
  image="images/pesquisa/formigas-mata-atlantica.jpg"
  title="Filogenômica e biogeografia de formigas da Mata Atlântica"
  text=text
%}
</div>

{% capture text %}

Usamos elementos ultraconservados (UCEs) para inferir relações entre grupos de vespas pouco conhecidos e testar a robustez de diferentes métodos de inferência.

{% endcapture %}

<div class="linha-pesquisa">
{%
  include feature.html
  image="images/pesquisa/filogenomica-hymenoptera.jpg"
  title="Filogenômica de Hymenoptera"
  flip=true
  text=text
%}
</div>

{% capture text %}

Revisões taxonômicas, descrição de espécies e chaves de identificação, com base no acervo do MZUSP e de outras coleções.

{% endcapture %}

<div class="linha-pesquisa">
{%
  include feature.html
  image="images/pesquisa/taxonomia-formigas.jpg"
  title="Taxonomia e revisões de formigas"
  text=text
%}
</div>

{% capture text %}

Obtenção de DNA de exemplares de museu, inclusive material antigo e material-tipo, com protocolos que preservam o exemplar.

{% endcapture %}

<div class="linha-pesquisa">
{%
  include feature.html
  image="images/pesquisa/museomica.jpg"
  title="Museômica"
  flip=true
  text=text
%}
</div>

{% capture text %}

Organização, digitalização e conservação do acervo, com [procedimentos operacionais padrão](https://github.com/HymenopteraLab-MZUSP/pops-hymenoptera-mzusp) abertos.

{% endcapture %}

<div class="linha-pesquisa">
{%
  include feature.html
  image="images/pesquisa/colecao-hymenoptera.jpg"
  title="Curadoria da Coleção de Hymenoptera do MZUSP"
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

## Expedições de campo {#expedicoes}

Boa parte do material que estudamos vem de expedições de campo, que também ampliam a Coleção de Hymenoptera do MZUSP. Clique em uma expedição para ver fotos, local e notícias.

{% include expedicoes-lista.html %}
