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

**Tri prioritaire, pas éliminatoire** :

- 🗄️ **2 sièges avant d'origine — n'est plus un critère de tri depuis le 5 septembre 2026**
  ([ADR-0017](../adr/0017-2-places-avant-critere-de-budget-pas-de-recherche.md)). Le critère est
  juste — il annule tout le volet administratif des sièges, confirmé par la DREAL 38
  ([dossier-dreal-38.md](../dossier-dreal-38.md) § 1 bis) — mais il est **introuvable** : 2 sur 105
  annonces archivées, et **0 sur les 44** du lot du 5 septembre, pourtant capturé pour ça, cabines
  regardées une par une. Et la prime demandée sur le porteur (≈ 3 900 à 6 000 €) **dépasse le coût
  de la conversion** (à partir de ~2 600 € TTC). C'est donc devenu une **ligne de budget**, pas une
  cible de recherche. Le chip vert du comparateur reste, comme repère à la lecture.
  ⚠️ Si le critère revenait un jour : le champ « Nombre de place(s) » est vide dans **31 %** des
  annonces — **jamais comme filtre de recherche**, sous peine d'écarter en aveugle.
- **Crit'Air 2 minimum** (1ʳᵉ immatriculation ≥ 01/2011) vu la ZFE grenobloise — non éliminatoire,
  décision assumée au cas par cas ([zfe-grenoble.md](../zfe-grenoble.md)).

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

Vue comparative (prix, année, km, **places à l'avant**, filtres) : ouvrir
[comparateur-2026-08-31.html](comparateur-2026-08-31.html) dans un navigateur. ⚠️ Le nom du fichier
garde la date du premier lot, mais **son contenu couvre les trois captures** (31 août, 2 et
5 septembre) — 74 candidats au 5 septembre 2026.

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
- `3263065771` et `3259352463` (celle-ci écartée) — **rideau roulant** d'ex-véhicule de service à
  la place de la porte latérale / des portes arrière.
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
- `3263006559` — `page.html` correct mais **aucune photo** téléchargée. Archivée quand même, avec
  la réserve portée dans le comparateur.
