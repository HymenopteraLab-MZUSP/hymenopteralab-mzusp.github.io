# Como editar o site

Tudo se edita direto no GitHub: abra o arquivo, clique no lápis (**Edit**), altere e clique em **Commit changes**. O site se atualiza em 2 a 5 minutos. O andamento aparece na aba **Actions**.

| Para mudar… | Edite |
| --- | --- |
| Título, descrição, links do rodapé | `_config.yaml` |
| Página inicial | `index.md` |
| Linhas de pesquisa (caixas com texto e imagem) | `research/index.md`; imagens em `images/pesquisa/` |
| Publicações | `_data/orcid.yaml` (automático) ou `_data/sources.yaml` (por DOI) |
| Produtos em destaque | `_data/projects.yaml` |
| Equipe | um arquivo por pessoa em `_members/`; ordem e nomes das categorias em `_data/team_sections.yaml` |
| Financiamento | `funding/index.md` |
| Notícias | um arquivo por notícia em `_posts/`; tabela "Na mídia" em `blog/index.md` e `en/news/index.md` |
| Contato | `contact/index.md` |
| Fotos e imagens | pasta `images/` |
| Versão em inglês | pasta `en/` (uma página para cada página em português) |
| Textos fixos da interface (menus, busca) | `_data/strings.yaml` |

## Acrescentar uma pessoa à equipe

1. Envie a foto (quadrada, de preferência) para `images/equipe/`, com o nome `nome-sobrenome.jpg`.
2. Em `_members/`, clique em **Add file → Create new file**, com o nome `nome-sobrenome.md`, e cole:

```yaml
---
name: Nome Sobrenome
image: images/equipe/nome-sobrenome.jpg
role: mestrado
description: Mestrado — revisão taxonômica de [grupo]
affiliation: Museu de Zoologia da USP
aliases:
  - N. Sobrenome
links:
  email: nome@usp.br
  orcid: 0000-0000-0000-0000
  lattes: "0000000000000000"
  github: usuario-github
---

**Projeto:** título do projeto.

**Bolsa:** modalidade, agência, processo e vigência.
```

Valores de `role` (cada um vira uma categoria na página Equipe): `principal-investigator` (Pesquisadora principal), `gerente` (Gerente de coleções), `pesquisador`, `postdoc`, `phd` (Doutorado), `mestrado`, `undergrad` (Iniciação científica), `extensao`, `tecnico` (Treinamento técnico), `colaborador`, `ex-membro` (Egressos).
Quando alguém sair do laboratório, troque o `role` para `ex-membro`: a pessoa passa para Egressos. Não apague o arquivo.

## Publicações

- **Automático pelo ORCID:** em `_data/orcid.yaml`, acrescente uma linha `- orcid: 0000-0000-0000-0000` para cada pessoa (o ORCID da Gabi já está lá). A lista se atualiza toda semana e a cada alteração no site.
- **Por DOI:** em `_data/sources.yaml`, siga o exemplo no próprio arquivo. Use também para acrescentar imagem, etiquetas ou links de dados e código a uma publicação que veio do ORCID.
- Nunca edite `_data/citations.yaml`. Ele é gerado automaticamente.

## Produtos

As publicações ficam no topo da página Produtos. A lista "Todos os repositórios" é automática: mostra os repositórios **públicos** da organização, com os topics de cada um. Para um repositório aparecer em destaque, acrescente-o em `_data/projects.yaml`.

Link direto para um filtro: `https://hymenopteralab-mzusp.github.io/projects/?topic=fapesp-2023-12809-0`.

## Notícias

Em `_posts/`, crie um arquivo `AAAA-MM-DD-titulo-curto.md`:

```yaml
---
title: Defesa de mestrado de Nome Sobrenome
author: gabriela-camacho
image: images/noticias/foto.jpg
tags:
  - defesa
---

Texto da notícia. O primeiro parágrafo aparece como resumo na página Notícias.
```

## Versão em inglês

Cada página em português tem uma equivalente em inglês na pasta `en/`. O botão **EN**/**PT** no menu leva de uma para a outra.

- Ao mudar o texto de uma página, mude também a versão na outra língua. As tabelas de financiamento ficam em `funding/index.md` e `en/funding/index.md`.
- As páginas da equipe são bilíngues: o texto em inglês fica no fim do próprio arquivo de cada pessoa, dentro de `<div lang="en" markdown="1">` … `</div>`. Para a função aparecer em inglês na página Team, use `description_en` no cabeçalho, como no arquivo da Gabi.
- As notícias podem ser escritas só em português.
- Uma página nova precisa de `lang: en` no cabeçalho da versão em inglês e de `translation:` nas duas versões, apontando uma para a outra (por exemplo, `translation: en/funding/` e `translation: funding/`).

## Se algo der errado

Na aba **Actions**, um ícone vermelho indica erro na última atualização. Clique nele para ver a mensagem. O erro mais comum é um espaço ou dois-pontos fora do lugar no cabeçalho (entre os `---`) de um arquivo.

Documentação completa do modelo, em inglês: https://greene-lab.gitbook.io/lab-website-template-docs
