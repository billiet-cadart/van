# Annonces écartées — la liste qui ne doit pas revenir

Ce dossier ne garde en archive que les **candidats vivants**. Une annonce écartée pour un motif qui
ne changera plus (carrosserie, motorisation, format, état) n'a plus de raison d'occuper `annonces/` :
ses fichiers en sortent, et **son numéro atterrit ici** →
[ADR-0016](../adr/0016-annonces-ecartees-sortent-de-archive.md).

🔴 **Cette liste se colle dans le prompt du relais navigateur**, à côté de celle des annonces
archivées. Sans elle, le prochain tour retélécharge exactement ce qu'on vient d'écarter — et on
refait le même tri en le payant deux fois.

⚠️ Un motif d'exclusion n'est pas un jugement sur le véhicule ni sur le vendeur : c'est **notre**
critère, sur **notre** projet. Le même fourgon convient sans doute très bien à quelqu'un d'autre.

## Retirées de l'archive le 5 septembre 2026

Six annonces du lot du 2 septembre, écartées après relecture. Leurs `page.html` et leurs photos ont
été **supprimés du dépôt** ; il ne reste que la ligne ci-dessous.

| ID | Véhicule | Année | Km | Prix | Motif |
|---|---|---|---|---|---|
| `3219994109` | Master L3H2 | 2002 | 225 000 km | 2 800 € | Contrôle technique en contre-visite — non conforme en l'état, remise en CT à chiffrer sur un porteur de 2002 à 225 000 km |
| `3260375867` | Jumper l3h2 | 2010 | 232 000 km | 3 900 € | Vendu sans contrôle technique — le coût de remise en CT n'est pas chiffrable avant de l'avoir vu, sur un porteur de 2010 à 232 000 km |
| `3212598086` | Peugeot boxer l3h2 | 2014 | 230 000 km | 6 500 € | Embrayage à refaire, annoncé par le vendeur — sur un porteur déjà à 230 000 km |
| `3259352463` | Renault Master L3H2 | 2009 | 132 000 km | 6 900 € | **Pas de porte arrière** : un rideau roulant à la place des battants (confirmé sur la photo archivée). Ouverture arrière et étanchéité entièrement à refaire, sur un ex-véhicule de service déjà racké |
| `3260376939` | Master L3H2 165CH Euro 6. Aménagem | 2017 | 230 000 km | 8 200 € | Immatriculé en Belgique — ré-immatriculation en France à faire avant toute transformation VASP, sur un porteur à 230 000 km |
| `3258826650` | Fiat Ducato 2.3 130ch L3H2 | 2019 | 154 000 km | 10 000 € | Perte de liquide de refroidissement signalée par le vendeur — joint de culasse possible, à chiffrer avant achat |

🗄️ Ces six étaient dans le comparateur jusqu'au 5 septembre 2026. Elles pesaient dans la régression
prix ~ âge/km : les écarts en % affichés pour **tous** les autres candidats ont donc bougé en même
temps qu'elles sont sorties.

## Écartées avant le 5 septembre — fichiers encore sur disque

Ces annonces ont été écartées quand la règle était encore de *tout garder*. Leurs fichiers sont
toujours dans `annonces/`. L'[ADR-0016](../adr/0016-annonces-ecartees-sortent-de-archive.md) ne les
supprime pas rétroactivement : c'est un ménage à faire en une seule passe, le jour où on le décide.

### Format L4H2 — [ADR-0011](../adr/0011-confirmation-format-600-arbitrage-marge-maniabilite.md)

| ID | Prix | Motif |
|---|---|---|
| `3226785978` | 9 990 € | Ducato L4H2 **GNV** 9 990 € — écarté deux fois : format et motorisation gaz ([ADR-0012](../adr/0012-exclure-porteurs-motorisation-gaz.md)) |
| `3235756663` | 14 000 € | Jumper L4H2, 14 000 € |
| `3172038406` | 14 990 € | Ducato L4H2, 14 990 € |
| `3218678796` | 19 950 € | Boxer L4H2 BlueHDi 140, 19 950 € |

### Motorisation gaz — [ADR-0012](../adr/0012-exclure-porteurs-motorisation-gaz.md)

| ID | Prix | Motif |
|---|---|---|
| `3234530816` | 20 000 € | Ducato L3H2 140 ch, 20 000 € — **GNC**, écrit dans le texte seulement, le champ « énergie » disait « Autre ». Était resté par erreur dans le comparateur jusqu'au 5 septembre 2026 |

### Aménagement trop avancé — lit fixe et/ou cuisine/sanitaires déjà posés

| ID | Prix | Motif |
|---|---|---|
| `3260513518` | 7 000 € | ex-ambulance : lit 140, meubles cuisine, plaque, frigo posés |
| `3252192128` | 8 500 € | cuisine complète, lit 170×190, WC chimique, bancs coffres |
| `3181490058` | 9 000 € | « semi-aménagé » mais lit et matelas posés |
| `3222115026` | 11 900 € | « tout est présent » pour y vivre |
| `3225669130` | 15 990 € | WC, cuisine, grand lit, penderie |
| `3209729316` | 16 500 € | lit, toilettes sèches, évier, panneau solaire |
| `3260522331` | 16 500 € | aménagement VASP complet (ex-ambulance de pompiers) |
| `3230908221` | 16 900 € | lit en peigne avec matelas sur mesure posé |
| `3260955848` | 17 500 € | van vécu pendant une année sabbatique, aménagement complet |
| `3230949857` | 17 500 € | aménagement VASP complet |
| `3236835638` | 17 900 € | lit 185×140 semble fixe + banc convertible |
| `3240076135` | 19 000 € | lit 140×190 surélevé, bloc cuisine évier + réchaud, toilettes chimiques. ⚠️ Le tableau du 31 août le décrivait comme « isolation + électricité seulement » : **c'était faux**, corrigé le 5 septembre 2026 |
| `3250527933` | 19 500 € | lit, WC chimique, four 2 feux gaz, douche, Truma |
| `3245307468` | 19 800 € | lit permanent, douche, WC sèches, frigo, 2 panneaux solaires |
| `3257540479` | 20 000 € | couchage, cuisinette gaz + évier, douche extérieure, chauffage |
| `3243353771` | 39 500 € | 2 lits fixes, VASP 4 places |

### Hors budget — plafond 20 000 € depuis le 2 septembre 2026

| ID | Prix | Motif |
|---|---|---|
| `3202627305` | 21 990 € | 1 990 € au-dessus du plafond — Jumper 2020, 76 488 km, concession. Le plus près de repasser si le prix bouge |
| `3257719662` | 22 000 € | 2 000 € au-dessus du plafond, **et** aménagement complet (douche, WC sèches) |
| `3144086448` | 25 999 € | 6 000 € au-dessus du plafond, **et** van déjà aménagé |
| `3148537724` | 29 900 € | Très au-dessus du plafond — Boxer 2025, 9 900 km, neuf + options |
| `2869595583` | 33 480 € | Très au-dessus du plafond — Jumper 2023, 7 900 km |
| `3111078233` | 34 788 € | Très au-dessus du plafond — Ducato 2023 quasi neuf, 14 718 km |
| `3251700006` | 98 900 € | Cinq fois le plafond — aménagement premium (PYLA Van Designers) |

### Ni en vente, ni roulant

| ID | Prix | Motif |
|---|---|---|
| `3259360967` | 90 € | annonce de **location** (90 €/jour), pas une vente |
| `3259386121` | 1 000 € | moteur HS (bielle cassée), vendu pour pièces |
| `3260825076` | 1 500 € | « ne démarre plus », sans CT |

## Liste à coller dans le prochain prompt de recherche

111 numéros : les 105 annonces encore archivées **plus** les 6
retirées le 5 septembre. Les annonces écartées mais encore sur disque y sont déjà, puisqu'elles sont
archivées.

```
2868920275,2869595583,2938366191,3060806551,3075795641,3080093734,3106287276,3111078233,3116492493,3122963576,3128461631,3134663226,3143102537,3143612906,3144086448,3147238492,3148537724,3152384908,3163741742,3170746271,3172038406,3176353629,3180964775,3181490058,3185684446,3187944612,3189029953,3189230655,3193732404,3194008684,3202627305,3209729316,3211588819,3212598086,3213522294,3218678796,3219994109,3221052068,3222115026,3222478171,3225669130,3226185061,3226785978,3226899680,3227572786,3228602420,3230908221,3230949857,3230965149,3234530816,3234575793,3235756663,3236835638,3237666342,3238967237,3239332719,3239593390,3240076135,3240937496,3242704186,3243353771,3244344835,3244375681,3245307468,3245572696,3248186538,3248909612,3249486543,3249812810,3250279944,3250527933,3250563706,3251302807,3251700006,3251788097,3252192128,3252505288,3254374285,3254686306,3254969421,3256457618,3256685548,3256752984,3257355972,3257540479,3257719662,3258477045,3258503783,3258618210,3258826650,3259352463,3259360967,3259386121,3259493374,3260375867,3260376939,3260513518,3260517653,3260522331,3260779231,3260825076,3260955848,3261130919,3261208920,3262735540,3262804917,3262819565,3262837273,3262998553,3263006559,3263065771
```
