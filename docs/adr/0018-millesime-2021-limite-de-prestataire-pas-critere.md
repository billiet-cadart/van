# La limite « avant 2021 » est une contrainte de prestataire, pas un critère de recherche

## Contexte

Les deux premières réponses d'installateurs, reçues le **7 septembre 2026**
([installateurs/courriel-devis-2026-09-04.md](../installateurs/courriel-devis-2026-09-04.md)), se
contredisent sur un point qui décide de l'étendue de la recherche de porteur.

**Equipage Camper Van** (Flourens, 31) — d'abord par téléphone, puis **par écrit sur son devis**
n° D-2026-09623 : le véhicule doit être **d'avant 2021**, sans détecteur de présence dans l'assise
(« détecteur de fesses ») ni airbag dans la banquette.

**AOC — Olivier Collonge** (Villard-Bonnot, ~15 km) — par courriel, le même jour :

> *« Pour les millésimes à partir de 2022, il y a des capteurs de présence intégrés aux assises,
> mais là encore pas de problème, il faut prendre l'option capteur dans le siège (72 euros), qui se
> branche en lieu et place sans rien reprogrammer. Ces véhicules n'ont pas d'airbag dans la
> banquette. »*

Les trois contraintes d'Equipage n'en font qu'une : la borne « avant 2021 » **est** la conséquence
des capteurs d'assise apparus autour de 2022. Là où AOC voit une option à 72 €, Equipage voit un
mur.

**Ce qui départage, et c'est écrit dans le devis lui-même.** La description du produit qu'Equipage
propose porte sa propre limite :

> *« Remplacement d'une banquette passager double avant (**sans airbag latéral ni système de
> non-bouclage de ceinture**) par un siège individuel homologué route »* — devis, réf. B-0013,
> siège Booster Scopema.

La parenthèse décrit le **périmètre de la prestation vendue**, pas une règle d'homologation. Le
siège Booster est présenté par Scopema comme *« le plus économique »* de la gamme
([pieces/scopema-siege-booster.pdf](../installateurs/pieces/scopema-siege-booster.pdf)) : il ne
reprend pas le capteur d'assise, donc Equipage borne son offre aux véhicules qui n'en ont pas. AOC
vend une variante du même siège **avec** l'option capteur, et n'a donc pas cette borne.

⚠️ **Ce raisonnement reste une lecture, pas une confirmation.** Il est cohérent avec les deux
documents, mais aucun des deux installateurs n'a été mis devant la contradiction, et la DREAL 38
n'a jamais été interrogée sur les capteurs d'assise — le
[dossier DREAL](../dossier-dreal-38.md) n'en parle nulle part.

## Décision

**La borne « avant 2021 » n'entre pas dans les critères de recherche d'annonces.**

1. Le millésime **ne devient pas un critère éliminatoire**. Les critères de
   [marche/README.md](../marche/README.md) ne changent pas.
2. Un porteur **de 2022 ou plus reste un candidat normal**, jugé sur l'état, le kilométrage, le
   prix et la Crit'Air comme les autres.
3. En revanche, **le millésime devient une donnée à relever** à l'archivage d'une annonce, parce
   qu'il conditionne désormais deux choses : l'option capteur à 72 €, et le choix de
   l'installateur.
4. ⬜ **Question à poser à AOC avant tout achat d'un porteur ≥ 2022** — la seule qui referme
   vraiment le sujet : *l'option capteur à 72 € est-elle couverte par le PV du siège, ou faut-il
   une pièce supplémentaire au dossier DREAL ?*

## Pourquoi

- **La contrainte appartient à un catalogue, pas au code de la route.** Elle est énoncée dans la
  description d'un produit précis, et l'autre installateur vend la variante qui la lève, chiffrée.
  Rétrécir la recherche de porteur sur la limite d'assortiment d'un fournisseur à 450 km serait
  laisser un catalogue décider d'un achat de 12 000 à 20 000 €.
- **L'asymétrie de coût est écrasante.** Se tromper dans ce sens coûte **72 €** — le prix de
  l'option, si AOC a raison, ou le renoncement à un porteur, si c'est Equipage. Se tromper dans
  l'autre sens ferme **quatre à cinq millésimes** (2022-2026) sur un marché où la recherche peine
  déjà, et où l'[ADR-0017](0017-2-places-avant-critere-de-budget-pas-de-recherche.md) vient
  précisément de constater qu'un critère rare ne doit pas piloter la recherche.
- **Le prestataire local n'a pas la contrainte.** AOC est à 15 km, Equipage à 450. Sur les deux
  autres écarts qui comptent — prise en charge DREAL (AOC : 800 € ; Equipage : exclue) et
  traitement du prétensionneur (AOC : les deux rebranchés ; Equipage : muet) — AOC est déjà devant.
  Un critère qui n'existe que chez le second n'a pas à contraindre le choix du porteur avant même
  que le prestataire soit arrêté.
- **C'est la logique constante de ce dossier** : le fourgon est nu et entièrement à faire
  ([ADR-0005](0005-fourgon-nu-a-amenager-soi-meme.md)) ; on choisit le porteur sur ce qui ne se
  rattrape pas, et un capteur d'assise se rattrape pour 72 €. Un plancher rouillé, non.

## Conséquences

- ✅ **7 septembre 2026, au soir — l'enjeu de cet ADR tombe, et il tombe dans le bon sens.**
  Equipage, seul porteur de la borne « avant 2021 », **n'est pas retenu**
  ([ADR-0019](0019-aoc-installateur-retenu-sieges.md)). Le risque décrit ci-dessous — *« si AOC
  dément, cet ADR tombe et la recherche se referme à ≤ 2021 »* — **ne peut plus se réaliser** :
  c'est le prestataire sans borne qui fait le chantier. Les millésimes **2022-2026 restent dans la
  recherche sans réserve**, et il ne subsiste de tout ce débat qu'une **option à 72 €**.
  📌 Cet ADR garde toute sa valeur : c'est lui qui a empêché qu'un catalogue de fournisseur, sur un
  devis finalement non retenu, referme quatre millésimes de recherche. Le raisonnement a tenu ; le
  pari à 72 € n'a même pas eu à être joué.
  ⬜ **La question 4 reste ouverte, mais elle change de nature** : elle ne décide plus de l'étendue
  de la recherche, seulement d'une **pièce au dossier DREAL** — *l'option capteur est-elle couverte
  par le PV du siège ?* Elle est reprise à l'action 3 bis *(b)* du
  [dossier DREAL](../dossier-dreal-38.md).
- ⚠️ **Le sujet n'est pas clos, il est classé.** La lecture « limite d'assortiment » est solide
  mais non confirmée. Si AOC dément, cet ADR tombe et la recherche se referme à ≤ 2021 — ce qui
  invaliderait une partie des annonces archivées. C'est le risque assumé ici, et il vaut 72 €.
- **Le millésime rejoint les données à relever** dans les fiches d'annonces, avec la mention
  « ≥ 2022 → option capteur 72 € » quand il s'applique.
- 📌 **Un critère nouveau apparaît en revanche, et celui-là est ferme** : le **plancher tôle ne
  doit pas être repeint**, même à l'antirouille, ni porter de reste de colle — condition posée par
  AOC pour la pose de la banquette arrière, et cohérente avec le piétement **collé sur rails**
  qu'Equipage chiffre de son côté. À vérifier sur les photos d'intérieur.
- Cet ADR **ne tranche pas le choix de l'installateur** : il empêche seulement qu'un devis non
  retenu impose sa contrainte à la recherche de porteur. 🗄️ *« L'arbitrage AOC / Equipage attend le
  chiffrage d'AOC »* — **fait le soir même** : tarifs relevés au configurateur, arbitrage rendu en
  faveur d'AOC ([ADR-0019](0019-aoc-installateur-retenu-sieges.md)).
- 🔴 Le budget total du van reste non chiffré (voir [README.md](../../README.md) § écart). Le devis
  Equipage y apporte le **premier chiffre complet du poste sièges — 7 418,40 € TTC**, homologation
  non comprise, là où l'ADR-0017 provisionnait ~2 600 € pour le seul rang I.
