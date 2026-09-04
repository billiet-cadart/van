# Vérification des affirmations du dossier (2 septembre 2026)

Note de contrôle, pas une décision. Relecture de l'ensemble des documents du dépôt, puis
vérification une par une des affirmations chiffrées et réglementaires **contre les sources
primaires** quand elles existent (fiches constructeur, annexe officielle du code de la route,
fiche technique fabricant), contre des sources secondaires sinon.

Ce document dit ce qui est **confirmé**, ce qui est **corrigé**, et ce qui **n'a pas pu être
vérifié depuis cette session**. Les corrections ont été reportées dans les documents concernés
dans la même passe (ADR-0003, ADR-0011, dimensions-l3h2, recherche-marche-sieges, recap marché,
README, glossaire).

---

## ✅ Confirmé sur source primaire

### Cotes Sevel Sud (Ducato / Boxer / Jumper) — fiche constructeur Citroën, avril 2010

Le bloc § 1 de [dimensions-l3h2.md](dimensions-l3h2.md) est **exact ligne par ligne**. Relevé
directement dans la fiche : longueurs de fourgon L1/L2/L3/L4 = 4 963 / 5 413 / 5 998 / 6 363 mm,
largeur entre flancs 2 050, rétroviseurs 2 508 / 2 690 / 2 770, H2 = 2 524, empattement L3/L4
= 4 035, porte-à-faux avant 948, longueur de chargement 3,705 m, largeur entre flancs 1,87 m,
entre passages de roue 1,422 m, hauteur de chargement 1,932 m, volume 13 m³, portes arrière
1,562 × 1,79 m, porte latérale 1,25 × 1,755 m (et 1,075 × 1,485 m sur L1), masse à vide
1 960–2 025 kg, MTAC 3 300 / 3 500, charge utile 1 275–1 540 kg, essieux 1 750–1 850 /
1 900–2 000 kg.

Confirmés aussi, et utiles :

- **Charge admissible sur le toit : 200 kg — mais seulement à partir du L3.** Les L1 et L2 sont
  à **150 kg**. Le chiffre de 200 kg est donc bien celui du porteur cible, pas une valeur de
  gamme.
- **Cabine approfondie 35 L3H2** : 6 ou 7 places, 2,660 m de longueur de chargement, 9,4 m³,
  masse à vide 2 160 kg. L'écart de −1 045 mm et le « ~200 kg de plus » du document sont exacts.
- Le porteur existe **de série en « 3 ou 2 places avant »** sur toutes les versions L1→L4 — la
  fiche l'écrit noir sur blanc (« 3 ou 2 av. », siège passager avec accoudoir en option
  gratuite). Ça confirme le socle de l'[ADR-0006](adr/0006-config-porteur-nu-sieges-cabine.md) :
  remplacer une banquette passager par un siège individuel, c'est passer d'une config d'usine à
  une autre.

### Renault Master L3H2 — brochure constructeur, juillet 2023

Le § 2 de [dimensions-l3h2.md](dimensions-l3h2.md) est **exact** : longueur utile 3 733 mm,
largeur utile 1 765 mm, entre passages de roue 1 380 mm, hauteur utile 1 894 mm (1 798 mm en
propulsion), volume 13 m³, seuil 543/557 mm, garde au sol 172 mm, porte latérale 1 270 × 1 780,
portes arrière 1 580 × 1 820, MVODM 2 066/2 073 kg, charge utile 1 441 kg, longueur hors tout
6 225 mm (869 + 4 332 + 1 024), hauteur 2 488 mm, largeur 2 070 / 2 470 mm.

⚠️ Une réserve de forme : la brochure Renault intitule ces valeurs **« rayon de braquage »**
(15,7 / 16,2 m) alors que ce sont manifestement des **diamètres** (12,0 m annoncés sur un L1H1 de
5,07 m ne peuvent pas être un rayon). La comparaison du document avec les 14,14 m « entre
trottoirs » de la fiche Citroën compare donc bien deux diamètres — l'écart de +1,6 m au
détriment du Master est réel.

### Ford Transit L3H2 — table Vehikit (données constructeur)

Le § 3 est **exact** : 5 981 mm hors tout, empattement 3 750, longueur de chargement 3 494,
largeur 1 784, entre passages de roue 1 392, hauteur de chargement 1 886 (traction) / 1 786
(propulsion), hauteur hors tout 2 541 / 2 543, volume 11,5 / 11 m³.

À ajouter au passage : **charge admissible sur le toit 190 kg** (contre 200 kg au Sevel), et la
version **traction existe bien en L3H2** — la table la liste.

### Banquette Scopema Altaïr 3P — plan coté fabricant, juillet 2025

Le § 1 bis est **exact, y compris les cotes lues sur le plan** : couchages 1 790 / 1 860 /
1 940 mm, largeurs 600 / 860-940-1040-1120-1200 / 1200-1290-1400-1500 mm, débord de ceinture
25 mm par côté, assise 560, dossier 650, 2ᵈ dossier 580 / 650 / 730, hauteurs d'assise 289 /
399 / 499 mm, module de rails 1 150 mm / 8 kg, planchers de 19 à 34 mm, glissières 220 / 220 mm.
La décomposition 540 + 785 + 610 = 1 935 ≈ 1 940 est cohérente avec le plan.

Équipements de série confirmés : ceintures 3 points intégrées, **Isofix Top Tether**, blocage
automatique du dossier en position route, appuis-tête intégrés (de série sur la version rails
fixes ; en option sur l'autre version de la gamme). Brevet EP-B-2 121 377, fabrication française.

### Réglementaire

- **Frais de présentation DREAL (RTI) : 86,90 €** — confirmé, montant national fixé par arrêté,
  identique dans toutes les régions.
- **Directive (UE) 2025/2205** (permis B à 4,25 t pour les camping-cars) : publiée au JOUE le
  **5 novembre 2025**, entrée en vigueur le 25 novembre 2025, **non transposée en France**.
  Le glossaire disait juste.
- **VASP obligatoire dès qu'il y a des éléments fixes** : confirmé, et la base légale a été
  retrouvée — la définition européenne de l'autocaravane (règlement (UE) 2018/858, annexe I
  point 5.1) exige **sièges + table, couchage, équipement de cuisson et rangements, fixés à
  demeure**. Le layout de l'[ADR-0009](adr/0009-layout-lit-fixe-banquette-lit.md) coche les
  quatre. Le VASP est donc bien obligatoire, et le choix gaz/électrique n'y change rien : une
  plaque à induction est un « équipement de cuisson » au même titre qu'un réchaud gaz.
- **Malus écologique sur transformation VU → véhicule de tourisme** : le risque signalé par
  l'ADR-0009 est réel et daté — il s'applique depuis le **1er juillet 2020**. Le plafond du malus
  CO2 est de **80 000 € en 2026** (seuil de déclenchement abaissé à 108 g/km). Les autocaravanes
  « VASP caravane » relèvent d'un régime particulier : viser le VASP complet est bien la parade,
  comme le disait l'ADR.
- **Norme de place de parking** : NF P91-100 / NF P91-120, minimum **5,00 m × 2,30 m** — exact.
  ⚠️ Précision qui manquait et qui compte davantage : cette norme ne couvre que les véhicules
  **de moins de 1,90 m de haut**. Un H2 à 2,52 m est hors de son champ — le vrai obstacle n'est
  pas la longueur de la place mais le **gabarit de hauteur** des parkings couverts.
- **Marché camping-car 2024** (ADR-0001) : occasion **65 710 ventes, −4 %** (68 463 en 2023) —
  exact ; prix moyen des intégraux d'occasion **53 565 € → 48 745 €, −9 %** — exact. À noter en
  renfort de l'argument : dans le même temps le **neuf a progressé de +17 %** (11 623
  immatriculations), ce qui confirme la « suroffre de neuf » invoquée.

### Sièges avant pivotants

Confirmé, et un peu mieux qu'annoncé : les embases pivotantes homologuées pour siège avant
d'origine existent en **206–280 € TTC** (RIB/Scopema, réf. 640017/640018) — soit sous la
fourchette de 200-400 €/siège du document — pour **Ducato / Boxer / Jumper X250 (2006-2014) et
X290 (2014-2026)**, plus Opel Movano X290 (2021+) et Toyota ProAce Max (2023+).

L'impossibilité sur banquette est confirmée mot pour mot par le fabricant : *« il n'est pas
possible d'installer une embase tournante si votre véhicule est équipé d'une banquette avant »*.

Trouvaille utile en plus : un revendeur documente explicitement la voie inverse — remplacer la
banquette 2 places par **caisson + glissières + embase pivotante + siège RIB**, donc une voie
« pièce carrossier neuve » à côté de la voie « siège d'origine d'occasion » déjà notée.

⚠️ Le numéro d'homologation **93SG0316-00** cité dans
[recherche-marche-sieges.md](recherche-marche-sieges.md) n'a pas été retrouvé ; la fiche produit
consultée porte la référence **CBTO16G2**. Sans conséquence sur le fond (la pièce est bien
homologuée), mais le numéro exact reste à relever sur le PV de la pièce achetée.

### Banquette Reimo Variotech 3000

Exact : largeur hors tout 1 205 mm, couchage 2 050 × 1 260 mm, entraxe de rails 651 mm, soute
460 mm sous l'assise arrière. Et confirmé : la fiche produit ne liste que des **VW T5/T6** —
aucune mention Ducato/Boxer/Jumper. Le classement « repère de gabarit, pas candidat » tient.

---

## ⚠️ Corrigé

### 🔴 1. Les ZFE ne sont pas abandonnées — et Meylan est dans le périmètre

C'est la correction la plus lourde du lot, parce qu'elle réintroduit un critère de tri que
l'[ADR-0003](adr/0003-cible-fourgon-600-4-places.md) avait explicitement retiré.

L'ADR-0003 écrit : *« la contrainte ZFE / Crit'Air a été retirée — les ZFE sont en cours
d'abandon (mi-2026). Plus de plancher d'âge réglementaire ; le bas du marché (vans anciens) est
de nouveau jouable »*. Ce qui s'est réellement passé :

- La suppression des ZFE a bien été **votée** (Assemblée nationale le 14 avril 2026, Sénat le
  15 avril 2026, dans la loi de simplification de la vie économique)…
- …puis **censurée par le Conseil constitutionnel le 21 mai 2026**, comme cavalier législatif
  (lien insuffisant avec l'objet de la loi). Les ZFE restent en vigueur, et toute remise en cause
  devra passer par un texte dédié.

Et localement :

- **Meylan fait partie des 13 communes de la ZFE grenobloise** pour les voitures particulières et
  deux-roues (avec Grenoble, Échirolles, Eybens, Fontaine, Gières, La Tronche, Pont-de-Claix,
  Saint-Égrève, Saint-Martin-d'Hères, Saint-Martin-le-Vinoux, Seyssinet-Pariset, Seyssins), et
  des 27 communes de la ZFE utilitaires/poids lourds.
- **Crit'Air 3, 4, 5 et non classés sont interdits depuis le 1er janvier 2025**, 7h-19h du lundi
  au vendredi hors jours fériés.
- **Période pédagogique sans verbalisation jusqu'au 30 juin 2027**, tous véhicules confondus.
- **Crit'Air 2 (donc tout le diesel encore autorisé) visé pour juillet 2028** sur les
  utilitaires/poids lourds — reporté une fois déjà (échéance initiale juillet 2025) — et 2030
  annoncé côté véhicules particuliers.

**Ce que ça change concrètement** : le plancher d'âge réglementaire existe toujours. La grille
officielle (annexe 1 des articles L. 318-1 / R. 318-2 du code de la route) donne, pour le diesel
et **identiquement** pour les voitures et les utilitaires légers :

| Classe | Diesel |
|---|---|
| Crit'Air 1 | jamais un diesel |
| **Crit'Air 2** | Euro 5 et 6 — **1ʳᵉ immatriculation à partir du 1er janvier 2011** |
| **Crit'Air 3** | Euro 4 — du 1er janvier 2006 au 31 décembre 2010 |
| Crit'Air 4 | Euro 3 — 2001 à 2005 |
| Crit'Air 5 | Euro 2 |

Deux idées reçues écartées au passage : le diesel ne peut **jamais** être Crit'Air 1, et la
grille utilitaire n'est **pas** décalée d'un cran par rapport à la grille voiture (une source
camping-car l'affirmait — l'annexe officielle dit le contraire). Un porteur passé en VASP garde
donc la classe que lui donne sa norme Euro : le passage en VASP **n'améliore pas** le Crit'Air.

→ Conséquence sur le dossier marché *(recompté le 5 septembre 2026 : **8 sur 74**, sur la date de
1ʳᵉ immatriculation lue dans les annonces archivées et non sur le millésime)* :
**10 des 37 candidats actifs** de l'époque étaient en 1ʳᵉ immatriculation
antérieure à 2011, donc **Crit'Air 3 ou pire** — et ce sont les 10 moins chers (2 800 à
12 800 €). Détail reporté dans [marche/recap-2026-08-31.md](marche/recap-2026-08-31.md).
Et pour un van visé comme **définitif sur 10-15 ans** ([ADR-0008](adr/0008-van-definitif-pas-tremplin.md)),
même un Crit'Air 2 est concerné à l'horizon 2028-2030 : c'est un point à instruire, pas à
supposer résolu.

✅ **Suite donnée le même jour** : le risque encouru en cas de véhicule hors critère a été
instruit à part — sanction, horaires, périmètre, dérogation VASP, mode de contrôle → **[zfe-grenoble.md](zfe-grenoble.md)**.
Résumé : sanction bornée (68 € par infraction, pas de point, aucun effet sur CT/assurance/
possession), ZFE voitures **en semaine 7h-19h seulement** et **sans interdiction de
stationnement**, et **dérogation VASP accordée à Grenoble** — déjà sur la trajectoire du projet.
Reste ouvert : la durée de cette dérogation, et de quel régime relève une autocaravane M1 ici.

### 🔴 2. L'écart de braquage entre L3H2 et L4H2 est de 26 cm, pas d'un mètre

L'[ADR-0011](adr/0011-confirmation-format-600-arbitrage-marge-maniabilite.md) écarte le L4H2 en
partie sur ce chiffre : *« braquage 15,30 m contre 14,30 m »*, attribué à une fiche technique
Stellantis. Les deux valeurs sont fausses.

La fiche constructeur Citroën donne, **diamètre entre trottoirs** :

| Version | Diamètre entre trottoirs |
|---|---|
| 33 / 35 L3H2 | **14,14 m** |
| 4-35 / 4-40 L3H2 | **14,4 m** |
| 4-35 / 4-40 L4H2 | **14,4 m** |

Recoupé sur une fiche technique tierce (Ducato L4H2 2016 160 MultiJet 35) : **14,4 m**,
empattement 4 035 mm, longueur 6 363 mm, longueur intérieure 4 070 mm.

C'est logique, et c'est le point à retenir : **le L3 et le L4 ont le même empattement
(4 035 mm)**. Le L4 n'allonge que le **porte-à-faux arrière**, de 1 015 à **1 380 mm**
(948 + 4 035 + 1 380 = 6 363 ✔). Or le diamètre de braquage dépend de l'empattement, pas du
porte-à-faux arrière. Les 14,4 m contre 14,14 m relèvent d'ailleurs de la version (gamme lourde
4-35/4-40), pas de la longueur : un **L3H2 en gamme 4-35 braque exactement comme un L4H2**.

**La décision de l'ADR-0011 n'est pas remise en cause** — le L4H2 reste écarté — mais sa
justification chiffrée doit changer de nature : ce n'est pas le braquage, c'est le
**porte-à-faux arrière de 1,38 m** (36 cm de plus qu'un L3), avec ce qu'il implique de
déport en sortie de virage, de talonnage sur bateaux et rampes, et de longueur hors tout. Le
« ressenti terrain unanimement négatif » cité dans l'ADR reste, mais il s'explique par ça et par
les 6,36 m hors tout, pas par un rayon de braquage qui, lui, ne bouge pas.

### ⚠️ 3. Le précédent « Boxer L2H2 homologué 4 places » est un projet, pas une homologation obtenue

L'ADR-0011 s'appuie sur *« un précédent réel existe (Boxer L2H2 converti et homologué 4 places,
banquette Schnierle SL3) »*. Le fil de forum retrouvé décrit bien un **Boxer L2H2 de 2018**
aménagé pour une famille de 4, avec une **banquette Schnierle SL3 de 120 cm de large**, et la
tension avec le coin cuisine est confirmée mot pour mot (*« que ça fasse très serré face à la
cuisine vu la largeur de la SL3 (120 cm) »*). Mais l'auteur écrit *« je **vise** l'homologation
VASP »* : le fil ne documente pas de réception obtenue, ni le nombre de places finalement
inscrit sur la carte grise.

La conclusion juridique de l'ADR reste solide par ailleurs — aucune source ne lie le nombre de
places homologables à la longueur du véhicule, les contraintes portent sur l'ancrage, la largeur
et le PTAC. Mais elle repose sur cette absence de règle, **pas** sur un précédent abouti. À
requalifier en « projet documenté », pas en « précédent homologué ».

### ⚠️ 4. Le critère « préférence moteur Renault/VW plutôt que PSA » se trie mal par l'année

[recherche-marche-sieges.md](recherche-marche-sieges.md) et le récap marché posent la règle :
« seuls Boxer et Jumper depuis leur restylage ~2014 ont un moteur PSA ; avant 2014, Boxer/Jumper
partageaient le moteur Fiat, donc neutres ». **C'est faux dès 2006.**

La réalité par bloc moteur, sur la plateforme X250/X290 :

| Moteur | Origine | Monté sur |
|---|---|---|
| 2.2 HDi (« Puma », DW12) | **conception PSA-Ford** | Boxer / Jumper **dès 2006** — jamais le Ducato |
| 2.3 MultiJet (F1A) | Iveco / FPT | Ducato uniquement |
| 3.0 HDi / MultiJet (F1C) | Iveco / FPT | **les trois marques** |
| 2.0 BlueHDi (DW10) puis 2.2 BlueHDi (DW12) | PSA | Boxer / Jumper, X290 2014-2023 |
| 2.2 MultiJet 3 (« B22 », Pratola Serra) | Fiat / FPT | **toutes les marques Stellantis à partir de 2024** |

Trois conséquences pour le tri des annonces :

1. Un **Boxer/Jumper 2.2 HDi de 2006-2014 est à moteur PSA**, donc concerné par le départage —
   contrairement à ce qu'annonçait le récap. Ça touche des candidats réels : le Jumper 2.2 HDi
   110 de 2013 (#13) et les Boxer 2.2 de 2009/2010 (#3, #10) étaient classés « neutres » à tort.
2. Un **Boxer/Jumper 3.0 HDi 180 est à moteur Iveco/FPT**, donc effectivement neutre — le
   candidat #11 (Boxer 3.0 HDi 180, 2013) tombait juste, mais pour la mauvaise raison.
3. Le Ducato **n'a jamais reçu le 2.2 PSA** : le « moteur Fiat sur toute sa carrière » est
   confirmé. Petite précision de vocabulaire : ce sont des moteurs **Iveco/FPT** (F1A, F1C, puis
   B22), pas des moteurs de la division automobile Fiat — c'est ce qui explique qu'un Boxer 3.0
   partage le bloc du Ducato.

**Le bon critère de tri n'est donc pas l'année, c'est le bloc moteur affiché dans l'annonce**
(2.2 HDi / BlueHDi = PSA ; 2.3 ou 3.0 MultiJet/HDi = Iveco-FPT).

### ⚠️ 5. Opel Movano : deux véhicules différents sous un même nom

[dimensions-l3h2.md](dimensions-l3h2.md) traite « Renault Master / Opel Movano » comme un seul
porteur. C'est vrai **jusqu'en 2021 seulement** : le Movano de 4ᵉ génération, lancé fin 2021, est
un **clone Sevel** (plateforme et carrosserie Ducato/Boxer/Jumper), produit dans la même usine.

Donc un **Movano ≤ 2021 se lit dans le tableau Master** (1 765 mm de largeur intérieure) et un
**Movano ≥ 2022 dans le tableau Sevel** (1 870 mm) — avec, pour ce dernier, la compatibilité des
embases pivotantes Ducato déjà vérifiée. Le candidat #23 du récap (Movano 2018) est bien un
Master.

### ⚠️ 6. Chauffage diesel : R10 ne suffit pas, c'est R122 qui compte

L'[ADR-0010](adr/0010-cuisine-chauffage-gaz.md) demande un chauffage « homologué E/R10 ». C'est
incomplet : **R10 est le règlement de compatibilité électromagnétique**, exigé sur beaucoup
d'appareils du dossier (frigo, régulateur de charge…). Le règlement propre aux **systèmes de
chauffage** des véhicules M/N/O est le **règlement ONU n° 122**. Un chauffage à combustion doit
satisfaire **R10 *et* R122**, et c'est le **certificat R122** que le dossier DREAL attend.

Sans effet sur la décision (Webasto/Eberspächer/Autoterm sont homologués) — mais c'est la bonne
pièce à réclamer au vendeur, et le bon mot-clé pour écarter les chauffages génériques.

### ⚠️ 7. La largeur de couloir a une réponse réglementaire

[recherche-marche-sieges.md](recherche-marche-sieges.md) conclut : *« Couloir de circulation :
aucun repère van-spécifique trouvé »*. Il en existe un, et il est normatif, pas empirique :
**NF EN 1646-1** impose un **chemin d'évacuation de 450 mm minimum**, réductible à **300 mm sur
500 mm de longueur au maximum** jusqu'à 950 mm de hauteur (450 mm au-delà).

Bonne nouvelle pour l'implantation : dans le tableau « largeur de banquette contre largeur de
couloir » de [dimensions-l3h2.md](dimensions-l3h2.md), **toutes les largeurs envisagées passent**
— même la 2 places de 1 200 mm, qui laisse 500 mm. La contrainte réelle n'est donc pas la
banquette, c'est de ne pas venir rogner ce couloir avec un meuble en face.

### ⚠️ 8. Deux imprécisions mineures

- **Scopema à 6 500 € : ce prix inclut la pose.** La note dit « ~4 000 à 6 500 € selon
  largeur/version (hors pose) ». Vérifié chez le revendeur cité : les 6 500 € couvrent la
  banquette (couchage 1 850 × 1 200) **plus** la pose, un lino gris et les barres de seuil
  aluminium. La borne haute de la fourchette n'est donc pas un prix pièce.
- **Directive permis B : l'échéance de transposition est le 26 novembre 2028**, pas « 2029 ». Le
  glossaire dit « échéance légale 2029 au plus tard » — c'est la date d'*application* probable en
  France une fois la transposition faite, pas l'échéance elle-même. Par ailleurs, la directive
  laisse le choix aux États entre **une formation, un examen, ou les deux** : le « formation
  complémentaire 7-14h, pas de nouvel examen » du glossaire est une hypothèse sur la
  transposition française, pas une disposition de la directive.

---

## 🔴 Non vérifiable depuis cette session

Tout ce qui repose sur des annonces réelles. leboncoin refuse le fetch direct (403) — voir
[CLAUDE.md](../CLAUDE.md), § *Relais navigateur*. Restent donc **non revérifiés** :

- Les prix de marché du porteur nu (5-20 k€ en occasion 2008-2020, 30-45 k€ en quasi-neuf).
- Le « 0 résultat avec le filtre 4 places » du 30 août 2026.
- Le constat des 17 annonces aménagées se négociant à 16-25 k€ (fondement chiffré de
  l'[ADR-0007](adr/0007-elargir-recherche-amenage-negocie-nu.md)).
- La disponibilité actuelle des candidats actifs (37 à cette date, **74 au 5 septembre 2026**), et
  leurs prix.

Restent aussi non vérifiés, faute de source accessible en accès libre :

- Les devis Scora Philae (3 700-4 000 € posée), Schnierle SL (~6 790 €) et **BV Production
  (~2 400 €)** — tous issus de fils de forum. Le BV Production, présenté comme l'option la moins
  chère, mérite un devis direct avant d'être traité comme un repère.
- Les positions des fabricants sur l'auto-installation (Scopema/Scora ouverts, Schnierle/AOC
  fermés) — à confirmer auprès des fabricants eux-mêmes.
- Le coût de certification gaz (~500 €, et ~1 130 € pour le dossier VASP complet).
- La hauteur des passages de roue et la position de la porte coulissante — toujours à mesurer sur
  le véhicule, comme le dit déjà [dimensions-l3h2.md](dimensions-l3h2.md) § 5.

---

## Sources primaires utilisées

- **Citroën Jumper Fourgon — Caractéristiques techniques, avril 2010** (fiche constructeur) :
  http://citroenpavilly.com/vn/JumperVUCt.pdf
- **Renault Master — Caractéristiques techniques, juillet 2023** (brochure constructeur) :
  https://cdn.group.renault.com/ren/ma/ebrochure-2023/master/ct-mobile-master-21072023.pdf
- **Scopema — Banquette Altaïr 3P sur rails fixes, juillet 2025** (plan coté fabricant) :
  https://scopema.com/wp-content/uploads/2025/07/Banquette-Altair-fixes.pdf
- **Annexe 1 — Classification des véhicules (art. L. 318-1 et R. 318-2 du code de la route)**,
  grille officielle Crit'Air : https://www.certificat-air.gouv.fr/files/tableaux_classement.pdf
- Vehikit — dimensions Ford Transit : https://www.vehikit.com/fr/dimensions/ford/transit/
- ZFE Grenoble-Alpes Métropole (périmètre, calendrier, période pédagogique) :
  https://zfe.grenoblealpesmetropole.fr/ et
  https://www.grenoblealpesmetropole.fr/546-circuler-dans-la-zone-a-faibles-emissions-zfe.htm
  et https://www.grenoblealpesmetropole.fr/133-la-zfe-pour-les-voitures-particulieres.htm
- Censure de la suppression des ZFE par le Conseil constitutionnel (21 mai 2026) :
  https://mondial.paris/actualites/auto-pratique/suppression-des-zfe-2026-le-conseil-constitutionnel-stoppe-la-loi-67959.html
- FFCC — permis B à 4,25 t, directive (UE) 2025/2205 :
  https://ffcc.fr/actualite/permis-b-avec-ptac-a-4-5-tonnes/
- Wikicampers — statistiques du marché des véhicules de loisirs 2024 :
  https://www.wikicampers.fr/blog/statistiques-des-ventes-de-camping-cars-vans-et-fourgons-neufs-et-doccasion/
- H2R Équipements — embase pivotante RIB/Scopema (prix, compatibilité, banquette impossible) :
  https://www.h2r-equipements.com/platine-pivotante-de-siege-camping-car/7777-rib-embase-fauteuil-ducato-jumper-boxer-depuis-2006.html
- Narbonne Accessoires — embases pivotantes (voie « caisson + glissières + siège RIB ») :
  https://www.narbonneaccessoires.fr/nos-accessoires/confort-interieur/siege-banquette/embase-pour-siege/embase-pivotante-homologuee-pour-sieges-d-origine-ou-rib-100165.html
- Reimo — Variotech 3000 (cotes, compatibilité VW uniquement) :
  https://www.reimo.com/en/camper-van-conversion-shop/rock-and-roll-bed-campervan-rock-and-roll-bed/reimo-variotech-3000-vartiotech-rock-and-roll-bed/74445/sleeping/seating-bench-variotech-3000
- Van Loisir — banquette Scopema homologuée 6 500 € pose comprise :
  https://www.vanloisir.com/produit/banquette-homologuee-3p/
- Wikipédia — générations et motorisations Ducato/Boxer/Jumper :
  https://fr.wikipedia.org/wiki/Citro%C3%ABn_Jumper_II_-_Peugeot_Boxer_II_-_Fiat_Ducato_III_-_Ram_ProMaster
  et https://en.wikipedia.org/wiki/Fiat_Ducato
- Forum trafic-amenage — projet Boxer L2H2 famille, banquette Schnierle SL3 :
  https://www.trafic-amenage.com/forum/viewtopic.php?t=60881
- Règlement ONU n° 122 (systèmes de chauffage des véhicules M, N, O) :
  https://op.europa.eu/fr/publication-detail/-/publication/147d2ef1-3e77-11ea-ba6e-01aa75ed71a1/language-fr
- Certivan / Le Van Migrateur — NF EN 1646-1, chemin d'évacuation 450 mm :
  https://www.certivan.fr/blog/homologation-vasp-quelles-dimensions-pour-les-issues-de-secours
- Securinorme — NF P91-100 / NF P91-120, dimensions de place de parking :
  https://www.securinorme.com/c/dimensions-places-de-parking-normes-reglementations-2026-guide-complet-2/
- Service-public / Guichet Carte Grise — malus CO2, transformation VU → véhicule de tourisme :
  https://www.service-public.gouv.fr/particuliers/vosdroits/F35947 et
  https://guichetcartegrise.com/malus-ecologique
