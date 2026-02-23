
# Remplacer le mot "LinkedIn" par le logo officiel dans les titres et textes

Chaque fois que le mot "LinkedIn" apparait dans un titre, sous-titre ou texte visible, il sera remplace par un composant SVG inline qui affiche le vrai logo LinkedIn (bleu `#0A66C2` avec le "in" dans un rectangle arrondi).

## Composant reutilisable

Creer un composant `LinkedInLogo` dans `src/components/LinkedInLogo.tsx` qui rend le SVG inline, avec une prop `className` pour adapter la taille au contexte (titre grand, texte petit, fond clair ou sombre).

## Occurrences a remplacer

| Fichier | Ligne | Contexte | Texte actuel |
|---|---|---|---|
| `HeroSection.tsx` | 171 | Titre h1 (gold) | "20 posts LinkedIn" |
| `VehicleSection.tsx` | 74 | Paragraphe sous le h2 | "presence LinkedIn authentique" |
| `VehicleSection.tsx` | 14 | Highlight methode | "Profil LinkedIn qui convertit" |
| `InvestmentSection.tsx` | 33 | Sous-titre p | "voix LinkedIn unique" |
| `InvitationSection.tsx` | 48 | Texte paragraphe | "LinkedIn peut transformer" |
| `FAQSection.tsx` | 18 | Question | "profil LinkedIn actif" |
| `AboutSection.tsx` | 43 | Lien | "Voir mon profil LinkedIn" |

## Adaptation visuelle

- Sur fond sombre : le logo reste en bleu `#0A66C2` (il ressort bien)
- Sur fond clair : idem, le bleu officiel fonctionne sur blanc/gris
- La hauteur du SVG s'adapte a la taille du texte environnant via `className` (ex: `h-6` dans un h1, `h-4` dans un paragraphe)
- Le SVG est aligne verticalement au milieu du texte avec `inline-block align-middle`

## Fichiers modifies

| Fichier | Modification |
|---|---|
| `src/components/LinkedInLogo.tsx` | Nouveau composant SVG reutilisable |
| `src/components/landing/HeroSection.tsx` | Remplacer "LinkedIn" par le composant logo |
| `src/components/landing/VehicleSection.tsx` | 2 remplacements |
| `src/components/landing/InvestmentSection.tsx` | 1 remplacement |
| `src/components/landing/InvitationSection.tsx` | 1 remplacement |
| `src/components/landing/FAQSection.tsx` | 1 remplacement |
| `src/components/landing/AboutSection.tsx` | 1 remplacement |
