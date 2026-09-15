# AOC retenu pour la pose des sièges — et le choix du porteur se fait sous ses contraintes

**7 septembre 2026**

## Contexte

Les deux installateurs consultés le 4 septembre ont répondu le même jour, le 7 septembre
([installateurs/courriel-devis-2026-09-04.md](../installateurs/courriel-devis-2026-09-04.md)). La
comparaison est restée non conclusive quelques heures, pour une seule raison : **AOC n'avait pas
chiffré**, renvoyant à son configurateur en ligne. Les tarifs y ont été relevés le jour même.

**Le rang I, périmètre strictement identique, en TTC :**

| Poste | Equipage | **AOC** |
|---|---|---|
| Siège Booster Scopema (sans accoudoir, tissu standard uni) | 1 344 € | **770 €** |
| Embase pivotante conducteur (`CBTO16G2`) | 324 € | 283 € |
| Embase pivotante passager (`CBTO16D2`) | 372 € | 283 € |
| Adaptation caisson passager / socle `ACA78X250` + glissières `ACA93AD` | 468 € | 468 € |
| Main d'œuvre, attestation de montage incluse | (incluse) | 65 € |
| **Total rang I** | **2 508 €** | 🔴 **1 869 €** |

**−639 €, soit −25 %.** L'écart est presque entièrement dans le siège lui-même (−574 €) — même
fabricant, même référence. Le poste socle tombe **à l'euro près** sur les deux devis, ce qui
confirme qu'on compare bien la même prestation et non deux périmètres différents.

Trois éléments non tarifaires sont apparus au même moment sur le configurateur, et ils pèsent
autant que le prix :

> *« Vous pouvez choisir d'installer vous-même le matériel ou bien de me confier la pose. À noter
> que si vous souhaitez homologuer l'installation auprès de la DREAL, il faut obligatoirement me
> confier le montage. »*

> *« Côté conducteur : montage possible uniquement si votre siège conducteur d'origine est la
> version standard (sans airbag, sans embase tournante d'origine, sans suspension). »*

> *« Sur ce véhicule, il existe deux versions d'embase pivotante : standard ou centrée (même
> tarif). En version standard, l'axe de pivotement est décalé vers l'arrière et l'intérieur […]
> Si vous préférez que le siège retourné soit le plus possible vers la planche de bord, pensez à
> demander une version centrée. »*

## Décision

**1. AOC — Aménagements Olivier Collonge (Villard-Bonnot, ~15 km) est l'installateur retenu** pour
le poste sièges : conversion 3 → 2 places avant, les deux embases pivotantes, et la banquette-lit
arrière. **Equipage Camper Van n'est pas retenu.**

**2. Le choix du porteur se fait désormais sous les contraintes qu'AOC a énoncées.** Elles entrent
dans les critères de recherche d'annonces ([marche/README.md](../marche/README.md)), au même rang
que le format ou la motorisation.

**3. L'auto-pose des sièges et des embases est abandonnée.** Elle est incompatible avec
l'homologation, AOC l'écrit noir sur blanc.

## Pourquoi

- **Il est moins cher sur le seul périmètre comparable**, de 25 %, main d'œuvre et attestation
  comprises. Ce n'est pas l'argument principal, mais il ne joue pas contre.
- **15 km contre 450.** Sur un chantier où le véhicule doit être immobilisé, où une reprise est
  toujours possible et où la DREAL peut demander une pièce complémentaire, la distance n'est pas un
  détail de confort : c'est ce qui rend le prestataire joignable.
- **Il prend en charge le dossier DREAL (800 €), qu'Equipage exclut explicitement.** Sur un dossier
  dont le point dur est administratif et non technique, c'est l'écart qui compte le plus.
- **Il traite le prétensionneur par le haut** : les deux récupérés et rebranchés, dont un dormant
  sous le siège ([dossier-dreal-38.md](../dossier-dreal-38.md) § Q2). Ni résistance de 1,5 Ω, ni
  reprogrammation du calculateur — le circuit reste physiquement complet.
- **Il n'oppose aucune limite de millésime**, là où Equipage borne son offre à « avant 2021 »
  ([ADR-0018](0018-millesime-2021-limite-de-prestataire-pas-critere.md)). La recherche de porteur
  reste ouverte sur 2022-2026.
- **Il fournit les attestations d'homologation gratuitement**, et l'attestation de montage est
  incluse dans la main d'œuvre — c'est la pièce que la DREAL réclamera.
- **Il a su dire non contre son intérêt** : c'est lui qui aurait répondu *« plus possible sur ce
  modèle »* au demandeur Master 2 ([recherche-marche-sieges.md](../recherche-marche-sieges.md)).
  Sa réponse franchement positive sur Ducato/Boxer/Jumper n'en a que plus de valeur.
- **Et une raison qui n'est pas dans les documents, mais qui compte** : bien noté, à côté de chez
  nous, et la relation est établie. Sur un chantier de deux ans, c'est une donnée d'entrée.

## Conséquences

### 🔴 Trois contraintes nouvelles sur le choix du porteur

1. **Le siège conducteur d'origine doit être la « version standard »** — *sans airbag, sans embase
   tournante d'origine, sans suspension*. Un siège conducteur **suspendu** (courant sur les
   finitions hautes) ou à **airbag latéral** rend l'embase pivotante conducteur impossible, donc
   ruine la cabine cible de l'[ADR-0006](0006-config-porteur-nu-sieges-cabine.md). **À regarder sur
   les photos de cabine, annonce par annonce.**
2. **Plancher tôle en bon état et surtout pas repeint**, même à l'antirouille, sans reste de colle —
   condition de pose de la banquette arrière, déjà portée aux critères le 7 septembre.
3. **Copie de la carte grise à obtenir du vendeur avant de s'engager**, et à faire valider par AOC :
   *« pour s'assurer que ce n'est pas un véhicule "exotique" qui ne serait pas couvert par les PV
   d'homologation »*.

### Ce que la décision referme

- **L'auto-pose de l'embase pivotante est close.** La question ouverte du
  [dossier DREAL](../dossier-dreal-38.md) § Q3 — *RIB/Scopema délivre-t-il l'autorisation
  d'utiliser son PV à un particulier ?* — **n'a plus d'objet** : quelle que soit la réponse, la
  pose passe par AOC, et c'est lui qui fournit les attestations. La question 4 du courriel
  installateurs est répondue par la pratique.
- **La voie (b)** de la décision 1 du dossier DREAL (siège de carrossier homologué posé par un
  professionnel) **est tranchée**. Les voies (a) — porteur 2 places d'usine — et (c) — siège
  d'origine + accord Stellantis — sont abandonnées ; (a) reste un bonus s'il se présente au prix du
  marché ([ADR-0017](0017-2-places-avant-critere-de-budget-pas-de-recherche.md)).
- **La borne « avant 2021 » disparaît du dossier**, son auteur n'étant pas retenu.
  L'[ADR-0018](0018-millesime-2021-limite-de-prestataire-pas-critere.md) garde sa valeur — c'est lui
  qui a empêché de refermer la recherche sur une limite de catalogue — mais son enjeu tombe : il ne
  reste que l'option capteur à **72 €** sur les millésimes ≥ 2022.

### Ce qu'elle laisse ouvert

- ⬜ **La banquette-lit arrière n'est pas chiffrée chez AOC.** Le configurateur relevé ne couvre que
  les places avant. C'est le gros du poste — 4 910 € TTC chez Equipage — et le total du poste sièges
  reste donc inconnu.
- ⬜ **Embase standard ou centrée**, même tarif, à demander explicitement. En centrée, le siège
  retourné reste au plus près de la planche de bord et **rend de la place au salon** ; en standard,
  la rotation est plus facile. Arbitrage à faire avec le plan d'implantation
  ([ADR-0009](0009-layout-lit-fixe-banquette-lit.md), [dimensions-l3h2.md](../dimensions-l3h2.md)).
- ⬜ **Accoudoirs et soutien cervical non chiffrés** — le relevé a été fait sans. Le siège passager
  est aussi un fauteuil de salon, sur 10-15 ans ([ADR-0008](0008-van-definitif-pas-tremplin.md)).
- ⚠️ **65 € de main d'œuvre, à confirmer.** C'est très peu pour déposer une banquette, poser un
  siège et deux embases — et son courriel annonce *« 2 jours d'installation »*. Surtout, ce montant
  ne dit pas si la **récupération et le rebranchement des deux prétensionneurs** y sont compris ou
  facturés en sus.
- ⚠️ **La RIB Altaïr sur rails est hors configurateur et plus chère**, à traiter avec lui
  directement — de même que la banquette Altaïr en **1940 mm**, seule à donner le couchage ≥ 190 cm
  visé par l'[ADR-0009](0009-layout-lit-fixe-banquette-lit.md).

### Budget

Le poste **rang I** passe de la provision de ~2 600 € de l'[ADR-0017](0017-2-places-avant-critere-de-budget-pas-de-recherche.md)
à **1 869 € TTC**, chiffre relevé au tarif du fournisseur retenu. Restent à ajouter, hors banquette :
dossier DREAL **800 €**, autorisation constructeur **50 €** (PSA) ou **220 €** (Fiat), option capteur
**72 €** si le porteur est ≥ 2022.

🔴 Le budget total du van reste non chiffré ([README.md](../../README.md) § écart) : cet ADR fixe
une ligne, il n'en referme aucune autre.
