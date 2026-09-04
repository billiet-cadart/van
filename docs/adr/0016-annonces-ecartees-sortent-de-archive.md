# Une annonce écartée sort de l'archive ; sa trace, c'est la liste d'exclusion

## Contexte

L'archive `docs/marche/annonces/` a été créée le 31 août 2026 avec une règle simple, écrite dans
[marche/README.md](../marche/README.md) : **on garde tout**, même après la disparition d'une
annonce, parce que l'objectif n'est pas de suivre un véhicule qu'on négocie mais de **suivre le
marché dans le temps** — vitesse de rotation des annonces, mouvement des prix. Le dépôt assume pour
ça de stocker des binaires dans Git, contre son habitude.

Au 5 septembre 2026, cette archive contient **111 annonces** et 141 Mo. Or, sur ces 111, une
trentaine sont écartées depuis longtemps pour des motifs qui ne bougeront plus : format L4H2,
motorisation gaz, aménagement déjà fait, véhicule non roulant, prix hors budget. Elles ne
participent à aucun suivi utile : un fourgon aménagé qu'on n'achètera jamais ne dit rien sur le
prix des fourgons nus.

Le 5 septembre 2026, six annonces du lot du 2 septembre ont été écartées après relecture — dont
une (3259352463) dont la **photo arrière** montrait un rideau roulant à la place des portes
battantes, ce que ni le texte ni les champs structurés ne disaient.

## Décision

**Une annonce écartée pour un motif définitif sort de `annonces/` : ses fichiers sont supprimés, et
son numéro est inscrit dans [marche/annonces-exclues.md](../marche/annonces-exclues.md) avec son
motif, son prix, son année et son kilométrage.**

« Définitif » veut dire : un motif qui tient au véhicule et pas au moment — carrosserie, format,
motorisation, état, aménagement déjà posé, véhicule non roulant. Une annonce qui sort seulement du
budget du jour, ou dont le prix pourrait rebaisser, **reste archivée**.

La liste d'exclusion se colle dans le prompt du relais navigateur, à côté de la liste des annonces
archivées ([ADR-0015](0015-methode-recherche-marche.md) § 3). C'est ce qui empêche le tour suivant
de retélécharger ce qu'on vient d'écarter.

## Pourquoi

- **Ce qu'on garde doit servir à quelque chose.** L'archive existe pour suivre le marché *qui nous
  concerne*. Un L4H2 ou un van déjà aménagé n'en fait pas partie — le garder ne produit aucune
  observation, seulement du volume.
- **La ligne écrite vaut mieux que les fichiers.** Ce qu'on veut retrouver dans six mois, ce n'est
  pas la page HTML d'un fourgon à rideau roulant : c'est **pourquoi** on l'a écarté. Une ligne de
  tableau le dit mieux que 700 Ko de photos que personne ne rouvrira.
- **Sans liste, le tri se repaie à chaque tour.** Le coût réel d'une annonce écartée n'est pas son
  poids sur le disque, c'est le fait de la retélécharger et de la retrier au tour suivant.
- ⚠️ **Contrepartie assumée** : on perd les photos et le texte d'origine. Si un motif d'exclusion
  se révèle faux plus tard, on ne peut plus le vérifier sur pièce — il faut retrouver l'annonce, si
  elle existe encore. C'est le prix accepté pour une archive qui reste lisible.

## Conséquences

- Six annonces retirées le 5 septembre 2026 : `3219994109`, `3260375867`, `3212598086`,
  `3259352463`, `3260376939`, `3258826650`. Détail et motifs dans
  [marche/annonces-exclues.md](../marche/annonces-exclues.md).
- Elles sortent aussi du [comparateur](../marche/comparateur-2026-08-31.html) — donc de la
  régression prix ~ âge/km : **les écarts en % de tous les autres candidats ont bougé**.
- ⚠️ **Pas d'effet rétroactif.** Les ~31 annonces écartées avant cette décision gardent leurs
  fichiers sur disque ; elles sont listées à part dans `annonces-exclues.md`. Les nettoyer sera une
  passe dédiée, à décider — pas un effet de bord de cet ADR.
- Le principe « on garde tout » de [marche/README.md](../marche/README.md) est **amendé, pas
  annulé** : il vaut toujours pour les candidats vivants, y compris ceux qui disparaissent du site
  ou changent de prix.
- 🔴 Le prompt du relais navigateur porte désormais **deux** listes : les archivées et les exclues.
  Une annonce absente des deux est une vraie nouveauté.
