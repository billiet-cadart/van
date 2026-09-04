# Diesel uniquement — le critère carburant est clos

## Contexte

Trois décisions successives du 4 septembre 2026 ont fermé les carburants un par un : le gaz
([ADR-0012](0012-exclure-porteurs-motorisation-gaz.md)), puis l'électrique
([ADR-0013](0013-exclure-porteurs-electriques.md)). Restait l'**essence**, sur laquelle rien
n'avait été décidé — et que la grille de tri excluait pourtant en silence, par une formule
« diesel uniquement » écrite sans mandat.

La question posée était : *un fourgon essence, ça existe seulement sur ces modèles ?* Vérification
faite :

- Sur **Ducato / Boxer / Jumper**, la gamme essence se limite à un **3.0 V6 ~166 ch** développé pour
  le marché **nord-américain** (camping-cars sur base RAM ProMaster), **non commercialisé en
  Europe**, avec une consommation annoncée de **13 à 15 L/100 km**.
- Le moteur des versions **Natural Power / GNV est lui-même un bloc essence**, avec un petit
  réservoir d'essence de démarrage. C'est ce qui explique la mention « GNC + démarrage essence » de
  l'annonce 3234530816, écartée par l'ADR-0012.
- Sur **Ford Transit**, l'essence en France se concentre sur les petits gabarits (Transit Courier
  1.0 EcoBoost, Transit Connect hybride rechargeable), pas sur le L3H2.

## Décision

**Le porteur sera diesel. Tout autre carburant est éliminatoire** — essence, GNV/GNC/GPL/
bicarburation, électrique, hybride.

Cet ADR **remplace** la formulation par exclusions successives : la grille de tri ne pose plus
trois interdits, elle pose **un critère positif unique**, `fuel = Diesel`.

## Pourquoi

- **Rien à perdre** : l'essence n'existe pas sur ce segment en Europe. Le critère ne retire aucun
  candidat du dossier (37 actifs, inchangé) et n'en retirera quasiment jamais.
- **La seule essence qu'on pourrait croiser est le V6 nord-américain**, à 13-15 L/100 km — sur un
  van familial destiné à voyager loin et chargé, c'est disqualifiant sans autre débat.
- **Une règle positive vaut mieux que trois interdits** : « le carburant doit être Diesel » ne se
  contourne pas, là où une liste d'exclusions laisse toujours passer le cas non prévu (hybride,
  bicarburation exotique, import).
- Les motifs propres au gaz et à l'électrique restent valables et détaillés dans leurs ADR
  respectifs — cet ADR ne les remplace pas, il les chapeaute.

## Conséquences

- **Aucun candidat retiré** : le dossier reste à **37 candidats actifs**.
- La grille de [marche/README.md](../marche/README.md) et le prompt de recherche portent désormais
  « diesel uniquement », sans liste d'exceptions à maintenir.
- ⚠️ **Le contrôle sur le texte de l'annonce reste nécessaire, et pour une raison inversée.** Avant,
  il servait à repérer une essence ou un GNV. Maintenant que tout se ramène à « Diesel ou rien », le
  vrai risque est le **faux positif** : une annonce qui affiche « Diesel » (ou « Autre », comme le
  GNC de 3234530816) alors que le véhicule ne l'est pas. Vérifier le corps de l'annonce reste donc
  la règle — chercher `GNV`, `GNC`, `CNG`, `gaz naturel`, `GPL`, `bicarburation`, `100 % électrique`,
  `kWh`.
- ⚠️ Ne jamais trier sur le mot **« électrique »** seul : il ressort dans **29 des 68 annonces**
  archivées sans jamais désigner une traction (vitres, rétroviseurs, packs, kits solaires).
- 📌 Codes `fuel` leboncoin relevés : `1` = Essence, `2` = **Diesel**, `7` = Gaz Naturel (GNV).
