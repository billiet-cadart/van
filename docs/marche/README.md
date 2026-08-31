# Archive de suivi marché

Snapshots d'annonces (HTML + photos), volontairement gardés même après disparition de
l'annonce ou changement de prix — l'objectif n'est pas d'avoir la fiche à jour d'un
véhicule qu'on négocie, mais de **suivre le marché dans le temps** : à quelle vitesse les
annonces de ce format partent, comment les prix bougent. Décision du 31 août 2026 :
contrairement à la réserve habituelle de ce dépôt sur les gros fichiers binaires, on
assume ici de dupliquer/stocker ces fichiers dans Git, précisément parce que le contenu
est éphémère et ne serait pas récupérable après coup.

## Structure

```
annonces/<id-leboncoin>/<date-de-capture>/
├── page.html
└── photos/
    ├── 01.jpg
    ├── 02.jpg
    └── ...
```

`<id-leboncoin>` est le numéro à la fin de l'URL de l'annonce (ex. `3249486543` pour
`leboncoin.fr/ad/utilitaires/3249486543`). Une même annonce peut avoir plusieurs
dossiers datés si elle est capturée à nouveau plus tard (suivi de prix).

Alimenté via le relais navigateur décrit dans [CLAUDE.md](../../CLAUDE.md) (§ *Relais
navigateur pour les recherches marché*) — cette session n'a pas d'accès direct au
navigateur ni à leboncoin.

Le résumé lisible (tableau prix/km/config par annonce) reste dans
[../recherche-marche-sieges.md](../recherche-marche-sieges.md) ; ce dossier ne contient
que les fichiers sources.

## Capture du 31 août 2026 : 22 annonces, HTML + photos + tableau récap

22 annonces (18 L3H2 prioritaires + 4 L4H2 secondaires), capturées via le relais Chrome,
archivées dans `<id>/2026-08-31/` (`page.html` + `photos/`). Tableau récapitulatif complet
(prix, année, km, vendeur, places, CT/entretien, aménagement) dans
[recap-2026-08-31.md](recap-2026-08-31.md).

Vue comparative (prix, année, km, longueur L3/L4, filtres) : ouvrir
[comparateur-2026-08-31.html](comparateur-2026-08-31.html) dans un navigateur.

⚠️ *Fausse alerte corrigée (1er septembre 2026)* : un premier contrôle basé sur le
`<title>` de chaque `page.html` avait fait croire que les 22 captures étaient
inutilisables (titres trompeurs : « Baisse de prix », « Calculatrice », « LinkedIn » —
probablement un artefact de l'app monopage de leboncoin qui ne met pas à jour le titre
d'onglet). Vérification du **contenu réel** de plusieurs fichiers (présence du bon prix,
de la bonne URL, du modèle) : les pages sont bien les bonnes fiches d'annonce. Retenue
utile : **ne pas juger un fichier sur ses métadonnées seules, vérifier le contenu.**
