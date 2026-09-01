# van — trouver un véhicule qui nous va

Achat d'un véhicule pour dormir et voyager en famille — 2 adultes, 2 enfants (2 ans½ et 7 mois).
Visé comme **van définitif** (ADR-0008) : la famille compte le garder, sauf imprévu — ce n'est
plus un achat-tremplin en vue d'une revente à 5-6 ans.

**Cible retenue : un porteur format « 600 » (~5,99 m) sur base Ducato/Boxer/Jumper, hauteur H2
(~2,60 m), 4 places carte grise — *nu* (à aménager nous-mêmes), ou déjà aménagé et négocié au
**prix nu** si l'aménagement existant ne colle pas aux critères cabine cibles (sinon, évalué à
part) (ADR-0007). Cabine idéale : 2 sièges avant pivotants + banquette arrière servant de salon ;
à défaut, on complète/modifie les sièges nous-mêmes si l'homologation reste simple et pas chère.
Budget : mis de côté pour l'instant (à rechiffrer plus tard — achat porteur + aménagement —
l'ancien repère de 37–42 k€ visait un véhicule déjà aménagé et payé comme tel).**

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
| [docs/adr/0001](docs/adr/0001-fourgon-amenage-plutot-que-camping-car.md) | Pas un camping-car — et pourquoi le camping-car bon marché est un piège. ⚠️ Le volet « aménagé, pas nu » est inversé par l'ADR-0005 |
| [docs/adr/0002](docs/adr/0002-compacite-prime-sur-le-confort.md) | La compacité prime sur le confort |
| [docs/adr/0003](docs/adr/0003-cible-fourgon-600-4-places.md) | Cible : fourgon « 600 », **4 places fermes**, couchages souples |
| [docs/adr/0004](docs/adr/0004-strategie-valeur-ducato-600.md) | 🗄️ Périmé — comparait des fourgons déjà aménagés (Ducato ancien vs VW Grand California), voir ADR-0005/0006 |
| [docs/adr/0005](docs/adr/0005-fourgon-nu-a-amenager-soi-meme.md) | **Fourgon nu** à aménager soi-même, plutôt qu'aménagé d'occasion |
| [docs/adr/0006](docs/adr/0006-config-porteur-nu-sieges-cabine.md) | Cabine cible : sièges avant pivotants + banquette arrière salon, 4e place en repli |
| [docs/adr/0007](docs/adr/0007-elargir-recherche-amenage-negocie-nu.md) | La recherche accepte aussi les fourgons déjà aménagés, négociés au **prix nu** si l'aménagement ne colle pas aux critères |
| [docs/adr/0008](docs/adr/0008-van-definitif-pas-tremplin.md) | Ce n'est plus un achat-tremplin : la famille compte garder ce van, sauf imprévu |
| [docs/adr/0009](docs/adr/0009-layout-lit-fixe-banquette-lit.md) | Layout arrière : lit fixe parents + banquette-lit convertible pour les enfants (≥190 cm) |
| [docs/adr/0010](docs/adr/0010-cuisine-chauffage-gaz.md) | Cuisine au gaz, chauffage au diesel |
| [docs/adr/0011](docs/adr/0011-confirmation-format-600-arbitrage-marge-maniabilite.md) | Format 600 (L3H2) confirmé — ni L4H2 (aucun gain de largeur), ni L2H2 (trop juste) ; arbitrage marge/maniabilité, pas obligation des 4 places |
| [docs/recherche-marche-sieges.md](docs/recherche-marche-sieges.md) | Note vivante — sièges, banquette-lit, VASP/gaz, dimensions L2/L3/L4, prix et pièges observés |

## Le raisonnement, étape par étape

1. **La métrique n'est pas le prix, c'est le coût de possession** (décote + entretien + assurance sur ~5-6 ans) et la **liquidité de revente**. *« Le van, on immobilise ; le camping-car, on dépense. »*
2. **Une seule contrainte est ferme : 4 places carte grise.** Elle exclut le « compact 5,4 m » (vans étroits, presque toujours homologués 3 places) — et c'est ce qui a fait céder la préférence pour la compacité (ADR-0002 → ADR-0003). ⚠️ *Nuance apportée par l'[ADR-0011](docs/adr/0011-confirmation-format-600-arbitrage-marge-maniabilite.md)* : les 4 places n'imposent pas précisément le format 600 (un porteur large plus court, L2H2, les permet aussi) — le 600 reste la cible, mais comme arbitrage marge/maniabilité, pas comme obligation.
3. **Les couchages, eux, étaient pensés souples au départ** : 2 couchages intégrés (parents), enfants en couchage d'appoint. Ce qui ouvre le gros segment « 4 places / 2 couchages », bien moins cher que les « Family+ » — mais voir point 7, ce repère a changé depuis.
4. **Revirement : on aménage nous-mêmes** (ADR-0005). Le porteur cible (format, hauteur, 4 places) ne change pas, mais on cherche un fourgon **nu**, pas déjà aménagé. La cabine idéale a 2 sièges avant pivotants + une banquette arrière qui sert de salon ; sinon, on complète ou modifie les sièges nous-mêmes si l'homologation reste simple et pas chère (ADR-0006).
5. **La recherche s'élargit aux fourgons déjà aménagés** (ADR-0007) : au **prix nu** si l'aménagement existant ne colle pas aux critères cabine cibles (ADR-0006) — il n'a alors aucune valeur retenue, bon ou mauvais — sinon le véhicule s'évalue sur ses propres mérites. Le risque à surveiller n'est pas le démontage des meubles mais l'état de la carrosserie (trous, fenêtres, lanterneaux) laissé par l'aménagement précédent. Le camping-car reste hors de cette voie : sa cellule n'est pas un aménagement démontable.
6. **Ce n'est plus un achat-tremplin** (ADR-0008) : la famille compte garder ce van, sauf imprévu. Le coût de possession et la liquidité de revente — jusqu'ici LA métrique de décision — passent au second plan ; ce qui compte devient la fiabilité et l'entretien sur un horizon long.
7. **Layout retenu : lit fixe parents à l'arrière + banquette-table qui se transforme en lit pour les enfants** (≥190 cm, ADR-0009) — remplace le couchage d'appoint souple du point 3 pour l'usage quotidien enfants, qui reste disponible pour un usage exceptionnel (invité, imprévu). Pas dimensionné pour durer jusqu'à l'adolescence par choix assumé : le jour où ça ne suffit plus, la famille revendra ou retouchera l'aménagement à ce moment-là.
8. **Conformité complète, sans raccourci** (ADR-0009/0010) : VASP obligatoire vu le lit fixe et la banquette homologuée retenus. Cuisson au gaz (certifiée Qualigaz/Bureau Veritas), chauffage au diesel pressenti (homologué E/R10) plutôt que gaz — jamais de raccourci sur l'une ou l'autre certification, même si ça coûte plus cher ou prend plus de temps. Le but est d'être en règle pour la route et le contrôle technique, pas seulement d'éviter une amende.
9. **Format 600 (L3H2) reconfirmé, pour une autre raison que celle d'origine** (ADR-0011) : ni plus long (L4H2 — même largeur intérieure, +37cm seulement, nettement moins maniable), ni plus court (L2H2 — légal pour les 4 places, mais trop juste en pratique, confirmé par un précédent réel). Le 600 est un arbitrage marge d'implantation / maniabilité, pas une obligation légale.

## ⚠️ Dette de vérification avant tout achat

- 🗄️ *Repère périmé, corrigé le 31 août 2026* : cette dette disait de revérifier « 4 places carte grise » sur chaque véhicule comme contrainte ferme éliminatoire. Elle datait d'avant la confirmation terrain que le 4-places-d'origine est quasi introuvable (ci-dessous). Depuis que la voie par défaut est « 3 places + conversion sièges + ajout banquette » (ADR-0006/ADR-0007) — confirmée par la revue des 5 premières annonces, voir [recherche-marche-sieges.md](docs/recherche-marche-sieges.md) — **tout candidat retenu passera par une nouvelle carte grise de toute façon**, quel que soit son nombre de places actuel. Ce n'est donc plus un critère de tri à l'achat, seulement un repère pour détecter une anomalie sur l'annonce (véhicule déjà modifié sans déclaration, déjà classé voiture particulière, cabine approfondie 7 places vendue comme compacte…).
  ⚠️ Recherche terrain (30 août 2026) : le 4 places d'origine est quasi introuvable sur ce format (0 résultat leboncoin avec ce filtre) — confirme que la voie « 3 places + ajout homologué » (ADR-0006) est la norme, pas l'exception.
- Le calcul de décote de la stratégie « Liquidité » surestimait sa perte (comparaison T5 anciens vs T6 récents, générations différentes). Biais noté ; ne change pas la conclusion — mais cette stratégie elle-même est périmée, voir ADR-0004.
- ✅ **Format « 600 » / H2 confirmé disponible sur le marché du fourgon nu** (recherche du 30 août 2026, annonces Ducato/Boxer/Jumper L3H2 réelles) — voir [recherche-marche-sieges.md](docs/recherche-marche-sieges.md). Reste ouvert : la config sièges avant (individuels vs banquette) n'apparaît pas dans les champs structurés des annonces — à vérifier par véhicule.
- Le budget total (achat porteur + aménagement) n'est pas chiffré — voir la section écart ci-dessous. Repère marché disponible pour le porteur nu seul : **5-20 k€ occasion (2008-2020), 30-45 k€ quasi-neuf** (recherche du 30 août 2026, ordre de grandeur non moyenné rigoureusement).

## 🔴 Le van est le premier levier d'arbitrage du foyer

C'est le point où ce projet touche tous les autres. Le budget global de l'opération immobilière
ne boucle **que si le van passe à la trappe** :

> Réno + extension, van conservé → **manque ≈ 42 000 €**.
> Réno + extension, van abandonné ou reporté → ça passe, à 8 000 € près.

→ [../extension/docs/10-financabilite.md](../extension/docs/10-financabilite.md)

**⚠️ Un écart de chiffre à lever, et maintenant plus incertain qu'avant :** l'outil de prêt
provisionne **50 000 €** pour le van
(`VAN_PRICE` dans [../maison/outil_pret/app/composables/useFinances.ts](../maison/outil_pret/app/composables/useFinances.ts)).
L'ancien repère de [ADR-0004](docs/adr/0004-strategie-valeur-ducato-600.md) (37–42 k€) est
**périmé** : il visait un véhicule déjà aménagé. Depuis le passage au fourgon nu (ADR-0005), le
budget se décompose en *achat du porteur nu* (a priori moins cher) + *aménagement*
(matériaux, isolation, électricité, eau, éventuellement un siège — non chiffré). Le nouveau
total n'est pas encore estimé. **À chiffrer, puis à réconcilier avec `VAN_PRICE`, avant de
trancher.**
