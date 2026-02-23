

# Deux changements : logo LinkedIn officiel + fond papier carnet

## 1. Logo LinkedIn dans le badge Hero

Le logo actuel dans le badge utilise du texte blanc pour "Linked" et un fond dore pour le "in". L'image de reference montre le vrai logo LinkedIn : tout en bleu (`#0A66C2`), avec "in" dans un rectangle bleu arrondi et le texte "in" en blanc.

**Fichier** : `src/components/landing/HeroSection.tsx` (lignes 160-163)

Changements sur le SVG du badge :
- "Linked" : passe de `fill: white` a `fill: #0A66C2` (bleu LinkedIn officiel)
- Le rectangle du "in" : passe de `fill: hsl(var(--gold))` a `fill: #0A66C2`
- Le texte "in" : passe de `fill: hsl(var(--navy-deep))` a `fill: white`

Cela reproduit fidelement le logo LinkedIn officiel visible dans l'image.

---

## 2. Texture de fond "papier de carnet"

L'image de reference montre un fond blanc-gris avec une texture de papier visible, des fibres fines et un grain organique. Actuellement la texture `paper-texture-dark` est tres subtile (opacite 0.04).

**Fichier** : `src/index.css` (lignes 104-110)

Changements :
- Augmenter l'opacite du bruit SVG de `0.04` a `0.08` pour `paper-texture-dark` et de `0.06` a `0.12` pour `paper-texture-light`
- Reduire la `baseFrequency` pour obtenir un grain plus large et plus visible, comme du vrai papier (de `0.75` a `0.5` pour dark, de `0.65` a `0.45` pour light)
- Ajouter un leger gradient radial blanc/transparent en overlay pour simuler l'eclairage naturel du papier

Ces changements s'appliquent a toutes les sections qui utilisent deja `paper-texture-dark` et `paper-texture-light`, donc la coherence est preservee sur toute la page.

---

## Fichiers modifies

| Fichier | Modification |
|---|---|
| `src/components/landing/HeroSection.tsx` | SVG du logo LinkedIn : couleurs officielles bleu/blanc |
| `src/index.css` | Textures paper-texture-dark et paper-texture-light : grain plus visible et plus organique |

