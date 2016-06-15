---
layout: blog-single
title: "Domain Driven Design Value Type"
author: Jérémie Grodziski
category: software-design
image: bg-img-books
tags: [domain-driven-design, DDD, value object, value type]
alias: [/software-design/domain-driven-design-value-object]
comments: true
excerpt: Le <i>Value Type</i> est le <i>building block</i> du Domain-Driven Design qui offre le meilleur retour sur investissement. Cet article vous explique ce qu'est le <i>Value Object</i> (ou <i>Value Type</i> comme je préfére le nommer), ses caractéristiques et ses bénéfices.
---

# Qu'est ce qu'une valeur ?

Le nombre 42, un montant de 10 Euros, une distance de 3 kilomètres, mon prénom "Jérémie", la date 14 avril 2016 sont toutes des valeurs.

> **Une valeur est un concept du domaine qui mesure, quantifie ou décrit quelque chose.**

Allez une petite définition un peu plus formelle pour la route :

> **Une valeur est quelque chose d'intangible et d'immutable**
>
  - **Intangible** signifie : qui existe en dehors du temps et de l'espace
>
  - **Immutable** signifie : qui ne change pas une fois créée

Intangible, j'avoue c'est un peu rude, prenons donc un exemple : si je vous dit "20 Euros", vous comprenez le sens de cette valeur quelque soit le lieu où je l'énonce (Paris) et le moment (14 avril 2016). C'est cela être intangible pour une valeur. Dit autrement, **on supprime le _temps_ du paysage de la valeur et cela lui enlève une part importante de complication**. L'immutabilité semble quelque chose d'acquis pour le commun des mortels mais pas pour le programmeur, qui est habitué à voir des variables partout. Même s'il affecte des valeurs à des variables et finit par confondre les deux et à voir des changements partout.

# Caractéristiques d'une valeur

### Immutables
Par définition du mot "valeur", une valeur ne change pas.

### “Tout" conceptuel
La valeur a une signification locale, c'est à dire qui est auto-suffisante pour en saisir le sens. La définition de la valeur peut faire intervenir éventuellement des concepts de niveaux d'abstraction plus bas mais leur sens est également auto-suffisant, par exemple une position sur une sphère fait intervenir la notion - de plus bas niveau - d'angle.

### Égalité forte

L'ensemble des attributs d'une valeur permettent d'établir si elle est égale à une autre valeur.Exemple : exemple, un montant de 
```
10 Euros {quantité: 10, devise: "EUR"}
```
est égale à un autre montant de 
```
10 Euros {quantité: 10, devise: "EUR"}
```
mais différentes d'un montant de 
```
10 Dollars {quantité: 10, devise: "USD"}
```


### Riches en Logique du domaine (contraintes, comportement)

C'est là que les value types se distinguent d'une simple structure de données associative. Ils possèdent des contraintes et des comportement lié aux concepts du domaine qu'ils représentent.
Exemple : 
Un value type `Montant` posséde comme contraintes : 

* *Quantité* : strictement positive, un montant négatif de -10 € n'a pas de sens. Précision à deux décimales.
* *Code ISO de la devise* appartenant à l'ensemble des devises connus (en Java l'objet Currency fournit avec le SDK). Ex : "EUR", "USD", "GBP".
et comme opérations : 
* ajouter
* soustraire
* comparer


### Combinables (opérateurs, fonctions)

### Auto-validant



