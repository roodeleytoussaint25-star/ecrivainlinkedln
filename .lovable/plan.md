
# Pivot landing page : Sprint Visibilité

Réécriture **texte uniquement** de toutes les sections pour la nouvelle offre **Sprint Visibilité** : Done-For-You, 30 jours, 100% async, 197€, 3 places.

Aucun changement de structure, design, images, couleurs ou animations.

---

## Cohérence "16 posts" vs "4 posts"

Le Hero annonce **16 posts** (total livré sur 30 jours = 4 posts/semaine × 4 semaines). Les autres sections gardent "4 posts" en parlant du rythme hebdo. J'ajusterai le sous-titre du Hero et les sections Vehicle/Logistics/Investment pour clarifier : **"16 posts (4 par semaine)"** afin d'éliminer toute incohérence.

---

## Fichiers modifiés

### 1. `src/components/landing/HeroSection.tsx`
- Badge : `LinkedIn Done-For-You · 30 jours`
- Titre : `Ton profil optimisé et 16 posts prêts à publier en 30 jours`
- Sous-titre 1 : `Un système clé-en-main où je crée tout à ta place. Positionnement, profil, posts et visuels. Toi, tu valides et tu publies.`
- Sous-titre 2 : `Pas de coaching. Pas d'appels. Tu reçois les livrables, tu choisis, tu postes.`
- CTA primaire : `Obtenir ma place` (lien vers `#investissement`)
- CTA secondaire : `Voir le programme` (inchangé)

### 2. `src/components/landing/InvitationSection.tsx`
- Titre + 3 cartes (profil, publication, temps) + highlight box selon brief

### 3. `src/components/landing/ProofSection.tsx`
- Titre `400 000 impressions en 14 jours`
- 3 textes (menuisier, coach) + citation + stats `400K / 14 jours / 2 clients testés`

### 4. `src/components/landing/VehicleSection.tsx`
- Titre : `3 livrables. 1 système. 30 jours.`
- 3 méthodes : Positionnement™ / Profil™ / Contenu™ (4 posts/semaine = 16 au total)
- Section bonus remplacée par : `Livraison en moins d'une semaine. Tout en async, sans appel.`

### 5. `src/components/landing/TimelineSection.tsx`
- 5 phases sur 30 jours (J1-3, J4-7, J8-14, J15-21, J22-30)

### 6. `src/components/landing/DisqualificationSection.tsx`
- Titre + 6 points de disqualification

### 7. `src/components/landing/LogisticsSection.tsx`
- Format async / Durée 30j / Trello-Notion / 4 inclusions (questionnaire, profil 3 versions, 16 posts avec visuels, calendrier)

### 8. `src/components/landing/InvestmentSection.tsx`
- Prix : `197€` (paiement unique)
- 5 inclusions (positionnement, profil, 16 posts, calendrier, livraison < 30j)
- Suppression des bonus
- Justification : `3 places disponibles pour ce lancement. Prix qui augmente après.`

### 9. `src/components/landing/FAQSection.tsx`
- 6 questions/réponses selon brief (durée, async, profil de départ, prix 197€, après 30j, ajustements)

### 10. `src/components/landing/AboutSection.tsx`
- 3 paragraphes Toussaint (cas client, Système LWAI, ouverture 3 places)

### 11. `src/components/landing/CTASection.tsx`
- Titre : `30 jours pour sortir du flou.`
- Sous-titre : `3 places disponibles. 197€. Paiement unique.`
- CTA : `Obtenir ma place` + `Contacter par DM`
- Footer : `© 2026 Toussaint Roodeley · Sprint Visibilité`

### 12. `index.html`
- Meta `<title>` : `Sprint Visibilité · Ton LinkedIn Done-For-You en 30 jours`
- Meta description alignée sur la nouvelle offre

---

## Hors scope

- Aucun changement de structure JSX
- Aucun changement CSS/Tailwind/animations
- Aucune modification d'images ou d'assets
- Pas de logique nouvelle (liens CTA pointent vers les ancres existantes)
