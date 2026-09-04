# Configuration cabine ciblée : sièges avant pivotants + banquette arrière salon

## Contexte

Suite de l'[ADR-0005](0005-fourgon-nu-a-amenager-soi-meme.md) : sur un fourgon nu, le
nombre et la disposition des places assises **déjà carrossées par le porteur** varient
selon le modèle et la version cabine. C'est un critère de tri à la recherche, pas
quelque chose qu'on peut ajouter après coup sans mal (ceintures 3 points, ancrages
homologués).

## Décision

Cible de configuration, par ordre de préférence :

1. **Le mieux du mieux** : cabine avec **2 sièges avant pivotants** (qui pivotent vers
   l'espace de vie) + une **banquette arrière homologuée** qui sert à la fois de
   3e/4e place carrossée pour rouler et de salon à l'arrêt (possiblement derrière une
   table). Zéro place à ajouter nous-mêmes.
   ✅ **Le pivot avant est vérifié faisable et pas cher, mais sous condition** : des
   embases pivotantes homologuées existent pour Ducato/Boxer/Jumper depuis 2006
   (~200-400 €/siège), homologation déjà acquise sur la pièce — **mais seulement sur
   des sièges avant individuels**. Une banquette passager avant (2 places d'un bloc)
   ne peut pas être rendue pivotante. **Nouveau critère de recherche : le porteur doit
   avoir des sièges avant individuels d'origine**, pas une banquette. Détails et
   sources → [recherche-marche-sieges.md](../recherche-marche-sieges.md).
2. **Acceptable** : porteur à 3 places carrossées d'origine (typiquement 2 avant + 1
   arrière, ou banquette avant 2 places). On installe **nous-mêmes une 4e place, dos à
   la route**, dans l'aménagement. ⚠️ Implique de poser une ceinture 3 points homologuée
   sur un ancrage certifié — à vérifier au cas par cas que c'est faisable sur le
   châssis visé avant achat, pas à supposer.

La famille est prête à aller plus loin que la simple 4e place : **changer ou modifier
des sièges nous-mêmes** (pas seulement en ajouter), à condition que ça en vaille le
coup et que l'homologation reste simple et pas chère. C'est un critère à vérifier par
véhicule, pas une hypothèse à prendre pour acquise : coût de la pièce homologuée +
coût/délai du passage en DREAL ou chez un installateur agréé, à comparer au gain
(gagner un siège pivotant, une banquette, etc.) avant de se décider sur une annonce.

La contrainte ferme reste celle de l'[ADR-0003](0003-cible-fourgon-600-4-places.md) :
4 places carrossées au total, confirmées sur la carte grise — que ces 4 places soient
d'origine ou complétées/modifiées par nos soins.

## Pourquoi

- Les sièges pivotants gagnent de la place au salon sans rien sacrifier (déjà noté
  « souhaité » dans le glossaire, [GLOSSARY.md](../GLOSSARY.md)).
- Une banquette arrière qui sert à la fois de place carrossée et de salon évite de
  dupliquer les fonctions (pas de siège route dédié + banquette salon dédiée séparés) —
  gain de place dans un format déjà contraint ([ADR-0002](0002-compacite-prime-sur-le-confort.md)).
- Le 4e siège dos à la route en solution de repli est acceptée en connaissance de
  cause : moins confortable/moins conventionnel qu'un siège face à la route, mais évite
  d'écarter des porteurs sinon adaptés pour une seule place manquante.

## Mise à jour marché (30 août 2026)

⚠️ **L'option 1 (« mieux du mieux », 4 places d'origine) est quasi introuvable en pratique, pas
juste rare.** Recherche terrain sur leboncoin, filtre « 4 places » appliqué à Ducato/Boxer/Jumper
L3H2 : **0 résultat**. La quasi-totalité du marché de ce format sort d'usine en 3 places.
**L'option 2 (3 places d'origine + 4e place ajoutée) n'est donc pas un simple repli : sur ce
format, c'est la voie par défaut**, pas l'exception à éviter si possible. Détails →
[recherche-marche-sieges.md](../recherche-marche-sieges.md).

⚠️ **La config sièges avant (individuels vs banquette) n'est pas visible dans les champs
structurés des annonces leboncoin**, ni généralement dans la description. Le critère « sièges
avant individuels », condition du pivot, doit être vérifié sur photos ou en visite — jamais
supposé depuis la fiche seule.

✅ **Mise à jour importante (31 août 2026) : une banquette passager n'est pas rédhibitoire.** Sur
Ducato/Boxer/Jumper (plateforme commune depuis 2006), le véhicule existe **de série en version 2
ou 3 places** — remplacer la banquette passager par un siège individuel n'est donc pas un
bricolage, c'est passer d'une config d'usine à une autre. Toutes les banquettes 2 places de ces 3
marques depuis 2006 sont interchangeables sans adaptation avec un siège passager individuel
d'origine (seule la sellerie diffère selon la marque) — sièges d'occasion trouvés à **~80-200 €**
sur leboncoin. Combiné à une embase pivotante (~200-400 €/siège), ça reste dans les **~500-1 000 €
au total** pour transformer un 3-places-banquette en 2 sièges avant individuels pivotants — bien
moins cher et bien plus fiable que d'espérer trouver le « mieux du mieux » déjà tout fait sur le
marché (quasi introuvable, voir plus haut). **Ça reclasse la voie « mieux du mieux » comme
atteignable par nos propres moyens, pas juste comme un coup de chance sur une annonce rare.**
⚠️ Peugeot n'autorise cette modification qu'avec une pièce d'**origine du même châssis** (pas une
pièce générique) — condition remplie ici puisque le plan est d'utiliser un siège Ducato/Boxer/
Jumper d'occasion. Démarche administrative exacte pour la carte grise (2 places au lieu de 3) pas
encore confirmée — à vérifier avec la DREAL/le service carte grise avant d'acheter la pièce, et à
signaler à l'assureur par précaution. Détails → [recherche-marche-sieges.md](../recherche-marche-sieges.md).

🔴 **Complément du 2 septembre 2026 — la démarche administrative est désormais connue, et elle
n'est pas déclarative.** La DREAL Isère exige l'**autorisation écrite du constructeur** pour
passer de 3 à 2 places avant : *« rien n'indique que le châssis soit réellement capable
d'accueillir le siège à la place de la banquette sans aucune modification. Certains éléments (type
airbag) peuvent aussi être impactés »*. Le raisonnement ci-dessus (deux configs d'usine, ~500-1 000 €)
reste juste mécaniquement, mais la voie porte une **condition suspensive** et un surcoût de
50-250 €. **La décision reste ouverte**, avec un contournement à évaluer d'abord : viser un porteur
déjà en 2 places avant d'origine. → [dossier-dreal-38.md](../dossier-dreal-38.md)

⚠️ **Complément du 3 septembre 2026 — dépouillement des retours d'expérience sur forums.** Les
récits de gens qui l'ont réellement fait confirment que la partie mécanique est triviale (mêmes
boulons, 15 min à 1 h, siège de casse dès ~90 €), mais font apparaître **deux points que le
dossier n'avait pas** : (1) le **prétensionneur de la place centrale** reste orphelin et allume le
voyant airbag — le contournement des forums est une résistance de 1,5 Ω, inacceptable pour un
véhicule qui passe en DREAL et devant un assureur ; (2) sur **Boxer phase 3**, un demandeur s'est
vu **refuser** cette substitution par la DREAL et le constructeur, avec renvoi vers un siège de
carrossier homologué. La réponse dépend donc du modèle et du millésime, et **aucun REX trouvé ne
va jusqu'à l'accord Fiat pour un changement de siège** : la condition suspensive n'est pas levée.
→ [recherche-marche-sieges.md](../recherche-marche-sieges.md) § « Retours d'expérience de gens qui
l'ont fait »

✅ **Complément du 4 septembre 2026 — la condition suspensive est levée, et le critère « 2 places
avant d'origine » est confirmé par écrit.** La DREAL 38 a répondu le 3 septembre à 15 h 21 aux
quatre questions complémentaires (réponses reportées le 4 septembre → [dossier-dreal-38.md](../dossier-dreal-38.md)
§ 1 bis) :

1. **L'accord constructeur est contournable** : *« Si nous retrouvons bien le couple siège utilisé /
   type de châssis du véhicule, nous pouvons effectivement nous passer de l'accord constructeur. »*
   L'exigence du 2 septembre portait donc sur l'emploi d'une **pièce d'origine hors de sa
   configuration d'usine**, pas sur la modification en elle-même. Un siège de carrossier homologué
   dont les PV nomment le châssis suffit.
2. **Un porteur déjà en 2 places avant d'origine annule tout le sujet** — confirmé d'un mot,
   *« Exactement »*, hormis la question de l'embase. Le contournement évoqué le 2 septembre n'est
   donc plus une hypothèse : c'est **un critère de recherche validé par le service instructeur**.
   ⚠️ Mais il est rare : **2 annonces sur 68** archivées le déclarent, et 27 ne renseignent pas le
   champ — tri prioritaire, jamais filtre excluant.
3. 🔴 **Le point dur s'est déplacé sur l'embase pivotante** : *« Les PV sont la propriété
   intellectuelle de l'entreprise qui a payé pour les réaliser. Pour chaque PV, il faut donc une
   autorisation d'utilisation. »* Doctrine générale, embase comprise — et le 2 septembre la même
   DREAL écrivait que « dans les faits, seuls les professionnels ont cette autorisation ».
   **L'auto-pose de l'embase, tenue pour acquise jusqu'ici (~206-280 € TTC/siège), n'est plus
   acquise.**
4. ⚠️ **Un trou subsiste** : la réponse sur le **prétensionneur orphelin** de la place centrale
   (*« couvert par l'accord constructeur »*) ne vaut que dans le cas où l'on a cet accord —
   c'est-à-dire le cas que la réponse 1 permet d'éviter. À reposer avant d'engager la voie
   prestataire.

**La décision reste donc ouverte, mais sur un choix reformulé** — porteur 2 places d'usine (rare,
mais net) / siège de carrossier posé par un pro (dispense d'accord constructeur, ~2 600 € TTC,
prétensionneur non tranché) / siège d'origine + accord Stellantis (délai et issue incertains, mais
prétensionneur explicitement couvert).

## Conséquences

- Critère de recherche ajouté : **vérifier la configuration cabine d'origine** de
  chaque porteur (sièges avant individuels ou banquette, présence/absence d'une
  banquette arrière) avant de considérer un véhicule.
- ⚠️ **Banquette arrière : deux voies concurrentes, pas encore départagées** — cabine
  approfondie d'origine (mais mange visiblement beaucoup de longueur utile, à
  contre-courant d'ADR-0002) vs banquette rapportée après achat sur fourgon standard
  (préserve la longueur ; 🗄️ *« dossier DREAL à prévoir avant l'isolation »* — **faux, corrigé le
  2 septembre 2026** : la DREAL Isère veut le véhicule dans son **état final**, dossier déposé
  travaux terminés → [dossier-dreal-38.md](../dossier-dreal-38.md)). Détail et
  fourchettes de prix → [recherche-marche-sieges.md](../recherche-marche-sieges.md).
- Longueur et hauteur cibles inchangées : format « 600 » (~5,99 m), hauteur H2
  (~2,60 m) — reportées telles quelles de l'ADR-0002/ADR-0003. ⚠️ Elles visaient à
  l'origine un fourgon déjà aménagé ; rien n'indique qu'elles ne conviennent plus à un
  porteur nu, mais ce n'est pas encore reconfirmé sur des annonces réelles de fourgons
  vides.
- Si le 4e siège doit être ajouté — ou un siège changé — nous-mêmes, prévoir dans le
  budget d'aménagement le coût du siège et de la pose homologuée (non chiffré à ce
  stade).
- Nouveau critère de tri : pour un véhicule qui ne coche pas le « mieux du mieux »
  d'origine, estimer le coût/complexité d'homologation d'une modification de siège
  avant de l'écarter ou de le retenir — ne pas soit l'exiger d'office, soit l'ignorer.
