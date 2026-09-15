# Dimensions du L3H2 — cotes de référence pour l'aménagement

Note de recherche technique (pas une décision). Constituée le 2 septembre 2026, à la demande
de cotes « le plus précis possible » sur le format cible ([ADR-0011](adr/0011-confirmation-format-600-arbitrage-marge-maniabilite.md)).

Trois familles de porteurs apparaissent dans le suivi marché ([marche/recap-2026-08-31.md](marche/recap-2026-08-31.md)) :
la plateforme **Sevel Sud** (Fiat Ducato / Peugeot Boxer / Citroën Jumper, châssis X250 depuis
mi-2006, X290 depuis 2014 — **carrosserie identique**), le **Renault Master / Opel Movano**, et le
**Ford Transit**. Ce sont trois L3H2 **différents**, pas trois noms du même véhicule : l'écart de
largeur intérieure atteint 10 cm.

✅ **Le bloc Sevel ci-dessous vient d'une fiche technique constructeur** (Citroën, avril 2010) —
c'est la source la plus fiable trouvée, et elle couvre la majorité des candidats du dossier marché.
✅ **Contre-vérifié ligne par ligne le 2 septembre 2026** directement dans cette fiche
(§ 1, § 2, § 3 et § 1 bis) : les cotes sont exactes, à une correction près — le braquage du L4H2,
voir plus bas. Compte rendu complet → [verification-2026-09-02.md](verification-2026-09-02.md).
⚠️ Les cotes marquées « dérivée » sont calculées à partir de ces chiffres, pas relevées.
⚠️ Les cotes marquées « à mesurer » n'ont **pas** de source fiable : à relever au mètre sur le
véhicule avant de dessiner l'implantation.

Plan coté (3 vues à l'échelle, tracé à partir des chiffres ci-dessous) :
https://claude.ai/code/artifact/5c15aec7-71fb-43ea-93e7-029309f6f9e7

## 1. Sevel Sud — Ducato / Boxer / Jumper L3H2 (X250 / X290)

### Extérieur

| Cote | Valeur | Source |
|---|---|---|
| Longueur hors tout | **5 998 mm** | constructeur |
| Largeur hors tout, hors rétroviseurs | **2 050 mm** | constructeur |
| Largeur avec rétroviseurs de série | 2 508 mm | constructeur |
| Largeur avec rétrovision 220 / 235 (options) | 2 690 / 2 770 mm | constructeur |
| Hauteur hors tout (H2) | **2 524 mm** | constructeur |
| Empattement | 4 035 mm | constructeur |
| Porte-à-faux avant | 948 mm | constructeur |
| Porte-à-faux arrière | 1 015 mm | constructeur |
| Diamètre de braquage entre trottoirs | 14,14 m | constructeur |
| Charge admissible sur le toit | 200 kg (⚠️ 150 kg seulement sur L1/L2) | constructeur |

Contrôle de cohérence : 948 + 4 035 + 1 015 = 5 998 ✔

🔴 **Tranché le 2 septembre 2026 : le braquage n'est pas le bon argument contre le L4.**
L'[ADR-0011](adr/0011-confirmation-format-600-arbitrage-marge-maniabilite.md) citait « 14,30 m »
pour le L3 contre « 15,30 m » pour le L4. Les deux chiffres sont faux. La fiche constructeur
donne, en diamètre entre trottoirs :

| Version | Diamètre entre trottoirs |
|---|---|
| 33 / 35 L3H2 | **14,14 m** |
| 4-35 / 4-40 L3H2 | **14,4 m** |
| 4-35 / 4-40 L4H2 | **14,4 m** |

Recoupé sur fiche technique tierce (Ducato L4H2 2016 160 MultiJet 35) : 14,4 m. Et c'est
mécaniquement logique — **L3 et L4 ont le même empattement (4 035 mm)** ; le L4 n'allonge que le
**porte-à-faux arrière** (1 015 → **1 380 mm**), qui n'entre pas dans le calcul du braquage. Les
14,4 contre 14,14 sont un effet de **gamme** (4-35/4-40, pneus et charges lourdes), pas de
longueur : un L3H2 en gamme lourde braque comme un L4H2.

→ Ce qui pénalise vraiment le L4H2, c'est le **porte-à-faux arrière de 1,38 m** (36 cm de plus
qu'un L3 : déport en sortie de virage, talonnage sur bateaux et rampes) et les 6,36 m hors tout —
pas le rayon de braquage. La décision de l'ADR-0011 ne change pas, sa justification chiffrée si.

### Intérieur (fourgon tôlé standard, cabine 2-3 places)

| Cote | Valeur | Source |
|---|---|---|
| Longueur de chargement (au sol, au centre) | **3 705 mm** | constructeur |
| Largeur intérieure entre flancs | **1 870 mm** | constructeur |
| Largeur entre passages de roue | **1 422 mm** | constructeur |
| Hauteur intérieure (H2) | **1 932 mm** | constructeur |
| Volume utile | 13 m³ | constructeur |
| Hauteur de seuil de chargement | ~535 mm (535–565 selon version/charge) | secondaire, à confirmer |
| Recul cabine : nez du pare-chocs → fond de cabine | **≈ 2 293 mm** | dérivée (5 998 − 3 705) |
| Position de l'essieu arrière depuis l'arrière | 1 015 mm | = porte-à-faux arrière |
| Longueur d'un passage de roue | ≈ 880 mm | forum, mesuré sur X250 |
| Débord d'un passage de roue vers l'intérieur | 224 mm | dérivée ((1 870 − 1 422) / 2) |
| **Hauteur des passages de roue au-dessus du plancher** | **à mesurer** (valeurs vues : 350–430 mm) | 🔴 aucune source fiable |
| Épaisseur de structure au pavillon | ≈ 60 mm | dérivée (2 524 − 1 932 − 535) |

### Ouvertures

| Cote | Valeur | Source |
|---|---|---|
| Portes arrière — largeur × hauteur | **1 562 × 1 790 mm** | constructeur |
| Porte latérale coulissante — largeur × hauteur | **1 250 × 1 755 mm** | constructeur |
| Ouverture des portes arrière | 90° et 180° | constructeur |
| Position longitudinale de la porte coulissante | **à mesurer** (juste derrière la cloison) | 🔴 non trouvée |

⚠️ Sur L1, la porte coulissante n'est que de 1 075 × 1 485 mm. Le 1 250 × 1 755 est propre aux
L2/L3/L4 H2 — c'est une des raisons pour lesquelles le L3H2 est le format des aménageurs.

### Masses (33 L3H2 et 35 L3H2, motorisations 100 à 160 ch)

| Cote | Valeur |
|---|---|
| Masse à vide en ordre de marche | 1 960 – 2 025 kg |
| MTAC | 3 300 kg (gamme 33) ou 3 500 kg (gamme 35) |
| Charge utile (conducteur inclus) | 1 275 – 1 540 kg |
| Charge max. essieu avant / arrière | 1 750–1 850 / 1 900–2 000 kg |

→ Un aménagement complet (isolation, meubles, eau, batteries, 4 personnes) pèse couramment
600–900 kg : **la charge utile n'est pas un point bloquant sur ce porteur**, y compris en 3 300 kg.
Chiffre non calculé pour notre implantation — à refaire quand l'aménagement sera arrêté.

### ✅ Cabine approfondie : le coût en longueur est maintenant chiffré

L'[ADR-0006](adr/0006-config-porteur-nu-sieges-cabine.md) laissait ouverte la comparaison
« cabine approfondie d'origine vs banquette rapportée », en notant que la cabine approfondie
« mange visiblement beaucoup de longueur utile » sans le quantifier. La fiche constructeur le dit :

| Version L3H2 | Places | Longueur de chargement | Volume |
|---|---|---|---|
| Fourgon tôlé standard | 2 ou 3 | **3 705 mm** | 13 m³ |
| Cabine approfondie | 6 ou 7 | **2 660 mm** | 9,4 m³ |

→ **−1 045 mm de longueur utile**, soit plus d'un mètre : la cabine approfondie ramène un L3H2 en
dessous d'un L2H2 nu (3 120 mm) côté espace de vie. Elle apporte 3-4 places carrossées d'origine,
mais elle est incompatible avec l'implantation retenue en [ADR-0009](adr/0009-layout-lit-fixe-banquette-lit.md)
(lit fixe + banquette-lit + cuisine + circulation) — la voie « banquette rapportée » reste la seule
crédible. (La cabine approfondie pèse aussi ~200 kg de plus.)

### 🔴 Le point ouvert de l'ADR-0011 : le lit transversal, en chiffres

L'[ADR-0011](adr/0011-confirmation-format-600-arbitrage-marge-maniabilite.md) signalait le lit fixe
transversal comme « limite en largeur, identique du L1 au L4 ». Détail des cotes :

- Au niveau du plancher, entre les passages de roue : **1 422 mm** → inutilisable comme longueur de
  couchage pour un adulte.
- Au-dessus des passages de roue, entre flancs : **1 870 mm** bruts, dont il faut retirer
  l'isolation + l'habillage des deux côtés (≈ 50–70 mm par côté selon la solution) →
  **≈ 1 730 – 1 770 mm de couchage transversal réel**.
- Il faut donc un lit **surélevé au-dessus des passages de roue** (plateforme à la hauteur des
  arches, soute dessous) : c'est la seule façon d'obtenir la largeur pleine. La hauteur exacte de
  cette plateforme dépend de la hauteur des passages de roue — **cote à mesurer, pas documentée**.
- Reste à trancher : 1,73–1,77 m de couchage, ça passe ou pas selon la taille des dormeurs. À
  vérifier avant de retenir le transversal, et à comparer à un couchage dans le sens de la longueur
  (3 705 mm disponibles, mais qui mange l'implantation en largeur).
- Sous la plateforme, hauteur de soute = hauteur de la plateforme − épaisseur du plancher isolé.

## 1 bis. Banquette-lit homologuée : encombrement plié / déplié

Cotes de la **Scopema Altaïr 3P**, candidate en tête depuis l'[ADR-0009](adr/0009-layout-lit-fixe-banquette-lit.md).
Source : plan coté de la fiche technique officielle Scopema (juillet 2025, version rails fixes) —
`scopema.com/wp-content/uploads/2025/07/Banquette-Altair-fixes.pdf`.

### Emprise au sol, dans le sens de la longueur du fourgon

| État | Emprise | Source |
|---|---|---|
| **Pliée** (position banquette / route) | **≈ 785 mm** | plan coté (segment central) |
| **Dépliée** (position lit) | **1 790 / 1 860 / 1 940 mm** | constructeur, selon le 2ᵈ dossier |

Le dépliage ajoute **540 mm devant** (dossier avant qui se rabat) et **460 / 530 / 610 mm derrière**
(2ᵈ dossier qui se rabat) : 540 + 785 + 610 = 1 935 ≈ 1 940 ✔ — les trois longueurs de couchage
annoncées se recomposent exactement à partir des segments du plan.

⚠️ Le 785 mm est **lu sur le plan coté**, pas écrit en clair comme « profondeur en position
banquette » : c'est le segment central de la décomposition ci-dessus, cohérent avec une assise de
560 mm + dossier + 2ᵈ dossier. À confirmer au devis, mais l'ordre de grandeur est sûr.

### Les autres cotes de la banquette

| Cote | Valeur |
|---|---|
| Longueur de couchage selon 2ᵈ dossier (580 / 650 / 730 mm) | 1 790 / 1 860 / **1 940 mm** |
| Largeurs — 1 place | 600 mm |
| Largeurs — 2 places | 860 / 940 / 1 040 / 1 120 / **1 200 mm** |
| Largeurs — 3 places | 1 200 / 1 290 / 1 400 / 1 500 mm |
| Débord des ceintures, par côté | 25 mm (à ajouter à la largeur) |
| Profondeur d'assise | 560 mm |
| Hauteur du dossier à ceintures | 650 mm |
| Hauteur d'assise au plancher | 289 (mini) / **399 (standard)** / 499 mm (maxi, sur demande) |
| Module de rails | 1 150 mm, 8 kg |
| Épaisseurs de plancher admises | 19 à 34 mm |
| Glissières optionnelles (version rails coulissants) | 220 mm longitudinal, 220 mm latéral |

Autres équipements de série utiles : ceintures 3 points intégrées, Isofix Top Tether, blocage
automatique du dossier en position route, appuis-tête intégrés. Options : accoudoirs relevables,
surmatelas 3D côté couchage.

⚠️ Les cotes « 110 fond d'assise / 180 bord d'assise / 185 couchage » du plan ne sont pas
explicitées (épaisseurs de mousse ou hauteurs relatives au bâti) — non reprises ici faute
d'interprétation sûre.

### Ce que ça donne dans les 3 705 mm

Hypothèse de travail, pas une décision : lit fixe transversal arrière comptant **1 400 mm** dans le
sens de la longueur (matelas 140 + finition), banquette accolée au pied de ce lit, face à la route
([ADR-0009](adr/0009-layout-lit-fixe-banquette-lit.md)).

| | Longueur consommée | Reste depuis la cloison |
|---|---|---|
| Longueur de chargement L3H2 | 3 705 mm | — |
| − lit fixe transversal arrière | 1 400 mm | 2 305 mm |
| − banquette **pliée** | 785 mm | **1 520 mm** de plancher libre le jour |
| − banquette **dépliée** en 1 940 | 1 940 mm | **365 mm** la nuit |
| − banquette **dépliée** en 1 790 | 1 790 mm | 515 mm la nuit |

→ ✅ **La version 194 cm rentre**, avec ~36 cm devant elle. Le critère « ≥ 190 cm en mode lit » de
l'ADR-0009 (accueillir deux amis adultes) est donc atteignable sur un L3H2, à condition de prendre
le 2ᵈ dossier de 730 mm.
→ ⚠️ **Mais l'emprise dépliée doit être du plancher libre** sur toute la largeur de la banquette :
un meuble posé dans ces 1 940 mm empêche le dépliage. Contrainte à porter dans le dessin
d'implantation, pas à découvrir après.
→ ⚠️ **La banquette dépliée recouvre le seuil de la porte coulissante.** La porte est à ~200-1 450 mm
de la cloison (cote à mesurer, cf. plus bas) ; la banquette pliée (1 520 → 2 305 mm) est en dehors,
mais dépliée elle occupe 365 → 2 305 mm. Sans conséquence la nuit, à savoir quand même.

### Largeur de banquette contre largeur de couloir

Sur 1 870 mm entre flancs, moins l'isolation des deux côtés (≈ 1 750 mm utiles), et en ajoutant les
25 mm de débord de ceinture par côté :

| Largeur de banquette | Encombrement réel | Couloir restant |
|---|---|---|
| 860 mm (2 pl.) | 910 mm | 840 mm |
| 940 mm (2 pl.) | 990 mm | 760 mm |
| 1 040 mm (2 pl.) | 1 090 mm | 660 mm |
| 1 120 mm (2 pl.) | 1 170 mm | 580 mm |
| 1 200 mm (2 pl.) | 1 250 mm | **500 mm** |

→ Pour deux enfants côte à côte, une **2 places de 1 040 à 1 200 mm** suffit largement (520 à 600 mm
par enfant en largeur, et 1 790 à 1 940 mm de longueur de couchage). Le choix de largeur est donc
surtout un arbitrage **couloir** : chaque tranche de 80 mm de banquette est prise sur le couloir.

✅ **Le couloir a un minimum réglementaire, vérifié le 2 septembre 2026** : **NF EN 1646-1** exige
un chemin d'évacuation de **450 mm**, réductible à 300 mm sur 500 mm de longueur au maximum
jusqu'à 950 mm de hauteur (450 mm au-delà). **Toutes les largeurs du tableau ci-dessus passent**,
y compris la 2 places de 1 200 mm qui laisse 500 mm. La contrainte n'est donc pas la banquette —
c'est de **ne rien poser en face** qui viendrait rogner ces 450 mm.

### Point de comparaison : banquette « clic-clac » type Reimo Variotech 3000

| Cote | Valeur |
|---|---|
| Largeur hors tout (taille 10) | 1 205 mm |
| Surface de couchage | 2 050 × 1 260 mm |
| Entraxe des rails | 651 mm |
| Hauteur de soute sous l'assise arrière | 460 mm |
| Emprise pliée | non publiée (≈ 700 mm d'après le gabarit) |

⚠️ Ce type de banquette déplie **2 050 mm**, soit 110 mm de plus que l'Altaïr 194 : dans le budget
ci-dessus il ne reste que 255 mm, et l'ADR-0009 notait déjà que Reimo n'a **aucune fiche
Ducato/Boxer/Jumper** (produit calé sur les VW T5/T6). Gardé comme repère de gabarit, pas comme
candidat.

## 2. Renault Master / Opel Movano L3H2 (traction)

Source : brochure caractéristiques techniques Renault, juillet 2023. ✅ **Bloc revérifié
ligne par ligne le 2 septembre 2026 sur cette brochure : exact.** Seule réserve de forme, la
brochure Renault intitule ses valeurs de braquage « rayon » alors que ce sont des **diamètres**
(12,0 m annoncés sur un L1H1 de 5,07 m ne peuvent pas être un rayon) — la comparaison avec les
14,14 m « entre trottoirs » du Sevel est donc bien homogène.

🔴 **Piège de nom, vérifié le 2 septembre 2026 : « Movano » désigne deux véhicules différents.**
Le Movano n'est un clone du Master que **jusqu'en 2021**. La 4ᵉ génération, lancée fin 2021, est
un **clone Sevel** — plateforme et carrosserie Ducato/Boxer/Jumper, produite dans la même usine.
Donc un **Movano ≤ 2021 se lit dans ce tableau** (1 765 mm de largeur intérieure), un **Movano
≥ 2022 dans le tableau Sevel du § 1** (1 870 mm), avec la compatibilité des embases pivotantes
Ducato déjà acquise. Le candidat Movano 2018 du dossier marché est bien un Master.

| Cote | Master L3H2 | Écart vs Sevel L3H2 |
|---|---|---|
| Longueur hors tout | 6 225 mm (6 198 mm selon millésime/source) | **+ ~200 mm** |
| Largeur hors tout / avec rétroviseurs | 2 070 / 2 470 mm | + 20 mm |
| Hauteur hors tout | 2 488 mm | − 36 mm |
| Empattement / PAF avant / PAF arrière | 4 332 / 869 / 1 024 mm | empattement + 297 mm |
| Longueur de chargement | 3 733 mm | + 28 mm |
| Largeur intérieure | **1 765 mm** | **− 105 mm** |
| Largeur entre passages de roue | **1 380 mm** | − 42 mm |
| Hauteur intérieure | 1 894 mm | − 38 mm |
| Porte latérale (l × H) | 1 270 × 1 780 mm | + 20 / + 25 mm |
| Portes arrière (l × H entrée) | 1 580 × 1 820 mm | + 18 / + 30 mm |
| Hauteur de seuil | 543 / 557 mm | ≈ |
| Garde au sol | 172 mm | — |
| Volume utile | 13 m³ | = |
| Masse à vide / charge utile / MTAC | 2 066 / 1 441 / 3 500 kg | ≈ |
| Braquage entre trottoirs / entre murs | 15,7 / 16,2 m | **+ 1,6 m, nettement moins maniable** |

⚠️ **Conséquence directe pour nous** : le Master L3H2 est 20 cm plus long, tourne 1,6 m plus large,
et offre **10 cm de moins en largeur intérieure** — donc ≈ 1,63–1,67 m de couchage transversal réel
au lieu de 1,73–1,77 m. Si le lit transversal est retenu, **le Master est le porteur le plus
pénalisé** des trois. Or 12 des 37 candidats actifs du dossier marché sont des Master/Movano : c'est
un critère de tri à appliquer, pas un détail.
♻️ **Recompté le 7 septembre 2026** : **23 Master/Movano sur 68
candidats**, soit plus d'un tiers, contre 36 Sevel (Ducato/Boxer/Jumper), 10 Transit et 1 Sprinter.
Le lot du 5 septembre était très majoritairement composé de Master de concession.
🗄️ **Les versions propulsion sont désormais éliminatoires** (RS/RJ, roues simples comme jumelées) —
elles perdent ~10 cm de hauteur intérieure (1 798 mm sur Master, 1 786 mm sur Transit), ce qui annule
la raison d'être du H2 → [ADR-0021](adr/0021-exclure-les-porteurs-propulsion.md), 7 septembre 2026.
*Les trois candidats qui portaient la réserve — `3170746271` (« PROPULSION RJ3500 »),
`3189230655` (« PROPULSION ROUES SIMPLES », mention dans le corps de l'annonce seulement) et
`3193732404` (« RWD ») — sont sortis de l'archive le jour même.* La cote reste utile pour **lire une
annonce** : c'est elle qui dit pourquoi le critère existe.

## 3. Ford Transit L3H2 (2014+)

Source : tables Vehikit (données constructeur reprises), moins détaillée que les deux précédentes.

| Cote | Transit L3H2 traction | Écart vs Sevel L3H2 |
|---|---|---|
| Longueur hors tout | 5 981 mm | ≈ |
| Empattement | 3 750 mm | − 285 mm |
| Hauteur hors tout | 2 541 mm | + 17 mm |
| Longueur de chargement | **3 494 mm** | **− 211 mm** |
| Largeur intérieure | **1 784 mm** | − 86 mm |
| Largeur entre passages de roue | 1 392 mm | − 30 mm |
| Hauteur intérieure | 1 886 mm (traction) / 1 786 mm (propulsion) | − 46 / − 146 mm |
| Volume utile | 11,5 m³ (traction) / 11 m³ (propulsion) | − 1,5 m³ |

⚠️ À gabarit extérieur quasi identique, le Transit L3H2 offre **21 cm de longueur utile en moins et
1,5 m³ de volume en moins** que le Sevel : son porte-à-faux et sa cabine mangent plus. Les versions
propulsion tombent à 1 786 mm de hauteur intérieure (debout difficile). Cotes d'ouvertures et masses
non relevées.

✅ **Bloc revérifié le 2 septembre 2026 : exact.** Deux ajouts relevés au passage — la **version
traction existe bien en L3H2** (la table la liste), et la **charge admissible sur le toit est de
190 kg**, contre 200 kg au Sevel. Le porte-à-faux arrière du Transit L3 est de 1 208 mm (contre
1 015 mm au Sevel) : c'est là que passe la longueur utile manquante.

## 4. Mercedes Sprinter

Non compilé : les gabarits Sprinter ne se codent pas en L1-L4/H1-H3 mais en empattement + hauteur de
toit, et la correspondance avec « L3H2 » n'est pas directe. Un seul candidat Sprinter au dossier
marché (#8, 2008, 375 000 km). À faire si un Sprinter devient sérieusement candidat.

## 5. Ce qu'il reste à mesurer sur le véhicule (avant tout dessin d'implantation)

1. 🔴 **Hauteur des passages de roue au-dessus du plancher** — commande la hauteur de la plateforme
   du lit, donc la hauteur de soute et la hauteur assise disponible dessus.
2. 🔴 **Position longitudinale de la porte coulissante** par rapport à la cloison — commande où peut
   tomber la cuisine, la banquette et la circulation.
3. Épaisseur réelle disponible pour l'isolation aux flancs (creux de renfort vs sommet de renfort :
   les 1 870 mm constructeur sont mesurés entre flancs, pas dans les creux).
4. Hauteur de la marche entre plancher de cabine et plancher de cellule.
5. Position des renforts de pavillon (pour lanterneau) et des points d'ancrage plancher
   (pour la banquette homologuée — cf. [ADR-0006](adr/0006-config-porteur-nu-sieges-cabine.md)).

## Sources

- **Citroën Jumper Fourgon — Caractéristiques techniques et équipements, avril 2010** (fiche
  constructeur, PDF) : http://citroenpavilly.com/vn/JumperVUCt.pdf — dimensions extérieures,
  intérieures, ouvertures, masses, braquage, versions cabine approfondie. Plateforme identique
  Ducato / Boxer / Jumper.
- **Renault — Master, caractéristiques techniques, juillet 2023** (brochure constructeur, PDF) :
  https://cdn.group.renault.com/ren/ma/ebrochure-2023/master/ct-mobile-master-21072023.pdf
- **Scopema — Banquette Altaïr 3P sur rails fixes, fiche technique juillet 2025** (plan coté
  constructeur, PDF) : https://scopema.com/wp-content/uploads/2025/07/Banquette-Altair-fixes.pdf
- Reimo — banquette Variotech 3000, page produit (couchage 2 050 × 1 260, soute 460 mm) :
  https://www.reimo.com/en/camper-van-conversion-shop/rock-and-roll-bed-campervan-rock-and-roll-bed/reimo-variotech-3000-vartiotech-rock-and-roll-bed/74445/sleeping/seating-bench-variotech-3000
- Comptoir Utilitaire — dimensions intérieures Ducato : https://comptoir-utilitaire.com/dimensions-interieures-fiat-ducato/
- L'argus — fiche technique Boxer Fg L3H2 (seuil de chargement, braquage, masses) :
  https://www.largus.fr/fiche-technique/Peugeot/Boxer+Fg/Ii/2025/Fourgon+4+Portes/L3h2+35+140-2810666.html
- Vehikit — dimensions Ford Transit : https://www.vehikit.com/fr/dimensions/ford/transit/
- Forum trafic-amenage — cotes de passage de roue mesurées sur Ducato X250 :
  https://www.trafic-amenage.com/forum/viewtopic.php?t=45366
- Forum Escapades Nature — plan et cotes Ducato (longueur ~80-82 cm et profondeur ~23 cm du passage
  de roue) : https://www.escapades-nature-camping-car.fr/forum/viewtopic.php?t=3230

🗄️ Pas de plan coté officiel trouvé en accès libre : Fiat/Peugeot/Citroën réservent leur guide
carrossier (« manuale allestitori ») aux aménageurs agréés. Le plan lié en tête de ce document est
tracé par nos soins, à l'échelle, à partir des chiffres constructeur ci-dessus — ce n'est pas un
document constructeur.
