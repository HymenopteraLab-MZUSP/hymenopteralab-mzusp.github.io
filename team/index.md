---
translation: en/team/
title: Equipe
nav:
  order: 3
  tooltip: Quem faz parte do laboratório
---

# {% include icon.html icon="fa-solid fa-users" %}Equipe

Docentes, pós-doutorandos, estudantes e colaboradores do Laboratório de Hymenoptera do MZUSP.

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role == 'principal-investigator'" %}
{% include list.html data="members" component="portrait" filter="role == 'pesquisador' or role == 'postdoc'" %}
{% include list.html data="members" component="portrait" filter="role == 'phd' or role == 'mestrado'" %}
{% include list.html data="members" component="portrait" filter="role == 'undergrad' or role == 'tecnico'" %}
{% include list.html data="members" component="portrait" filter="role == 'colaborador'" %}

{% assign ex_membros = site.members | where: "role", "ex-membro" %}
{% if ex_membros.size > 0 %}

{% include section.html %}

## Ex-membros

{% include list.html data="members" component="portrait" filter="role == 'ex-membro'" style="small" %}

{% endif %}

{% include section.html background="images/background.jpg" dark=true %}

Quer fazer iniciação científica, mestrado, doutorado ou pós-doutorado no laboratório? Escreva para [gpcamacho@usp.br](mailto:gpcamacho@usp.br) contando seus interesses.
