

# Remplacement des placeholders du Hero par les 5 images LinkedIn

## Ce qui va etre fait
Copier les 5 images uploadees dans `src/assets/hero/` et les utiliser dans la galerie inclinee du Hero Section a la place des placeholders actuels (icones).

## Images et leur placement dans la galerie
1. `hero-1.png` - Post Sophie Bidaux "Le controle, c'est pour les enfants" (1 708 reactions)
2. `hero-2.png` - Post Sophie Bidaux "Vous n'avez pas un probleme de talents" (251 reactions)
3. `hero-3.png` - Post Sophie Bidaux carrousel "8 peurs qui vous empechent de deleguer" (231 reactions)
4. `hero-4.png` - Post Hugo Marquet scierie (142 reactions)
5. `hero-5.png` - Post Hugo Marquet atelier bois (324 reactions)

## Modifications techniques

### Fichiers crees
- `src/assets/hero/hero-1.png` a `hero-5.png` : copie des 5 images

### Fichier modifie : `src/components/landing/HeroSection.tsx`
- Supprimer le tableau `placeholderImages` avec les icones
- Importer les 5 images depuis `@/assets/hero/`
- Remplacer les divs placeholder par des balises `<img>` avec `object-cover` et `rounded-2xl`
- Conserver les rotations CSS, les effets de perspective, et le hover
- Ajouter un overlay subtil sur chaque image pour l'integration visuelle
- Les labels sous les images seront retires (les images parlent d'elles-memes)

