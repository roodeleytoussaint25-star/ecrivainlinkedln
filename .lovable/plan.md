

# Refonte Complete de la Page de Vente -- "20 Pas sur 20 Jours"

Ce projet est une refonte majeure. Pour eviter les erreurs et garder le controle, je recommande de proceder par etapes (chaque etape = 1 a 2 messages).

---

## Vue d'ensemble des changements

### 1. Identite visuelle et fond

**Polices d'ecriture** (atypiques et modernes) :
- Titres : remplacer Space Grotesk par **Playfair Display** (serif elegant, atypique)
- Body : garder Inter ou passer a **DM Sans** (plus moderne)
- Mise a jour dans `index.css` (Google Fonts import), `tailwind.config.ts` (fontFamily)

**Fond "papier grave"** :
- Remplacer les fonds navy solides par une texture papier subtile via CSS (`background-image` avec un pattern SVG ou une texture CSS)
- Appliquer un fond clair texture sur les sections claires, et un fond sombre texture sur les sections sombres
- Fichiers : `src/index.css`, sections individuelles

**Icone LinkedIn recurrente** :
- Ajouter un petit logo LinkedIn (via Lucide `Linkedin`) dans les badges, headers ou coins de sections pour renforcer l'association avec la plateforme

### 2. Restructuration du contenu -- Nouveau positionnement

**Nom du cours** : "20 Pas sur 20 Jours"

**Probleme specifique cible** : Les gens bloques par trop de possibilites avec l'IA, qui veulent faire quelque chose d'aligne avec eux-memes au lieu de rester au stade 0.

**Nouveau positionnement du produit** :
- Le produit principal = le coaching 1:1 pendant 20 jours (exercices a faire, suivi quotidien)
- Les 3 phases (Amont, Pratique, Aval) deviennent des **methodes proprietaires packagees** avec mockups
- Les frameworks/tangibles deviennent des **bonus** inclus dans le programme

### 3. Modifications section par section

#### A. Hero Section (`HeroSection.tsx`)
- Mettre a jour le titre avec le nouveau nom "20 Pas sur 20 Jours"
- Ajouter l'icone LinkedIn dans le badge
- Adapter le sous-titre au nouveau probleme (bloques par l'IA, alignement personnel)
- **Mobile** : faire apparaitre les images de posts dans un mockup telephone (cadre iPhone) au lieu de la galerie inclinee
- Fichier : `src/components/landing/HeroSection.tsx`

#### B. Section Blocages/Invitation (`InvitationSection.tsx`)
- Recentrer les 3 cartes sur le probleme specifique : trop de possibilites avec l'IA, rester au stade 0, vouloir etre aligne
- Fichier : `src/components/landing/InvitationSection.tsx`

#### C. Section Preuve (`ProofSection.tsx`)
- Deja mise a jour -- conserver tel quel ou ajuster legalement le texte au nouveau positionnement

#### D. Section Vehicule (`VehicleSection.tsx`) -- Refonte majeure
- Transformer les 3 phases en **methodes proprietaires** avec noms de marque
- Chaque phase = une "methode" avec un mockup visuel (placeholder image ou illustration CSS)
- Les items (frameworks) deviennent des **bonus** listes separement
- Design : cartes horizontales avec image a gauche, contenu a droite
- Fichier : `src/components/landing/VehicleSection.tsx`

#### E. Section Timeline (`TimelineSection.tsx`)
- Adapter au nouveau format "20 Pas" -- montrer la progression pas a pas
- Fichier : `src/components/landing/TimelineSection.tsx`

#### F. Section Investissement (`InvestmentSection.tsx`)
- Prix actuel : 100EUR -- a confirmer si ca change
- Ajouter un bloc d'explication : "Pourquoi ce prix est si bas" -- c'est un test, le prix sera 150x plus eleve apres
- Repositionner les frameworks comme bonus dans la liste "inclus"
- Fichier : `src/components/landing/InvestmentSection.tsx`

#### G. Nouvelle section : FAQ
- Creer `src/components/landing/FAQSection.tsx`
- Questions typiques : duree, format, prerequis, remboursement, apres les 20 jours, etc.
- Design : accordion sur fond clair

#### H. Nouvelle section : Qui suis-je
- Creer `src/components/landing/AboutSection.tsx`
- Photo + bio de Toussaint Roodeley
- Placer en fin de page avant le CTA final
- Design : layout 2 colonnes (photo + texte)

#### I. Section CTA (`CTASection.tsx`)
- Mettre a jour avec le nouveau nom du programme
- Fichier : `src/components/landing/CTASection.tsx`

### 4. Images de l'offre en action
- Ajouter des screenshots/mockups de l'offre en action a des endroits strategiques (section vehicule, preuve, investissement)
- Les images seront des placeholders que tu pourras remplacer par tes vrais mockups

### 5. Adaptation mobile
- Hero : mockup telephone avec les posts LinkedIn a l'interieur
- Toutes les sections : verifier le responsive
- Fichier : toutes les sections + `src/index.css`

### 6. Mise a jour de la structure de page (`Index.tsx`)
Nouvel ordre des sections :
```text
1. Hero (nouveau titre + mockup mobile)
2. Invitation/Blocages (nouveau probleme)
3. Preuve (vision)
4. Vehicule (methodes proprietaires + bonus)
5. Timeline (20 pas)
6. Disqualification
7. Logistique
8. Investissement (+ explication prix bas)
9. FAQ (nouveau)
10. Qui suis-je (nouveau)
11. CTA final
```

---

## Ordre d'implementation recommande

Vu l'ampleur, voici l'ordre que je suggere (etape par etape) :

| Etape | Description | Fichiers |
|-------|-------------|----------|
| 1 | Polices + fond texture papier + icone LinkedIn | `index.css`, `tailwind.config.ts`, `index.html` |
| 2 | Hero : nouveau titre, probleme, mockup mobile | `HeroSection.tsx` |
| 3 | Section Blocages : nouveau probleme cible | `InvitationSection.tsx` |
| 4 | Section Vehicule : methodes proprietaires + bonus | `VehicleSection.tsx` |
| 5 | Section Investissement : explication prix + bonus | `InvestmentSection.tsx` |
| 6 | Nouvelles sections : FAQ + Qui suis-je | `FAQSection.tsx`, `AboutSection.tsx`, `Index.tsx` |
| 7 | Adaptation mobile complete | Toutes les sections |

Chaque etape sera un message separement pour garder le controle et verifier le rendu avant de passer a la suite.

---

## Details techniques

- **Polices** : Ajout de Playfair Display via Google Fonts CDN dans `index.css`, mise a jour de `fontFamily.display` dans `tailwind.config.ts`
- **Fond texture** : Pattern SVG inline en CSS (`background-image: url("data:image/svg+xml,...")`) pour simuler un effet papier grave
- **Mockup telephone** : Conteneur CSS avec `border-radius`, `border`, et `box-shadow` pour simuler un cadre iPhone, avec les images de posts a l'interieur en carousel ou stack
- **FAQ** : Composant accordion existant reutilise (`@radix-ui/react-accordion`)
- **About** : Layout simple flex/grid 2 colonnes avec placeholder image

