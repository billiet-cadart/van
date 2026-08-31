# Le fourgon devient le van définitif, pas un achat-tremplin

## Contexte

Toute la démarche du dépôt reposait jusqu'ici sur le concept d'**achat-tremplin** (glossaire) :
un véhicule acheté pour la phase actuelle (petits enfants, maison en travaux), revendu à 5-6 ans
quand les enfants grandissent ou qu'on a le temps d'aménager « le van définitif ». Cette
hypothèse structure le glossaire entier — coût de possession mesuré sur ~5-6 ans, liquidité de
revente comme critère de choix actif, claquant comme dépense non récupérable à éviter.

Le passage à l'auto-aménagement ([ADR-0005](0005-fourgon-nu-a-amenager-soi-meme.md)) change la
donne : la famille a désormais les compétences et le temps pour un aménagement qui dure, pas
seulement pour faire au plus simple en attendant mieux. L'intention a suivi : la famille espère
garder ce véhicule, sauf imprévu — ce n'est plus un tremplin vers un « vrai » van plus tard,
c'est déjà le van définitif.

## Décision

Le fourgon en recherche est désormais considéré comme le **van définitif** de la famille, pas un
achat-tremplin. La revente reste possible en cas d'imprévu (filet de sécurité), mais elle n'est
plus planifiée ni un critère de choix actif du porteur ou de l'aménagement.

## Pourquoi

Le passage à l'auto-aménagement change ce qui est possible : la famille peut désormais construire
quelque chose fait pour durer, pas seulement pour tenir jusqu'à la prochaine étape.

## Conséquences

- **Glossaire à mettre à jour** : « achat-tremplin » (et sa mise en garde « à éviter : van
  définitif ») devient un terme périmé — voir [GLOSSARY.md](../GLOSSARY.md). Le « coût de
  possession » perd sa composante dominante (la décote, réalisée seulement à la revente) : ce qui
  compte devient la fiabilité et le coût d'entretien sur un horizon long (10-15 ans), pas encore
  mesuré comme tel dans ce dépôt.
- **La liquidité de revente** passe de critère de décision actif à filet de sécurité : toujours
  préférable de ne pas choisir un porteur invendable, mais ce n'est plus ce qui pilote le choix.
- **Le rejet du camping-car ([ADR-0001](0001-fourgon-amenage-plutot-que-camping-car.md)) n'est
  pas remis en cause** : son argument de liquidité perd en poids, mais le rejet reposait aussi sur
  des critères d'usage indépendants (pas de vie prolongée dedans, mauvais temps géré par des
  visites en intérieur) — ceux-là tiennent quel que soit l'horizon de possession.
- ⚠️ **Implication non chiffrée, à instruire plus tard** : un horizon de possession plus long peut
  justifier d'investir davantage dans le porteur et l'aménagement (plus vécu, jamais revendu) —
  question de budget explicitement mise de côté pour l'instant par la famille, à reprendre le
  moment venu.
- Aucun chiffre (`VAN_PRICE`, financabilité extension/maison) n'est modifié par cette décision —
  elle ne change pas le montant de l'achat en cours, seulement l'horizon d'usage après achat.
