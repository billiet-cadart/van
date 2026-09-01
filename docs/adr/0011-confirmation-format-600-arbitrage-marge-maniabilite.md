# Confirmation du format 600 (L3H2) — pas une obligation des 4 places, un arbitrage marge/maniabilité

## Contexte

L'[ADR-0003](0003-cible-fourgon-600-4-places.md) fixait le format « 600 » (L3H2, ~5,99 m) en
expliquant que la contrainte 4 places carte grise l'imposait de fait (« FERME »), par comparaison
avec les vans courts et **étroits** (Trafic/T6/Jumpy, ≤5,4 m, homologués 3 places). Cette
comparaison n'a jamais testé un porteur **large mais plus court** que le L3H2 — le L2H2, même
plateforme Ducato/Boxer/Jumper (X250/X290).

Question posée le 1er septembre 2026 : faut-il élargir la recherche aux formats plus longs que
L3 (L4H2 et au-delà) ? Ça a mené à tester aussi la question inverse — un format plus court
suffirait-il ? Détail chiffré et sources → [recherche-marche-sieges.md](../recherche-marche-sieges.md).

## Décision

Le format 600 (L3H2) est confirmé comme cible, mais la raison change :

- **L4H2 écarté** : même largeur intérieure que L3H2 (1870 mm / 1422 mm entre passages de roue —
  identique du L1 au L4 sur cette plateforme), pour seulement +37 cm de longueur utile (4070 mm
  contre 3705 mm). Se conduit nettement moins bien (braquage 15,30 m contre 14,30 m, ressenti
  terrain unanimement négatif sur les forums d'aménagement).
- **L2H2 écarté** : légalement viable pour les 4 places — un précédent réel existe (Boxer L2H2
  converti et homologué 4 places, banquette Schnierle SL3). **La contrainte 4 places n'impose donc
  pas le 600**, contrairement à ce que disait l'ADR-0003. Mais le L2H2 offre 585 mm de longueur
  utile en moins (3120 mm contre 3705 mm), et ce même précédent décrit un agencement « au
  centimètre », avec tension entre la banquette et le coin cuisine — jugé trop juste pour
  l'implantation retenue (lit fixe + banquette-lit + circulation + cuisine, ADR-0009).
- **Le L3H2 reste donc la cible**, choisi comme point d'équilibre entre marge d'implantation et
  maniabilité au quotidien — pas parce qu'un format plus court serait interdit.

## Pourquoi

- Sur cette plateforme, longueur et largeur sont indépendantes : aller plus long n'élargit rien,
  aller plus court ne change rien à l'homologation des places. Le seul vrai arbitrage est la
  marge d'implantation (longueur utile) contre la maniabilité (braquage, ressenti de conduite).
- Le L4H2 perd sur les deux tableaux à la fois (peu de gain de longueur, nette perte de
  maniabilité) : écarté sans ambiguïté.
- Le L2H2 gagne en maniabilité mais perd trop en marge d'implantation, au vu du seul retour
  d'expérience concret trouvé sur un montage équivalent : écarté par prudence, pas par obligation
  légale — décision de la famille, pas un fait imposé.

## Conséquences

- **Glossaire corrigé** : la définition de « Format 600 » ne dit plus que c'est « le plus court
  qui offre 4 places carte grise » (formulation qui suggérait une obligation qui n'existe pas) —
  voir [GLOSSARY.md](../GLOSSARY.md).
- **L'ADR-0003 reste en l'état** pour la mémoire du raisonnement d'origine (on ne supprime pas),
  mais sa justification « 4 places : FERME → impose le 600 » est **périmée**, remplacée par le
  présent ADR.
- ⚠️ **Point encore ouvert, indépendant du choix de longueur** : le lit fixe transversal arrière
  est *limite* en largeur (1422 mm entre passages de roue, contre 150-160 cm de confort visé) sur
  cette plateforme — et ça ne change pas selon L2/L3/L4 puisque la largeur est identique. Solution
  probable (matelas surélevé au-dessus des passages de roue, rangement dessous) non confirmée pour
  ce porteur — à vérifier, potentiellement en modélisant l'implantation une fois un porteur
  candidat identifié.
- La recherche marché reste concentrée sur le **L3H2** — voir
  [docs/marche/recap-2026-08-31.md](../marche/recap-2026-08-31.md) (18 annonces déjà répertoriées).
  Le **L4H2 secondaire** du même tableau devient hors périmètre (candidats non éliminatoires en
  soi, juste plus recherchés activement). Le **L2H2 n'a pas été recherché et n'a pas à l'être.**
