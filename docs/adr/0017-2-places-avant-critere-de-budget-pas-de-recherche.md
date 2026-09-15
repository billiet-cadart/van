# Le « 2 places avant » sort des critères de recherche et devient une ligne de budget

## Contexte

La DREAL 38 a confirmé le 3 septembre 2026 qu'un porteur **déjà configuré d'usine en 2 sièges avant
individuels** annule tout le volet administratif des sièges — ni accord constructeur, ni PV de
siège à faire autoriser ([dossier-dreal-38.md](../dossier-dreal-38.md) § 1 bis). Le critère est
alors devenu le **tri de premier rang** du dossier marché, et un tour de recherche entier lui a été
consacré ([prompt du 4 septembre](../marche/prompt-relais-2-places-2026-09-04.md)).

Ce tour a été dépouillé le 5 septembre 2026. **Il faut en tirer les conséquences.**

**Ce que le marché répond :**

| | |
|---|---|
| Annonces archivées à ce jour | **105** |
| … dont 2 sièges avant individuels | **2** (1,9 %) |
| Lot du 5 septembre, ciblé sur ce critère, cabines regardées une par une | **44 annonces, 0 en 2 places** |

Et sur les deux, **un seul est un candidat sérieux** :

- `3230965149` — Ducato 2020, 93 319 km, **18 960 €**. Rien à lui reprocher, sauf qu'il est collé
  au plafond des 20 000 €.
- `3194008684` — Sprinter 2008, **375 000 km**, 9 800 €, Crit'Air 3, et **4 découpes de fenêtres
  déjà faites** dans la carrosserie. Écarté de fait par son état.

**Ce que coûte l'alternative :** un siège de carrossier homologué posé par un professionnel, **à
partir de 2 600 € TTC** — voie (b) du [dossier DREAL](../dossier-dreal-38.md) § 1 bis.

**Ce que coûte la licorne**, à âge et kilométrage comparables, dans le lot du jour :

| | Porteur | Prix | Total sièges compris |
|---|---|---|---|
| Licorne | `3230965149` — Ducato 2020, 93 319 km | 18 960 € | **18 960 €** |
| Banal, pro | `3180964775` — Boxer 2019, 91 416 km | 12 490 € | 15 090 € |
| Banal, particulier | `3259493374` — Boxer 2019, 94 600 km | 11 000 € | 13 600 € |

## Décision

**Le « 2 places avant » cesse d'être un critère de recherche. Il devient une ligne du budget
d'aménagement.**

Concrètement :

1. **On choisit le porteur sur ce qui ne se rattrape pas** — état de la carrosserie, kilométrage,
   historique d'entretien, Crit'Air, format. La configuration des sièges avant se rattrape ; pas un
   plancher rouillé ni 300 000 km.
2. **On provisionne la conversion des sièges** dans le budget d'aménagement, comme l'isolation ou
   l'électricité. ⚠️ **Le montant n'est pas arrêté** : il dépend de l'arbitrage entre la voie (b)
   — carrossier homologué, à partir de 2 600 € TTC — et la voie (c) — siège d'origine d'occasion
   + accord Stellantis, 50-250 € mais issue incertaine. **Cet arbitrage reste ouvert**, et le
   [dossier DREAL](../dossier-dreal-38.md) dit explicitement de ne pas le trancher avant d'avoir
   comblé le trou Q2 (prétensionneur orphelin). Le repère de travail est donc **~2 600 €**, en
   majorant.
3. **Un porteur déjà en 2 places reste un bonus**, à saisir s'il se présente **au prix du marché**.
   Il ne justifie **ni une prime sur le prix du porteur, ni d'attendre**.
4. Le chip vert du [comparateur](../marche/comparateur-2026-08-31.html) reste : c'est un **repère**
   à la lecture, plus une cible de recherche.
   🗄️ **Revu le 7 septembre 2026 : le chip est retiré du comparateur.** Le repère à la lecture n'a
   plus d'objet une fois l'installateur choisi et la conversion budgétée
   ([ADR-0019](0019-aoc-installateur-retenu-sieges.md)) — il ne restait qu'une couleur qui attirait
   l'œil sur un critère dont cet ADR dit précisément qu'il ne doit plus piloter la lecture. Les
   valeurs `seats`/`seatsSrc` **restent dans les données** du fichier : c'est l'affichage qui tombe,
   pas le relevé.

## Pourquoi

- **La prime dépasse le coût de la solution.** Payer 3 900 € à 6 000 € de plus le porteur pour
  éviter 2 600 € de sièges, c'est perdre de l'argent pour éviter une démarche.
- **La rareté est mesurée, pas supposée.** 2 sur 105, et 0 sur 44 quand on cherche exactement ça,
  cabines à l'appui. Ce n'est pas un problème de méthode de recherche — l'[ADR-0015](0015-methode-recherche-marche.md)
  a déjà éliminé le filtre aveugle sur le champ « places ». C'est le marché.
- **Ce projet répare, il ne chasse pas le véhicule parfait.** Le fourgon est de toute façon nu et
  entièrement à faire ([ADR-0005](0005-fourgon-nu-a-amenager-soi-meme.md)) ; tout candidat retenu
  repasse par une carte grise ([ADR-0006](0006-config-porteur-nu-sieges-cabine.md)). Une opération
  de plus dans un chantier qui en compte cinquante ne mérite pas de piloter la recherche.
- **Le plafond de 20 000 € rend l'arbitrage tranchant.** La licorne mange 95 % du budget porteur.
  Un porteur banal à 12 000 € laisse **7 000 €** pour l'aménagement — sièges compris, et il en
  reste.

## Conséquences

- Le prochain prompt de recherche **ne porte plus le « 2 places avant » en critère de tri
  prioritaire**. Les critères éliminatoires ([marche/README.md](../marche/README.md)) ne changent
  pas.
- ⚠️ **Ce qui devient prioritaire à la place** : combler le **trou Q2** du dossier DREAL
  (prétensionneur orphelin) et l'**autorisation nominative** d'utiliser le PV de l'embase
  pivotante. Tant qu'ils sont ouverts, la ligne de budget « sièges » est un ordre de grandeur, pas
  un chiffre. C'est désormais le sujet bloquant, pas la recherche d'annonces.
- ⚠️ **Le repère de 2 600 € est un plancher, pas un devis** : il vient d'**un seul** installateur
  (Equipage Camper Van), dont la compatibilité avec les Ducato/Boxer/Jumper X250/X290 **n'est pas
  confirmée** — les modèles annoncés sur sa page sont des compacts
  ([recherche-marche-sieges.md](../recherche-marche-sieges.md)). Les devis en cours
  ([installateurs/](../installateurs/)) doivent le confirmer ou le corriger.
  ♻️ **Confirmé et complété le 7 septembre 2026 — devis Equipage n° D-2026-09623**
  ([installateurs/courriel-devis-2026-09-04.md](../installateurs/courriel-devis-2026-09-04.md)).
  Trois choses :
  **(1)** la compatibilité Ducato L3H2 **est** confirmée, le devis est établi pour ce porteur ;
  **(2)** le repère tenait — le poste équivalent (siège Booster + embase + adaptation caisson)
  ressort à **2 090 € HT = 2 508 € TTC** ;
  **(3)** 🔴 mais il **ne couvrait que le rang I**. La banquette-lit arrière ajoute **4 092 € HT =
  4 910 € TTC**, portant le poste sièges complet à **7 418,40 € TTC**, homologation DREAL **non
  comprise** dans ce devis. La provision de cet ADR n'est donc pas fausse, elle est **partielle** :
  elle ne dit rien de la banquette, qui relève de l'[ADR-0009](0009-layout-lit-fixe-banquette-lit.md).
  ⚠️ Chiffres d'un seul installateur, le second (AOC) n'ayant pas communiqué ses tarifs.
- ♻️ **7 septembre 2026, au soir — la provision du rang I devient un tarif relevé.** L'installateur
  est choisi ([ADR-0019](0019-aoc-installateur-retenu-sieges.md)) et son configurateur chiffre le
  rang I complet — siège Booster + les **deux** embases pivotantes + socle et glissières + pose,
  attestation de montage comprise — à **1 869 € TTC**. Le repère de ~2 600 € de cet ADR était donc
  **majorant**, comme annoncé : la conversion coûte **moins** que la prime demandée sur un porteur
  déjà en 2 places, et l'écart s'en trouve élargi. Le raisonnement de l'ADR n'est pas seulement
  confirmé, il l'est avec plus de marge.
- Cet ADR **ne réhabilite pas** `3230965149` ni `3194008684` : le premier reste un bon candidat,
  jugé désormais sur son prix comme les 72 autres, le second reste écarté par son état.
- 🔴 Le budget total du van reste non chiffré (voir [README.md](../../README.md) § écart) ; cet ADR
  y ajoute une ligne identifiée de plus, il ne le referme pas.
