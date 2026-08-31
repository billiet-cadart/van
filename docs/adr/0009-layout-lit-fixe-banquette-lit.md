# Layout habitacle : lit fixe parents à l'arrière, banquette-lit convertible pour les enfants

## Contexte

L'[ADR-0008](0008-van-definitif-pas-tremplin.md) (van définitif, pas de revente planifiée)
rouvrait une question : le **couchage d'appoint** enfant (glossaire — sol sur lattes, tente sur
les sièges avant) tenait sous le cadre achat-tremplin, parce que le van devait être revendu avant
que les enfants grandissent trop pour ces solutions improvisées. Sur 10-15 ans, ça ne tient plus.

## Décision

Layout arrière retenu :

- Un **lit fixe transversal** à l'arrière du fourgon, pour les parents.
- La **banquette + table** ([ADR-0006](0006-config-porteur-nu-sieges-cabine.md)) se transforme en
  lit pour les enfants la nuit. La banquette cumule donc trois fonctions : place carrossée pour
  rouler, salon/coin repas à l'arrêt, couchage enfants la nuit.
- **Position et orientation précisées** : la banquette n'est pas au fond du fourgon (le fond est
  occupé par le lit fixe parents) mais **au milieu**, entre la cabine et le lit fixe. En mode
  siège, elle est orientée **face à la route** (pas dos à la route) — pour qu'à l'arrêt, combinée
  aux deux sièges avant pivotés à 180°, elle forme un vrai salon face-à-face autour d'une table.
  Ça distingue cette banquette du repli « 4e place dos à la route » de l'ADR-0006 (qui vise un cas
  différent : un simple siège ajouté, pas cette banquette-ci).
- ✅ **Confirmé : le coût de conversion des sièges avant (siège d'occasion + embases pivotantes,
  ~500-1 000 €, voir ADR-0006) n'est pas un frein** — la famille l'assume sans problème,
  notamment au vu du prix d'entrée des porteurs visés (~10 000 € pour le candidat Jumper étudié).
- **Souhait (pas une exigence ferme)** : que ce lit-banquette puisse aussi accueillir deux amis
  adultes en visite. Condition posée pour que ce soit réaliste : **au moins 190 cm de long en
  mode lit**. Si cette longueur n'est pas atteignable dans le format retenu, la fonction couchage
  enfants prime — ce n'est qu'un bonus.
- Le couchage d'appoint (sol, tente) n'est plus le couchage principal des enfants — il reste
  disponible pour un usage exceptionnel (invité, imprévu).
- **Le lit-banquette n'est pas dimensionné pour durer jusqu'à l'adolescence.** Il répond à la
  phase actuelle (2 jeunes enfants). Le jour où il ne suffit plus (enfants trop grands, besoin de
  les séparer), la famille revendra le van ou modifiera l'aménagement à ce moment-là — pas
  d'anticipation à faire dès maintenant sur ce point. Ça nuance l'ADR-0008 (van définitif) : la
  définitivité porte sur le porteur et l'intention d'usage, pas sur un engagement à ne jamais
  retoucher ou remplacer l'aménagement enfants.

## Pourquoi

Répond à la question laissée ouverte par l'ADR-0008 : un couchage improvisé ne tient pas sur
10-15 ans à mesure que les enfants grandissent ; un vrai lit — même partagé, même transformable —
est une réponse plus robuste.

## Conséquences

- ⚠️ **Corrige une conclusion de [recherche-marche-sieges.md](../recherche-marche-sieges.md)** :
  la « piste à départager » concluait provisoirement à un **banc simple** (pas le combiné
  banc-lit) comme meilleur compromis pour la banquette arrière. Ce n'est plus valable : le layout
  retenu exige un **banc-lit convertible** (ou un mécanisme table+banquette→lit équivalent fait
  maison), pas un simple banc fixe. Le combiné REIMO cité dans la note n'était pas confirmé
  compatible avec un Ducato/Boxer/Jumper 600 — **à re-vérifier en priorité**, ou étudier une
  solution table-lit DIY équivalente.
- Le lit fixe parents à l'arrière est cohérent avec la définition de « soute » du glossaire
  (rangement bas typiquement sous un lit fixe arrière) — pas de contradiction à lever.
- Longueur intérieure à vérifier : lit fixe arrière + banquette-lit + circulation, sur un format
  « 600 » (~5,99 m) — pas encore chiffré précisément (lié à la dette de vérification du README).
- ✅ **Mise à jour marché (30 août 2026)** : un produit répondant au critère existe et sa fiche
  technique officielle est confirmée — la **Scopema Altaïr 3P**, disponible en 3 longueurs de
  couchage (179/186/**194 cm**), homologuée 3 points, ~4 000-6 500 € pièce selon largeur. C'est
  un système générique sur rails (pas de liste de véhicules compatibles publiée) : la
  compatibilité avec un Ducato/Boxer/Jumper 600 est une question d'ajustement d'installation
  (largeur de plancher), pas un blocage a priori — à valider via le configurateur Scopema ou un
  devis installateur. Deux prix réels trouvés en plus : **BV Production (~2 400 €, la moins
  chère à ce jour) et Schnierle SL (~6 790 € posée, la plus chère)**. Scora Philae : devis
  installateur 3 700-4 000 € posée (Scora ne communique pas ses tarifs directement). REIMO
  écarté (aucune fiche Ducato/Boxer/Jumper trouvée). Détails →
  [recherche-marche-sieges.md](../recherche-marche-sieges.md).
- Coût du dossier DREAL pour un simple ajout/modification de place (hors certification gaz) :
  **~90 à 750 €** de frais administratifs selon le périmètre du dossier, hors coût de la
  banquette elle-même et de la pose (souvent sur devis) — voir recherche-marche-sieges.md.
- ✅ **VASP confirmé obligatoire, pas une option à éviter** : l'homologation VASP n'est pas
  requise pour un aménagement amovible/démontable en moins de 2h sans gaz ni élément fixe — mais
  ce layout ne rentre pas dans ce cas : le lit fixe arrière et la banquette homologuée sont des
  éléments fixes par définition. Le VASP est donc obligatoire ici, indépendamment du choix
  gaz/électrique (voir [recherche-marche-sieges.md](../recherche-marche-sieges.md)) — la seule
  question encore ouverte est la composition du dossier, pas s'il faut en faire un.
- ⚠️ **Point nouveau à surveiller** : ajouter des places assises peut faire basculer le véhicule
  de la catégorie utilitaire (VU) à voiture particulière (VP), avec un **malus écologique** à la
  clé si le dossier n'est pas en VASP (catégorie camping-car). Le projet visant de toute façon un
  aménagement complet homologué VASP, ce risque est a priori déjà couvert — mais à confirmer
  explicitement auprès de l'installateur que le dossier vise bien le VASP, pas un simple ajout de
  place isolé.
