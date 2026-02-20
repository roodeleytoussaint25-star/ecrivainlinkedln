

# Refonte du texte de la section Preuve -- Vision du jeu

## Objectif
Remplacer le contenu textuel de la section Preuve pour expliquer la vision du "jeu" : pourquoi la creation de contenu est sur-compliquee aujourd'hui, et pourquoi l'objectif des premieres annees est d'apprendre, pas de gagner. Supprimer le petit titre "La Preuve" au-dessus du H2.

## Changements prevus

### Suppression
- Retirer le `<span>` "La Preuve" (ligne 18-20)

### Nouveau titre H2
- "On complique toujours la creation de contenu" avec "creation de contenu" en gold

### Nouveau contenu textuel (bloc gauche)
Remplacer les 2 paragraphes actuels par le message de vision structure :

1. **Paragraphe 1** : Le role du contenu est simple -- partager nos valeurs pour qu'on ait envie de travailler avec nous.

2. **Paragraphe 2** : Le probleme aujourd'hui -- la majorite des contenus cherchent a plaire au maximum de monde. C'est pire avec les LLM qui generent les idees a la place des gens.

3. **Paragraphe 3** : Les gens parlent avant de faire. Beaucoup tentent de devenir des grands createurs sans avoir eu leur premier client.

4. **Citation/accroche forte** : "L'objectif des premieres annees est d'apprendre, pas de gagner." -- en style citation avec bordure gold a gauche ou en texte gold mis en valeur.

### Conservation
- Les mini-stats (20 jours, 20+ posts, 5 beta-testeurs) restent en place
- Les widgets droite (barres de progression + calendrier) restent intacts
- Le layout grid 2 colonnes reste identique

## Fichier modifie
- `src/components/landing/ProofSection.tsx` -- mise a jour du texte uniquement

## Details techniques
- Suppression de la ligne `<span className="text-gold...">La Preuve</span>`
- Remplacement du H2 et des paragraphes dans le bloc `observe-section` gauche
- Ajout d'un `<blockquote>` ou `<p>` style avec `border-l-2 border-gold pl-4` pour la citation finale
- Aucun changement sur les widgets, les stats ou le layout

