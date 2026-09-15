# 🔴 Critère éliminatoire : pas de porteur propulsion (RWD / roues jumelées)

## Contexte

Depuis le 5 septembre 2026, la propulsion était **signalée sans être tranchée** : les versions
propulsion perdent ~10 cm de hauteur intérieure — **1 786 mm sur Transit** et **1 798 mm sur
Master**, au lieu de 1 886 mm en traction ([dimensions-l3h2.md](../dimensions-l3h2.md)). Trois
candidats portaient un ⚠ « à vérifier » à ce titre dans le comparateur, et y restaient candidats.

C'est exactement le schéma du **rideau roulant**, tranché deux jours plus tôt : *« les deux dernières
étaient restées candidates avec un simple ⚠ à vérifier — la réserve n'a fait que repousser la
décision »* ([annonces-exclues.md](../marche/annonces-exclues.md)). Une réserve qu'on ne lève jamais
n'est pas un critère, c'est une dette.

## Décision

**Tout porteur en propulsion est éliminatoire**, à roues simples comme à roues jumelées.

## Pourquoi

Parce que **la hauteur intérieure est la raison d'être du format retenu**. L'ADR-0003 l'a posé noir
sur blanc — *« compacité = hauteur, pas longueur »* — et le H2 a été choisi pour pouvoir **se tenir
debout** dans le van. Une version propulsion rend ça « difficile » (1 786 mm) : elle annule le
bénéfice pour lequel le H2 a été retenu, tout en gardant l'encombrement extérieur. Ce n'est pas un
inconvénient à pondérer, c'est le critère de format qui tombe.

S'y ajoutent, sans être décisifs : la voie arrière élargie des roues jumelées (encombrement et
stationnement, contre l'ADR-0002), et un plancher plus haut qui remonte tout l'aménagement.

⚠️ **Ce qu'on sacrifie sciemment** : les versions propulsion 3,5 t offrent en général une **charge
utile supérieure**, ce qui n'est pas rien sur un van aménagé chargé (ADR-0013 avait justement écarté
l'électrique pour sa charge utile). Arbitrage assumé : la hauteur passe devant la charge utile, et le
poste sera surveillé au moment du chantier plutôt que résolu par le porteur.

## Conséquences

- **Trois candidats sortent de l'archive**, tous confirmés sur le texte de leur annonce
  ([annonces-exclues.md](../marche/annonces-exclues.md)) :
  `3170746271` (Master « PROPULSION RJ3500 »), `3189230655` (Transit P350 « PROPULSION ROUES
  SIMPLES ») et `3193732404` (Transit « RWD »). Le dossier passe de **71 à 68 candidats**, dont
  **38 dans les critères** après le plancher de millésime
  ([ADR-0020](0020-plancher-de-millesime-13-ans-de-vie-restante.md)).
- **Les coefficients de la régression du comparateur bougent** avec le lot, comme à chaque sortie :
  380 €/millésime et 268 €/10 000 km, contre 385 € et 267 € sur 71 candidats. Les écarts en % de
  **tous** les autres candidats ont donc changé en même temps.
- 🔴 **Mots-clés à chercher dans les prompts de recherche** : `propulsion`, `RWD`, `RJ`, `RJ3500`,
  `RS3500`, `roues jumelées`, `P350`, `L3H2 350`.
  ⚠️ **Le champ structuré ne suffit pas** : sur les trois, deux l'annonçaient dans le titre
  (`rwd`, `PROPULSION RJ3500`) mais `3189230655` ne le disait que **dans le corps du texte**
  (« PROPULSION ROUES SIMPLES ») — son titre structuré, lui, ne mentionnait que « 2T FG P350 ».
  Même piège que le GNC de `3234530816` ([ADR-0012](0012-exclure-porteurs-motorisation-gaz.md)) :
  **lire le texte, pas seulement les champs**.
  📌 Heuristique : sur Transit, un `350` / `P350` dans la version doit déclencher la vérification —
  c'est la série lourde, souvent propulsion, mais **pas toujours** : `3213522294` (Transit 2024) et
  `3240937496` (2019) sont dans le lot sans mention de propulsion. Ce n'est pas une règle, c'est un
  signal d'alerte.
- ⚠️ **À vérifier sur la carte grise avant achat**, comme le nombre de places : la mention d'annonce
  reste une déclaration de vendeur.
