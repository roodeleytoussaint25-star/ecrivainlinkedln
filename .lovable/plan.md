

# Refonte de la section Vehicule -- Engagement et tangibilite de l'offre

## Objectif
Restructurer la section pour que le prospect comprenne clairement ce dans quoi il s'engage : l'ecriture est au centre de tout, et l'offre se decompose en 3 types de travail avec des methodes concretes et tangibles pour chacun.

## Nouvelle structure de la section

### 1. En-tete (texte introductif)
- Supprimer le petit titre "Le Vehicule" au-dessus du H2
- Nouveau H2 : "L'ecriture est au **centre de tout**" (avec "centre de tout" en gold)
- Paragraphe d'introduction : "Pour reussir ici, il faut considerer l'ecriture comme le centre de tout. J'identifie 3 types de travail pour y arriver, avec l'ecriture comme point central."

### 2. Les 3 phases (accordion existant, ameliore)
Garder le format accordion avec les 3 phases, mais rendre les items plus tangibles en separant visuellement le nom de la methode de sa description :

- **Phase 01 -- Travail en Amont** (sous-titre : "Fondations et strategie") -- 9 items (inchanges)
- **Phase 02 -- Travail Pratique** (sous-titre : "Creation et publication") -- 11 items (inchanges)
- **Phase 03 -- Travail en Aval** (sous-titre : "Monetisation et croissance") -- 8 items (inchanges)

Chaque item sera affiche avec le nom de la methode en blanc/bold et la description apres le tiret en white/60, pour mieux mettre en valeur la tangibilite (les assets concrets).

### 3. Compteur de methodes
Ajouter sous l'accordion un petit recap visuel : "28 methodes et frameworks inclus" pour renforcer la valeur percue.

## Changements visuels par item
Transformer chaque item de simple texte en deux parties stylees :
- Avant le tiret " -- " : nom bold en `text-white font-medium`
- Apres le tiret : description en `text-white/55 font-normal`
- Cela donne une meilleure lisibilite et met en avant la tangibilite

## Fichier modifie
- `src/components/landing/VehicleSection.tsx` -- refonte du header + style des items

## Details techniques
- Suppression du `<span>` "Le Vehicule"
- Nouveau H2 avec "centre de tout" en `text-gold`
- Ajout d'un paragraphe `text-white/70` sous le H2
- Pour chaque item, split sur " — " (tiret cadratin) pour separer nom et description
- Nom : `text-white font-medium`, Description : `text-white/55`
- Ajout d'un compteur total sous l'accordion : petit badge ou texte centre avec le nombre total de methodes
- Aucun changement sur le layout accordion ni sur les donnees des phases
