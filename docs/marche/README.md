# Archive de suivi marché

Snapshots d'annonces (HTML + photos), volontairement gardés même après disparition de
l'annonce ou changement de prix — l'objectif n'est pas d'avoir la fiche à jour d'un
véhicule qu'on négocie, mais de **suivre le marché dans le temps** : à quelle vitesse les
annonces de ce format partent, comment les prix bougent. Décision du 31 août 2026 :
contrairement à la réserve habituelle de ce dépôt sur les gros fichiers binaires, on
assume ici de dupliquer/stocker ces fichiers dans Git, précisément parce que le contenu
est éphémère et ne serait pas récupérable après coup.

⚠️ **Amendé le 5 septembre 2026 ([ADR-0016](../adr/0016-annonces-ecartees-sortent-de-archive.md))** :
« on garde tout » vaut pour les **candidats vivants** — y compris ceux qui disparaissent du site ou
changent de prix. Une annonce écartée pour un motif **définitif** (carrosserie, format,
motorisation, aménagement déjà posé, véhicule non roulant) sort en revanche de l'archive : ses
fichiers sont supprimés et son numéro passe dans
[annonces-exclues.md](annonces-exclues.md), avec son motif. Ce qu'on veut retrouver dans six mois,
c'est **pourquoi** on a écarté un véhicule, pas ses photos.

## Structure

```
annonces/<id-leboncoin>/<date-de-capture>/
├── page.html
└── photos/
    ├── 01.jpg
    ├── 02.jpg
    └── ...
```

`<id-leboncoin>` est le numéro à la fin de l'URL de l'annonce (ex. `3249486543` pour
`leboncoin.fr/ad/utilitaires/3249486543`). Une même annonce peut avoir plusieurs
dossiers datés si elle est capturée à nouveau plus tard (suivi de prix) — c'est ce qui a fait
apparaître la première **baisse de prix** du dossier : `3234575793`, 10 990 € le 31 août,
9 990 € le 5 septembre.

⚠️ Le relais navigateur dépose les photos à plat dans `Téléchargements/` sous la forme
`<id>_photos_01.jpg` ; le rangement dans `annonces/<id>/<date>/photos/` reste un geste à faire
côté disque, et le nom de fichier est conservé tel quel (`3249486543_photos_01.jpg`).

Alimenté via le relais navigateur décrit dans [CLAUDE.md](../../CLAUDE.md) (§ *Relais
navigateur pour les recherches marché*) — cette session n'a pas d'accès direct au
navigateur ni à leboncoin.

Le résumé lisible (tableau prix/km/config par annonce) reste dans
[../recherche-marche-sieges.md](../recherche-marche-sieges.md) ; ce dossier ne contient
que les fichiers sources.

## Critères à appliquer à chaque nouveau lot d'annonces

À reprendre tels quels dans le prompt du relais Chrome et dans le tri qui suit la capture.
📌 La **méthode** de ces recherches (une passe, fichiers plutôt que compte rendu, liste
d'exclusion) est fixée par l'[ADR-0015](../adr/0015-methode-recherche-marche.md).
**Éliminatoires** :

- **Format 600 / L3H2** — ni L4H2, ni L2H2 ([ADR-0011](../adr/0011-confirmation-format-600-arbitrage-marge-maniabilite.md))
- 🔴 **Pas de porteur propulsion — critère nouveau du 7 septembre 2026**
  ([ADR-0021](../adr/0021-exclure-les-porteurs-propulsion.md)), roues simples comme roues jumelées.
  Motif : la hauteur intérieure tombe à **1 786 mm (Transit)** / **1 798 mm (Master)** au lieu de
  1 886 mm — se tenir debout devient difficile, or c'est **la raison d'être du H2**
  ([ADR-0003](../adr/0003-cible-fourgon-600-4-places.md), *« compacité = hauteur, pas longueur »*).
  Mots-clés : `propulsion`, `RWD`, `RJ`, `RJ3500`, `RS3500`, `roues jumelées`, `P350`, `L3H2 350`.
  ⚠️ **Le champ structuré ne suffit pas** : sur les trois candidats écartés, `3189230655` ne
  l'annonçait que **dans le corps du texte** (« PROPULSION ROUES SIMPLES »), son titre ne disant que
  « 2T FG P350 ». Même piège que le GNC de `3234530816` — **lire le texte, pas seulement les
  champs**. 📌 Un `350` / `P350` sur Transit doit déclencher la vérification sans la conclure :
  `3213522294` et `3240937496` sont dans le lot sans propulsion.
- 🔴 **Millésime ≥ 2019 — critère nouveau du 7 septembre 2026**
  ([ADR-0020](../adr/0020-plancher-de-millesime-13-ans-de-vie-restante.md)). Règle glissante :
  `millésime ≥ année courante − 7`, soit **au moins 13 ans de vie calendaire restante** sur une
  hypothèse de 20 ans. Justification chiffrée →
  [duree-de-vie-et-cout-par-an.md](../duree-de-vie-et-cout-par-an.md) : l'aménagement (14-21 k€)
  coûte plus cher que le porteur et ne lui survit pas, donc la métrique est le **coût par an de vie
  restante** — sur les 10 candidats les moins chers à l'achat, **un seul** est dans les 10 meilleurs
  une fois ramené au coût par an.
  ✅ **Contrôlé avant adoption, leçon de l'ADR-0017** : le critère laisse **38 candidats sur 68**
  — il resserre sans refermer — et il ne demande **aucune information nouvelle** (le millésime est
  dans tous les champs structurés, pas besoin de photo ni de contact vendeur).
  ⚠️ **Se confirme sur la 1ʳᵉ mise en circulation**, pas sur le seul millésime déclaré — même
  nuance que pour le plancher ZFE, où le recomptage du 5 septembre avait changé de résultat en
  passant de l'un à l'autre. Ce plancher **absorbe** celui de janvier 2011 (Crit'Air 2).
- **Prix affiché ≤ 20 000 €** et véhicule **nu ou très peu aménagé** (ni couchage fixe, ni cuisine,
  ni sanitaire déjà posés) — critères durcis le 2 septembre 2026, voir
  [recap-2026-08-31.md](recap-2026-08-31.md)
- 🔴 **Diesel uniquement** ([ADR-0014](../adr/0014-diesel-uniquement.md)) — tout autre carburant
  est éliminatoire : essence, hybride, **GNV / GNC / GPL / bicarburation**
  ([ADR-0012](../adr/0012-exclure-porteurs-motorisation-gaz.md)), **électrique** — e-Ducato, e-Boxer, e-Jumper, Master E-Tech/Z.E., eSprinter, eTransit
  ([ADR-0013](../adr/0013-exclure-porteurs-electriques.md)).
  ⚠️ Ne pas se fier au seul champ `fuel` du JSON (Diesel = `2`, GNV = `7`) : il peut dire
  « Autre ». **Chercher aussi dans le corps de l'annonce** `GNV`, `GNC`, `CNG`, `gaz naturel`,
  `GPL`, `bicarburation`, `100 % électrique`, `e-Ducato`, `Z.E.`, `E-Tech`, `kWh`,
  `borne de recharge` — c'est comme ça que le GNC de 3234530816 est ressorti.
  ⚠️ **Mais ne jamais écarter sur le mot « électrique » seul** : il apparaît dans 29 des 68 annonces
  archivées au 4 septembre et **jamais** pour une traction — ce sont des vitres, des rétroviseurs, des packs et des
  kits solaires. Lire le contexte.
  Ces deux critères ne concernent **que la traction** : le gaz de cuisine/chauffage
  ([ADR-0010](../adr/0010-cuisine-chauffage-gaz.md)) et l'installation électrique de l'aménagement
  restent la voie retenue.
  ⚠️ Le contrôle du **texte** reste nécessaire pour le motif inverse : repérer le **faux positif**,
  une annonce affichée « Diesel » ou « Autre » alors que le véhicule ne l'est pas — c'est ainsi que
  le GNC de 3234530816 est ressorti.
  📌 Codes `fuel` relevés : `1` = Essence, `2` = **Diesel**, `7` = Gaz Naturel (GNV).

- 🔴 **Rideau roulant (« porte en store ») d'ex-véhicule de service — éliminatoire depuis le
  7 septembre 2026**, en latéral comme à l'arrière. Trois annonces sur 105 en portaient un ; les
  trois sont sorties ([annonces-exclues.md](annonces-exclues.md)). Ce n'est pas une porte à
  remplacer, c'est une **face entière à refaire** — ouverture, étanchéité, isolation, et l'endroit
  précis où viennent l'accès, la marche et le store. ⚠️ Deux d'entre elles étaient restées
  candidates avec un simple ⚠ « à vérifier » : la réserve n'a fait que repousser la décision de
  deux jours. **À écarter dès la lecture de l'annonce.**

**Tri prioritaire, pas éliminatoire** :

- 🗄️ **2 sièges avant d'origine — n'est plus un critère de tri depuis le 5 septembre 2026**
  ([ADR-0017](../adr/0017-2-places-avant-critere-de-budget-pas-de-recherche.md)). Le critère est
  juste — il annule tout le volet administratif des sièges, confirmé par la DREAL 38
  ([dossier-dreal-38.md](../dossier-dreal-38.md) § 1 bis) — mais il est **introuvable** : 2 sur 105
  annonces archivées, et **0 sur les 44** du lot du 5 septembre, pourtant capturé pour ça, cabines
  regardées une par une. Et la prime demandée sur le porteur (≈ 3 900 à 6 000 €) **dépasse le coût
  de la conversion** (à partir de ~2 600 € TTC). C'est donc devenu une **ligne de budget**, pas une
  cible de recherche. 🗄️ *Le chip du comparateur, gardé jusqu'ici comme repère à la lecture, a été
  **retiré le 7 septembre 2026*** — le relevé reste dans les données du fichier, seul l'affichage
  tombe ([ADR-0017](../adr/0017-2-places-avant-critere-de-budget-pas-de-recherche.md) § 4).
  ⚠️ Si le critère revenait un jour : le champ « Nombre de place(s) » est vide dans **31 %** des
  annonces — **jamais comme filtre de recherche**, sous peine d'écarter en aveugle.
- 🗄️ **Le kilométrage n'est plus un critère de tri depuis le 7 septembre 2026**
  ([ADR-0020](../adr/0020-plancher-de-millesime-13-ans-de-vie-restante.md)). Il devient un
  **plafond calculé**, pas un préféré : `400 000 − 10 000 × années restantes`, soit **270 000 km sur
  un 2019, 250 000 km sur un 2021**. En dessous, un compteur plus bas n'achète aucune année de vie —
  il se paie et ne rapporte rien. **Aucun des 68 candidats n'est au-dessus de son plafond**, le
  kilométrage n'écarte donc personne aujourd'hui. Il reste un **coût** (≈ 3-5 c€/km en pièces
  d'usure), correctement reflété par la décote du marché (268 €/10 000 km) : acheter kilométré est
  neutre, pas avantageux.
- **Crit'Air 2 minimum** (1ʳᵉ immatriculation ≥ 01/2011) vu la ZFE grenobloise — non éliminatoire,
  décision assumée au cas par cas ([zfe-grenoble.md](../zfe-grenoble.md)). 🗄️ *Rendu sans objet par
  le plancher de millésime de l'ADR-0020, qui est plus haut de huit ans.*
- 🔴 **Plancher tôle non repeint — critère nouveau du 7 septembre 2026, à regarder sur photos.**
  Condition posée par l'installateur AOC pour la pose de la banquette-lit arrière : *« que le
  plancher tôle soit en bon état, surtout pas repeint (même pas un antirouille), pas de reste de
  colle ou autre »*
  ([installateurs/](../installateurs/courriel-devis-2026-09-04.md)). ⚠️ **Contre-intuitif** : un
  plancher fraîchement peint se lit spontanément comme un bon signe d'entretien ; ici c'est un
  **défaut**, parce que le piétement de banquette se **colle** sur la tôle. Regarder les photos
  d'intérieur, et se méfier des fourgons « rénovés ».
- 🔴 **Siège conducteur d'origine « version standard » — critère nouveau du 7 septembre 2026, à
  regarder sur photos.** Condition posée par AOC, l'installateur retenu
  ([ADR-0019](../adr/0019-aoc-installateur-retenu-sieges.md)), pour la pose de l'embase pivotante
  conducteur : *« montage possible uniquement si votre siège conducteur d'origine est la version
  standard (sans airbag, sans embase tournante d'origine, sans suspension) »*. Un siège conducteur
  **suspendu** ou à **airbag latéral** rend l'embase impossible — donc ruine la cabine cible de
  l'[ADR-0006](../adr/0006-config-porteur-nu-sieges-cabine.md).
  ⚠️ **Ce critère est presque invisible dans le texte des annonces.** Contrôle du 7 septembre 2026
  sur l'archive complète (105 annonces à ce moment-là) : 20 mentionnent le siège conducteur,
  **aucune** ne dit « suspendu ». Deux cas seulement se détectent, et par des formulations détournées :
  `3202627305` (Jumper 2020 « Driver », *« siège cond. à amortissement variable »* — déjà écarté
  sur le prix, ceci est un **second motif**) et `3227572786` (Ducato 2021, 18 990 €, **candidat
  actif**, *« 6 airbags — airbags front. + lat. »* : latéraux vraisemblablement en dossier, **à
  vérifier avant toute visite**).
  📌 **Où regarder en premier** : les finitions hautes, c'est là que vivent le siège suspendu et les
  airbags latéraux. **16 des 68 candidats** portent une finition de ce type au champ `tag` — Master
  *Confort* / *Grand Confort* (7), Boxer *Premium* (5), Ducato *Pro Lounge* (2), Jumper *Driver*
  (2). Heuristique de lecture, **pas une règle** : à confirmer sur la photo de cabine et la liste
  d'équipements.
  ⚠️ **Piste à ne pas surinterpréter : la finition Jumper/Boxer « Driver ».** Le seul véhicule dont
  l'annonce décrit un siège à amortissement variable (`3202627305`) est un Jumper *Driver*. Mais le
  candidat actif `3239332719`, Jumper *Driver* lui aussi, ne le mentionne pas — sans qu'on sache si
  son siège est différent ou si sa liste d'équipements est simplement plus courte. **Deux cas ne
  font pas une règle** : c'est un point à regarder sur ces annonces-là, pas un motif d'exclusion.
  ✅ **Ce critère ne rétrécit pas la liste aujourd'hui** : sur les 68 candidats, **un seul** est
  signalé à vérifier (`3227572786`). Il ne se lit pas dans les annonces, il se vérifie **avant la
  visite** — photo de cabine, liste d'équipements, et la carte grise réclamée au vendeur.
  📌 Ce n'est **pas un filtre de recherche** — rien ne permet de le passer en requête. C'est une
  **vérification avant visite**, au même titre que le plancher.
- 🔴 **Copie de la carte grise à obtenir avant de s'engager**, et à faire valider par AOC : *« pour
  s'assurer que ce n'est pas un véhicule "exotique" qui ne serait pas couvert par les PV
  d'homologation »*. Condition qu'il pose lui-même — elle s'insère dans la procédure d'achat, pas
  dans le tri des annonces.
- **Millésime — à relever, sans borne.** Un installateur (Equipage) borne son offre aux véhicules
  d'**avant 2021**, à cause des capteurs de présence d'assise apparus vers 2022 ; un autre (AOC)
  les traite par une option siège à **72 €**. Cette borne est une limite de catalogue, **pas un
  critère de recherche** — un porteur ≥ 2022 reste un candidat normal
  ([ADR-0018](../adr/0018-millesime-2021-limite-de-prestataire-pas-critere.md)). Noter simplement
  « ≥ 2022 → option capteur 72 € » sur les fiches concernées.
  ✅ **Sujet clos le 7 septembre 2026** : Equipage — le seul à poser cette borne — **n'est pas
  retenu** ([ADR-0019](../adr/0019-aoc-installateur-retenu-sieges.md)). Les millésimes 2022-2026
  restent dans la recherche sans réserve ; il ne subsiste que l'option capteur à 72 €.

### Prompts de recherche déjà rédigés

- [prompt-relais-2-places-2026-09-04.md](prompt-relais-2-places-2026-09-04.md) — tour ciblé sur les
  porteurs **2 places avant d'origine**. Une seule passe, **sans le filtre « places »** (vide dans
  27 des 68 annonces archivées à l'époque, 33 sur 105 aujourd'hui) : le tri se fait sur les
  **photos de cabine**. 🗄️ *Ce prompt a été lancé le 4 septembre au soir ; son résultat est la
  capture du 5 septembre ci-dessous. La liste d'annonces à ne pas retélécharger qu'il contient est
  périmée — reprendre celle de [annonces-exclues.md](annonces-exclues.md).* Archivage
  `page.html` + photos **annonce par annonce**, au fil de l'eau, et **aucun compte rendu demandé** —
  le JSON `__NEXT_DATA__` des pages sauvegardées contient tout, et il est plus fiable qu'une
  synthèse rédigée.

## Capture du 31 août 2026 : 22 annonces, HTML + photos + tableau récap

22 annonces (18 L3H2 prioritaires + 4 L4H2 secondaires), capturées via le relais Chrome,
archivées dans `<id>/2026-08-31/` (`page.html` + `photos/`). Tableau récapitulatif complet
(prix, année, km, vendeur, places, CT/entretien, aménagement) dans
[recap-2026-08-31.md](recap-2026-08-31.md).

Vue comparative (**coût par an de vie restante**, prix, année, km, filtres) : ouvrir
[comparateur-2026-08-31.html](comparateur-2026-08-31.html) dans un navigateur. ♻️ **Refondu le
7 septembre 2026** : le classement se fait désormais sur le **€/an**
([ADR-0020](../adr/0020-plancher-de-millesime-13-ans-de-vie-restante.md)) et non plus sur l'écart au
prix de marché — lequel reste consultable dans l'infobulle. Les **30 millésimes < 2019 sont masqués
par défaut**, une case à cocher les réaffiche (grisés) : ils restent dans le fichier, un candidat
écarté par un critère *paramétrable* n'est pas une exclusion définitive au sens de
l'[ADR-0016](../adr/0016-annonces-ecartees-sortent-de-archive.md). ⚠️ Le nom du fichier
garde la date du premier lot, mais **son contenu couvre les trois captures** (31 août, 2 et
5 septembre) — 74 candidats au 5 septembre 2026, **68 au 7 septembre** : deux sorties pour rideau
roulant latéral (`3263065771`, `3245572696`), un doublon retiré (`3258618210`, republiée sous
`3262735540`), puis **trois sorties pour propulsion** (`3170746271`, `3189230655`, `3193732404`,
[ADR-0021](../adr/0021-exclure-les-porteurs-propulsion.md)) →
[annonces-exclues.md](annonces-exclues.md).

⚠️ *Fausse alerte corrigée (1er septembre 2026)* : un premier contrôle basé sur le
`<title>` de chaque `page.html` avait fait croire que les 22 captures étaient
inutilisables (titres trompeurs : « Baisse de prix », « Calculatrice », « LinkedIn » —
probablement un artefact de l'app monopage de leboncoin qui ne met pas à jour le titre
d'onglet). Vérification du **contenu réel** de plusieurs fichiers (présence du bon prix,
de la bonne URL, du modèle) : les pages sont bien les bonnes fiches d'annonce. Retenue
utile : **ne pas juger un fichier sur ses métadonnées seules, vérifier le contenu.**

## Capture du 5 septembre 2026 : 44 annonces, et pas un seul porteur en 2 places avant

Résultat du [prompt du 4 septembre](prompt-relais-2-places-2026-09-04.md), lancé dans l'extension
Chrome. **44 annonces** capturées, archivées dans `<id>/2026-09-05/`. Toutes passent les critères
éliminatoires : L3H2, diesel, ≤ 20 000 €, nues ou quasi nues. C'est le premier lot dont **rien
n'est à écarter pour cause de motorisation, de format ou d'aménagement** — le prompt a bien filtré.

**Ce que le lot dit du critère « 2 places avant »** — le tri prioritaire du dossier depuis la
réponse DREAL du 3 septembre :

| Places à l'avant | Annonces |
|---|---|
| 3 places (banquette passager 2 places) | 36 |
| champ non renseigné | 7 |
| 1 place | 1 |
| **2 places** | **0** |

🔴 **Zéro sur 44.** Les cabines ont pourtant été regardées une par une sur les photos archivées, et
non lues dans le champ leboncoin : 21 configurations sont **confirmées visuellement**, 12 le sont
par le texte de l'annonce (« Banquette AV 2 places monobloc », mention fréquente chez les
concessions), les autres restent au niveau du champ déclaré. Le porteur d'usine en 2 sièges avant
n'est pas rare : il est **quasi absent** du marché de l'occasion à ce format et à ce prix.

✅ **En contrepartie, un candidat retrouvé sans nouvelle recherche** : le Sprinter `3194008684`
(2008, 375 000 km, 9 800 €), archivé le 2 septembre avec la mention « 2 places seulement (déclaré)
— à confirmer photos ». La photo de cabine a été regardée le 5 septembre : ce sont bien **deux
sièges avant individuels**. Ils sont donc **deux** sur ce critère, pas un — l'autre étant le Ducato
`3230965149`, lui aussi confirmé sur photo le 5 septembre.

### Ce que la relecture des photos a sorti, et que les champs ne disaient pas

- `3189029953` — 6 des 9 photos montrent un **porte-verre à ridelles**, pas un fourgon tôlé.
- `3263065771`, `3245572696` et `3259352463` — **rideau roulant** d'ex-véhicule de service à la
  place de la porte latérale / des portes arrière. 🗄️ **Les trois sont écartées** : la dernière le
  5 septembre (porte arrière), les deux autres le **7 septembre** (porte latérale)
  → [annonces-exclues.md](annonces-exclues.md).
  📌 Ce que ce cas apprend, et qui vaut au-delà de lui : un ⚠ porté au comparateur comme « réserve à
  vérifier » finit par devoir être tranché, et le plus tard est le plus coûteux. Le rideau roulant
  n'est pas une réserve, c'est un motif — il est passé aux critères éliminatoires.
- `3262837273` — titre « L3H3 » alors que le corps de l'annonce dit **L3H2**, 4 portes.
- `3170746271` (RJ3500), `3193732404` (RWD), `3189230655` — versions **propulsion** :
  ~10 cm de hauteur intérieure en moins ([dimensions-l3h2.md](../dimensions-l3h2.md)).
- `3262735540` — mêmes année, kilométrage et prix que `3258618210` : **la même annonce republiée**.
- `3128461631` — Movano de 2022, donc **4ᵉ génération = clone du Ducato**, pas du Master : ce sont
  les cotes Sevel qui s'appliquent, pas celles du Master.
- `3106287276` — atelier mobile **racké et fixé** (tiroirs, servante) : la dépose n'est pas celle de
  simples étagères bois.
- `3226185061` — rack **porte-verre** sur tout le flanc : perçages de carrosserie à contrôler.

### Deux captures imparfaites, notées telles quelles

- `3233831782` — le relais a enregistré une **page de résultats de recherche**, pas la fiche.
  Non archivée. À recapturer si l'annonce existe encore.
- `3263006559` — `page.html` correct mais **aucune photo** téléchargée le 5 septembre (`nb_images:0`
  dans le JSON de la page). 🗄️ **Comblé le 15 septembre 2026** : 8 photos récupérées séparément et
  rangées dans `annonces/3263006559/2026-09-05/photos/` — la réserve du comparateur est levée.
