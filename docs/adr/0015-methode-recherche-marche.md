# Méthode de recherche marché : une passe, des fichiers, pas de compte rendu

## Contexte

Les recherches d'annonces passent par une **session Claude distincte** dans l'extension Chrome, qui
a accès à leboncoin — la session de travail sur ce dépôt ne l'a pas (fetch bloqué en 403,
[CLAUDE.md](../../CLAUDE.md) § *Relais navigateur*). On lui envoie un prompt, elle rend un résultat
qu'on recolle ici.

Les deux premiers tours (31 août, 2 septembre) ont été menés en demandant à cette session un
**compte rendu rédigé** : tableaux prix/année/km/places, points d'attention, tri des retenues. Le
tour du 4 septembre a été l'occasion de corriger cette méthode, sur trois points.

## Décision

### 1. Le livrable, ce sont les fichiers — pas le texte de la réponse

On ne demande **aucune synthèse** à la session navigateur : ni tableau, ni commentaire, ni tri
argumenté. On lui demande d'**enregistrer `page.html` + les photos** de chaque annonce retenue, et
rien d'autre.

La page HTML de leboncoin embarque le JSON complet de l'annonce (`__NEXT_DATA__`, champ `ad`) :
prix, dates, kilométrage, énergie, places, portes, Crit'Air, texte intégral. Tout ce qu'un compte
rendu contiendrait s'en réextrait ici, **et plus fiablement** — le récap du 31 août portait
d'ailleurs l'aveu « je n'ai pas analysé visuellement chaque photo » et une fausse alerte sur une
« cabine » lue dans un mot de la description.

### 2. Une seule passe, et jamais de filtre sur un champ mal renseigné

Pas de double passe filtrée/non filtrée : une seule, avec tous les critères, puis vérification sur
les **photos**. En particulier, **le filtre « Nombre de place(s) » de leboncoin est proscrit comme
critère de recherche** : le champ est vide dans **27 des 68 annonces archivées** (40 %). Un filtre
dessus écarte en aveugle, sans qu'on sache ce qu'on a perdu.

Règle générale qui en découle : **un champ structuré facultatif sert à trier ce qu'on a, jamais à
restreindre ce qu'on va chercher.**

### 3. La liste des annonces déjà archivées est jointe au prompt

Sans elle, chaque tour retélécharge ce qu'on a déjà. Les numéros des annonces présentes dans
`annonces/` sont donc collés dans le prompt, avec consigne de les ignorer.

♻️ **Complété le 5 septembre 2026 par l'[ADR-0016](0016-annonces-ecartees-sortent-de-archive.md)** :
depuis qu'une annonce écartée **sort** de l'archive, la liste des numéros archivés ne suffit plus —
elle ne contient plus les écartées, qui reviendraient donc au tour suivant. Le prompt porte
désormais **une seule liste, tenue à jour dans
[marche/annonces-exclues.md](../marche/annonces-exclues.md)** : archivées **plus** exclues.

## Pourquoi

- **On payait deux fois** : une fois la lecture des annonces par la session navigateur, une fois la
  relecture des fichiers ici — pour une information moins sûre au premier passage.
- **Le prompt était trop long** (108 lignes), et sa longueur venait presque entièrement des
  consignes de restitution, pas des critères de recherche. Ramené à ~25 lignes utiles.
- **L'archivage au fil de l'eau** (chaque annonce enregistrée avant de passer à la suivante) protège
  d'une session interrompue à mi-parcours.
- La session navigateur reste la seule à voir les **photos**, donc c'est le seul jugement qu'on lui
  délègue vraiment : sièges avant individuels ou banquette, découpes de carrosserie, porte
  coulissante.

## Conséquences

- Le prompt type est versionné dans [marche/](../marche/) et daté ; celui du 4 septembre 2026 sert
  de modèle → [prompt-relais-2-places-2026-09-04.md](../marche/prompt-relais-2-places-2026-09-04.md).
- La grille de critères, elle, vit à un seul endroit — [marche/README.md](../marche/README.md) — et
  se recopie dans chaque prompt.
- ⚠️ **Contrepartie assumée de la liste d'exclusion** : on ne détecte plus les **baisses de prix**
  sur les annonces déjà archivées, alors que le suivi des prix dans le temps est l'une des raisons
  d'être de cette archive ([marche/README.md](../marche/README.md)). Si le besoin se présente, ce
  sera un **tour dédié** (recapture des IDs connus), pas une charge ajoutée à chaque recherche.
- ⚠️ Cette méthode suppose que la session navigateur sait enregistrer une page complète et ses
  images dans une arborescence donnée. Les deux premiers tours ont montré qu'elle dépose tout dans
  `Téléchargements/` sans pouvoir écrire ailleurs — le rangement dans `annonces/<ID>/<date>/` reste
  donc un geste manuel côté disque.
