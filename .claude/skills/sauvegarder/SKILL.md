---
name: sauvegarder
description: Enregistrer le travail en cours dans tous les dépôts concernés — récupération, commit et publication. À utiliser dès que quelqu'un dit « sauvegarde », « enregistre », « garde ça », ou « save ».
---

# Sauvegarder

Isabelle (`isacadart-a11y`) n'est pas technique. Pour elle « sauvegarder » est **un seul geste**, et il
couvre tous les dépôts qu'on a touchés. Fais tout, sans rien lui demander de technique.

## La routine

Pour **chacun** des cinq dépôts (`maison`, `travaux`, `extension`, `van`, `comptes`) présent sur le
disque :

1. Vérifier s'il a des modifications — `git status --porcelain`. S'il est propre, passer au suivant.
2. `git pull --rebase` — récupérer ce qui a changé ailleurs (Timothée travaille sur les mêmes dépôts).
3. `git add -A`
4. `git commit -m "<message en français, descriptif>"`
   Le message décrit **le changement**, pas le geste : « Budget entreprises : SdB du 1er supprimée »,
   pas « update » ni « sauvegarde ».
5. `git push`

Puis rendre compte **en une ligne, en français, en nommant les projets** :

> C'est enregistré — j'ai mis à jour les travaux et l'extension.

## Ce qu'il ne faut jamais faire

- 🔴 Pas de `push --force`, pas de `reset --hard`, pas de `rebase -i`, pas de suppression de branche.
- Ne pas lui montrer de sortie Git, de SHA, de nom de branche, ni le mot « rebase ».
- Ne pas lui demander de trancher un conflit au format Git.
- Ne pas s'arrêter au premier dépôt : si trois dépôts ont changé, les trois doivent être enregistrés.

## Si ça coince

**Un conflit pendant le `pull --rebase`** — quelqu'un a modifié le même passage.
Regarde les deux versions. Si l'une contient manifestement l'autre, ou si la différence est
typographique, tranche toi-même et continue. Sinon, arrête-toi et pose la question **en langage
courant**, sans montrer les marqueurs de conflit :

> Timothée a modifié le budget de la cuisine de son côté pendant que tu le modifiais aussi.
> Lui écrit 8 700 €, toi 9 200 €. Lequel je garde ?

**Le `push` est refusé** — le dépôt distant a avancé. Refaire un `pull --rebase`, puis repousser.
Ne jamais forcer.

**Pas de réseau, ou l'authentification échoue** — le travail est **déjà enregistré localement** par le
commit, rien n'est perdu. Le dire ainsi :

> J'ai gardé tes modifications sur l'ordinateur, mais je n'arrive pas à les envoyer en ligne
> pour l'instant. Je réessaierai — rien n'est perdu.

## En début de session

Faire un `git pull` sur les dépôts présents **avant** de modifier quoi que ce soit, pour ne pas
travailler sur des fichiers périmés. Ne le mentionner que si ça ramène quelque chose.
