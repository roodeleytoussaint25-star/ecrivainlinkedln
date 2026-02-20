
# Refonte de la section "Ce qui vous bloque aujourd'hui"

## Inspiration
L'image de reference montre des cartes blanches/creme sur fond navy, avec des icones de style "gravure a la main" (dessin au trait), des titres avec un mot-cle souligne en orange/gold, et une grille 2 colonnes + 1 centree en bas.

## Changements prevus

### 1. Titre
- Remplacer par **"Ce qui te bloque aujourd'hui"** (style italique serif comme dans la reference)

### 2. Supprimer le sous-titre
- Le paragraphe descriptif sous le titre sera retire pour correspondre au design epure de la reference

### 3. Style des cartes
- **Fond blanc/creme** (`bg-white` ou `bg-[#f5f0eb]`) au lieu du fond sombre transparent
- **Coins tres arrondis** (`rounded-2xl`)
- **Texte navy-deep** au lieu du blanc
- **Grille** : 2 colonnes en haut, 1 carte centree en bas (au lieu de 3 colonnes)

### 4. Icones style gravure a la main
- Remplacer les icones Lucide par des **SVG inline dessines a la main** (trait fin, style sketch/gravure)
  - Carte 1 : un X/ciseaux (style rature) pour "Tu ne sais pas quoi raconter"
  - Carte 2 : un cercle barre (style interdit) pour "Tu ne te sens pas legitime"
  - Carte 3 : un poing/main pensif pour "Tu as peur de flopper"
- Fond beige clair derriere chaque icone (`bg-[#f0ead6]` arrondi)

### 5. Contenu des cartes (conforme a la reference)
- **Carte 1** : Titre "Tu ne sais pas **quoi raconter**" -- "C'est normal de ne pas savoir par ou commencer. Pourtant, ton quotidien regorge d'experiences interessantes a documenter !"
- **Carte 2** : Titre "Tu ne te sens pas **legitime**" -- "Personne ne se sent 100% legitime. C'est un sentiment universel et tous les createurs ont doute avant de demarrer. Rassure-toi, c'est normal !"
- **Carte 3** : Titre "Tu as peur de **flopper**" -- "Nous cherchons tous de la validation. C'est un sentiment naturel qui decoule de la peur du rejet, du temps ou nous vivions en petites tribus."

### 6. Mise en forme des titres
- Le mot-cle dans chaque titre sera en **gold/orange** avec un **soulignement** decoratif, comme dans la reference

### 7. Citation en bas
- Retirer l'emoji ampoule
- Conserver le style actuel

## Fichier modifie
- `src/components/landing/InvitationSection.tsx` -- refonte complete du composant

## Details techniques
- Les 3 SVG inline remplaceront les icones Lucide (suppression de l'import lucide-react)
- Grille CSS : `grid-cols-1 md:grid-cols-2` avec la 3e carte en `md:col-span-2 md:max-w-[calc(50%-12px)] md:mx-auto`
- Les SVG seront traces avec `stroke-linecap: round` et `stroke-linejoin: round` pour le rendu "fait main"
- Fond de section inchange (navy avec gradient radial)
