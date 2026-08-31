# Fourgon nu à aménager soi-même, plutôt qu'aménagé d'occasion

## Décision

On ne cherche plus un fourgon **déjà aménagé** d'occasion, mais un fourgon **nu** — le
même type de porteur (Ducato/Boxer/Jumper et cousins), vide de tout aménagement
intérieur — pour l'aménager nous-mêmes.

Ça inverse la partie « pas de fourgon nu » de la décision de l'[ADR-0001](0001-fourgon-amenage-plutot-que-camping-car.md).
Le reste de l'ADR-0001 — le rejet du camping-car, l'argument de liquidité — reste
valable tel quel : seul le choix « aménagé vs nu » change.

## Pourquoi

L'ADR-0001 écartait le fourgon nu « faute de bande passante, malgré le niveau
technique ». Ce n'est plus le cas : la famille a désormais les compétences, le budget et
le temps pour mener l'aménagement elle-même.

## Conséquences

- **Le porteur cible ne change pas** : toujours un format « 600 » (~5,99 m), hauteur H2
  (~2,60 m), 4 places carte grise — voir [ADR-0002](0002-compacite-prime-sur-le-confort.md)
  et [ADR-0003](0003-cible-fourgon-600-4-places.md). Ces contraintes portent sur le
  porteur, pas sur l'aménagement : elles s'appliquent identiquement à un fourgon nu.
- **[ADR-0004](0004-strategie-valeur-ducato-600.md) (stratégie « Valeur » vs
  « Liquidité ») est périmé** : il comparait des fourgons déjà aménagés par des
  carrossiers (Adria, Pilote, VW California). Cette comparaison ne s'applique plus. Les
  critères de choix du porteur nu (sièges, cabine) sont repris dans
  [ADR-0006](0006-config-porteur-nu-sieges-cabine.md).
- ⚠️ **Le budget change de nature.** L'ADR-0004 visait 37-42 k€ pour un véhicule fini.
  Un fourgon nu coûte moins cher à l'achat, mais il faut ajouter le budget
  d'aménagement (matériaux, isolation, électricité, eau, temps). Le total
  (achat porteur + aménagement) n'est pas encore chiffré — **à faire avant de
  réconcilier avec `VAN_PRICE` dans l'outil de prêt**, écart déjà signalé dans le
  [README](../../README.md).
