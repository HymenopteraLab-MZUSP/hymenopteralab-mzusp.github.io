# Manual do site e da organização HymenopteraLab-MZUSP

Este manual reúne tudo o que foi montado no GitHub do laboratório e explica, passo a passo, como editar cada parte do site. Ele fica no próprio repositório do site (`COMO-EDITAR.md`) e não aparece no site publicado.

- **Site:** https://hymenopteralab-mzusp.github.io
- **Repositório do site:** https://github.com/HymenopteraLab-MZUSP/hymenopteralab-mzusp.github.io
- **Organização:** https://github.com/HymenopteraLab-MZUSP

## Sumário

1. [O que existe hoje](#1-o-que-existe-hoje)
2. [Como editar no GitHub (o básico)](#2-como-editar-no-github-o-básico)
3. [O cabeçalho dos arquivos (front matter) e os erros mais comuns](#3-o-cabeçalho-dos-arquivos-front-matter-e-os-erros-mais-comuns)
4. [Mapa do site: qual arquivo edita cada página](#4-mapa-do-site-qual-arquivo-edita-cada-página)
5. [Identidade visual: título, logo, ícone, imagem do topo, cores, fontes, menu, rodapé](#5-identidade-visual)
6. [Página inicial](#6-página-inicial)
7. [Pesquisa (linhas de pesquisa)](#7-pesquisa)
8. [Expedições de campo](#8-expedições-de-campo)
9. [Coleção (painel do Power BI e dados)](#9-coleção)
10. [Produtos: publicações e repositórios](#10-produtos-publicações-e-repositórios)
11. [Equipe](#11-equipe)
12. [Financiamento](#12-financiamento)
13. [Notícias, "Na mídia" e Instagram](#13-notícias-na-mídia-e-instagram)
14. [Contato](#14-contato)
15. [Versão em inglês](#15-versão-em-inglês)
16. [O que se atualiza sozinho](#16-o-que-se-atualiza-sozinho)
17. [A organização no GitHub: repositórios do laboratório](#17-a-organização-no-github)
18. [Problemas comuns e soluções](#18-problemas-comuns-e-soluções)
19. [Histórico do que foi feito](#19-histórico-do-que-foi-feito)
20. [Pendências conhecidas](#20-pendências-conhecidas)

---

## 1. O que existe hoje

| Item | Onde | Para quê |
| --- | --- | --- |
| Organização `HymenopteraLab-MZUSP` | github.com/HymenopteraLab-MZUSP | Reúne protocolos, scripts, pipelines, dados e o site do laboratório |
| Perfil da organização | repositório `.github`, arquivo `profile/README.md` | Texto que aparece na página inicial da organização |
| Regras de uso | repositório `.github`, arquivo `CONTRIBUTING.md` | Como criar repositórios, topics obrigatórios, financiamento, dados, DOI |
| Modelo de repositório | `template-hymenopteralab` | Ponto de partida de todo repositório novo (README, licenças, CITATION.cff, pastas) |
| POPs da coleção | `pops-hymenoptera-mzusp` | Os 20 procedimentos operacionais padrão da Coleção de Hymenoptera |
| Site | `hymenopteralab-mzusp.github.io` | O site bilíngue (português e inglês) do laboratório |

O site foi feito com o modelo [Lab Website Template](https://github.com/greenelab/lab-website-template) (Greene Lab), adaptado para o laboratório: textos em português e inglês, página de equipe por categorias, coleção, expedições, publicações automáticas pelo ORCID, cores e logo do laboratório.

---

## 2. Como editar no GitHub (o básico)

Tudo se faz pelo navegador, no repositório do site.

### Editar um arquivo existente

1. Abra o arquivo (por exemplo, `funding/index.md`).
2. Clique no lápis (**Edit this file**), no canto superior direito do conteúdo.
3. Faça a alteração.
4. Clique em **Commit changes…** e depois em **Commit changes** de novo.

### Enviar arquivos (fotos, pacotes de atualização)

1. Entre na pasta de destino (por exemplo, `images/equipe/`).
2. Clique em **Add file → Upload files**.
3. Arraste os arquivos. **Também dá para arrastar pastas inteiras**: o GitHub mantém a estrutura, cria as pastas que não existem e substitui os arquivos com o mesmo nome.
4. Clique em **Commit changes**.

### Criar um arquivo novo (ou uma pasta nova)

1. Clique em **Add file → Create new file**.
2. No nome, digite o caminho completo. A barra `/` cria a pasta: `expedicoes/nova-expedicao/index.md`.
3. Cole o conteúdo e clique em **Commit changes**.

O GitHub não guarda pastas vazias: uma pasta só passa a existir quando há um arquivo dentro dela.

### Apagar um arquivo

Abra o arquivo, clique nos três pontos (**…**) no canto superior direito e escolha **Delete file**. Depois, **Commit changes**.

### Quanto tempo demora

Depois de cada alteração, o site é reconstruído sozinho em **2 a 5 minutos**. Acompanhe na aba **Actions** do repositório:

- círculo amarelo: em andamento;
- ✓ verde: publicado;
- ✗ vermelho: erro (veja a [seção 18](#18-problemas-comuns-e-soluções)).

Para ver a versão nova, recarregue a página ignorando o cache do navegador: **Ctrl + Shift + R** (Windows/Linux) ou **Cmd + Shift + R** (Mac).

### Desfazer uma alteração

Abra o arquivo e clique em **History**. Escolha a versão anterior, abra-a (**View file**), copie o conteúdo e cole por cima da versão atual, com **Edit → Commit changes**.

---

## 3. O cabeçalho dos arquivos (front matter) e os erros mais comuns

Quase todos os arquivos `.md` do site começam com um cabeçalho entre duas linhas `---`. Ele é escrito em YAML:

```yaml
---
title: Financiamento
nav:
  order: 4
  tooltip: Projetos e bolsas
---
```

Regras que evitam a maioria dos erros:

- **Recuo com espaços, nunca com Tab.** Itens dentro de outro levam dois espaços (`  order: 4`).
- **Use aspas** quando o texto tiver dois-pontos seguido de espaço (`: `), começar com `*`, `[`, `{`, `#`, `@` ou `-`, ou contiver `#`. Exemplo: `title: "Revisão de Alfaria: métodos integrativos"`.
- **Números que começam com zero ou só com dígitos longos**, como o Lattes, vão entre aspas: `lattes: "3315430116303083"`.
- **Não use links em Markdown dentro do cabeçalho.** Errado: `orcid: [0000-0002-...](https://orcid.org/...)`. Certo: `orcid: 0000-0002-8792-7719`.
- **Listas** começam com `- ` (hífen e espaço), alinhadas:

```yaml
aliases:
  - G. P. Camacho
  - Gabriela P. Camacho
```

- Linhas que começam com `#` dentro do cabeçalho são comentários (não aparecem no site).

Abaixo do segundo `---` vem o texto da página, em Markdown:

| Para | Escreva |
| --- | --- |
| itálico | `*Ectatomma*` |
| negrito | `**texto**` |
| link | `[texto](https://endereço)` |
| título de seção | `## Título` (e `### Subtítulo`) |
| lista | `- item` |
| tabela | linhas com `|`, como nas páginas Financiamento e Notícias |

Trechos entre `{% ... %}` são comandos do site (botões, seções, galerias). Copie-os como estão e não apague as chaves nem os sinais de porcentagem.

---

## 4. Mapa do site: qual arquivo edita cada página

| Página | Português | Inglês | Dados e imagens |
| --- | --- | --- | --- |
| Início | `index.md` | `en/index.md` | imagens dos destaques em `images/` |
| Pesquisa | `research/index.md` | `en/research/index.md` | `images/pesquisa/` |
| Expedições (dentro de Pesquisa) | `expedicoes/<nome>/index.md` | `en/expeditions/<nome>/index.md` | `images/expedicoes/<nome>/` |
| Coleção | `colecao/index.md` | `en/collection/index.md` | `_data/colecao.yaml` |
| Produtos | `projects/index.md` | `en/projects/index.md` | `_data/orcid.yaml`, `_data/sources.yaml`, `_data/projects.yaml` |
| Equipe | `team/index.md` | `en/team/index.md` | `_members/`, `_data/team_sections.yaml`, `_data/types.yaml`, `_data/group_photos.yaml`, `images/equipe/`, `images/grupo/` |
| Página de cada pessoa | `_members/<nome>.md` (as duas línguas no mesmo arquivo) | | `images/equipe/` |
| Financiamento | `funding/index.md` | `en/funding/index.md` | |
| Notícias | `blog/index.md` | `en/news/index.md` | `_posts/`, `images/noticias/` |
| Cada notícia | `_posts/AAAA-MM-DD-nome.md` | | `images/noticias/` |
| Contato | `contact/index.md` | `en/contact/index.md` | |
| Menu, subtítulo, botões fixos | `_data/strings.yaml` | (mesmo arquivo) | |
| Título, descrição, links do rodapé | `_config.yaml` | | |
| Cores e fontes | `_styles/-theme.scss` | | |

Arquivos que **não** devem ser editados à mão: `_data/citations.yaml` (gerado pelo ORCID), a pasta `_cite/`, a pasta `.github/workflows/` e os arquivos `Gemfile`/`Gemfile.lock`.

---

## 5. Identidade visual

### 5.1 Nome do site e subtítulo

- **Nome** (aparece no topo, na aba do navegador e nos buscadores): `title:` em `_config.yaml`.
- **Subtítulo** que aparece embaixo do nome, no topo: `subtitle:` em **`_data/strings.yaml`**, uma vez em `pt-BR:` e outra em `en:`. O `subtitle:` de `_config.yaml` só é usado se o de `strings.yaml` estiver vazio, por isso é o de `strings.yaml` que vale.
- **Descrição** usada pelo Google e em pré-visualizações de links: `description:` em `_config.yaml`.

### 5.2 Logo do topo

- O topo mostra `images/logo.png` (o logo circular do laboratório, com fundo transparente fora do círculo).
- Para trocar, envie outra imagem com o mesmo nome, `logo.png`, para `images/`. De preferência quadrada, com fundo transparente, com cerca de 400 × 400 px.
- A ordem de preferência é: `logo.png`; se não existir, `logo.svg`; se não existir, `logo.jpg`. Para usar o `logo.svg`, apague o `logo.png`. Atenção: um SVG que contém uma imagem embutida pode ficar muito pesado (o `logo.svg` atual tem 1,7 MB), o que deixa todas as páginas lentas.
- **Tamanho do logo:** no começo de `_styles/header.scss`:
  - `$logo: 56px;` nas páginas internas;
  - `$logo-big: 140px;` na página inicial.
- Para esconder o nome ao lado do logo, acrescente `logo-text: false` em `_config.yaml`.

### 5.3 Ícone da aba do navegador

- É o arquivo `images/icon.png` (hoje, o logo do laboratório em 256 × 256 px).
- Para trocar, envie outro `icon.png`, quadrado, para `images/`.
- O navegador guarda o ícone por bastante tempo. Se não mudar, feche e abra a aba, ou teste numa janela anônima.

### 5.4 Imagem do topo e do rodapé

- Arquivo: `images/background.jpg` (hoje, a foto de Guilherme Ide da formiga com a formiguinha laranja).
- Para trocar, envie outra imagem com o mesmo nome para `images/`. Funciona melhor uma imagem **panorâmica**, com cerca de 2400 × 800 px: nas páginas internas o topo é uma faixa baixa, que mostra só uma tira horizontal da foto.
- Para usar imagens diferentes no topo e no rodapé, troque `header:` e `footer:` em `_config.yaml`. Uma página pode ter topo próprio com `header: images/outra.jpg` no cabeçalho dela.
- **Parte da foto que aparece na faixa:** em `_styles/background.scss`, `background-position: 50% 70%;`. O primeiro número é a posição horizontal e o segundo, a vertical (0% = topo da foto, 100% = base).
- **Escurecimento sobre a foto** (para o texto ficar legível): em `_styles/background.scss`, a linha `background: linear-gradient(90deg, #1d1a15d9 0%, #1d1a15b3 50%, #1d1a159e 100%);`. Os dois últimos caracteres de cada cor são a opacidade, em hexadecimal: `d9` ≈ 85%, `b3` ≈ 70%, `9e` ≈ 62%, `80` = 50%, `66` = 40%. Valores menores deixam a foto mais clara, mas o menu pode ficar difícil de ler.
- **Crédito da foto** (no rodapé): `photo_credit:` em `_data/strings.yaml`, em português e em inglês. Para tirar o crédito, apague as duas linhas.
- O site acrescenta automaticamente um código ao endereço da imagem a cada atualização, para o navegador não mostrar a imagem antiga guardada no cache.

### 5.5 Cores

As cores ficam em `_styles/-theme.scss`, em dois blocos: modo claro (`[data-dark="false"]`) e modo escuro (`[data-dark="true"]`). A paleta foi tirada do logo.

| Variável | Para que serve | Modo claro | Modo escuro |
| --- | --- | --- | --- |
| `--primary` | links, botões, item do menu ao passar o mouse | `#4a5a54` cinza-esverdeado (vespa) | `#f9cb6b` âmbar |
| `--secondary` | fundo das etiquetas (tags) | `#f7d78e` amarelo-claro (formiga) | `#4f5246` oliva escuro |
| `--strong` | títulos, negritos, nomes nos cartões, títulos de publicações | `#4b2906` marrom do logo | `#f7d78e` amarelo-claro |
| `--text` | texto comum | `#26271f` quase-preto oliva | `#f1efe6` creme |
| `--background` | fundo da página | `#ffffff` branco | `#1d1a15` marrom quase preto |
| `--background-alt` | fundo de caixas e seções alternadas | `#edefe4` (fundo do círculo do logo) | `#26221b` |
| `--light-gray` | bordas e linhas | `#d9dccf` | `#3a362d` |
| `--gray` | textos secundários (função, datas) | `#65695b` | `#a7a38c` |
| `--dark-gray` | detalhes | `#4f5246` | `#c9c6b2` |

Cuidados:

- Texto precisa de contraste com o fundo. Ferramenta para conferir: https://webaim.org/resources/contrastchecker/ (mínimo 4,5:1 para texto comum).
- Âmbar ou amarelo **nunca** como cor de texto sobre fundo branco (contraste muito baixo); só como fundo de etiquetas e botões.
- O botão de idioma tem cor própria (âmbar), definida em `_styles/header.scss`, no bloco `nav > a.lang-switch`.

### 5.6 Fontes

Em `_styles/-theme.scss`, no bloco `:root`:

```scss
--title: "Literata", serif;      // nome do site no topo
--heading: "Literata", serif;    // títulos, menu e botões
--body: "Noto Sans", sans-serif; // texto
--code: "Roboto Mono", monospace;
```

- Qualquer fonte do [Google Fonts](https://fonts.google.com) funciona: troque o nome entre aspas e o site carrega a fonte sozinho.
- A fonte escolhida precisa ter os pesos usados pelo site (200, 400, 500 e 600, definidos logo abaixo em `--thin`, `--regular`, `--semi-bold`, `--bold`). Se algum peso não existir na fonte, nenhuma fonte carrega. Literata e Noto Sans têm todos.
- Evite fontes com mais de um espaço no nome (por exemplo, "Source Sans 3"): o site monta o endereço do Google Fonts trocando só o primeiro espaço.

### 5.7 Menu

- Cada página do menu tem, no cabeçalho:

```yaml
nav:
  order: 4
  tooltip: Projetos e bolsas
```

- `order` define a posição (números menores à esquerda; aceita decimais, como a Coleção, com `1.5`). `tooltip` é o texto que aparece ao passar o mouse.
- O nome no menu é o `title:` da página.
- Para tirar uma página do menu sem apagá-la, apague o bloco `nav:` dela.
- Ordem atual: Pesquisa (1), Coleção (1.5), Produtos (2), Equipe (3), Financiamento (4), Notícias (5), Contato (6).
- A versão em inglês tem o seu próprio `nav:` em cada página de `en/`.

### 5.8 Botão de idioma

- Texto do botão: `switch_label:` em `_data/strings.yaml` ("English" nas páginas em português, "Português" nas em inglês).
- O botão só aparece nas páginas que têm `translation:` no cabeçalho (ver [seção 15](#15-versão-em-inglês)).
- Aparência: `_styles/header.scss`, bloco `nav > a.lang-switch`.

### 5.9 Rodapé

- **Ícones de links** (e-mail, GitHub, ORCID): bloco `links:` em `_config.yaml`. Para acrescentar, use os tipos de `_data/types.yaml`, como `instagram: hymenopteralab`, `twitter:`, `youtube:`.
- **Crédito da foto:** `photo_credit:` em `_data/strings.yaml`.
- **Botão de modo escuro:** fica no canto do rodapé. O site abre no modo claro e lembra a escolha de cada visitante no navegador dele.

### 5.10 Imagem de compartilhamento

Quando alguém compartilha o link do site (WhatsApp, redes sociais), aparece a imagem `images/share.jpg`. Para trocar, envie outra com o mesmo nome (ideal: 1200 × 630 px).

---

## 6. Página inicial

Arquivos: `index.md` e `en/index.md`.

- O primeiro parágrafo é o texto de apresentação.
- Os botões do começo usam `{% include button.html ... %}`. Para mudar texto ou destino, altere `text="..."` e `link="..."`.
- Os três destaques (Pesquisa, Produtos, Equipe) usam `{% include feature.html ... %}`:
  - `image=` imagem do destaque (hoje, `images/photo.jpg`, a imagem de exemplo do modelo; troque por fotos do laboratório, enviando-as para `images/` e mudando o nome aqui);
  - `title=` título;
  - `flip=true` coloca a imagem do outro lado;
  - o texto fica no bloco `{% capture text %} ... {% endcapture %}` logo acima.

---

## 7. Pesquisa

Arquivos: `research/index.md` e `en/research/index.md`.

Cada linha de pesquisa é uma caixa com imagem e texto:

```liquid
{% capture text %}

Texto da linha de pesquisa, em Markdown.

{% endcapture %}

<div class="linha-pesquisa">
{%
  include feature.html
  image="images/pesquisa/formigas-mata-atlantica.jpg"
  title="Filogenômica e biogeografia de formigas da Mata Atlântica"
  text=text
%}
</div>
```

- **Imagens:** envie para `images/pesquisa/` com exatamente estes nomes, ou mude o `image=`:
  - `formigas-mata-atlantica.jpg`
  - `filogenomica-hymenoptera.jpg`
  - `taxonomia-formigas.jpg`
  - `museomica.jpg`
  - `colecao-hymenoptera.jpg`
- Enquanto a imagem não existe, aparece um desenho neutro no lugar.
- **Nova linha:** copie um bloco inteiro (do `{% capture text %}` até o `</div>`), cole abaixo e altere. Para alternar o lado da imagem, acrescente `flip=true` em uma linha dentro do `include`.
- **Remover:** apague o bloco inteiro.
- No fim da página fica a seção de expedições (ver a [seção 8](#8-expedições-de-campo)).

---

## 8. Expedições de campo

As expedições aparecem no fim da página Pesquisa, em cartões (foto de capa, local, período, resumo). Cada cartão abre a página da expedição, com texto, galeria de fotos, mapa e link para a notícia relacionada. Expedições com data aparecem primeiro, da mais recente para a mais antiga.

Expedições atuais:

| Expedição | Pasta das fotos | Páginas |
| --- | --- | --- |
| Tulu-Tuloi II (Serra do Aracá, AM, ago/2026) | `images/expedicoes/tulu-tuloi-ii/` | `expedicoes/tulu-tuloi-ii/index.md`, `en/expeditions/tulu-tuloi-ii/index.md` |
| Chapada Diamantina | `images/expedicoes/chapada-diamantina/` | `expedicoes/chapada-diamantina/index.md`, `en/expeditions/chapada-diamantina/index.md` |
| Lagoa do Cassó (MA) | `images/expedicoes/lagoa-do-casso/` | `expedicoes/lagoa-do-casso/index.md`, `en/expeditions/lagoa-do-casso/index.md` |
| Bioparque Serra Negra | `images/expedicoes/bioparque-serra-negra/` | `expedicoes/bioparque-serra-negra/index.md`, `en/expeditions/bioparque-serra-negra/index.md` |

### Fotos

- Envie para a pasta da expedição, em `images/expedicoes/<nome>/`. **Todas as fotos da pasta entram sozinhas na galeria**, em ordem alfabética do nome do arquivo (use nomes como `01-acampamento.jpg`, `02-coleta.jpg` para controlar a ordem).
- A foto chamada **`capa.jpg`** vira a capa do cartão. Sem ela, a capa é a primeira foto em ordem alfabética. Sem nenhuma foto, aparece uma imagem neutra e o aviso "Fotos em breve".
- Formatos aceitos: `.jpg`, `.jpeg`, `.png`, `.webp`.
- **Reduza as fotos antes de enviar**: cerca de 1600 px no lado maior e menos de 500 KB cada. Fotos direto da câmera deixam a página lenta. O GitHub recusa arquivos acima de 100 MB.
- Clicar numa foto da galeria abre a foto ampliada, com a legenda.

### Textos e dados

O cabeçalho de cada página de expedição:

```yaml
---
title: "Expedição à Chapada Diamantina"
translation: en/expeditions/chapada-diamantina/
expedicao: true
fotos: chapada-diamantina   # nome da pasta em images/expedicoes/
ano_mes: "2024-07"          # para ordenar, no formato AAAA-MM
periodo: "julho de 2024"    # como aparece no site
local: "Chapada Diamantina, Bahia"
mapa: "Chapada Diamantina, Bahia"   # endereço para o mapa; "" = sem mapa
resumo: "Uma frase que aparece no cartão."
noticia: ""                 # notícia relacionada (ver abaixo)
legendas:
  01-acampamento.jpg: Acampamento no Vale do Pati
  02-coleta.jpg: Coleta com guarda-chuva entomológico
---
```

- O texto da página vai abaixo do cabeçalho, entre `{% include expedicao-topo.html %}` e `{% include expedicao-galeria.html %}`. Não apague essas duas linhas.
- **Legendas** são opcionais: uma linha por foto, recuada com dois espaços, com o nome exato do arquivo.
- **Notícia relacionada:** o nome do arquivo da notícia em `_posts/`, sem a data e sem `.md`. Exemplo: para `_posts/2026-08-24-expedicao-tulu-tuloi-ii.md`, use `noticia: "expedicao-tulu-tuloi-ii"`.
- **Mapa:** use um endereço que o Google Maps reconheça. Confira colando o texto na busca do Google Maps.
- A versão em inglês (`en/expeditions/<nome>/index.md`) tem o mesmo cabeçalho com `lang: en`, textos em inglês e `translation:` apontando para a página em português. As fotos são as mesmas (mesma pasta); as legendas em inglês vão no `legendas:` do arquivo em inglês.

### Nova expedição

1. **Add file → Create new file**, nome `expedicoes/<nome-da-expedicao>/index.md`. Use letras minúsculas, sem acentos, com hífens.
2. Cole o conteúdo de uma expedição existente e altere `title`, `fotos`, `translation` e os demais campos.
3. Repita com `en/expeditions/<nome-da-expedicao>/index.md`, com `lang: en` e `translation: expedicoes/<nome-da-expedicao>/`.
4. Envie as fotos para `images/expedicoes/<nome-da-expedicao>/`.

---

## 9. Coleção

Arquivos: `colecao/index.md`, `en/collection/index.md` e `_data/colecao.yaml`.

A página tem: apresentação, painel do Power BI, acesso aos dados, como citar, catálogos de material-tipo e informações sobre visitas e empréstimos.

### Painel do Power BI

- O endereço fica em `painel:` em `_data/colecao.yaml`. É o link de **Publicar na Web** do Power BI (`https://app.powerbi.com/view?r=...`).
- Se o painel for republicado e o link mudar, troque só essa linha.
- O painel é exibido dentro da página e há um link "Abrir o painel em tela cheia".
- O que aparece no painel é controlado no Power BI, não no site. Lembre-se de que um painel publicado na Web é público: não inclua dados internos, nomes de doadores ou coordenadas precisas de espécies sensíveis.

### Botões de download dos dados (GBIF, SiBBr, speciesLink)

Em `_data/colecao.yaml`, preencha `link:` de cada base quando o conjunto de dados estiver publicado:

```yaml
dados:
  - nome: GBIF
    nome_en: GBIF
    icon: fa-solid fa-earth-americas
    link: "https://www.gbif.org/dataset/xxxxxxxx"
```

- Botões com `link: ""` não aparecem. Enquanto nenhum tiver link, aparece o aviso "Os links para o conjunto de dados publicado serão acrescentados aqui em breve".
- Para acrescentar outra base, copie um bloco (do `- nome:` até o `link:`). Ícones: https://fontawesome.com/search?ic=free (use o nome completo, como `fa-solid fa-database`).

### Catálogos de material-tipo

Também em `_data/colecao.yaml`, na lista `catalogos:`, com `titulo`, `ref` (autores, revista, ano) e `link`.

### Textos

Apresentação, "Como citar" e "Visitas, empréstimos e envio de material" ficam em `colecao/index.md` (e a versão em inglês em `en/collection/index.md`).

---

## 10. Produtos: publicações e repositórios

Arquivos: `projects/index.md` e `en/projects/index.md`. A página tem três partes, nesta ordem: Publicações, Em destaque e Todos os repositórios.

### 10.1 Publicações (automáticas, pelo ORCID)

- A lista vem do ORCID das pessoas listadas em `_data/orcid.yaml`. Hoje, só o da Gabi:

```yaml
- orcid: 0000-0002-8792-7719 # Gabriela Procópio Camacho
```

- Para incluir as publicações de outra pessoa, acrescente uma linha `- orcid: 0000-...`. Publicações repetidas entre pessoas (mesmo DOI) aparecem uma vez só.
- A lista se atualiza **toda segunda-feira** e a cada alteração no site. Uma publicação nova no ORCID aparece no site na próxima atualização.
- **Nunca edite `_data/citations.yaml`**: ele é refeito a cada atualização.

### 10.2 Corrigir, completar ou esconder uma publicação (`_data/sources.yaml`)

Em `_data/sources.yaml`, cada bloco começa com o identificador da publicação. É o código que aparece embaixo dela na página Produtos (por exemplo, `doi:10.1016/j.cub.2025.03.023`). O que você escrever substitui o que veio do ORCID; o resto continua automático.

Se o arquivo terminar com `[]`, apague essa linha antes de acrescentar o primeiro bloco.

**Itálico no título** (nomes de espécies): use `<i>…</i>` e aspas:

```yaml
- id: doi:10.xxxx/xxxxx
  title: "<i>Vulcanidris cratensis</i>, a new fossil ant from the Crato Formation"
```

**Esconder um registro** (por exemplo, duplicatas vindas do Web of Science, sem título):

```yaml
- id: "wosuid:ZOOREC:ZOOR15301004097"
  remove: true

- id: "wosuid:WOS:000948800900140"
  remove: true
```

**Acrescentar uma publicação que não está no ORCID** (pelo DOI):

```yaml
- id: doi:10.xxxx/xxxxx
```

**Imagem, etiquetas e botões de dados e código** numa publicação:

```yaml
- id: doi:10.xxxx/xxxxx
  image: images/publicacoes/nome.jpg
  tags:
    - formicidae
  buttons:
    - type: data
      link: https://doi.org/10.5281/zenodo.xxxxxxx
    - type: source
      link: https://github.com/HymenopteraLab-MZUSP/analise-xxxx
```

**Lista de autores manual** (raramente necessário; ao incluir `authors`, é preciso listar todos):

```yaml
  authors:
    - Autor A
    - Gabriela P. Camacho
    - Autor C
```

Para resolver na origem, também dá para corrigir, juntar ou apagar obras diretamente no perfil do ORCID.

### 10.3 Nomes do laboratório em negrito (automático)

- Nas listas de autores, os nomes de quem tem arquivo em `_members/` (membros atuais, colaboradores, coorientados e egressos) aparecem **em negrito** automaticamente.
- São reconhecidas as formas completas e abreviadas: "Gabriela Procópio Camacho", "Gabriela P. Camacho", "G. P. Camacho", "GP Camacho", "G. Procópio Camacho", "Gabriela Camacho", "G. Camacho". Acentos e partículas (de, da, dos) são ignorados.
- **Alguém assina de outro jeito:** acrescente a forma em `aliases:` no arquivo da pessoa em `_members/`.
- **Destaque indevido** (um coautor de fora com o mesmo sobrenome e a mesma inicial): acrescente `highlight: false` no arquivo do membro com aquele nome. A pessoa deixa de ser destacada.
- Código responsável: `_plugins/highlight.rb` (não precisa ser editado).

### 10.4 Em destaque

`_data/projects.yaml`, um bloco por produto:

```yaml
- title: POPs da Coleção de Hymenoptera
  subtitle: Procedimentos Operacionais Padrão
  group: featured
  image: https://opengraph.githubassets.com/1/HymenopteraLab-MZUSP/pops-hymenoptera-mzusp
  link: https://github.com/HymenopteraLab-MZUSP/pops-hymenoptera-mzusp
  description: Vinte procedimentos para recebimento, empréstimo, tombamento...
  repo: HymenopteraLab-MZUSP/pops-hymenoptera-mzusp
  tags:
    - protocolo
```

Para a imagem de um repositório, use `https://opengraph.githubassets.com/1/HymenopteraLab-MZUSP/<nome-do-repositório>`, que gera o cartão do GitHub automaticamente.

### 10.5 Todos os repositórios (automático)

- Lista sozinha todos os repositórios **públicos** da organização, com seus *topics* como etiquetas clicáveis.
- Repositórios privados não aparecem. Para aparecer, torne o repositório público (**Settings → General → Danger Zone → Change visibility**).
- Link direto para um filtro: `https://hymenopteralab-mzusp.github.io/projects/?topic=fapesp-2023-12809-0`. A página Financiamento usa esse link para os produtos do projeto Jovem Pesquisador.

---

## 11. Equipe

Arquivos: `team/index.md`, `en/team/index.md`, uma pessoa por arquivo em `_members/`, e as categorias em `_data/team_sections.yaml`.

### 11.1 O arquivo de cada pessoa

Exemplo completo (`_members/nome-sobrenome.md`):

```yaml
---
name: Nome Sobrenome
image: images/equipe/nome-sobrenome.jpg
role: mestrado
description: Mestrado — revisão taxonômica de Ectatomma
description_en: MSc — taxonomic revision of Ectatomma
affiliation: Museu de Zoologia da USP
aliases:
  - N. Sobrenome
links:
  email: nome@usp.br
  lattes: "0000000000000000"
  orcid: 0000-0000-0000-0000
  google-scholar: XXXXXXXXXXXX
  researcherid: X-0000-0000
  github: usuario-github
bio: Uma ou duas frases de perfil, que aparecem no cartão da página Equipe.
bio_en: The same profile in English.
---

**Projeto:** título do projeto.

**Bolsa:** modalidade, agência e processo.

---

<div lang="en" markdown="1">

**Project:** project title.

**Fellowship:** type, agency and grant number.

</div>
```

| Campo | O que é |
| --- | --- |
| `name` | Nome como aparece no site |
| `image` | Foto (envie para `images/equipe/`) |
| `role` | Categoria na página Equipe (tabela abaixo) |
| `description` / `description_en` | Linha abaixo do nome no cartão. Sem ela, aparece o nome da categoria |
| `affiliation` | Instituição (aparece na página da pessoa) |
| `aliases` | Outras formas do nome nas publicações (para o negrito automático) |
| `links` | Lattes (só os números, entre aspas), ORCID, Google Scholar (o código `user=` do endereço do perfil), ResearcherID, e-mail, GitHub. Só aparecem os preenchidos |
| `bio` / `bio_en` | Perfil curto do cartão. Use `*itálico*` para gêneros |
| `highlight: false` | Opcional: não destacar a pessoa nas publicações |

- O texto abaixo do cabeçalho aparece na página individual da pessoa. A parte em inglês fica no fim, dentro de `<div lang="en" markdown="1">` … `</div>`.
- **Fotos:** quadradas de preferência, rosto centralizado ou um pouco acima do centro, com cerca de 600 × 600 px. Nos cartões aparecem em círculo de 120 px. O nome do arquivo deve ser exatamente o do campo `image:` (atenção a maiúsculas e à extensão `.jpg` × `.jpeg`). Sem foto, aparece um avatar neutro.

### 11.2 Categorias (`role`)

| `role` | Categoria |
| --- | --- |
| `principal-investigator` | Pesquisadora principal |
| `gerente` | Gerente de coleções |
| `pesquisador` | Pesquisadores |
| `postdoc` | Pós-doutorado |
| `phd` | Doutorado |
| `mestrado` | Mestrado |
| `undergrad` | Iniciação científica |
| `extensao` | Extensão |
| `tecnico` | Treinamento técnico |
| `colaborador` | Colaboradores |
| `coorientacao` | Coorientações |
| `egresso-posdoc` | Egressos → Pós-doutorado |
| `egresso-doutorado` | Egressos → Doutorado |
| `egresso-mestrado` | Egressos → Mestrado |
| `egresso-tcc` | Egressos → Trabalho de conclusão de curso |
| `egresso-ic` | Egressos → Iniciação científica |
| `egresso-estagio` | Egressos → Estágio e outras orientações |
| `ex-membro` | Egressos → Outros |

- Egressos aparecem em cartões compactos, sem foto.
- **Ordem e nomes das categorias:** `_data/team_sections.yaml`. Mudar a ordem dos blocos muda a ordem na página. Categorias sem ninguém não aparecem.
- **Nova categoria:** acrescente um bloco em `team_sections.yaml` (`role`, `pt`, `en`) e outro em `_data/types.yaml` com o mesmo nome (`description`, `description_en`, `icon`).
- Dentro de cada categoria, a ordem é alfabética pelo nome do arquivo.

### 11.3 Quando alguém sai do laboratório

Não apague o arquivo. Troque o `role` para a categoria de egresso (por exemplo, `mestrado` → `egresso-mestrado`) e ajuste `description` (por exemplo, `Mestrado, 2026 — MZUSP`). Assim a pessoa continua no histórico e os nomes dela seguem em negrito nas publicações.

### 11.4 Pessoa nova

1. Envie a foto para `images/equipe/` como `nome-sobrenome.jpg`.
2. Em `_members/`, **Add file → Create new file**, nome `nome-sobrenome.md`.
3. Cole o modelo da 11.1 e preencha.

### 11.5 Fotos do grupo (uma por ano)

- Ficam no fim da página Equipe, da mais recente para a mais antiga.
- Envie a foto para `images/grupo/` como `2026.jpg`, `2025.jpg` etc.
- Em `_data/group_photos.yaml`, cada ano tem:

```yaml
- year: 2026
  image: images/grupo/2026.jpg
  date: "12 de dezembro de 2026"
  date_en: "12 December 2026"
  caption: Equipe do Laboratório de Hymenoptera no MZUSP.
  caption_en: The Hymenoptera Laboratory team at MZUSP.
```

- `date` é opcional (deixe `""`). Para tirar um ano, apague o bloco dele.

### 11.6 Textos da página

A introdução, o título "Fotos do grupo" e o convite final ("Quer fazer iniciação científica…") ficam em `team/index.md` e `en/team/index.md`.

---

## 12. Financiamento

Arquivos: `funding/index.md` e `en/funding/index.md`. São três tabelas em Markdown:

1. **Projetos coordenados:** Projeto | Financiador e modalidade | Coordenação | Processo
2. **Bolsas:** Bolsista | Projeto | Modalidade | Processo
3. **Outros projetos de que participo:** Projeto | Coordenação | Financiador e modalidade | Participação | Processo

- Cada linha da tabela é uma linha do arquivo, começando e terminando com `|`. Para acrescentar, copie uma linha e altere. O número de `|` deve ser igual ao do cabeçalho da tabela.
- Itálico em nomes científicos: `*Ectatomma*`.
- **Link para a Biblioteca Virtual da FAPESP:** o número do processo aponta para a página do projeto na BV. O endereço tem um número interno da BV, diferente do número do processo:
  - auxílios: `https://bv.fapesp.br/pt/auxilios/116201/`
  - bolsas: `https://bv.fapesp.br/pt/bolsas/230748/`
  - para achar o número, busque o processo em https://bv.fapesp.br e copie o endereço da página;
  - na versão em inglês, troque `/pt/` por `/en/`.
- Sem link, use `—` na coluna Processo.
- O aviso da FAPESP ("As opiniões, hipóteses e conclusões…") fica no fim da página e não deve ser removido.

---

## 13. Notícias, "Na mídia" e Instagram

Arquivos: `blog/index.md` (português) e `en/news/index.md` (inglês). A página tem duas colunas: notícias e "Na mídia" à esquerda, Instagram à direita (no celular, um embaixo do outro).

### 13.1 Nova notícia

1. Envie a imagem para `images/noticias/` (horizontal, cerca de 1200 × 800 px).
2. Em `_posts/`, **Add file → Create new file**, com o nome `AAAA-MM-DD-titulo-curto.md` (a data no nome é a data da notícia; use letras minúsculas, sem acentos, com hífens).
3. Conteúdo:

```yaml
---
title: "Defesa de mestrado de Nome Sobrenome"
image: images/noticias/titulo-curto.jpg
author: gabriela-camacho
tags:
  - defesa
---

Primeiro parágrafo: aparece como resumo na lista de notícias.

Restante do texto.
```

- `author` é o nome do arquivo da pessoa em `_members/`, sem `.md`.
- `tags` viram etiquetas clicáveis que filtram a lista. Etiquetas já usadas: `defesa`, `mestrado`, `expedição`, `Amazônia`, `na mídia`, `exposição`, `divulgação científica`, `formigas`, `fósseis`, `laboratório`, `github`.
- As notícias podem ser escritas só em português: a página em inglês mostra a mesma lista.
- Para ligar a notícia à página de uma expedição, acrescente no texto: `[página da expedição]({{ "expedicoes/tulu-tuloi-ii/" | relative_url }})`.

### 13.2 Tabela "Na mídia"

- Fica no começo de `blog/index.md`, e a versão em inglês em `en/news/index.md`.
- Uma linha por matéria: `| 24/04/2025 | Veículo | País | [Título da matéria](https://endereço) |`.
- Coloque as mais recentes no topo.

### 13.3 Instagram

- Linha `{% include instagram.html user="hymenopteralab" %}` em `blog/index.md` e `en/news/index.md`.
- Para outro perfil, troque o nome (sem @).
- O Instagram mostra o perfil pelo código oficial de incorporação; se o perfil for privado ou se o navegador bloquear conteúdo de terceiros, aparece só um link.

---

## 14. Contato

Arquivos: `contact/index.md` e `en/contact/index.md`.

- **Botão de e-mail:** `{% include button.html type="email" text="gpcamacho@usp.br" link="gpcamacho@usp.br" %}`. Troque os dois endereços.
- **Mapa:** `{% include map.html query="Museu de Zoologia da USP, Avenida Nazaré, 481, Ipiranga, São Paulo" title="..." %}`. O `query` é o que se digitaria na busca do Google Maps.
- **Endereço:** texto logo abaixo do mapa.

---

## 15. Versão em inglês

- Cada página em português tem uma equivalente em inglês na pasta `en/`. O botão de idioma no menu leva de uma para a outra.
- Para isso, cada par de páginas aponta uma para a outra no cabeçalho:
  - página em português: `translation: en/funding/`;
  - página em inglês: `lang: en` e `translation: funding/`.
- **Ao mudar o texto de uma página, mude também a outra língua.**
- **Equipe:** cada pessoa tem um arquivo só, com `bio_en`, `description_en` e o texto em inglês dentro de `<div lang="en" markdown="1">`.
- **Textos fixos da interface** (subtítulo, botão de idioma, crédito da foto, busca, modo escuro): `_data/strings.yaml`, uma seção `pt-BR:` e outra `en:`.
- **Notícias:** podem ficar só em português.
- **Página nova:** precisa das duas versões, com `translation:` cruzado e `lang: en` na versão em inglês. Se tiver menu, as duas precisam de `nav:`.

---

## 16. O que se atualiza sozinho

O repositório tem rotinas automáticas (pasta `.github/workflows/`, não editar):

| Rotina | Quando roda | O que faz |
| --- | --- | --- |
| **on-push** | a cada alteração | atualiza as publicações pelo ORCID e reconstrói o site |
| **on-schedule** | toda segunda-feira | atualiza as publicações |
| **on-pages** / **pages build and deployment** | após cada construção | publica o site |

Para forçar uma atualização das publicações sem editar nada: aba **Actions → On push to main → Run workflow → Run workflow**.

Também são automáticos: a lista de repositórios públicos (Produtos), o negrito dos nomes do laboratório (Produtos), as galerias e capas das expedições, e a ordem das fotos do grupo.

---

## 17. A organização no GitHub

As regras completas estão em `CONTRIBUTING.md`, no repositório `.github` da organização. Resumo:

1. **Criar repositório** a partir do `template-hymenopteralab` (**Use this template → Create a new repository**), sempre com dono `HymenopteraLab-MZUSP`.
2. **Nome** com prefixo: `pop-`/`protocolo-`, `pipeline-`, `analise-`, `dados-`, `ensino-` (minúsculas e hífens).
3. **Visibilidade:** começa privado; torna-se público ao publicar o trabalho. Só os públicos aparecem no site.
4. **Topics obrigatórios** (engrenagem ao lado de **About**):
   - tipo: `protocolo`, `pipeline`, `analise`, `dados` ou `ensino`;
   - responsável: `nome-sobrenome`;
   - financiamento, um por processo, sem barras: `fapesp-2023-12809-0`, `capes`, `cnpq-123456-2024-0`;
   - tema (opcional): `formicidae`, `uce`, `biogeografia`…
5. **README e CITATION.cff** preenchidos, com a seção Financiamento e a frase exigida pela FAPESP.
6. **Dados:** nada acima de 50 MB; dados brutos em SRA, GenBank, Zenodo ou Dryad; nunca senhas, dados pessoais ou coordenadas precisas de espécies ameaçadas; SisGen quando houver acesso ao patrimônio genético.
7. **Versões e DOI:** ao submeter artigo ou depositar tese, criar um *release* (`v1.0.0`); a integração com o Zenodo gera o DOI.
8. **Ao sair do laboratório:** o repositório fica na organização, com a autoria registrada.

Os topics de financiamento alimentam o filtro da página Produtos: `?topic=fapesp-2023-12809-0` lista tudo o que foi produzido com o projeto Jovem Pesquisador, para relatórios.

---

## 18. Problemas comuns e soluções

| Sintoma | Causa provável | Solução |
| --- | --- | --- |
| ✗ vermelho na aba Actions (build-site) | erro de digitação no cabeçalho de algum arquivo | Clique no ✗ → no passo que falhou, procure a linha com `Error`. Ela costuma citar o arquivo e a linha. Corrija (veja a [seção 3](#3-o-cabeçalho-dos-arquivos-front-matter-e-os-erros-mais-comuns)) |
| Erro citando `Invalid syntax for include tag` | um `{% include ... %}` com colchetes ou filtros nos parâmetros | Copie o `include` de um exemplo que funciona; os parâmetros aceitam só texto entre aspas ou nomes simples |
| Alterei e nada mudou | site ainda construindo, ou cache do navegador | Espere o ✓ verde em Actions e recarregue com Ctrl + Shift + R, ou teste numa janela anônima |
| Imagem não aparece | nome ou pasta diferente do que está no arquivo | Confira maiúsculas, acentos e a extensão (`.jpg` × `.JPG` × `.jpeg`) |
| Publicação nova do ORCID não apareceu | a atualização é semanal | Actions → On push to main → Run workflow |
| Publicação com título vazio ("[no title info]") | obra no ORCID sem DOI (importada do Web of Science, por exemplo) | `remove: true` em `_data/sources.yaml` (seção 10.2) ou corrija no ORCID |
| Pessoa em negrito por engano nas publicações | mesmo sobrenome e inicial | `highlight: false` no arquivo do membro (seção 10.3) |
| Repositório não aparece em Produtos | repositório privado | Torne-o público |
| Página nova sem botão de idioma | falta `translation:` | Acrescente `translation:` nas duas versões (seção 15) |
| Página aparece em branco ou com "placeholder" logo depois de publicar | primeira publicação ainda propagando | Espere alguns minutos e recarregue |
| Fonte nova não carregou | a fonte não tem algum dos pesos 200, 400, 500, 600 | Escolha outra fonte ou ajuste os pesos em `-theme.scss` |

---

## 19. Histórico do que foi feito

1. **POPs no GitHub:** os 20 POPs da Coleção de Hymenoptera viraram arquivos individuais no repositório `pops-hymenoptera-mzusp`.
2. **Organização:** perfil (`.github/profile/README.md`), regras de uso (`CONTRIBUTING.md`) e repositório-modelo `template-hymenopteralab`, com convenções de nomes, topics de financiamento, licenças e citação.
3. **Site:** criado a partir do Lab Website Template, publicado em GitHub Pages, bilíngue (português e inglês), com publicações automáticas pelo ORCID.
4. **Conteúdo:**
   - linhas de pesquisa em caixas com imagem;
   - publicações na página Produtos, sem imagens;
   - repositórios automáticos com filtro por topic;
   - equipe por categorias, com perfis, links acadêmicos (Lattes, ORCID, Google Scholar, ResearcherID), coorientações, egressos e fotos do grupo;
   - financiamento com links para a BV FAPESP e outros projetos;
   - notícias com imagens, defesas, a tabela "Na mídia" (20 matérias) e o Instagram;
   - contato com mapa.
5. **Correções de construção:** a sintaxe de `include` nos cartões da equipe e o cabeçalho do perfil da Gabi.
6. **Identidade visual:** paleta tirada do logo (cinza-esverdeado, marrom nos títulos e negritos, âmbar nos destaques), fontes Literata e Noto Sans, logo e ícone do laboratório, botão de idioma destacado.
7. **Publicações:** itálico manual nos títulos, remoção de registros vazios e negrito automático dos nomes do laboratório.
8. **Coleção:** página nova com o painel do Power BI, acesso aos dados, citação, catálogos de tipos e visitas.
9. **Colaboradores:** perfis de Anderson Lepeco e Rafael dos Santos Woloski.
10. **Expedições:** seção na página Pesquisa e páginas para Tulu-Tuloi II, Chapada Diamantina, Lagoa do Cassó e Bioparque Serra Negra.
11. **Topo e equipe:** foto de Guilherme Ide no topo, com camada escura e crédito no rodapé; fotos dos cartões da equipe corrigidas.

---

## 20. Pendências conhecidas

- **Fotos:**
  - linhas de pesquisa (`images/pesquisa/`);
  - destaques da página inicial (hoje com a imagem de exemplo `images/photo.jpg`);
  - membros sem foto;
  - fotos do grupo por ano (`images/grupo/`);
  - imagens das notícias (`images/noticias/`);
  - fotos das expedições.
- **Expedições:** textos, períodos e resumos de Chapada Diamantina, Lagoa do Cassó e Bioparque Serra Negra. O Bioparque está sem mapa: preencha `mapa:`.
- **Coleção:** links do conjunto de dados no GBIF, SiBBr e speciesLink em `_data/colecao.yaml`.
- **Produtos:** os dois registros sem título do Web of Science (`wosuid:...`), a serem escondidos em `_data/sources.yaml` ou corrigidos no ORCID.
- **Equipe:**
  - título do projeto de pós-doutorado de Otávio Guilherme Morais da Silva;
  - conferir o título do mestrado de Henrique Pereira Moleiro com o Lattes;
  - Lattes, ORCID ou Google Scholar de quem ainda não tem;
  - conferir os perfis de Anderson Lepeco e Rafael Woloski, montados a partir de fontes públicas.
- **Na mídia:** conferir os links do El País e do El Debate, que não puderam ser verificados.
- **Financiamento:** número do processo do projeto PRPI-USP (deixado sem número).
- **Repositório:** os exemplos do modelo original (`_members/jane-smith.md`, `john-doe.md`, `sarah-johnson.md` e os três `_posts/…example-post…`) estão escondidos do site e podem ser apagados.

Documentação completa do modelo original, em inglês: https://greene-lab.gitbook.io/lab-website-template-docs
