# Élargir la recherche aux fourgons déjà aménagés, négociés au prix du nu

## Contexte

L'[ADR-0005](0005-fourgon-nu-a-amenager-soi-meme.md) disait : *« on ne cherche plus un fourgon
déjà aménagé d'occasion, mais un fourgon nu »*. Ça excluait de fait toute la catégorie « fourgon
aménagé » de la recherche. Mais un fourgon déjà aménagé qui correspond au porteur cible (format
600, H2, config cabine [ADR-0006](0006-config-porteur-nu-sieges-cabine.md)) reste un candidat
valable **si son prix ne reflète pas l'aménagement** — la famille est prête à retirer ou refaire
l'aménagement existant de toute façon.

## Décision

La recherche porte désormais sur deux sources, avec la même grille de critères porteur (format
600, H2, config cabine ADR-0006) :

1. **Fourgon nu** (cible d'origine de l'ADR-0005), au prix du marché du nu.
2. **Fourgon déjà aménagé** — deux cas, selon que l'aménagement existant colle ou non aux
   critères déjà actés par l'ADR-0006 (sièges avant individuels/pivotants, banquette homologuée
   bien faite) :
   - **L'aménagement ne colle pas** (mauvaise config cabine/sièges, non homologué, daté…) :
     il n'a aucune valeur pour la famille, qui le referait de toute façon. Négocié au **prix
     nu**.
   - **L'aménagement colle déjà aux critères cibles** : ce n'est plus le même cas — le véhicule
     s'évalue sur ses propres mérites, potentiellement à un prix supérieur au nu (question mise
     de côté pour l'instant, budget non chiffré).

Le risque physique à surveiller n'est **pas** le désassemblage des meubles (jugé mineur, sans
exclusion) mais **l'état de la carrosserie elle-même** laissé par l'aménagement précédent : trous
mal placés, découpes de fenêtres et de lanterneaux excessives ou mal positionnées. Ce n'est jamais
éliminatoire en soi, mais ça pèse directement sur le prix négocié — plus le véhicule est modifié/
abîmé par l'aménagement précédent, plus la décote visée se justifie.

**Hors scope : le camping-car** (capucine/profilé/intégral) reste exclu de cette voie. Sa cellule
habitable est une structure dédiée, pas un aménagement démontable sur porteur utilitaire — la
logique « négocier comme si vide » ne s'y applique pas. Le rejet du camping-car reste celui de
l'[ADR-0001](0001-fourgon-amenage-plutot-que-camping-car.md).

## Pourquoi

- Élargit le vivier d'annonces sans changer la cible porteur (mêmes critères que le nu).
- Cohérent avec la position déjà actée sur le « claquant » : le budget d'aménagement n'est pas
  jugé récupérable à la revente. Symétriquement, un aménagement existant qu'on n'a pas payé
  soi-même n'a pas plus de valeur qu'un aménagement encore à faire.

## Conséquences

- Le critère de recherche s'étend aux annonces « fourgon aménagé » / « fourgonnette » en plus de
  « utilitaire nu » sur leboncoin, avec la même grille porteur (600, H2, sièges individuels si
  possible, 4 places ou 3+ajoutable).
- Chaque annonce « déjà aménagée » doit d'abord être triée : l'aménagement colle-t-il aux critères
  cibles (ADR-0006) ou non ? C'est ce tri qui détermine si on vise le prix nu ou une évaluation au
  cas par cas.
- Nouveau point à vérifier sur chaque annonce « déjà aménagée » : l'état de la carrosserie laissé
  par l'aménagement précédent (trous, fenêtres, lanterneaux) — jamais éliminatoire, mais à faire
  peser sur le prix négocié.
- La négociation « prix nu » suppose de connaître le prix de marché du nu par porteur/année/
  kilométrage — pas encore chiffré (budget mis de côté pour l'instant, voir README).
- ⚠️ Risque non nul que des vendeurs d'aménagements récents ou haut de gamme (qui collent déjà
  aux critères cibles) refusent de vendre au prix du nu — logique, puisque dans ce cas précis on
  ne vise plus le prix nu (voir Décision ci-dessus).
