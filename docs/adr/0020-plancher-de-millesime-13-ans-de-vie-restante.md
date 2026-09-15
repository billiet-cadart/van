# Plancher de millésime : le porteur doit avoir au moins 13 ans de vie devant lui

## Contexte

L'[ADR-0008](0008-van-definitif-pas-tremplin.md) a fait du fourgon le **van définitif** : plus de
revente planifiée, horizon 10-15 ans. Il en tirait une conséquence explicite qu'il laissait ouverte —
*« ce qui compte devient la fiabilité et le coût d'entretien sur un horizon long, pas encore mesuré
comme tel dans ce dépôt »*. Depuis, la recherche s'est faite **sans aucun critère d'âge** autre que le
plancher ZFE de janvier 2011, et le comparateur classe les candidats sur l'écart au prix de marché —
c'est-à-dire sur le **prix**, la métrique que l'ADR-0008 avait justement rétrogradée.

La mesure a été faite le 7 septembre 2026 →
[duree-de-vie-et-cout-par-an.md](../duree-de-vie-et-cout-par-an.md). Elle établit trois choses :

1. **L'aménagement (≈ 14–21 k€) ne survit pas au porteur** et coûte plus cher que lui. Le prix
   d'achat n'est donc pas la bonne métrique : c'est **`(porteur + aménagement) / années de vie
   restantes`**.
2. **C'est le calendrier qui tue le van, presque jamais le compteur** (~20 ans de vie calendaire,
   ~400 000 km de vie moteur, à 10 000 km/an la première arrivait toujours en premier). Sur les
   68 candidats actifs, **le kilométrage n'était le facteur limitant pour aucun**.
   🔴 **Prémisse corrigée le 14 septembre 2026** : les 10 000 km/an n'étaient qu'une hypothèse non
   mesurée. Remplacés par les 17 143 km/an réellement mesurés (voir
   [duree-de-vie-et-cout-par-an.md §5-6](../duree-de-vie-et-cout-par-an.md)), **7 des 38 candidats
   retenus sont désormais limités par le compteur**. Ça ne change rien au plancher ci-dessous (qui
   porte sur le millésime, pas le kilométrage), mais ça invalide les plafonds kilométriques chiffrés
   dans la Décision — voir la correction qui les accompagne.
3. **Le prix affiché ne classe pas les candidats ; l'âge, oui.** Sur les 61 candidats Crit'Air 2,
   prix et coût par an varient dans des proportions comparables (×2,5 et ×2,5 ♻️ recalculé le
   14 septembre 2026, ex-×2,6) mais **rangent les véhicules dans un ordre différent** : sur les
   10 moins chers à l'achat, **2** sont dans les 10 meilleurs en coût par an (ex-1). Le moins cher du
   dossier (Boxer 2019 224 000 km, 7 990 €) revient à **2 434 €/an**, ×1,22 le meilleur
   (**1 999 €/an**, Transit 2024 à 18 990 €) — un écart nettement plus faible que les « trois fois »
   d'origine, qui reposaient sur le taux de 10 000 km/an non mesuré.

## Décision

**Le millésime devient un critère de recherche**, à deux niveaux :

- 🔴 **Éliminatoire — au moins 13 ans de vie calendaire restante**, soit un millésime
  **≥ 2019** en 2026. Règle glissante, à ne pas figer sur l'année : `millésime ≥ année courante − 7`,
  sur une hypothèse de vie calendaire de 20 ans.
- ✅ **Cible de tri, non éliminatoire — millésime ≥ 2021** (15 ans restants). C'est le peloton qui
  sort en tête du classement en €/an sous **toutes** les hypothèses testées.
- 🗄️ **Le kilométrage cesse d'être un critère de tri.** Il devient un simple plafond, calculé et non
  choisi : `400 000 − km_par_an × années restantes`. ♻️ **Chiffres corrigés le 14 septembre 2026** :
  au taux mesuré de 17 143 km/an (remplace les 10 000 km/an d'origine, hypothèse non mesurée), ce
  plafond vaut **177 000 km sur un 2019, 143 000 km sur un 2021** (au lieu de 270 000 / 250 000).
  En dessous, un compteur plus bas ne se paie pas — il n'achète aucune année de vie.

⚠️ **Le critère s'applique au champ « millésime » des annonces, mais se confirme sur la 1ʳᵉ mise en
circulation** avant tout contact — même nuance que pour le plancher ZFE, où le recomptage du
5 septembre 2026 avait changé de résultat en passant de l'un à l'autre.

## Pourquoi 13 ans, et pas un autre chiffre

Parce que **l'aménagement doit avoir le temps de valoir ses 17 000 €**. Le chantier prend 1 à 2 ans
(dossier DREAL déposé en fin de chantier, [dossier-dreal-38.md](../dossier-dreal-38.md)) : 13 ans de
vie restante, c'est **~11 ans d'usage réel**. En dessous, on investit deux ans de travail et plus que
le prix du véhicule dans quelque chose qui part à la casse avant d'avoir servi.

Le seuil se lit aussi dans les chiffres : le coût par an passe de ~1 900-2 100 €/an sur les
millésimes 2019-2022 à **2 800-3 300 €/an dès 2016-2017**, puis **3 400-4 300 € sur 2013-2014**.

## Ce que ça coûte en candidats — la leçon de l'ADR-0017

L'[ADR-0017](0017-2-places-avant-critere-de-budget-pas-de-recherche.md) a retiré un critère
**parce qu'il ne laissait que 2 candidats sur 105**. Le contrôle a donc été fait avant, pas après :

| Plancher | Candidats restants (sur 68) |
|---|---|
| Aucun (état actuel) | 68 |
| **≥ 2019 (retenu)** | **38** |
| ≥ 2021 (cible de tri) | 22 |

**38 candidats sur 68** : le critère resserre sans refermer. Et contrairement au « 2 sièges avant »,
il ne demande **aucune information nouvelle** — le millésime est dans tous les champs structurés, il
n'exige ni photo de cabine, ni lecture du texte, ni contact vendeur.

## Conséquences

- **Le comparateur classe désormais en €/an**, pas en écart au prix de marché, et **masque par défaut
  les 30 candidats hors critère** — avec une case à cocher pour les réafficher (les données restent
  dans le fichier, conformément à l'esprit de l'[ADR-0016](0016-annonces-ecartees-sortent-de-archive.md) :
  un candidat écarté sur un critère *paramétrable* n'est pas un candidat écarté pour motif définitif,
  il ne sort donc pas de l'archive).
- **Les prompts de recherche marché ajoutent le plancher** → [../marche/README.md](../marche/README.md).
- 🔴 **Une dépense nouvelle entre au budget : le traitement anticorrosion** (~500–1 000 € au rachat).
  Puisque c'est la vie calendaire qui commande, et que l'usage ski expose le van au sel tous les
  hivers, c'est le poste au meilleur rendement du dossier : gagner 2 ans vaut ~4 000 €.
- ⚠️ **Un contre-argument entre avec le critère : l'AdBlue.** Viser plus récent, c'est acheter de la
  carrosserie et payer en électronique de dépollution (réservoir déformé, injecteur cristallisé,
  sondes — souvent > 2 000 €, parfois avant 100 000 km). Non quantifié ; **à vérifier véhicule par
  véhicule**, la présence d'un SCR ne se déduisant pas du millésime seul.
- **Sans effet sur la ZFE** : tous les candidats diesel sont Crit'Air 2 au mieux, le millésime n'y
  change rien au-dessus du plancher de janvier 2011 ([zfe-grenoble.md](../zfe-grenoble.md)). Le
  plancher de 2019 absorbe simplement celui de 2011.
- ⚠️ **Ce que la décision ne fait pas** : elle ne chiffre pas le budget total, et ne touche donc pas
  `VAN_PRICE` (50 000 €). L'ordre de grandeur qui sort du calcul — porteur 10-17 k€ + aménagement
  14-21 k€ ≈ **25 à 38 k€** — va dans le bon sens pour l'arbitrage de l'extension, mais il repose sur
  une provision d'aménagement non chiffrée (banquette-lit arrière notamment). **À réconcilier plus
  tard, pas ici.**
