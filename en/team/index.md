---
title: Team
lang: en
translation: team/
nav:
  order: 3
  tooltip: Who is in the lab
---

# {% include icon.html icon="fa-solid fa-users" %}Team

Faculty, postdocs, students and collaborators of the MZUSP Hymenoptera Laboratory.

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role == 'principal-investigator'" %}
{% include list.html data="members" component="portrait" filter="role == 'pesquisador' or role == 'postdoc'" %}
{% include list.html data="members" component="portrait" filter="role == 'phd' or role == 'mestrado'" %}
{% include list.html data="members" component="portrait" filter="role == 'undergrad' or role == 'tecnico'" %}
{% include list.html data="members" component="portrait" filter="role == 'colaborador'" %}

{% assign ex_membros = site.members | where: "role", "ex-membro" %}
{% if ex_membros.size > 0 %}

{% include section.html %}

## Former members

{% include list.html data="members" component="portrait" filter="role == 'ex-membro'" style="small" %}

{% endif %}

{% include section.html background="images/background.jpg" dark=true %}

Interested in joining the lab as an undergraduate, MSc or PhD student, or postdoc? Write to [gpcamacho@usp.br](mailto:gpcamacho@usp.br) and tell us about your interests.
