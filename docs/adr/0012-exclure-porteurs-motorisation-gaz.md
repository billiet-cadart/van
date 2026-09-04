# Exclure les porteurs à motorisation gaz (GNV / GNC / GPL)

## Contexte

La revue des annonces du 4 septembre 2026 a fait apparaître un cas que la grille de tri ne
traitait pas : **3234530816** (Ducato L3H2 2019, 44 142 km, 20 000 €) est un **GNC — gaz naturel
comprimé, avec un simple réservoir d'essence de 20 L pour le démarrage**. Il était retenu comme
candidat, et même en tête sur un critère devenu important : c'est l'une des deux seules annonces
du dossier déclarant **2 places avant** ([ADR-0006](0006-config-porteur-nu-sieges-cabine.md),
confirmé par la DREAL 38 → [dossier-dreal-38.md](../dossier-dreal-38.md) § 1 bis).

La motorisation gaz n'avait jamais été discutée : ni retenue, ni écartée. Le champ « Énergie » des
annonces est passé au crible sur les 68 pages archivées — **deux véhicules concernés**, plus un
faux positif (voir Conséquences).

## Décision

**Les porteurs à motorisation gaz — GNV, GNC, GPL, bicarburation essence/gaz — sont écartés.**
C'est un critère **éliminatoire**, au même rang que le format et le plafond de prix : il s'applique
au tri des annonces déjà archivées **et à tous les téléchargements à venir**.

⚠️ **Le critère porte sur la motorisation du porteur, pas sur le gaz de l'aménagement.** Une
bouteille ou un réservoir GPL alimentant la cuisine et le chauffage reste la voie retenue
([ADR-0010](0010-cuisine-chauffage-gaz.md)) — c'est le carburant du moteur qui est visé, rien
d'autre.

## Pourquoi

- 🔴 **Conflit direct avec le layout.** Sur ces véhicules, les réservoirs de gaz sont logés **sous
  le châssis et sous le plancher**, c'est-à-dire exactement là où doivent passer les **ancrages et
  les renforts de la banquette-lit homologuée** exigée par l'[ADR-0009](0009-layout-lit-fixe-banquette-lit.md).
  Percer un plancher au-dessus d'un réservoir sous pression n'est pas un ajustement d'installation,
  et aucun installateur ne le prendra à la légère. ⚠️ L'emprise exacte des réservoirs sur un Ducato
  GNC n'a **pas** été relevée sur plan — c'est un risque identifié, pas une cote mesurée ; mais
  c'est précisément le genre d'inconnue qu'on n'a pas envie de découvrir après l'achat.
- **Deux installations gaz sur le même véhicule à justifier au dossier VASP.** Le projet prévoit
  déjà une installation gaz de cuisine certifiée (EN 1949, Qualigaz/Bureau Veritas — ADR-0010).
  Ajouter une motorisation gaz, c'est empiler une seconde chaîne de conformité sur un dossier
  DREAL déjà chargé, sans rien gagner sur l'usage.
- **Réseau d'avitaillement peu compatible avec l'usage visé.** Les stations GNV/GNC sont rares et
  concentrées sur les axes de fret, pas sur les itinéraires de vacances ; la réserve d'essence de
  démarrage (20 L sur l'annonce vue) n'est pas une autonomie de secours. Le van est fait pour
  voyager en famille, pas pour tourner autour d'un dépôt. ⚠️ Nombre et maillage exacts des stations
  non relevés — ordre de grandeur, pas chiffre vérifié.
- **Entretien et revente plus étroits** : moins de garages compétents, et des réservoirs soumis à
  requalification périodique. ⚠️ Périodicité et coût non vérifiés à ce stade.
- Le seul avantage réel — un **Crit'Air 1** au lieu de 2, utile face à la ZFE grenobloise
  ([zfe-grenoble.md](../zfe-grenoble.md)) — ne compense aucun des points ci-dessus, d'autant que
  le projet obtiendra de toute façon une dérogation VASP.

📌 **Ce que cette décision ne dit pas** : elle n'a pas été prise sur une analyse comparative
demandée à l'avance, mais sur une consigne directe une fois le cas GNC apparu. Les raisons
ci-dessus sont celles que le dossier documente ; si le motif réel de la famille est différent (ou
plus large), c'est ici qu'il faut le compléter.

## Conséquences

- **3234530816 est retiré des candidats actifs** (37 au lieu de 38). ⚠️ Conséquence sèche à
  assumer : il ne reste plus qu'**une seule annonce en 2 places avant** dans tout le dossier —
  3230965149 — alors que ce critère vient d'être confirmé comme le plus rentable
  administrativement. Le tri sur les 27 annonces dont le champ « places » est vide devient d'autant
  plus utile.
- **3226785978** (Ducato **L4H2** 3.0 GNV 140, 9 990 €) était déjà écarté le 1er septembre pour son
  format L4 ([ADR-0011](0011-confirmation-format-600-arbitrage-marge-maniabilite.md)) ; il l'est
  désormais **deux fois**, et la seconde raison suffirait seule.
- **3251700006** est un faux positif à ne pas confondre : son « réservoir GPL sous châssis 40 L »
  alimente le Truma de l'aménagement, pas le moteur. Il reste écarté pour son prix (98 900 €) et
  son aménagement complet, pas pour ce motif.
- **Critère ajouté à la grille de téléchargement** : lire le champ structuré **« Énergie »** de
  chaque annonce (clé `fuel` dans le JSON leboncoin — « Diesel » = valeur `2`, « Gaz Naturel
  (GNV) » = `7`) et écarter tout ce qui n'est pas Diesel. ⚠️ Le champ est parfois vide ou renseigné « Autre » — c'était le cas de 3234530816, dont
  le GNC n'apparaissait que dans le **corps** de l'annonce. **Chercher aussi les mots `GNV`, `GNC`,
  `CNG`, `gaz naturel`, `GPL`, `bicarburation` dans le texte**, pas seulement dans les champs.
- Le [récapitulatif marché](../marche/recap-2026-08-31.md) porte le détail du comptage et la liste
  des annonces concernées ; la grille de tri complète est dans
  [marche/README.md](../marche/README.md).
- **Étendu le même jour aux porteurs électriques** par l'[ADR-0013](0013-exclure-porteurs-electriques.md),
  sur la même logique et par la même consigne.
