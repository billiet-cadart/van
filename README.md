# van — trouver un véhicule qui nous va

Achat d'un véhicule pour dormir et voyager en famille — 2 adultes, 2 enfants (2 ans½ et 7 mois) —
pendant une phase de vie « petits enfants + maison en travaux ».

**Cible retenue : fourgon aménagé d'occasion, format « 600 » (~5,99 m) sur base Ducato/Boxer/Jumper,
millésime 2014-2017, dépouillé, 4 places carte grise. Budget du besoin ≈ 37–42 k€.**

> 📁 **Ces cinq dépôts se clonent côte à côte**, dans un même dossier parent : `maison/`, `travaux/`,
> `extension/`, `van/`, `comptes/`. Ils se citent les uns les autres, et ces liens **ne résolvent que
> dans cette disposition** — pas sur GitHub. Une même session de travail peut donc modifier plusieurs
> dépôts à la fois, et c'est le cas normal.
>
> 💾 **Pour enregistrer son travail, il suffit de demander « sauvegarde ».** Claude s'en occupe, dans
> tous les dépôts concernés, sans qu'il y ait besoin de connaître Git. Détails → [CLAUDE.md](CLAUDE.md).

## Les documents

| Doc | Contenu |
|---|---|
| [docs/GLOSSARY.md](docs/GLOSSARY.md) | Le vocabulaire de la décision — **achat-tremplin**, **coût de possession**, **claquant**, **places carrossées**, **soute**, **hors-gel**… Ni chiffres ni décisions |
| [docs/adr/0001](docs/adr/0001-fourgon-amenage-plutot-que-camping-car.md) | Fourgon aménagé d'occasion, **pas** un camping-car — et pourquoi le camping-car bon marché est un piège |
| [docs/adr/0002](docs/adr/0002-compacite-prime-sur-le-confort.md) | La compacité prime sur le confort |
| [docs/adr/0003](docs/adr/0003-cible-fourgon-600-4-places.md) | Cible : fourgon « 600 », **4 places fermes**, couchages souples |
| [docs/adr/0004](docs/adr/0004-strategie-valeur-ducato-600.md) | Stratégie « Valeur » (Ducato 600 ancien) plutôt que « Liquidité » (VW Grand California) |

## Le raisonnement, en trois temps

1. **La métrique n'est pas le prix, c'est le coût de possession** (décote + entretien + assurance sur ~5-6 ans) et la **liquidité de revente**. *« Le van, on immobilise ; le camping-car, on dépense. »*
2. **Une seule contrainte est ferme : 4 places carte grise.** Elle impose le format 600, parce que les vans ≤ 5,4 m sont presque toujours homologués 3 places. « Compact 5,4 m » et « 4 places » sont incompatibles — et c'est ce qui a fait céder la préférence pour la compacité (ADR-0002 → ADR-0003).
3. **Les couchages, eux, sont souples** : 2 couchages intégrés suffisent, les enfants dorment en couchage d'appoint. Ce qui ouvre le gros segment « 4 places / 2 couchages », bien moins cher que les « Family+ ».

## ⚠️ Dette de vérification avant tout achat

- **4 places carte grise : confirmé sur une seule annonce.** À revérifier **sur la carte grise de chaque véhicule** — c'est la seule contrainte ferme, et il ne faut jamais la croire sur la foi de l'annonce.
- Le calcul de décote de la stratégie « Liquidité » surestimait sa perte (comparaison T5 anciens vs T6 récents, générations différentes). Biais noté ; ne change pas la conclusion.

## 🔴 Le van est le premier levier d'arbitrage du foyer

C'est le point où ce projet touche tous les autres. Le budget global de l'opération immobilière
ne boucle **que si le van passe à la trappe** :

> Réno + extension, van conservé → **manque ≈ 42 000 €**.
> Réno + extension, van abandonné ou reporté → ça passe, à 8 000 € près.

→ [../extension/docs/10-financabilite.md](../extension/docs/10-financabilite.md)

**⚠️ Un écart de chiffre à lever :** l'outil de prêt provisionne **50 000 €** pour le van
(`VAN_PRICE` dans [../maison/outil_pret/app/composables/useFinances.ts](../maison/outil_pret/app/composables/useFinances.ts)),
alors qu'[ADR-0004](docs/adr/0004-strategie-valeur-ducato-600.md) vise **37–42 k€**.
Si c'est 40 k€, l'écart du scénario « van conservé » tombe à ~32 000 € — ça ne sauve pas le scénario,
mais ça change l'ampleur de la question. **À réconcilier avant de trancher.**
