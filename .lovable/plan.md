

# Refonte de la section Preuve -- style dashboard pratique et chronometre

## Inspiration
Les images de reference montrent des dashboards sombres avec des cartes arrondies, des barres verticales de progression type "capsule", un calendrier de suivi jour par jour (style dots/cercles), et des cartes jour par jour avec statuts. L'objectif est de montrer l'aspect **pratique, structure et chronometre** de l'offre 20 jours.

## Changements prevus

### 1. Nouveau layout
- Garder le texte a gauche (titre + description)
- Remplacer la grille de 4 stats a droite par **deux widgets visuels empiles** inspires des images

### 2. Widget 1 : Barre de progression 20 jours (style capsule)
- Inspire de l'image "Your progress" avec les barres verticales arrondies
- 5 barres representant les **4 semaines + jour final** du programme (Sem 1, Sem 2, Sem 3, Sem 4, Final)
- Chaque barre a une hauteur proportionnelle au nombre de posts/actions prevues
- Fond sombre avec bordure subtile (`bg-white/5 border border-white/10`)
- Header : "Votre progression" avec sous-titre "20 jours d'actions concretes"
- Barre active (ex: Sem 3) mise en valeur avec une etiquette gold
- Legende en bas : "Posts publies" + "Moyenne : 1 post/jour"

### 3. Widget 2 : Calendrier de suivi (style dots)
- Inspire de l'image "Irrigation Calendar" avec les cercles gold/gris
- Grille 5 colonnes x 4 lignes = 20 jours
- Cercles gold = jours actifs, cercles gris = jours a venir
- Header : "Calendrier d'action" avec sous-titre "20 posts en 20 jours"
- Legende : cercle gold = "Fait" / cercle gris = "A venir"

### 4. Stats en bas
- Ligne horizontale avec 3 mini-stats : "20 jours" | "20+ posts" | "5 beta-testeurs"
- Style pilule sombre avec texte gold pour les valeurs

### 5. Style global
- Cartes sombres arrondies (`rounded-2xl`) avec `bg-white/5 backdrop-blur border border-white/10`
- Couleurs : gold pour les elements actifs, blanc/gris pour le texte, fond navy-deep
- Hover subtil sur les cartes

## Fichier modifie
- `src/components/landing/ProofSection.tsx` -- refonte complete

## Details techniques
- Suppression des imports Lucide (Target, TrendingUp, Users, Search)
- Les barres de progression seront des `div` avec hauteurs variables et `rounded-full`
- Le calendrier sera une grille CSS `grid-cols-5` avec des cercles de 28px
- Les animations `observe-section` seront conservees
- Responsive : sur mobile, les widgets passent en colonne sous le texte

