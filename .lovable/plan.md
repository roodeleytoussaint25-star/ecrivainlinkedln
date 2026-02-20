

# Redesign du Hero Section

## Inspiration
Le style de l'image de reference : fond noir/sombre, grand titre centre en serif/display bold, sous-titre descriptif, deux boutons CTA cote a cote, et une galerie horizontale d'images inclinees/superposees en dessous du texte.

## Changements prevus

### Structure du nouveau Hero
1. **Fond** : Fond navy-deep (noir profond), pas de decorations blob -- style epure
2. **Titre** : Grande typographie display centree, avec le mot cle en couleur gold, style similaire a "Showcase your work to the world."
3. **Sous-titre** : Texte descriptif en blanc/gris sous le titre
4. **Deux boutons CTA** : cote a cote -- un bouton gold plein ("Reservez votre place") et un bouton outline blanc ("Voir le programme")
5. **Galerie d'images** : Rangee horizontale d'images inclinees/rotees avec des effets de perspective, debordant sur les cotes de l'ecran -- les images que l'utilisateur fournira seront placees ici
6. **Badges flottants** : Petits badges colores ("Coaching 1:1", "IA Prompts") places autour de la galerie d'images, similaires aux badges "designer" et "artist" dans la reference

### Details techniques
- Modifier `src/components/landing/HeroSection.tsx`
- Utiliser des placeholders pour les images en attendant que l'utilisateur fournisse les siennes (images grises avec icones)
- Les images seront copiees dans `src/assets/` et importees en ES6 modules
- Rotations CSS avec `rotate-[-6deg]`, `rotate-[3deg]`, etc. pour l'effet de galerie inclinee
- Responsive : sur mobile, les images seront plus petites et en scroll horizontal
- Animations fade-in conservees avec delais progressifs

### Fichiers modifies
- `src/components/landing/HeroSection.tsx` -- refonte complete du composant

