

# Rafraichissement des couleurs pour un look premium et minimaliste

## Probleme actuel
Presque toutes les sections utilisent des fonds tres sombres (`navy-deep` a 20% de luminosite, `navy` a 33%). Le resultat est un effet "tunnel sombre" qui manque de contraste et de respiration entre les sections.

## Strategie
Eclaircir la palette globale, alterner entre sections sombres et claires, et ajouter de la subtilite dans les degrades pour un rendu premium aere.

## Changements prevus

### 1. Palette de couleurs (src/index.css)
- `--navy` : passer de 33% a 38% de luminosite (plus clair, plus bleu elegant)
- `--navy-deep` : passer de 20% a 15% (garder sombre mais plus profond et riche pour le hero uniquement)
- Ajouter `--navy-mid` a 28% pour les sections intermediaires
- `--gold` : legere augmentation de luminosite (55%) pour plus d'eclat
- `--grey-light` : rester a 95-97% pour les sections claires

### 2. Alternance des fonds de section (chaque fichier section)
Creer un rythme clair/sombre plus equilibre :
- **Hero** : reste navy-deep (la seule section vraiment sombre) avec aurora
- **Invitation** : passer a un fond navy plus clair (38%) avec un leger degrade vers le haut
- **Proof** : fond navy-mid (28%) au lieu de navy-deep -- plus lisible
- **Vehicle** : fond navy clair (38%)
- **Timeline** : reste clair (grey-light) -- ok
- **Disqualification** : navy-mid (28%) au lieu de navy-deep
- **Logistics** : reste clair (grey-light) -- ok
- **Investment** : navy-deep mais avec un degrade subtil vers navy-mid
- **CTA** : navy avec degrade
- **Footer** : navy-deep

### 3. Ameliorations visuelles par section
- Augmenter l'opacite du texte secondaire de `white/50-60` a `white/65-75` pour plus de lisibilite
- Bordures de cartes : passer de `white/10` a `white/12-15` pour plus de definition
- Fonds de cartes : passer de `white/5` a `white/8` pour plus de contraste
- Ajouter des degrades subtils entre les sections pour eviter les coupures brutes

### 4. Tailwind config (tailwind.config.ts)
- Ajouter la couleur `navy-mid` dans la config

## Fichiers modifies
- `src/index.css` -- nouvelles variables CSS
- `tailwind.config.ts` -- ajout navy-mid
- `src/components/landing/InvitationSection.tsx` -- fond eclairci
- `src/components/landing/ProofSection.tsx` -- fond eclairci + opacites
- `src/components/landing/VehicleSection.tsx` -- fond eclairci
- `src/components/landing/DisqualificationSection.tsx` -- fond eclairci
- `src/components/landing/InvestmentSection.tsx` -- degrade
- `src/components/landing/CTASection.tsx` -- degrade
- `src/components/landing/HeroSection.tsx` -- ajustements mineurs d'opacite texte

## Details techniques
- Ajout de `--navy-mid: 224 60% 28%` dans les variables CSS root
- Ajout de `navy-mid` dans `tailwind.config.ts` sous `colors.navy`
- Remplacement des classes `bg-navy-deep` et `bg-navy` selon la nouvelle alternance
- Augmentation systematique des opacites texte (`white/50` vers `white/65`, `white/60` vers `white/75`)
- Augmentation des opacites de bordure (`white/10` vers `white/15`)
- Augmentation des fonds de carte (`white/5` vers `white/8`)

