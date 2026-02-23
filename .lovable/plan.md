

# Remplacer le mockup telephone par un fan de posts LinkedIn

## Ce qui change

Le mockup telephone actuel (carousel dans un cadre iPhone) sera remplace par une disposition en **eventail de cartes** comme dans l'image de reference : 3 posts LinkedIn visibles simultanement, superposes et legerement inclines, formant un "fan" visuel.

## Design cible

- **3 images visibles en meme temps** (sur les 5 disponibles), disposees en eventail
- Chaque carte est legerement inclinee (rotation CSS) et decalee verticalement/horizontalement
- La carte centrale est la plus en avant (z-index le plus eleve)
- Les cartes ont un cadre blanc arrondi avec ombre portee (style screenshot LinkedIn)
- Les images sont affichees en entier (pas croppees dans un telephone)
- Sur mobile : disposition reduite (cartes plus petites) ou empilees

## Modifications techniques

### Fichier : `src/components/landing/HeroSection.tsx`

1. **Supprimer** le composant `PhoneMockup` (lignes 20-78)
2. **Creer** un nouveau composant `PostsFan` qui :
   - Affiche 3 images parmi les 5 (hero-1, hero-4, hero-5 par exemple, ou les 3 avec le plus d'impact visuel)
   - Utilise `transform: rotate()` et `translate` pour positionner les cartes en eventail
   - Carte gauche : rotation -6deg, decalee en haut a gauche
   - Carte centre : rotation 0deg, centree, z-index le plus haut
   - Carte droite : rotation +6deg, decalee en bas a droite
   - Chaque carte a un `rounded-xl`, `bg-white`, `p-1`, `shadow-xl`
   - Les images utilisent `object-cover` avec un aspect ratio naturel (pas force en 9/17)
3. **Mettre a jour** la zone droite du Hero pour utiliser `PostsFan` au lieu de `PhoneMockup`
4. **Supprimer** les badges flottants "Coaching 1:1" et "IA Prompts" (ou les repositionner autour du fan)
5. Responsive : sur mobile, reduire la taille des cartes et l'ecart entre elles

### Disposition CSS des cartes

```text
    [Carte 1]
        [Carte 2]     <- la plus en avant
            [Carte 3]

Rotations : -8deg, 0deg, +8deg
Decalages : chaque carte decalee de ~30px horizontalement et ~20px verticalement
```

### Tailles

- Desktop : cartes de ~180px de large
- Mobile : cartes de ~130px de large
- Conteneur global : ~350px desktop, ~280px mobile

