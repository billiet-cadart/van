# Prompt relais navigateur — recherche ciblée « 2 places avant » (4 septembre 2026)

> 🗄️ **Lancé, et dépouillé le 5 septembre 2026.** Résultat : **44 annonces** capturées, 43
> exploitables, **0 en 2 places avant** — dépouillement dans
> [README.md § Capture du 5 septembre 2026](README.md). Ce document est conservé comme **modèle de
> prompt** ; ⚠️ la liste de 68 numéros qu'il contient est périmée, reprendre celle de
> [annonces-exclues.md](annonces-exclues.md).
>
> 🔴 **Ne pas recopier tel quel le critère « Priorité aux 2 places avant » du § *Le prompt*.** Il a
> été retiré des critères de recherche le 5 septembre 2026, précisément à cause du résultat de ce
> tour → [ADR-0017](../adr/0017-2-places-avant-critere-de-budget-pas-de-recherche.md).

Prompt à coller tel quel dans l'extension Chrome, selon la méthode décrite dans
[CLAUDE.md](../../CLAUDE.md) § *Relais navigateur*.

**Pourquoi ce tour** : la DREAL 38 a confirmé le 3 septembre 2026 qu'un porteur configuré d'usine
en **2 places avant** supprime tout le volet administratif des sièges
([../dossier-dreal-38.md](../dossier-dreal-38.md) § 1 bis). Il ne reste qu'**un seul candidat
actif** sur ce critère (3230965149).

**Trois partis pris** :

- 🔴 **Le livrable, ce sont les fichiers — pas le texte de la réponse.** Aucun compte rendu
  demandé : les pages HTML contiennent le JSON structuré complet (`__NEXT_DATA__`), dont tout est
  réextrait ici de toute façon. Demander une synthèse, c'est payer deux fois pour une information
  moins fiable.
- 🔴 **Une seule passe, sans le filtre « Nombre de place(s) »** — ce champ est vide dans 27 des
  68 annonces archivées ; filtrer dessus écarterait 40 % du marché en aveugle. Le tri se fait sur
  les **photos de cabine**.
- 🔴 **Archivage annonce par annonce, au fil de l'eau** — une session interrompue ne doit rien
  perdre.
- 🔴 **Liste des 68 annonces déjà archivées jointe au prompt**, avec consigne de ne pas les
  retélécharger. ⚠️ Contrepartie assumée : on perd la détection des **baisses de prix** sur ces
  annonces-là, alors que le suivi des prix dans le temps est l'une des raisons d'être de cette
  archive (voir plus haut). À refaire par un tour dédié si le besoin se présente, plutôt qu'en
  alourdissant chaque recherche.

---

## Le prompt

> Tu as accès à leboncoin. Cherche des **fourgons utilitaires d'occasion à aménager**, et
> **enregistre les annonces retenues** — c'est le seul livrable attendu, pas de compte rendu.
>
> **Critères** :
>
> - Fourgon tôlé **L3H2** (~5,99 m de long, ~2,50-2,60 m de haut, ~13 m³) — de préférence Fiat
>   Ducato / Peugeot Boxer / Citroën Jumper, sinon Renault Master, Opel Movano, Ford Transit,
>   Mercedes Sprinter équivalents. Pas de L4, pas de L2, pas de cabine approfondie, pas de
>   châssis-cabine, pas de camping-car.
> - **Prix affiché ≤ 20 000 €**
> - **Diesel uniquement** — écarte essence, hybride, GNV/GNC/CNG/gaz naturel/GPL/bicarburation,
>   électrique. Le champ « Énergie » ment parfois (un GNC vu affiché « Autre ») : vérifie le texte
>   de l'annonce. Mais n'écarte pas sur le mot « électrique », qui désigne presque toujours des
>   vitres ou un kit solaire.
> - **Nu ou très peu aménagé** : pas de lit fixe, pas de cuisine, pas de sanitaires. Isolation
>   seule ou aménagement pro démontable (rack, étagères) : ça passe.
> - **Priorité aux 2 places avant** : siège conducteur + siège passager **individuel**, et non une
>   banquette passager 2 places d'un bloc. **N'utilise pas le filtre « Nombre de place(s) »** de
>   leboncoin, il est vide dans une annonce sur trois — ouvre les **photos de cabine** pour
>   trancher. Prends aussi les annonces à banquette ou à cabine non visible qui cochent tout le
>   reste, elles restent des candidats.
>
> **Annonces déjà en ma possession — ne les réenregistre pas.** Si le numéro d'une annonce figure
> dans cette liste, passe à la suivante sans rien télécharger :
>
> 2869595583,2938366191,3111078233,3144086448,3147238492,3148537724,3172038406,3181490058,3194
> 008684,3202627305,3209729316,3212598086,3218678796,3219994109,3221052068,3222115026,32224781
> 71,3225669130,3226785978,3227572786,3230908221,3230949857,3230965149,3234530816,3234575793,3
> 235756663,3236835638,3237666342,3238967237,3239593390,3240076135,3243353771,3244375681,32453
> 07468,3245572696,3248186538,3249486543,3250279944,3250527933,3250563706,3251302807,325170000
> 6,3252192128,3252505288,3254686306,3256457618,3256685548,3256752984,3257355972,3257540479,32
> 57719662,3258477045,3258503783,3258618210,3258826650,3259352463,3259360967,3259386121,325949
> 3374,3260375867,3260376939,3260513518,3260517653,3260522331,3260779231,3260825076,3260955848
> ,3261130919
>
> **Ce que tu enregistres, dès qu'une annonce est retenue et avant de passer à la suivante** :
> `Téléchargements/<NUMÉRO_ANNONCE>/page.html` (la page complète) et
> `Téléchargements/<NUMÉRO_ANNONCE>/photos/01.jpg`, `02.jpg`… (toutes les photos).
>
> Traite les résultats du plus récent au plus ancien. Pas de synthèse, pas de tableau, pas de
> commentaire : les fichiers suffisent.
