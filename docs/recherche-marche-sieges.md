# Recherche marché — sièges avant pivotants et banquette arrière

Note de travail vivante, mise à jour au fil de l'exploration du marché. Nourrit la
décision de l'[ADR-0006](adr/0006-config-porteur-nu-sieges-cabine.md), n'en est pas une
elle-même. Budget volontairement laissé de côté pour l'instant (voir README).

## ✅ Sièges avant pivotants : simple et pas cher — sous une condition

Il existe des **embases pivotantes homologuées** pour Ducato/Boxer/Jumper à partir de
2006 (châssis X250) : marques RIB/Scopema, ~200-400 €/siège, homologation européenne
n°93SG0316-00 déjà acquise sur la pièce. Pose a priori simple (parfois une adaptation
du frein à main côté conducteur).

⚠️ **Condition qui devient un critère de recherche** : ça ne marche que sur des
**sièges avant individuels (baquets)**. *« Pour les banquettes doubles sur Ducato, il
n'y a pas de solution pour pivoter. »* Donc un porteur avec une banquette passager
avant (2 places d'un bloc) ne pourra pas avoir de sièges pivotants — il faut chercher
un porteur à sièges avant **individuels** dès le départ, pas compter corriger ça après
coup.

⚠️ **Recherche terrain (30 août 2026) : ce critère n'est pas visible dans les filtres
leboncoin.** Le champ structuré « Nombre de place(s) » ne distingue pas « 2 sièges
individuels + strapontin central » de « 1 siège individuel + banquette passager 2
places fixe » — et aucune des annonces passées en revue ne le précise dans la
description. **À vérifier systématiquement sur photos ou en visite, jamais sur la
fiche seule.**

⚠️ **Recherche terrain : le « 4 places d'origine » est quasi introuvable sur ce
format.** Avec le filtre « 4 places » coché, la recherche Ducato/Boxer/Jumper L3H2 sur
leboncoin est tombée à **0 résultat** — la quasi-totalité du marché de ce format sort
d'usine en 3 places. La voie « [ADR-0006](adr/0006-config-porteur-nu-sieges-cabine.md)
option 2 » (3 places d'origine + 4e place ajoutée) n'est donc pas un simple repli : sur
ce format, c'est la voie **par défaut**, pas l'exception.

## La banquette arrière : deux voies envisagées, Voie A écartée depuis l'ADR-0009

🗄️ *Les deux voies ci-dessous ont été comparées à froid, avant que le layout ne soit tranché.
Depuis l'[ADR-0009](adr/0009-layout-lit-fixe-banquette-lit.md) (banquette-lit ≥190 cm exigée), la
**Voie A est écartée** : la cabine approfondie n'offre pas de fonction lit. Gardée pour mémoire —
le raisonnement (gain de places vs perte de longueur utile) reste valable si le besoin de couchage
enfants changeait. Seule la **Voie B** est poursuivie (voir plus bas, section « Banc-lit convertible
≥190 cm »).*

### Voie A — cabine approfondie d'origine (occasion) — écartée

Certains Ducato/Boxer/Jumper existent en version **cabine approfondie tôlée** :
2 rangées de sièges (jusqu'à 7 places), cellule de chargement tôlée fermée à l'arrière
(pas un châssis-cabine ouvert). Vu sur le marché : Ducato 2021 7 places à 12 490 €,
Boxer 2019 7 places à 12 999 € (leboncoin, prix non confirmés récemment, à re-vérifier).

⚠️ **Contrepartie importante, pas encore chiffrée sur le format « 600 » précisément** :
la cabine approfondie mange une bonne partie de la longueur utile. Sur le Ducato,
la cellule tôlée la plus courte descend à ~2,5 m de long contre ~4 m pour un fourgon
L4 standard — un écart de cet ordre irait à l'encontre de la compacité visée
(ADR-0002) et réduirait fortement l'espace de vie aménageable. **À vérifier
spécifiquement sur la longueur « 600 » avant de retenir cette voie.**

### Voie B — banquette arrière rapportée après achat (aftermarket)

Sur un fourgon **standard** (sans cabine approfondie usine, donc sans perte de
longueur), on installe une banquette homologuée après achat :

- **Banc simple homologué** (Scopema, Scora, Schnierle) : ~800-2 500 €, pose
  professionnelle ~500-1 500 €, + dossier DREAL (RTI cabine approfondie ou VASP
  camping-car) dont le coût administratif propre n'est pas encore chiffré.
- **Banc-lit convertible clé en main** (ex. gamme REIMO chez FLV Van) : 6 000-8 600 €
  tout compris (pose + dossier), mais catalogue vu pour des gabarits plus petits
  (T5/T6, Trafic, Transit Custom) — **pas confirmé compatible/existant pour un
  Ducato/Boxer/Jumper 600**.

⚠️ Point d'attention commun aux deux : le dossier DREAL doit être déposé **avant**
l'isolation/l'aménagement intérieur — l'inspecteur doit pouvoir voir les renforts et
points d'ancrage sous le plancher. Prévoir l'étape sièges/banquette en tout début de
chantier, pas en dernier.

## Banc-lit convertible ≥190 cm — état du marché (recherche du 30 août 2026)

Suite à l'[ADR-0009](adr/0009-layout-lit-fixe-banquette-lit.md) : la banquette arrière doit se
transformer en lit d'**au moins 190 cm**, homologuée 3 points. Voie A (cabine approfondie usine)
et « banc simple » (sans fonction lit) sont écartés par ce critère — seul un vrai banc-lit
convertible répond au besoin.

### Le mécanisme : rien d'exotique, sauf la version homologuée

Le principe (table qui s'abaisse/se retire + dossiers rabattables qui comblent l'épaisseur
manquante pour former le lit à plat) est le mécanisme classique de n'importe quelle **dinette
convertible** de camping-car — répandu, bon marché, non homologué route (mobilier fixe, pas de
ceintures certifiées). Ce qui est rare et cher, ce n'est pas le mécanisme : c'est sa version
**homologuée route** avec ceintures 3 points intégrées, pour compter comme vraie place carrossée
(ADR-0006/0009). C'est ce que sont Scopema/Scora/Schnierle — la variante spécialisée de ce
principe très ordinaire.

### Candidat en tête : Scopema Altaïr 3P (194 cm)

- Banquette 3 places, ceintures 3 points **intégrées**, homologation européenne (+ Amérique du
  Nord en option). **Fiche technique officielle consultée (PDF Scopema) : 3 longueurs de couchage
  exactement 179 / 186 / 194 cm** — la version 194 cm dépasse le critère des 190 cm. Largeurs :
  1 place 600 mm, 2 places 860-1200 mm, 3 places 1200-1500 mm.
- **Prix pièce observé : ~4 000 à 6 500 €** selon largeur/version (hors pose ; un revendeur —
  Van Loisir — annonce 6 500 € mais pour une version 185 cm, à ne pas confondre avec la 194 cm).
- **Sur la compatibilité véhicule** : la fiche technique officielle ne liste **aucun modèle de
  véhicule** — c'est un système générique sur rails (module 1150 mm, 8 kg), posé au sol et
  compatible avec des épaisseurs de plancher de 19 à 34 mm. Ce n'est donc pas une question de
  compatibilité bloquante par marque, mais un **ajustement d'installation** (largeur de plancher,
  position des rails) que Scopema ou un installateur valide via leur configurateur 3D
  (configurateur.scopema.com) — rien dans la documentation n'indique une incompatibilité avec
  Ducato/Boxer/Jumper, mais rien ne le confirme non plus explicitement : **à valider par le
  configurateur ou un devis avant achat**, pas un point bloquant a priori.
- Sources : PDF technique scopema.com/wp-content/uploads/2025/07/Banquette-Altair-fixes.pdf,
  scopema.com/banquette/altair-3p-3-places, vanloisir.com/produit/banquette-homologuee-3p

### Scora Philae — donnée réelle trouvée sur un Ducato

- Fil de forum retrouvé (trafic-amenage.com, « Banquette Scora Philae : dimensions sur DUCATO et
  tarifs ? ») : un propriétaire d'un **Ducato « MH2 »** (longueur exacte L2/L3/L4 non précisée
  dans le fil) a choisi une largeur de **900 mm**. Scora propose les largeurs 860/940/1040/
  1120/1200 mm en 2 places.
- **Scora refuse de communiquer ses tarifs directement** (politique de la marque) — mais un
  installateur en Normandie a donné un devis de **3 700 à 4 000 € selon options** (pose comprise,
  a priori). Un point positif confirmé : la hauteur d'assise est jugée « sensiblement similaire à
  celle de la cabine » — donc pas de gêne de confort signalée.
- ⚠️ Longueur de couchage précise non trouvée dans ce fil — à demander au devis.
- Source : forum.trafic-amenage.com/viewtopic.php?t=51084

### Schnierle et BV Production — deux prix réels trouvés

Un fil de forum dédié (« Ajout banquette arrière HOMOLOGUÉE à petit budget », 39 messages,
analyse de 34 devis) donne deux prix concrets, posés :
- **BV Production : ~2 400 €** — l'option la moins chère identifiée à ce jour, à creuser.
- **Schnierle SL : ~6 790 €** — la plus chère des options identifiées.
- Point de méthode confirmé par ce fil : **une même banquette posée par deux installateurs
  différents peut varier de prix jusqu'à 50 %** — comparer plusieurs devis n'est pas optionnel.
- Le fil distingue trois niveaux de besoin : 2 places fixes seules / 2 places + couchage simple /
  2 places + lit double — utile pour cadrer un devis (préciser qu'on veut le niveau « lit
  double » ≥190 cm, pas juste des places fixes).
- Source : trafic-amenage.com/forum/viewtopic.php?t=55288

### Remplacer la banquette passager par un siège individuel — plus simple que prévu

Recherche du 31 août 2026, déclenchée par l'examen d'une annonce réelle (Citroën Jumper 3 places,
banquette passager). Sur Ducato/Boxer/Jumper (plateforme commune depuis 2006, châssis X250/X290),
le véhicule existe **de série en 2 ou 3 places** — remplacer la banquette par un siège individuel
n'est pas un bricolage, c'est passer d'une config d'usine à une autre.

- **Toutes les banquettes 2 places de ces 3 marques depuis 2006 sont interchangeables sans
  adaptation** avec un siège passager individuel d'origine — seule la sellerie diffère selon la
  marque (Fiat/Citroën/Peugeot).
- **Sièges d'occasion trouvés à ~80-200 €** sur leboncoin (« siège Ducato Jumper Boxer »).
- ⚠️ Peugeot autorise cette modification uniquement avec une **pièce d'origine du même châssis**
  — pas une pièce générique. Une pièce d'origine d'occasion (le plan ici) respecte cette
  condition ; un « siège carrossier » avec sa propre homologation (type RIB/Scopema) serait
  l'alternative si on ne trouve pas de pièce d'origine.
- Combiné à une embase pivotante (~200-400 €/siège, déjà documentée plus haut) : **~500-1 000 €
  au total** pour passer un 3-places-banquette en 2 sièges avant individuels pivotants.
- ⚠️ **Point non confirmé** : la démarche exacte pour faire refléter le changement (3→2 places)
  sur la carte grise. Probablement une mise à jour déclarative simple puisque c'est une config
  déjà homologuée par le constructeur, mais pas vérifié noir sur blanc — à confirmer avec la
  DREAL/le service carte grise avant d'acheter la pièce. Signaler aussi à l'assureur par
  précaution (recommandation vue dans un cas comparable sur Renault Trafic, prudence à
  généraliser).
- Sources : trafic-amenage.com/forum/viewtopic.php?t=57863,
  forum.trafic-amenage.com/viewtopic.php?t=51805, e-direct-auto.com (pièces Boxer/Jumper/Ducato)

### Auto-installation : possible, mais pas pour tout de la même façon

Le projet vise à installer un maximum soi-même. Ça se découpe en trois cas différents :

- **Aménagement général** (isolation, mobilier, lit, table, rangements) : entièrement libre,
  aucun professionnel requis — la DREAL inspecte le résultat au moment du dossier RTI/VASP.
- **Installations gaz** (cuisine, chauffage, réfrigérateur, chauffe-eau) : auto-installation puis
  **certification séparée par un organisme agréé (Qualigaz ou Bureau Veritas)** — exactement le
  schéma « installer soi-même, homologuer à part ». Coût observé ~500 € au total (86,90 € de
  frais administratifs + ~400 € de certificat de conformité).
- **La banquette homologuée (sièges/ceintures)** : plus nuancé.
  - Légalement, rien n'interdit la pose par un particulier — un propriétaire a eu confirmation
    écrite de sa DREAL : *« l'installation est possible par vous-même si vous pouvez produire
    tous les documents »* (PV d'essai de traction/crash-test nominatif + notice de pose des
    ancrages/ceintures, fournis par le vendeur).
  - **Ça dépend du fabricant** : Scopema et Scora accepteraient la pose par un particulier (à
    confirmer directement avec eux). Schnierle et AOC, à l'inverse, réservent la vente **et** les
    papiers d'homologation à leur réseau d'installateurs agréés — même légal, ça bloque en
    pratique si le fabricant refuse de vendre la pièce avec son PV.
  - **Ça dépend aussi de la DREAL locale** : certaines acceptent une attestation de pose
    auto-signée, d'autres sont plus strictes — à vérifier avec la DREAL du département
    d'immatriculation avant de s'engager sur cette voie pour la banquette.
  - **Critère de choix supplémentaire en faveur de Scopema/Scora** (au-delà du prix) : ils
    laisseraient la porte ouverte à l'auto-installation, contrairement à Schnierle/AOC.
  - Sources : trafic-amenage.com/forum/viewtopic.php?t=56559 (échange avec la DREAL, cas
    Schnierle), neozone.org (guide homologation par ses soins)

### REIMO — écarté

Bien documenté pour VW T5/T6, Transit Custom, Trafic, Vito (6 062-8 612 € pose comprise chez FLV
Van) mais **aucune fiche produit Ducato/Boxer/Jumper trouvée** — pas la bonne piste pour ce
porteur.

### VASP obligatoire ou pas : cas où on peut l'éviter (et pourquoi ça ne s'applique pas ici)

Le VASP n'est **pas** obligatoire quand l'aménagement est amovible/sommaire, démontable en 2h
maximum sans outillage complexe, sans modification de structure, sans gaz ni installation
électrique fixe, et que la cloison de séparation d'origine reste en place — le véhicule reste
alors classé CTTE (utilitaire), sans dossier DREAL.

⚠️ **Cette échappatoire ne s'applique pas au layout retenu** ([ADR-0009](adr/0009-layout-lit-fixe-banquette-lit.md)) :
lit fixe arrière + banquette homologuée = deux éléments fixes par définition. **Le VASP est donc
obligatoire dans tous les cas**, gaz ou pas — la question gaz/électrique ne change que le contenu
du dossier (avec ou sans certification Qualigaz/Veritas), pas le fait d'avoir à en déposer un.
Sources : neozone.org/comment-echapper-legalement-a-lobligation-dhomologation-vasp,
certivan.fr/blog/vasp-les-5-criteres-indispensables

### Gaz vs tout-électrique : pas encore tranché, ça change le dossier

Le contrôle technique périodique standard **ne porte pas** sur l'installation gaz/électrique de
la cellule habitable — sans surprise donc, aucune obligation « pour rouler légalement » en
dehors des moments de réception. La certification gaz (Qualigaz/Bureau Veritas, normes EN
1949/EN 721) n'intervient qu'à la **réception initiale** (dossier RTI/VASP) et à toute
**modification ultérieure** de l'installation — pas de contrôle gaz récurrent automatique.

**Passer au tout-électrique** (plaque à induction, chauffage diesel ou électrique, chauffe-eau
électrique) fait sortir le dossier du champ de la norme EN 1949 : zéro certification gaz, zéro
réinspection quinquennale de l'installation à prévoir dans la durée — dossier VASP nettement
simplifié (pas de circuit gaz à justifier, pas de détendeur/coupure d'urgence à valider). ⚠️ Ça
n'élimine pas l'homologation VASP elle-même (toujours nécessaire dès qu'il y a des éléments fixes
— lit, banquette, table, cuisine), seulement la brique gaz du dossier.
Sources : combicampingcar.fr, carapacestore.fr/plaque-induction-van-amenage,
somagaz.net/homologation-vasp-sans-gaz

✅ **Tranché : gaz** (voir [ADR-0010](adr/0010-cuisine-chauffage-gaz.md)). Le dossier VASP
inclura donc la certification Qualigaz/Bureau Veritas (~1 130 € pour le dossier complet, contre
~90-750 € sans gaz).

⚠️ **Installer le gaz sans le faire certifier n'est pas une option réaliste** (question posée et
vérifiée) :
- **Blocage administratif** : dossier VASP refusé d'office par la DREAL sans certification —
  reste sur la carte grise d'origine, aménagement non déclaré.
- **Contrôle routier** : amende (jusqu'à ~750 € cité) et immobilisation possible si l'installation
  est jugée non conforme à la carte grise.
- **Assurance — le risque qui pèse le plus** : en cas de sinistre lié au gaz (incendie,
  explosion), l'assureur peut refuser l'indemnisation — véhicule et dommages aux tiers — si
  l'installation n'est pas déclarée/conforme.
- **Sécurité réelle** : la certification existe pour détecter fuites, risque CO et incendie — pas
  qu'une formalité contournable, un vrai risque physique avec de jeunes enfants à bord.
Sources : retro.fr/blog/vehicules-de-loisirs/homologation-vasp, h2r-equipements.com/content/215,
flash-avocat.fr/amende-van-amenage

### ⚠️ Point nouveau, important : risque de malus écologique si mauvaise catégorie

Un fil de forum sur l'ajout d'une 4e place (cas d'un Nissan Primastar, donc à généraliser avec
prudence) signale un piège qui n'était pas identifié jusqu'ici : ajouter des places assises peut
faire **changer la catégorie du véhicule d'utilitaire (VU) à voiture particulière (VP)**, ce qui
déclenche un **malus écologique** — un exemple cité va jusqu'à ~30 000 € pour un fourgon 9 places
non-VASP. **Passer en VASP (catégorie camping-car/autocaravane) évite ce malus.** Comme le projet
vise de toute façon une homologation VASP pour l'aménagement complet (voir tableau DREAL
ci-dessous), ce risque est a priori déjà couvert par la trajectoire choisie — mais c'est une
raison de plus de ne pas se contenter d'un simple ajout de place « RTI minimal » sans viser le
VASP complet. **À confirmer avec un installateur que la case VASP est bien cochée dans le
dossier**, pas seulement l'ajout de la banquette.
Source : trafic-amenage.com/forum/viewtopic.php?t=65971

### Coût du dossier DREAL (ajout/modification de place assise)

Fourchette selon le périmètre du dossier (hors pièce et pose) :

| Périmètre | Coût | Source |
|---|---|---|
| Frais de présentation seuls | 86,90 € | Fiche officielle RTI 03.5.1 |
| Dossier simple accompagné | 250-500 € | CamionAménagé.fr |
| Attestation conformité + passage DREAL + CG | 500-750 € | Rétro+ |
| VASP complet avec certification gaz | ~1 130 € | Retour d'expérience réel (Les Avanturiers) |

**Lecture** : pour un simple ajout/modification de place assise (sans certification gaz), le
coût réaliste se situe plutôt dans la fourchette **basse à intermédiaire, ~90 à 750 €** de frais
administratifs — le chiffre ~1 130 € correspond à un dossier VASP complet, plus cher que
nécessaire si aucun point gaz n'est à homologuer. Une fourchette 1 500-8 000 € a été vue ailleurs
mais semble concerner des dossiers plus lourds (import, transformation majeure) — à écarter pour
ce cas. Deux fils de forum potentiellement riches en retours chiffrés (trafic-amenage.com,
« Ajout d'une 4ème place » et « Ajout banquette arrière homologuée à petit budget ») étaient
inaccessibles lors de cette recherche — à consulter manuellement si besoin d'affiner.

## Prix de marché observés — fourgons nus et aménagés (30 août 2026)

### Fourgons nus (Ducato/Boxer/Jumper L3H2, format 600)

- **5 000 – 20 000 €** pour de l'occasion 2008-2020, 80 000-250 000 km (le gros du marché)
- **30 000 – 45 000 €** pour du quasi-neuf (2025-2026, <10 000 km, vendeurs pros)
- Lecture des résultats de recherche affichés (dizaines d'annonces), pas une moyenne calculée
  rigoureusement — ordre de grandeur, à garder pour le moment où le budget sera rechiffré
  (actuellement mis de côté, voir README).

Annonces individuelles repérées (prix qui bougent vite, à revérifier avant tout contact) :

| Véhicule | Prix | Année | Km | Lien |
|---|---|---|---|---|
| Fiat Ducato L3H2 (Pro Lounge, TVA récup.) | 19 000 € | 2020 | 116 700 | [Annonce](https://www.leboncoin.fr/ad/utilitaires/3249486543) |
| Peugeot Boxer L3H2 2.2 BlueHDi 140 Asphalt | 17 490 € | 2020 | 78 735 | [Annonce](https://www.leboncoin.fr/ad/utilitaires/3097503328) |
| Fiat Ducato L3H2 (caisse boisée pro, pas habitable) | 11 900 € | 2017 | 168 000 | [Annonce](https://www.leboncoin.fr/ad/utilitaires/3250563706) |
| Citroën Jumper FG 35 L3H2 2.0 BlueHDi 130 Business, 1ère main | 10 490 € | 2019 | 174 280 | [Annonce](https://www.leboncoin.fr/ad/utilitaires/3258503783) |
| Fiat Ducato L3H2 | 9 900 € | 2014 | 246 000 | [Annonce](https://www.leboncoin.fr/ad/utilitaires/3222478171) |

⚠️ Aucune de ces annonces n'a encore été vérifiée sur la config sièges avant (individuels vs
banquette) ni sur le nombre de places carte grise — invisible dans les champs structurés,
toujours à confirmer sur photos/description ou en visite avant tout contact sérieux.

### Vérification photos des 5 annonces (31 août 2026)

Revue manuelle des photos par la famille elle-même, annonce par annonce :

- **Ducato 19 000 € (2020, 116 700 km)** : seulement 3 photos. Sièges passagers avant en un
  seul bloc (banquette). Aménagement intérieur artisan — étagères et sol en bois.
- **Boxer 17 490 € (2020, 78 735 km)** : photos type showroom/concessionnaire. Aménagement en
  deux parties (une avant la porte coulissante, un coffrage arrière accessible seulement par
  l'arrière) — probablement un ancien véhicule d'électricien. Sièges passagers avant en un seul
  bloc (banquette).
- **Ducato caisse boisée 11 900 € (2017, 168 000 km)** : échelle arrière + galerie de toit,
  étagères en bois à l'intérieur (encore un profil artisan). Sièges avant non visibles sur les
  photos.
- **Jumper 10 490 € (2019, 174 280 km)** : sièges passagers avant en un seul bloc (banquette).
  Étagères et plancher en bois (artisan), grilles d'aération porte arrière et avant-haut côté
  gauche de la cellule.
- **Ducato 9 900 € (2014, 246 000 km)** : aucune photo d'intérieur — ni sièges ni aménagement
  vérifiables sur l'annonce seule. À écarter ou à faire visiter avant d'aller plus loin, pas
  assez d'information pour juger.

**Constat** : sur les 4 annonces où la cabine est visible, **aucune n'a de sièges avant
individuels** — confirme que la conversion (siège d'occasion + embase pivotante, voir plus haut)
sera la voie normale sur ce marché, pas un cas de repli rare. Les aménagements intérieurs
observés sont tous des profils artisan/pro (étagères et sols en bois, pas de couchage) — cohérent
avec une recherche de fourgon nu : à vider avant aménagement, mais aucun ne coche déjà les
critères cabine cibles de l'ADR-0006, donc pas de candidat pour la voie « prix nu négocié sur
aménagement existant » (ADR-0007) dans ce lot.
⚠️ Aucune de ces 5 annonces n'a encore été vérifiée sur le seuil de qualité mécanique (glossaire) :
carnet d'entretien, contrôle technique, état mécanique — pas d'information visible dans les
photos/description consultées jusqu'ici.

### Fourgons déjà aménagés — validation de la stratégie « prix nu » (ADR-0007)

Sur 17 annonces « Ducato L3H2 aménagé » passées en revue : quasiment toutes sont des conversions
van-life solo/couple (2-3 places, lit simple ~140 cm, pas de banquette arrière homologuée) —
aucune ne correspond au besoin familial (banquette homologuée + lit ≥190 cm). **Constat qui
valide la logique de l'ADR-0007** : plusieurs de ces aménagements se négocient déjà dans la même
fourchette qu'un fourgon nu équivalent (16 000-25 000 €), précisément parce qu'ils n'ont pas la
config recherchée — un signal que la stratégie « prix nu » est réaliste sur ce segment, pas
seulement théorique.

## Archive de suivi marché — 22 annonces (31 août 2026)

Recherche élargie (Ducato/Boxer/Jumper, 18 L3H2 prioritaires + 4 L4H2 secondaires),
archivée en HTML + photos dans [docs/marche/annonces/](marche/annonces/), tableau complet
dans [docs/marche/recap-2026-08-31.md](marche/recap-2026-08-31.md). Prix observés : 9 900 €
à 39 500 €.

⚠️ **Deux annonces à traiter avec prudence, deux corrections** (vérifications des
1er-2 septembre 2026, sur le HTML/photos archivés, pas seulement sur le titre de
l'annonce) :
- **3235756663** : contrôle technique **à refaire (négatif)**, confirmé. Sur les places
  en revanche, **le champ structuré leboncoin s'est révélé faux** : il indiquait
  `seats: "1"`, mais les photos montrent clairement **au moins 6 sièges** (sièges avant +
  une banquette arrière rapportée avec ceintures). Erreur de saisie probable du vendeur.
  Nombre de places **légal** (carte grise) toujours à vérifier directement — ni le champ
  ni un comptage sur photo ne fait foi à eux seuls, l'un peut être une erreur de saisie,
  l'autre ne dit rien de l'homologation. Ce candidat n'est donc peut-être pas aussi
  mauvais que le premier passage le laissait penser (CT à refaire reste un vrai coût,
  mais le nombre de sièges physiques est bien meilleur qu'annoncé) — à re-regarder si le
  CT ne rebute pas.
- **3230965149** : **2 places / 2 portes** confirmées par le champ structuré leboncoin
  (`seats: "2"`, `doors: "2"`) — cabine courte, ne correspond a priori pas au besoin
  4 places.

📌 **Leçon méthodologique** : un champ structuré leboncoin n'est pas plus fiable qu'un
titre d'annonce — c'est un champ rempli par le vendeur, pas une donnée officielle. La
seule vérification qui vaille reste le **regard direct sur les photos** (ou la carte
grise en visite), pas la confiance dans un type de source plutôt qu'un autre.
- 🗄️ *Fausses alertes, corrigées* : **3111078233** (« Cabine » dans le titre) et
  **3172038406** (« Benne » dans le titre) avaient été signalées comme possibles
  châssis-cabine/benne sur la seule foi du titre de l'annonce. Vérification du champ
  structuré et des photos : 3111078233 a un champ **« Carrosserie : Fourgon tôlé »**
  explicite ; 3172038406 montre sur ses photos un **fourgon tôlé fermé classique**, pas
  une benne. Les deux mots faisaient partie du nom de finition/du titre saisi par le
  vendeur, pas de la carrosserie réelle. **Leçon retenue : vérifier le champ carrosserie
  ou les photos, jamais le titre seul.**

✅ **Candidat à noter** : **3243353771** (Ducato L3H2, 39 500 €, 2014, 150 000 km) est la
première annonce trouvée avec **4 places homologuées carte grise (VASP)** dès l'achat —
aménagement complet, CT valide jusqu'en 2028. Présence d'un lit fixe non confirmée
(description tronquée), à vérifier sur les photos archivées.

Plusieurs annonces « aménagées » n'ont pas de lit fixe confirmé (banc convertible, salon
en U, etc.) : à évaluer au prix du nu équivalent selon la règle de l'ADR-0007, pas comme
un aménagement valorisé.

## Critère de recherche : pas de GNV (1er septembre 2026)

La motorisation **gaz naturel (GNV)** est exclue — n'intéresse pas la famille. Rejoint le
critère déjà noté sur cette annonce (réseau d'avitaillement GNV plus rare qu'une station
diesel classique), mais c'est un choix, pas seulement une contrainte pratique : à exclure
d'emblée dans les prochains tours de recherche, pas seulement à signaler comme un point
d'attention.

**Conséquence** : **3226785978** (Ducato L4H2 GNV, 9 990 €) retiré du comparateur
([comparateur-2026-08-31.html](marche/comparateur-2026-08-31.html)) et des candidats actifs.
Fichiers sources conservés dans [docs/marche/annonces/3226785978/](marche/annonces/3226785978/)
(pas supprimés — juste hors périmètre).

## Nouveau critère de recherche : préférence moteur (31 août 2026)

À prix, âge et kilométrage équivalents, préférence pour un moteur **Renault ou
Volkswagen** plutôt que **PSA** — pas une exclusion, un critère de départage entre
candidats par ailleurs équivalents.

Précision technique : sur le trio Ducato/Boxer/Jumper, seuls **Boxer et Jumper depuis
leur restylage ~2014** ont un moteur PSA (BlueHDi). Le **Ducato garde un moteur Fiat**
(MultiJet) sur toute sa carrière — il reste donc **neutre**, à égalité avec Renault/VW,
et n'est pas concerné par la préférence ni par la réserve. Avant 2014, Boxer/Jumper
partageaient aussi le moteur Fiat, donc seuls les Boxer/Jumper **récents (moteur PSA)**
sont concernés par le départage en faveur de Renault/VW.

Conséquence pratique : la recherche s'élargit aux **Renault Master** et **VW Crafter**,
déjà compatibles avec la contrainte 4-places-large du glossaire (Transit et Crafter y
étaient déjà cités comme porteurs valides, Master à ajouter).
⚠️ **Rien n'est vérifié pour Master ou Crafter** : toute la recherche sièges/banquette
faite jusqu'ici (embases pivotantes RIB/Scopema, interchangeabilité des sièges avant,
compatibilité Scopema Altaïr) a été validée spécifiquement sur la plateforme
Ducato/Boxer/Jumper (X250/X290) — à reprendre si un de ces porteurs devient sérieux.

⚠️ **L'archive de 22 annonces (ci-dessus) a été constituée avant ce critère, en
Ducato/Boxer/Jumper uniquement** — Master et Crafter n'y figurent pas encore, à élargir
dans un prochain tour. Repère pour départager les Boxer/Jumper déjà archivés : le
passage au moteur PSA (BlueHDi) date de leur restylage **~2014** ; avant cette date,
Boxer/Jumper partageaient le moteur Fiat, comme le Ducato en a toujours un. Sur les 22
annonces : les Boxer/Jumper **antérieurs à 2014** (3236835638 - 2012, 3248186538 - 2013,
3234575793 - 2013, 3230949857 - 2009, 3260522331 - 2011, 3235756663 - 2008) sont donc
probablement à moteur Fiat, neutres vis-à-vis du critère. Ceux **de 2014 ou après**
(3240076135, 3148537724, 2869595583, 3202627305, 3250279944, 3218678796, et tout modèle
explicitement « BlueHDi ») sont concernés par le départage en faveur de Renault/VW à
prix/âge/km équivalents. **Non vérifié sur fiche technique précise (VIN/motorisation) —
à confirmer avant décision finale**, l'année seule est une approximation.

## Sources consultées

- leboncoin.fr (annonces cabine approfondie Ducato/Boxer ; annonces fourgons nus et aménagés
  L3H2 Ducato/Boxer/Jumper, recherche du 30 août 2026)
- narbonneaccessoires.fr, h2r-equipements.com, airsportif.com (embases pivotantes RIB/Scopema)
- comptoir-utilitaire.com, myutilitaire.com (dimensions Ducato cabine approfondie vs fourgon tôlé)
- flv-van.com (bancs-lits REIMO homologués)
- levanmigrateur.com (procédure DREAL/RTI pour ajouter des places assises)
- scopema.com (gamme Altaïr 3P / Neptune 3P), vanloisir.com, equipage-camper-van.com
  (banquettes-lits homologuées, prix)
- démarchesadministratives.fr, camionamenage.fr, retro.fr, lesavanturiers.fr, homologations.eu
  (coûts de dossier DREAL RTI/VASP)
