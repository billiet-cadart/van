# Exclure les porteurs électriques

## Contexte

Suite immédiate de l'[ADR-0012](0012-exclure-porteurs-motorisation-gaz.md) (exclusion des
motorisations gaz), même consigne étendue à l'électrique le 4 septembre 2026.

État des lieux avant décision : **aucun véhicule électrique dans le dossier**. Le balayage des
68 annonces archivées ne trouve ni valeur « Électrique » dans le champ `fuel` (40 Diesel, 1 GNV,
1 « Autre », 26 non renseignés), ni mention de traction électrique dans le corps des annonces —
les dizaines d'occurrences du mot « électrique » relevées sont toutes des vitres, rétroviseurs,
packs et installations 12 V d'aménagement. **La décision est donc purement préventive** : elle ne
retire aucun candidat, elle ferme une porte avant qu'un cas ne se présente.

## Décision

**Les porteurs à motorisation électrique sont écartés** — e-Ducato, e-Boxer, e-Jumper, Master
E-Tech / Z.E., eSprinter, eTransit et équivalents. Critère **éliminatoire**, appliqué au tri des
annonces déjà archivées comme à tous les téléchargements à venir, au même rang que le format, le
plafond de prix et l'exclusion du gaz.

⚠️ **Ne concerne que la traction.** Toute l'installation électrique de l'aménagement — batteries de
servitude, panneaux solaires, convertisseur — est inchangée, et reste soumise au **R10** exigé par
la DREAL sur tout équipement fonctionnant en roulant
([dossier-dreal-38.md](../dossier-dreal-38.md)).

## Pourquoi

- **La charge utile est le point dur, et c'est celui que la batterie attaque.** Un aménagement VASP
  complet (isolation, mobilier, banquette homologuée, eau, batteries) pèse plusieurs centaines de
  kilos, à prendre sur une charge utile de **1 275 à 1 540 kg** sur le Sevel diesel
  ([dimensions-l3h2.md](../dimensions-l3h2.md), fiche constructeur). Une batterie de traction
  réduit cette réserve d'entrée de jeu, sur un dossier où la **répartition des masses et la pesée**
  font partie des pièces exigées. ⚠️ Le déficit exact de charge utile sur un e-Ducato n'a pas été
  relevé sur fiche constructeur — c'est le raisonnement qui est solide, pas un chiffre.
- **L'autonomie ne correspond pas à l'usage visé** : voyager en famille, sur de longues distances,
  véhicule chargé à bloc, souvent loin des réseaux de recharge rapide. ⚠️ Ordre de grandeur non
  vérifié dans cette session — mais l'écart avec un plein de gasoil n'est pas discutable sur ce
  gabarit et à cette charge.
- **Le van est visé comme définitif, gardé 10-15 ans** ([ADR-0008](0008-van-definitif-pas-tremplin.md)).
  Sur un véhicule d'occasion à ce plafond de prix, l'**état de la batterie de traction** serait
  l'inconnue dominante de l'achat — et la seule qu'on ne peut ni voir sur photo, ni corriger
  soi-même, contrairement à tout le reste du projet (voir le principe d'auto-réparation qui porte
  l'[ADR-0005](0005-fourgon-nu-a-amenager-soi-meme.md)).
- **Aucun gain côté habitat** : la batterie de traction n'alimente pas la cellule. Il faudrait de
  toute façon le parc de batteries de servitude prévu — le surcoût ne rachète rien.
- **Le marché ne l'offre pas à ce prix** : aucun fourgon électrique de ce format n'apparaît sous
  20 000 € dans les 68 annonces relevées. Le critère est donc théorique aujourd'hui, ce qui est
  précisément le bon moment pour le poser.
- Le seul avantage — **Crit'Air E** face à la ZFE grenobloise ([zfe-grenoble.md](../zfe-grenoble.md))
  — ne pèse pas plus ici que pour le gaz : le projet obtiendra une dérogation VASP de toute façon.

📌 Même réserve que pour l'ADR-0012 : la décision vient d'une consigne directe, pas d'une analyse
comparative demandée à l'avance. Les raisons ci-dessus sont celles que le dossier documente ; si le
motif réel de la famille est autre, c'est ici qu'il se complète.

## Conséquences

- **Aucun candidat retiré** : le total reste à **37 candidats actifs**.
- **Critère ajouté à la grille de téléchargement**, à côté de l'exclusion gaz : écarter tout ce qui
  n'est pas Diesel au champ `fuel` (Diesel = `2`), et chercher dans le **corps** de l'annonce
  `électrique`, `100 % électrique`, `e-Ducato`, `Z.E.`, `E-Tech`, `kWh`, `borne de recharge`.
  ⚠️ **Le mot « électrique » seul est un très mauvais filtre** : sur les 68 annonces archivées il
  ressort **29 fois**, et **jamais** pour une traction électrique — vitres, rétroviseurs, pack
  électrique, kit solaire. Lire le contexte, ne pas écarter sur le mot.
- Le code `fuel` de l'électrique n'a **pas** été relevé (aucune annonce du corpus ne le porte) — se
  fier au libellé « Électrique », pas à un code supposé.
- Grille complète et à jour : [marche/README.md](../marche/README.md).
