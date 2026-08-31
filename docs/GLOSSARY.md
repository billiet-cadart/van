# Glossaire — achat d'un véhicule de voyage, famille de 4

Contexte : achat d'un véhicule pour dormir/voyager en famille (2 adultes, 2 enfants
de 2 ans½ et 7 mois) pendant une phase de vie « petits enfants + maison en travaux ».
Ce glossaire fixe le vocabulaire de la décision. Il ne contient ni chiffres ni décisions
(voir [`adr/`](adr/) pour les décisions).

## Langage

**Achat-tremplin** *(terme périmé, voir ADR-0008)* :
Véhicule acheté pour la phase actuelle (petits enfants, pas de bande passante pour
aménager), destiné à être revendu quand les enfants grandissent ou quand on aura le
temps d'aménager le van définitif. La décision se jugeait sur le coût de possession, pas
sur le prix d'achat.
⚠️ Ce cadre a structuré le glossaire et les ADR-0001 à 0007. Depuis l'[ADR-0008](adr/0008-van-definitif-pas-tremplin.md),
le fourgon en recherche est visé comme **van définitif** (voir ce terme) — ce n'est plus
un tremplin. Gardé pour mémoire : ça explique pourquoi le coût de possession et la
liquidité ont autant pesé dans les décisions passées.

**Van définitif** :
Le véhicule que la famille compte garder, sauf imprévu — pas de revente planifiée à
échéance. Cadre actuel de la recherche ([ADR-0008](adr/0008-van-definitif-pas-tremplin.md)),
remplace l'achat-tremplin. La revente reste un filet de sécurité, plus un critère de
choix actif du porteur ou de l'aménagement.

**Coût de possession** *(portée révisée, voir ADR-0008)* :
Décote (prix d'achat − prix de revente) + entretien + assurance. Sous l'ancien cadre
achat-tremplin, se mesurait sur ~5-6 ans et la décote dominait. Depuis que le fourgon est
visé comme van définitif, la décote ne se réalise plus (pas de revente planifiée) : ce
qui compte devient la fiabilité et le coût d'entretien sur un horizon long (10-15 ans).
Pas mesuré comme tel dans ce dépôt, mais un premier repère opérationnel existe pour trier
les annonces pendant la recherche — voir **seuil de qualité mécanique**.
_À éviter_ : « prix », « budget » tout court

**Seuil de qualité mécanique (recherche)** :
Repère utilisé pour trier les annonces de porteur, posé le 31 août 2026 : ne pas lésiner
sur la qualité mécanique pour faire baisser le prix, pour éviter une mauvaise surprise.
Concrètement, pour un Ducato/Boxer/Jumper (moteurs réputés robustes bien entretenus) —
privilégier moins de 200 000 km, carnet d'entretien ou factures récentes visibles, contrôle
technique en cours sans contre-visite majeure (mécanique/châssis) ; au-delà d'un certain
budget, prévoir une expertise mécanique payante avant de s'engager plutôt que de se fier à
l'annonce seule. Une annonce à prix plus bas qui ne coche pas ces cases n'est pas une bonne
affaire pour cette famille — c'est le risque à éviter, pas le prix à minimiser.
_À ne pas confondre avec_ : **état de carrosserie (aménagement précédent)**, qui porte sur
les traces d'un aménagement retiré, pas sur l'état mécanique du porteur.

**Liquidité de revente** *(devenue filet de sécurité, voir ADR-0008)* :
Facilité à revendre vite et sans brader. Sous l'ancien cadre achat-tremplin, c'était un
critère de décision actif. Depuis l'ADR-0008 (van définitif), ça reste préférable — ne
pas choisir un porteur invendable — mais ce n'est plus ce qui pilote le choix.

**Claquant** :
Dépense qu'on ne récupère PAS à la revente : options luxe, millésime quasi-neuf (décote
non purgée), marque-vanité sans reprise. Le critère n'est pas le prix élevé mais la
**non-récupérabilité**.
_Opposé_ : un prix élevé mais fortement récupérable (ex. VW California) = **bon
investissement**, pas du claquant.
⚠️ *Portée à revoir avec l'ADR-0008* : la notion reposait sur une revente prévue. Le van
étant désormais visé comme définitif, la non-récupérabilité à la revente perd de sa
pertinence pour CE véhicule — question de budget d'aménagement volontairement mise de
côté pour l'instant (voir README), à reprendre le moment venu.

**Couchage d'appoint** *(portée réduite, voir ADR-0009)* :
Place de sommeil improvisée et sécurisée (sol entre banquettes sur lattes souples, tente
sur les sièges avant, etc.). ⚠️ Ne décrit plus le couchage des enfants au quotidien :
l'aménagement prévoit désormais un couchage dédié pour eux (banquette + table → lit,
voir ADR-0009). Le terme reste utile pour un couchage exceptionnel (invité, imprévu).
_À ne pas confondre avec_ : place carrossée (le couchage d'appoint sert à dormir à
l'arrêt, pas à rouler).

**Confort thermique** :
Le fait d'avoir plus ou moins chaud la nuit. Réglable (duvets, chauffage d'appoint),
et la famille tolère d'avoir un peu froid.
_À ne pas confondre avec_ : hors-gel

**Hors-gel** :
Le fait que le circuit d'eau (réservoirs, tuyaux, vanne de vidange) ne gèle pas quand
il fait négatif dehors. Indépendant de la tolérance au froid des occupants ; un tuyau
qui gèle éclate. Enjeu clé pour les sorties ski/cascade de glace.

## Catégories de véhicules

**Fourgon aménagé** :
Un utilitaire (type Fiat Ducato, Peugeot Boxer, Renault Master, VW) déjà aménagé
pour dormir/vivre, gabarit d'un gros utilitaire. Réservoirs souvent dans le volume
intérieur. Se conduit et se gare presque comme une camionnette. Très demandé.
**Redevenu une source de recherche valable** (voir ADR-0007) : au **prix nu** (voir ce
terme) si l'aménagement existant ne colle pas aux critères cibles (ADR-0006), évalué
sur ses propres mérites sinon.
_À éviter_ : « van » tout court (ambigu)

**Fourgon nu** :
Le même utilitaire mais vide, à aménager soi-même. **Cible actuelle** (voir ADR-0005) :
la famille a désormais les compétences, le budget et le temps pour l'aménagement.
_Anciennement_ : écarté faute de bande passante (raisonnement d'origine dans ADR-0001,
partiellement périmé).

**Prix nu (négociation)** :
Le prix de référence visé pour un fourgon déjà aménagé **dont l'aménagement ne
correspond pas aux critères cibles** (ADR-0006 : sièges avant individuels/pivotants,
banquette homologuée bien faite) — dans ce cas l'aménagement n'a aucune valeur pour la
famille, qui le referait de toute façon. Ne s'applique **pas** quand l'aménagement
existant coche déjà les critères cibles : ce véhicule s'évalue alors sur ses propres
mérites (ADR-0007). Ne s'applique pas non plus au camping-car (cellule dédiée, pas un
aménagement démontable).

**État de carrosserie (aménagement précédent)** :
Trous, découpes de fenêtres et de lanterneaux laissés par un aménagement précédent.
Jamais un critère éliminatoire en soi, mais pèse sur le prix négocié — à distinguer du
désassemblage des meubles (jugé mineur, sans impact sur l'éligibilité d'un véhicule).
Plus la carrosserie est modifiée/abîmée par l'aménagement précédent, plus la décote
visée au **prix nu** se justifie. Voir ADR-0007.

**Camping-car** :
Véhicule de loisir construit sur châssis, cellule habitable dédiée. Sous-types :
- **Capucine** : couchage au-dessus de la cabine (la « casquette »). Volumineux, daté.
- **Profilé** : toit profilé sans capucine, plus aérodynamique. Réservoirs souvent
  sous le plancher (→ enjeu hors-gel).
- **Intégral** : cabine intégrée à la cellule, haut de gamme, cher.

## Contraintes légales / pratiques (à vérifier par véhicule)

**Places carrossées (homologuées)** :
Places assises avec ceinture homologuées pour rouler, telles qu'inscrites sur la carte
grise. Une famille de 4 en a besoin de 4. Un aménagement peut avoir des couchages pour 4
mais seulement 2 ou 3 places carrossées.
_À éviter_ : « places » (couchage ≠ place pour rouler)
_Fait marché (2026)_ : les vans courts (≤5,4 m : Trafic, T6, Jumpy) sont presque
toujours homologués **3 places** — l'aménagement ne change pas l'homologation du porteur.
Les **4 places** exigent un porteur large (Ducato/Boxer/Jumper, Transit, Crafter) en
longueur « 600 » (~5,99 m). Donc « compact ≤5,4 m » et « 4 places » sont incompatibles.

**Fourgonnette** :
L'appellation leboncoin pour le van/fourgon aménagé (catégorie Caravaning), distincte de
« Camping-car alcôve/semi-intégré/intégré ». Classement parfois erroné (des profilés s'y
glissent) — vérifier le texte de l'annonce.

**Format « 600 »** :
Fourgon aménagé de ~5,99 m sur porteur large (Ducato & cousins, Transit, Crafter). C'est
le plus court qui offre 4 places carte grise. Point de compromis réaliste entre compacité
et famille de 4.

**Siège enfant fixé ceinture** :
La famille n'exige PAS l'ISOFIX : un siège enfant sanglé à une ceinture homologuée
convient. La contrainte réelle est donc « 4 places carrossées face route avec ceinture
3 points », dont deux capables de recevoir un siège enfant sanglé.

**Sièges pivotants** :
Sièges cabine avant qui pivotent vers l'espace de vie pour gagner de la place.
Souhaité (gain de place au stationnement/vie) mais non obligatoire — voir ADR-0006 pour
la configuration cabine cible.

**Banquette** :
Siège arrière large (plusieurs places) dans l'espace de vie, homologué avec ceintures 3
points. Cumule trois fonctions : place carrossée pour rouler, assise du salon (coin
repas autour d'une table) à l'arrêt, et **couchage enfants** la nuit une fois combinée
avec la table (banquette + table → lit — voir [ADR-0009](adr/0009-layout-lit-fixe-banquette-lit.md)
pour le layout complet, dont un souhait — pas une exigence ferme — d'accueillir aussi des
amis adultes en visite). Distincte des sièges avant individuels.

**Soute** :
Rangement bas de grand volume, accessible depuis l'extérieur, pour le matériel de
sport long/encombrant (skis, planche de wing foil, matos d'escalade). Critère de tri
majeur pour cette famille. Typiquement sous un lit fixe arrière.
_À éviter_ : « coffre », « garage » (anglicisme ambigu)

**PTAC** :
Poids total autorisé en charge. Au-delà de 3,5 t, le permis B ne suffit plus.
Famille + eau + matos + vélos peut faire dépasser la limite sur les gros véhicules.
⚠️ *À surveiller (recherche du 31 août 2026)* : une directive européenne (UE 2025/2205, 5
novembre 2025) prévoit de porter cette limite à **4,25 t sur permis B** pour les camping-cars
(sous condition : permis B depuis 2 ans + formation complémentaire 7-14h, pas de nouvel examen).
**Pas encore transposée en droit français** à ce jour — échéance légale 2029 au plus tard,
aucune date française fixée. Ne pas compter dessus pour l'instant, mais à suivre si le projet
s'étale dans le temps.
