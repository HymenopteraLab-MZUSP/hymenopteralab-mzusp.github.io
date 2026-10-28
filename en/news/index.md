---
title: News
lang: en
translation: blog/
nav:
  order: 5
  tooltip: Lab news and media coverage
---

# {% include icon.html icon="fa-solid fa-feather-pointed" %}News

Defenses, publications, fieldwork, events and the lab in the media. Most posts are in Portuguese.

{% include section.html %}

{% capture midia %}
## In the media {#in-the-media}

The description of *Vulcanidris cratensis*, in April 2025, made the news in several countries.

| Date | Outlet | Country | Story |
| --- | --- | --- | --- |
| 08 Sep 2026 | Agência FAPESP | Brazil | [Insetos de dia, anfíbios à noite: a rotina de uma expedição científica no alto da Amazônia](https://agencia.fapesp.br/insetos-de-dia-anfibios-a-noite-a-rotina-de-uma-expedicao-cientifica-no-alto-da-amazonia/59137) |
| 31 Aug 2026 | Agência FAPESP | Brazil | [No topo dos tepuis: expedição científica inicia coletas na Serra do Aracá](https://agencia.fapesp.br/no-topo-dos-tepuis-expedicao-cientifica-inicia-coletas-na-serra-do-araca/59079) |
| 28 Apr 2026 | Myrmecological News Blog | Austria | ['Hell Ant' fossil unearthed in museum collection becomes the oldest known ant specimen](https://blog.myrmecologicalnews.org/2026/04/28/hell-ant-fossil-unearthed-in-museum-collection-becomes-the-oldest-known-ant-specimen/) |
| Jul 2025 | Revista Pesquisa FAPESP | Brazil | [Formiga-infernal que existiu no Nordeste brasileiro é a mais antiga do mundo](https://revistapesquisa.fapesp.br/formiga-infernal-que-existiu-no-nordeste-brasileiro-e-a-mais-antiga-do-mundo/) |
| 24 Apr 2025 | Science (AAAS) | USA | [Oldest ant fossil ever found reveals history of 'hell ants'](https://www.science.org/content/article/oldest-ant-fossil-ever-found-reveals-history-hell-ants) |
| 24 Apr 2025 | National Geographic | USA | [Researchers find oldest ant known to science—113-million-year-old 'hell ant' with scythe jaws](https://www.nationalgeographic.com/animals/article/oldest-hell-ant-fossil-discovery) |
| 24 Apr 2025 | The Washington Post | USA | ['Hell ant' that impaled prey discovered in 113-million-year-old fossil](https://www.washingtonpost.com/science/2025/04/24/hell-ant-fossil-brazil/) |
| 24 Apr 2025 | CNN | USA | ['Extraordinary' fossil reveals the oldest ant species known to science](https://edition.cnn.com/2025/04/24/science/fossil-oldest-known-ant/index.html) |
| 24 Apr 2025 | CNN Brasil | Brazil | [Fóssil esquecido em coleção no Brasil revela formiga mais antiga conhecida](https://www.cnnbrasil.com.br/tecnologia/fossil-esquecido-em-colecao-no-brasil-revela-formiga-mais-antiga-conhecida/) |
| 24 Apr 2025 | Veja | Brazil | [Fóssil de formiga mais antigo do mundo é descoberto no Ceará](https://veja.abril.com.br/ciencia/fossil-de-formiga-mais-antigo-do-mundo-e-descoberto-no-ceara/) |
| 24 Apr 2025 | BBC Wildlife (Discover Wildlife) | UK | [This fossilised 'hell ant' found in a Brazilian museum has been hiding a mighty secret](https://www.discoverwildlife.com/animal-facts/insects-invertebrates/oldest-ant-brazil) |
| 24 Apr 2025 | Discover Magazine | USA | [113-Million-Year-Old Hell Ant Fossil Breaks Age Record for Such Insects](https://www.discovermagazine.com/the-sciences/113-million-year-old-hell-ant-fossil-breaks-age-record-for-such-insects) |
| 24 Apr 2025 | EurekAlert! (Cell Press) | USA | [The oldest ant ever discovered found fossilized in Brazil](https://www.eurekalert.org/news-releases/1080901) |
| 24 Apr 2025 | Yahoo News | USA | [113 Million-Year-Old 'Hell Ant' Discovery Is Oldest Ever Found](https://www.yahoo.com/news/113-million-old-hell-ant-150056177.html) |
| 24 Apr 2025 | Sci.News | USA | [113-Million-Year-Old Hell Ant Fossil Found in Brazil](https://www.sci.news/paleontology/vulcanidris-cratensis-13856.html) |
| 24 Apr 2025 | El País | Argentina | [Un nuevo registro fósil demuestra que las hormigas conquistaron la Tierra hace 113 millones de años](https://elpais.com/ciencia/2025-04-24/un-nuevo-registro-fosil-demuestra-que-las-hormigas-conquistaron-la-tierra-hace-113-millones-de-anos.html) |
| 24 Apr 2025 | La República | Spain | [Descubren la hormiga más antigua conocida, que vivió hace 113 millones de años entre los dinosaurios](https://larepublica.es/2025/04/24/descubren-la-hormiga-mas-antigua-conocida-que-vivio-hace-113-millones-de-anos-entre-los-dinosaurios/) |
| 24 Apr 2025 | El Debate | Spain | [Hallan el fósil de una de las hormigas más peligrosas en la antigüedad: «Mostraba comportamientos de caza únicos»](https://www.eldebate.com/ciencia/20250424/hallan-fosil-hormigas-mas-peligrosas-antiguedad-mostraba-comportamientos-caza-unicos_291023.html) |
| 24 Apr 2025 | bTV Novinite | Bulgaria | [„Живяла сред динозаврите“: Учени откриха най-стария вид мравка на 113 милиона години](https://btvnovinite.bg/svetut/zhivjala-sred-dinozavrite-ucheni-otkriha-naj-starija-vid-mravka-na-113-miliona-godini.html) |
| 24 Apr 2025 | News&Blog | Ukraine | [Вчені знайшли найдавнішого «пекельного мурашку» віком 113 мільйонів років](https://news.blog.net.ua/2025/04/vcheni-znayshly-naydavnishoho-pekelnoho-murashku-vikom-113-milyoniv-rokiv/) |

<!-- Keep in sync with blog/index.md. -->
{% endcapture %}

{% capture insta %}
### Instagram

Follow the lab at [@hymenopteralab](https://www.instagram.com/hymenopteralab/).
{% endcapture %}

<div class="news-layout">
<div class="news-main">
<h2 id="latest-news">Latest news</h2>
{% include search-box.html %}
{% include tags.html tags=site.tags %}
{% include search-info.html %}
{% include list.html data="posts" component="post-excerpt" %}
{{ midia | markdownify }}
</div>
<aside class="news-side">
{{ insta | markdownify }}
{% include instagram.html user="hymenopteralab" %}
</aside>
</div>

<style>
.news-layout { display: grid; grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr); gap: 40px; align-items: start; }
.news-side { position: sticky; top: 20px; }
.news-side .instagram-embed { margin: 0; }
.news-main table { font-size: 0.9em; }
@media (max-width: 900px) { .news-layout { grid-template-columns: 1fr; } .news-side { position: static; } }
</style>
