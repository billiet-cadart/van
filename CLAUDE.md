# Consignes pour Claude — dépôt `van`

Ce dépôt porte la recherche d'un fourgon aménagé pour la famille.

## 1. Les cinq dépôts vivent côte à côte

```
billiet-cadart/
├── maison/      ← l'achat, les pièces sources, outil_pret
├── travaux/     ← la rénovation du 1er étage
├── extension/   ← l'agrandissement + l'arbitrage financier
├── van/         ← la recherche du fourgon
└── comptes/     ← l'historique des dépenses
```

Ce sont **cinq dépôts Git distincts** (org GitHub `billiet-cadart`), pas un monorepo. Ils se citent les
uns les autres par chemin relatif — `../maison/sources/bien/plans-actuels/plan-1er.png`,
`../extension/docs/10-financabilite.md`. **Ces liens ne résolvent que dans cette disposition**, pas sur
GitHub : c'est un choix assumé, pour éviter de dupliquer 71 Mo de PDF et de plans.

Si un dépôt voisin est absent du disque, **dis-le** — ne recrée pas le fichier manquant, et ne
transforme pas le lien en note de bas de page.

Pour installer l'ensemble :

```bash
mkdir billiet-cadart && cd billiet-cadart
for r in maison travaux extension van comptes; do
  git clone git@github.com:billiet-cadart/$r.git
done
```

## 2. Une session peut écrire dans plusieurs dépôts

C'est le cas normal, pas l'exception. Les quatre projets partagent leurs chiffres : le prix du van
décide si l'extension est finançable, le budget des travaux dépend de l'extension, et tout dépend du
prêt. Une seule décision touche donc souvent trois dépôts.

`.claude/settings.json` autorise déjà l'accès aux quatre dépôts voisins : **tu peux y lire et y écrire
directement**, sans demander l'ouverture d'une session séparée.

🔴 **Ne laisse jamais un dépôt à moitié à jour.** Un montant qui dit 50 000 € ici et 40 000 € là est le
principal risque de ce dossier — il a déjà eu lieu (« stratifié » contre « contrecollé », ~2 000 €
d'erreur, ADR-011). Quand une modification touche plusieurs dépôts : la faire partout, **et
l'enregistrer partout, dans la même foulée**.

## 3. Isabelle n'est pas technique — « sauvegarder » veut dire tout faire

Compte GitHub : **`isacadart-a11y`**.

Elle ne connaît ni *commit*, ni *push*, ni *pull*, ni *branche*, ni *conflit*. Elle dira
« **sauvegarde** », « enregistre », « garde ça », « c'est bon tu peux garder ». Pour elle, tout ça est
un seul geste : **enregistrer son travail**.

**Ce que ça veut dire concrètement**, pour *chaque* dépôt modifié :

1. `git pull --rebase` (récupérer ce qui a changé ailleurs)
2. `git add -A`
3. `git commit` avec un message **en français**, qui décrit le changement — jamais « update » ou « wip »
4. `git push`

### Les règles, sans exception

- **Parle-lui en français**, toujours. Toute la documentation est en français.
- **Récupère (pull) en début de session**, avant de modifier quoi que ce soit. Timothée travaille sur
  les mêmes dépôts : elle ne doit pas partir de fichiers périmés.
- **Ne lui montre jamais de sortie Git brute**, ni de jargon. Pas de SHA, pas de « HEAD », pas de
  « rebase », pas de « staging ».
- **Ne lui demande jamais de résoudre un conflit**, ni de choisir entre deux versions d'un fichier au
  format Git. Si un conflit survient : règle-le toi-même quand c'est sans risque, sinon explique la
  situation en une phrase simple et propose un choix en langage courant.
- **Rends compte en une ligne**, en nommant les projets et non les dépôts :
  *« C'est enregistré — j'ai mis à jour les travaux et l'extension. »*
- **S'il n'y a rien à enregistrer**, dis-le simplement, sans expliquer pourquoi Git ne voit rien.
- 🔴 **Jamais de `push --force`, jamais de réécriture d'historique, jamais de `reset --hard`, jamais de
  suppression de son travail.** En cas de doute, ne fais rien et demande.

La routine complète est dans [`.claude/skills/sauvegarder/SKILL.md`](.claude/skills/sauvegarder/SKILL.md) —
elle se déclenche aussi bien par `/sauvegarder` que par les mots ci-dessus.

## 4. Ce qui est propre à ce dépôt

- Les décisions sont des ADR numérotés dans `docs/adr/`, le vocabulaire est dans `docs/GLOSSARY.md` (qui ne contient volontairement ni chiffres ni décisions). Garder cette séparation.
- ⚠️ Écart connu, non tranché : l'outil de prêt provisionne **50 000 €** pour le van, les ADR visent **37–42 k€**.

## 5. La forme des documents

Ces documents ne sont pas de la documentation *a posteriori* : ce sont des notes de travail vivantes,
écrites en français, qui **assument leurs incertitudes**. Les conventions à respecter :

- Un fait vérifié, une hypothèse et une décision ne se présentent pas pareil. `⚠️` signale un risque,
  `🔴` un point bloquant, `✅` un point tranché, `🗄️` un document clos.
- Quand un chiffre est incertain, **le dire** — fourchette, ordre de grandeur, ou « jamais métré ».
  Ne jamais lisser une incertitude en chiffre net.
- Quand un document est périmé, **il le dit en tête** et renvoie vers celui qui le remplace. On ne
  supprime pas : le raisonnement d'origine garde sa valeur.
- Les décisions se consignent en ADR (contexte → décision → conséquences), pas dans le corps des notes.
