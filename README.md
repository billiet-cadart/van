# van — trouver un véhicule qui nous va

Achat d'un véhicule pour dormir et voyager en famille — 2 adultes, 2 enfants (2 ans½ et 7 mois).
Visé comme **van définitif** (ADR-0008) : la famille compte le garder, sauf imprévu — ce n'est
plus un achat-tremplin en vue d'une revente à 5-6 ans.

**Cible retenue : un porteur format « 600 » (~5,99 m) sur base Ducato/Boxer/Jumper, hauteur H2
(~2,60 m), 4 places carte grise — *nu* (à aménager nous-mêmes), ou déjà aménagé et négocié au
**prix nu** si l'aménagement existant ne colle pas aux critères cabine cibles (sinon, évalué à
part) (ADR-0007). Cabine idéale : 2 sièges avant pivotants + banquette arrière servant de salon ;
🗄️ *le « à défaut, on complète/modifie les sièges nous-mêmes » est périmé depuis le 7 septembre
2026* — la conversion passe par **AOC**, installateur retenu, et l'auto-pose est exclue si l'on veut
l'homologation ([ADR-0019](docs/adr/0019-aoc-installateur-retenu-sieges.md)). 🔴 **Deux contraintes
d'AOC entrent dans le choix du porteur** : siège conducteur d'origine en **version standard** (sans
airbag, sans embase tournante, sans suspension) et **plancher tôle non repeint**.
Motorisation **diesel uniquement** (ADR-0014) — gaz (ADR-0012), électrique (ADR-0013) et essence
sont tous éliminatoires.
Budget : mis de côté pour l'instant (à rechiffrer plus tard — achat porteur + aménagement —
l'ancien repère de 37–42 k€ visait un véhicule déjà aménagé et payé comme tel).**

> 📁 **Ces cinq dépôts se clonent côte à côte**, dans un même dossier parent : `maison/`, `travaux/`,
> `extension/`, `van/`, `comptes/`. Ils se citent les uns les autres, et ces liens **ne résolvent que
> dans cette disposition** — pas sur GitHub. Une même session de travail peut donc modifier plusieurs
> dépôts à la fois, et c'est le cas normal.
>
> 💾 **Pour enregistrer son travail, il suffit de demander « sauvegarde ».** Claude s'en occupe, dans
> tous les dépôts concernés, sans qu'il y ait besoin de connaître Git. Détails → [CLAUDE.md](CLAUDE.md).

## Les documents

| Doc | Contenu |
|---|---|
| [docs/GLOSSARY.md](docs/GLOSSARY.md) | Le vocabulaire de la décision — **achat-tremplin**, **coût de possession**, **claquant**, **places carrossées**, **soute**, **hors-gel**… Ni chiffres ni décisions |
| [docs/adr/0001](docs/adr/0001-fourgon-amenage-plutot-que-camping-car.md) | Pas un camping-car — et pourquoi le camping-car bon marché est un piège. ⚠️ Le volet « aménagé, pas nu » est inversé par l'ADR-0005 |
| [docs/adr/0002](docs/adr/0002-compacite-prime-sur-le-confort.md) | La compacité prime sur le confort |
| [docs/adr/0003](docs/adr/0003-cible-fourgon-600-4-places.md) | Cible : fourgon « 600 », **4 places fermes**, couchages souples |
| [docs/adr/0004](docs/adr/0004-strategie-valeur-ducato-600.md) | 🗄️ Périmé — comparait des fourgons déjà aménagés (Ducato ancien vs VW Grand California), voir ADR-0005/0006 |
| [docs/adr/0005](docs/adr/0005-fourgon-nu-a-amenager-soi-meme.md) | **Fourgon nu** à aménager soi-même, plutôt qu'aménagé d'occasion |
| [docs/adr/0006](docs/adr/0006-config-porteur-nu-sieges-cabine.md) | Cabine cible : sièges avant pivotants + banquette arrière salon, 4e place en repli |
| [docs/adr/0007](docs/adr/0007-elargir-recherche-amenage-negocie-nu.md) | La recherche accepte aussi les fourgons déjà aménagés, négociés au **prix nu** si l'aménagement ne colle pas aux critères |
| [docs/adr/0008](docs/adr/0008-van-definitif-pas-tremplin.md) | Ce n'est plus un achat-tremplin : la famille compte garder ce van, sauf imprévu |
| [docs/adr/0009](docs/adr/0009-layout-lit-fixe-banquette-lit.md) | Layout arrière : lit fixe parents + banquette-lit convertible pour les enfants (≥190 cm) |
| [docs/adr/0010](docs/adr/0010-cuisine-chauffage-gaz.md) | Cuisine au gaz, chauffage au diesel |
| [docs/adr/0011](docs/adr/0011-confirmation-format-600-arbitrage-marge-maniabilite.md) | Format 600 (L3H2) confirmé — ni L4H2 (aucun gain de largeur), ni L2H2 (trop juste) ; arbitrage marge/maniabilité, pas obligation des 4 places |
| [docs/adr/0012](docs/adr/0012-exclure-porteurs-motorisation-gaz.md) | 🔴 Critère éliminatoire : pas de porteur GNV/GNC/GPL — ne concerne **pas** le gaz de cuisine (ADR-0010) |
| [docs/adr/0013](docs/adr/0013-exclure-porteurs-electriques.md) | 🔴 Critère éliminatoire : pas de porteur électrique — charge utile, autonomie, batterie invérifiable sur un van gardé 10-15 ans |
| [docs/adr/0014](docs/adr/0014-diesel-uniquement.md) | 🔴 **Diesel uniquement** — un critère positif unique qui chapeaute les ADR-0012 et 0013, l'essence n'existant pas sur ce segment en Europe |
| [docs/adr/0015](docs/adr/0015-methode-recherche-marche.md) | Méthode de recherche marché : une seule passe, **les fichiers HTML+photos comme seul livrable** (pas de compte rendu), liste des annonces déjà archivées jointe au prompt |
| [docs/adr/0016](docs/adr/0016-annonces-ecartees-sortent-de-archive.md) | Une annonce écartée pour un motif définitif **sort de l'archive** ; ce qu'on garde, c'est la ligne qui dit pourquoi → [annonces-exclues.md](docs/marche/annonces-exclues.md) |
| [docs/adr/0017](docs/adr/0017-2-places-avant-critere-de-budget-pas-de-recherche.md) | Le **« 2 places avant » sort des critères de recherche** : 2 annonces sur 105, et la prime demandée dépasse les ~2 600 € de conversion. Devient une ligne de budget |
| [docs/adr/0018](docs/adr/0018-millesime-2021-limite-de-prestataire-pas-critere.md) | La borne **« avant 2021 »** d'un installateur est une **limite de catalogue, pas un critère** : les capteurs d'assise des millésimes ≥ 2022 se traitent par une option siège à **72 €** — la recherche de porteur ne se referme pas |
| [docs/adr/0019](docs/adr/0019-aoc-installateur-retenu-sieges.md) | ✅ **AOC retenu comme installateur des sièges** — 1 869 € TTC le rang I contre 2 508 € chez Equipage, à 15 km, DREAL prise en charge. Et 🔴 **le choix du porteur se fait désormais sous ses contraintes** |
| [docs/adr/0020](docs/adr/0020-plancher-de-millesime-13-ans-de-vie-restante.md) | 🔴 **Plancher de millésime : ≥ 2019**, soit au moins 13 ans de vie devant lui. Le **kilométrage sort des critères de tri** et devient un plafond calculé. 38 candidats sur 68 survivent |
| [docs/adr/0021](docs/adr/0021-exclure-les-porteurs-propulsion.md) | 🔴 **Critère éliminatoire : pas de propulsion** (RWD / roues jumelées) — la hauteur intérieure tombe à 1 786-1 798 mm et annule la raison d'être du H2. Trois candidats sortis |
| [docs/installateurs/](docs/installateurs/courriel-devis-2026-09-04.md) | Le courriel aux installateurs, **les deux réponses du 7 septembre 2026** — AOC (prétensionneur rebranché, attestations gratuites, DREAL 800 €) et le **devis Equipage à 7 418,40 € TTC** — et les **tarifs AOC relevés au configurateur** le même jour, qui referment la comparaison |
| [docs/recherche-marche-sieges.md](docs/recherche-marche-sieges.md) | Note vivante — sièges, banquette-lit, VASP/gaz, dimensions L2/L3/L4, prix et pièges observés |
| [docs/marche/](docs/marche/README.md) | L'archive des annonces (**100** au 7 septembre 2026), les critères de tri, et le [comparateur](docs/marche/comparateur-2026-08-31.html) des **68 candidats actifs**, classés au **coût par an de vie restante** et filtrés sur le plancher de millésime (**38 visibles, 30 masqués**) |
| [docs/marche/annonces-exclues.md](docs/marche/annonces-exclues.md) | Les annonces écartées et **pourquoi** — la liste à recoller dans chaque prompt de recherche pour ne pas les retélécharger |
| [docs/dossier-dreal-38.md](docs/dossier-dreal-38.md) | 🔴 **Source qui fait foi sur l'homologation** — réponses écrites de la DREAL Isère (2 **et 3** sept. 2026) : dépôt du dossier **en fin de chantier**, accord constructeur pour 3→2 places **et comment s'en passer**, 3 PV pour la banquette, autorisation nominative pour **tout** PV, porteur 2 places d'usine confirmé, R10 sur tout l'électronique, plaque de transformation, délais réels. Et les décisions/actions qui en découlent |
| [docs/dimensions-l3h2.md](docs/dimensions-l3h2.md) | Cotes de référence du format cible — Sevel, Master, Transit, banquette Scopema, et ce qui reste à mesurer sur le véhicule |
| [docs/verification-2026-09-02.md](docs/verification-2026-09-02.md) | 🔴 Contrôle de toutes les affirmations du dépôt contre les sources primaires — ce qui est confirmé, les 8 corrections apportées (dont ZFE et braquage L4), et ce qui n'est pas vérifiable sans le relais navigateur |
| [docs/zfe-grenoble.md](docs/zfe-grenoble.md) | Note vivante — ce qu'on risque vraiment si le van est hors critère : sanction, horaires, dérogation VASP, et les deux questions à poser à la Métropole |
| [docs/duree-de-vie-et-cout-par-an.md](docs/duree-de-vie-et-cout-par-an.md) | Note vivante — **combien d'années il reste au porteur, et ce que le van coûte par an** : l'âge tue, le kilométrage se paie ; classement des 68 candidats en €/an, plafonds de km par millésime, et le levier anticorrosion |

## Le raisonnement, étape par étape

1. **La métrique n'est pas le prix, c'est le coût de possession** (décote + entretien + assurance sur ~5-6 ans) et la **liquidité de revente**. *« Le van, on immobilise ; le camping-car, on dépense. »*
2. **Une seule contrainte est ferme : 4 places carte grise.** Elle exclut le « compact 5,4 m » (vans étroits, presque toujours homologués 3 places) — et c'est ce qui a fait céder la préférence pour la compacité (ADR-0002 → ADR-0003). ⚠️ *Nuance apportée par l'[ADR-0011](docs/adr/0011-confirmation-format-600-arbitrage-marge-maniabilite.md)* : les 4 places n'imposent pas précisément le format 600 (un porteur large plus court, L2H2, les permet aussi) — le 600 reste la cible, mais comme arbitrage marge/maniabilité, pas comme obligation.
3. **Les couchages, eux, étaient pensés souples au départ** : 2 couchages intégrés (parents), enfants en couchage d'appoint. Ce qui ouvre le gros segment « 4 places / 2 couchages », bien moins cher que les « Family+ » — mais voir point 7, ce repère a changé depuis.
4. **Revirement : on aménage nous-mêmes** (ADR-0005). Le porteur cible (format, hauteur, 4 places) ne change pas, mais on cherche un fourgon **nu**, pas déjà aménagé. La cabine idéale a 2 sièges avant pivotants + une banquette arrière qui sert de salon ; sinon, on complète ou modifie les sièges nous-mêmes si l'homologation reste simple et pas chère (ADR-0006). 🗄️ *Ce dernier point est tombé le 7 septembre 2026* — voir le point 10.
5. **La recherche s'élargit aux fourgons déjà aménagés** (ADR-0007) : au **prix nu** si l'aménagement existant ne colle pas aux critères cabine cibles (ADR-0006) — il n'a alors aucune valeur retenue, bon ou mauvais — sinon le véhicule s'évalue sur ses propres mérites. Le risque à surveiller n'est pas le démontage des meubles mais l'état de la carrosserie (trous, fenêtres, lanterneaux) laissé par l'aménagement précédent. Le camping-car reste hors de cette voie : sa cellule n'est pas un aménagement démontable.
6. **Ce n'est plus un achat-tremplin** (ADR-0008) : la famille compte garder ce van, sauf imprévu. Le coût de possession et la liquidité de revente — jusqu'ici LA métrique de décision — passent au second plan ; ce qui compte devient la fiabilité et l'entretien sur un horizon long. ♻️ *Chiffré le 7 septembre 2026* → [docs/duree-de-vie-et-cout-par-an.md](docs/duree-de-vie-et-cout-par-an.md) : **l'âge tue le van, le kilométrage se paie**.
7. **Layout retenu : lit fixe parents à l'arrière + banquette-table qui se transforme en lit pour les enfants** (≥190 cm, ADR-0009) — remplace le couchage d'appoint souple du point 3 pour l'usage quotidien enfants, qui reste disponible pour un usage exceptionnel (invité, imprévu). Pas dimensionné pour durer jusqu'à l'adolescence par choix assumé : le jour où ça ne suffit plus, la famille revendra ou retouchera l'aménagement à ce moment-là.
8. **Conformité complète, sans raccourci** (ADR-0009/0010) : VASP obligatoire vu le lit fixe et la banquette homologuée retenus. Cuisson au gaz (certifiée Qualigaz/Bureau Veritas), chauffage au diesel pressenti (homologué E/R10) plutôt que gaz — jamais de raccourci sur l'une ou l'autre certification, même si ça coûte plus cher ou prend plus de temps. Le but est d'être en règle pour la route et le contrôle technique, pas seulement d'éviter une amende. ⚠️ *Précision du 2 septembre 2026* : le **R10 ne concerne pas que le chauffage** — la DREAL Isère l'exige sur **tout équipement électronique fonctionnant en circulation** (régulateur solaire, frigo, convertisseur, chargeur). C'est donc un critère d'achat sur toute la ligne électrique, à vérifier sur fiche produit avant de commander → [docs/dossier-dreal-38.md](docs/dossier-dreal-38.md).
9. **Format 600 (L3H2) reconfirmé, pour une autre raison que celle d'origine** (ADR-0011) : ni plus long (L4H2 — même largeur intérieure, +37cm seulement, nettement moins maniable), ni plus court (L2H2 — légal pour les 4 places, mais trop juste en pratique, confirmé par un précédent réel). Le 600 est un arbitrage marge d'implantation / maniabilité, pas une obligation légale.

10. **L'aménagement reste en autoconstruction, mais pas les sièges** (ADR-0019, 7 septembre 2026). Deux devis reçus le même jour ont tranché : **AOC** (Villard-Bonnot, 15 km) pose les sièges avant, les deux embases pivotantes et la banquette-lit arrière. Ce n'est pas un choix de confort mais une contrainte : *« si vous souhaitez homologuer l'installation auprès de la DREAL, il faut obligatoirement me confier le montage »*. Et la décision **remonte dans la recherche de porteur** — ses conditions techniques (siège conducteur en version standard, plancher tôle non repeint) deviennent des critères d'annonce, au même titre que le format ou la motorisation. C'est la première fois dans ce dossier qu'un **prestataire** contraint le **choix du véhicule** : jusqu'ici, c'était la DREAL et le marché.

11. **La métrique de décision change : ce n'est plus le prix, c'est le coût par an de vie restante**
    ([ADR-0020](docs/adr/0020-plancher-de-millesime-13-ans-de-vie-restante.md), 7 septembre 2026).
    L'ADR-0008 avait rétrogradé le coût de possession sans lui donner de remplaçant ; c'est fait —
    `(prix du porteur + aménagement) / années de vie restantes`
    ([note](docs/duree-de-vie-et-cout-par-an.md)). Trois résultats : l'aménagement (14-21 k€) coûte
    **plus cher que le porteur et ne lui survit pas** ; c'est **le calendrier qui tue le van, jamais
    le compteur** (aucun des 68 candidats n'est limité par son kilométrage) ; et le coût réel va de
    **1 906 €/an à plus de 5 000 €/an** sur des prix d'achat qui vont du simple au double. D'où un
    plancher de millésime à **2019** — et une inversion du réflexe habituel : **on est exigeant sur
    l'âge, détendu sur les kilomètres**. Le marché fait payer une année de millésime ≈380 € quand
    elle en vaut ≈2 000 : c'est l'anomalie exploitable du dossier.

## ⚠️ Dette de vérification avant tout achat

- 🗄️ **Critère rétrogradé le 5 septembre 2026 : la configuration cabine d'origine.** Elle a été
  le critère de premier rang du 2 au 5 septembre ; elle ne l'est plus
  ([ADR-0017](docs/adr/0017-2-places-avant-critere-de-budget-pas-de-recherche.md)) — 2 annonces sur
  105, 0 sur les 44 du dernier lot, et une prime demandée qui dépasse le coût de la conversion.
  Le sujet des sièges reste entier, mais il se traite **au budget**, plus à la recherche. Le
  raisonnement d'origine, qui garde sa valeur :
  La DREAL Isère exige l'**accord écrit du constructeur** pour remplacer une banquette avant
  2 places par un **siège d'origine** — l'opération n'est pas déclarative comme le dépôt le
  supposait, et l'**airbag** en est le motif. Or **4 annonces sur 4** dont la cabine était
  visible ont une banquette avant : la conversion était devenue la voie par défaut.
  ♻️ *Vérifié en grand le 5 septembre 2026* : sur les **44 annonces** du nouveau lot, cabines
  regardées une par une, **43 sur 43 exploitables sont en banquette ou indéterminées, aucune en
  2 sièges séparés**. Le constat de départ tient donc à l'échelle du marché, pas seulement sur
  quatre annonces.
  ✅ **Second échange DREAL, 3 septembre** : l'accord constructeur **tombe** si l'on passe par un
  **siège de carrossier homologué dont les PV nomment le châssis** (donc via un professionnel), et
  un porteur **déjà en 2 places avant d'usine** annule tout le sujet — confirmé d'un « Exactement ».
  ⚠️ Mais ce dernier est **rare** : 2 annonces sur 68 archivées — **toujours 2, sur 105 archivées
  et 74 candidats actifs au 5 septembre 2026**, et le lot de 44 annonces capturé ce jour-là,
  pourtant ciblé sur ce critère et trié sur les photos de cabine, n'en a apporté **aucun**.
  ✅ *Correction du 5 septembre* : les deux sont désormais **confirmés sur photo** (`3230965149`
  et le Sprinter `3194008684`, dont le doute « à confirmer » est levé) — le second a le champ
  « places » **vide**, il serait passé à la trappe d'un filtre de recherche. Et deux points restent ouverts —
  le **prétensionneur orphelin** dans le cas « sans accord constructeur », et l'**autorisation
  nominative d'utiliser le PV de l'embase pivotante**, qui remet en cause l'auto-pose.
  → [docs/dossier-dreal-38.md](docs/dossier-dreal-38.md) § 1 bis

- 🔴 **Le dossier DREAL se dépose en fin de chantier, pas au début (corrigé le 2 septembre 2026).**
  Trois documents du dépôt affirmaient l'inverse (« avant l'isolation, pour que l'inspecteur voie
  les ancrages »). La DREAL Isère veut le véhicule **dans son état final**, et ce qu'elle ne peut
  pas voir reste sous notre responsabilité. Deux conséquences : il faut **photographier et coter
  tout ce qui sera caché** au fur et à mesure du chantier, et la **phase CTTE couvre désormais
  tout l'aménagement + 1 à 2 mois d'instruction** — c'est le régime ZFE le plus dur, celui qui
  interdit aussi le stationnement à Meylan.

- 🔴 **Crit'Air / ZFE : contrainte réactivée (vérifié le 2 septembre 2026).** L'[ADR-0003](docs/adr/0003-cible-fourgon-600-4-places.md)
  avait retiré ce critère en disant les ZFE « en cours d'abandon ». **C'est faux** : la
  suppression votée en avril 2026 a été **censurée par le Conseil constitutionnel le 21 mai
  2026**, et **Meylan est dans le périmètre de la ZFE grenobloise** — Crit'Air 3, 4, 5 et non
  classés interdits depuis le 1er janvier 2025 (7h-19h en semaine), verbalisation suspendue
  jusqu'au 30 juin 2027 seulement. En diesel, Crit'Air 2 exige une **1ʳᵉ immatriculation à partir
  du 1er janvier 2011**, et passer en VASP n'améliore pas la classe. **10 des 37 candidats actifs
  du dossier marché sont concernés — les 10 moins chers.** ♻️ *Recompté le 5 septembre 2026 :
  **8 sur 74**, et sur la **date de 1ʳᵉ immatriculation** relevée dans les annonces archivées, plus
  sur le millésime.* Et sur l'horizon 10-15 ans de
  l'[ADR-0008](docs/adr/0008-van-definitif-pas-tremplin.md), même le Crit'Air 2 est visé
  (2028 utilitaires, 2030 véhicules particuliers dans cette métropole). **À trancher avant le
  prochain tour de recherche.**
  ✅ *Risque instruit le 2 septembre 2026* → [docs/zfe-grenoble.md](docs/zfe-grenoble.md) : la
  sanction est bornée (**68 € par infraction**, pas de point, aucun effet sur le CT, l'assurance
  ou le droit de garder le véhicule), la ZFE voitures ne vaut **qu'en semaine 7h-19h** et **ne
  touche pas le stationnement**, et une **dérogation VASP existe à Grenoble** — donc déjà sur
  notre trajectoire. Restent : une dérogation révocable (~3 ans, décision locale), les autres
  métropoles (le Grand Paris **exclut** les camping-cars), et la phase de chantier où le van est
  encore CTTE — régime plus dur, qui interdit aussi le stationnement.

- 🗄️ *Repère périmé, corrigé le 31 août 2026* : cette dette disait de revérifier « 4 places carte grise » sur chaque véhicule comme contrainte ferme éliminatoire. Elle datait d'avant la confirmation terrain que le 4-places-d'origine est quasi introuvable (ci-dessous). Depuis que la voie par défaut est « 3 places + conversion sièges + ajout banquette » (ADR-0006/ADR-0007) — confirmée par la revue des 5 premières annonces, voir [recherche-marche-sieges.md](docs/recherche-marche-sieges.md) — **tout candidat retenu passera par une nouvelle carte grise de toute façon**, quel que soit son nombre de places actuel. Ce n'est donc plus un critère de tri à l'achat, seulement un repère pour détecter une anomalie sur l'annonce (véhicule déjà modifié sans déclaration, déjà classé voiture particulière, cabine approfondie 7 places vendue comme compacte…).
  ⚠️ Recherche terrain (30 août 2026) : le 4 places d'origine est quasi introuvable sur ce format (0 résultat leboncoin avec ce filtre) — confirme que la voie « 3 places + ajout homologué » (ADR-0006) est la norme, pas l'exception.
- Le calcul de décote de la stratégie « Liquidité » surestimait sa perte (comparaison T5 anciens vs T6 récents, générations différentes). Biais noté ; ne change pas la conclusion — mais cette stratégie elle-même est périmée, voir ADR-0004.
- ✅ **Format « 600 » / H2 confirmé disponible sur le marché du fourgon nu** (recherche du 30 août 2026, annonces Ducato/Boxer/Jumper L3H2 réelles) — voir [recherche-marche-sieges.md](docs/recherche-marche-sieges.md). Reste ouvert : la config sièges avant (individuels vs banquette) n'apparaît pas dans les champs structurés des annonces — à vérifier par véhicule.
  ✅ *Levé en partie le 5 septembre 2026* : la config sièges a été **relevée annonce par annonce**, avec sa source — photo de cabine, texte de l'annonce, ou simple champ déclaré. Sur 74 candidats : **2 en sièges séparés**, 63 en banquette, 6 indéterminés, 3 à « 1 place » déclarée. 🗄️ *Le chip qui la portait dans le comparateur a été retiré le 7 septembre 2026* : le relevé garde sa valeur, mais il n'a plus à être mis en avant à la lecture (ADR-0017 § 4, [ADR-0019](docs/adr/0019-aoc-installateur-retenu-sieges.md)).
- Le budget total (achat porteur + aménagement) n'est pas chiffré — voir la section écart ci-dessous. Repère marché disponible pour le porteur nu seul : **5-20 k€ occasion (2008-2020), 30-45 k€ quasi-neuf** (recherche du 30 août 2026, ordre de grandeur non moyenné rigoureusement).

## 🔴 Le van est le premier levier d'arbitrage du foyer

C'est le point où ce projet touche tous les autres. Le budget global de l'opération immobilière
ne boucle **que si le van passe à la trappe** :

> Réno + extension, van conservé → **manque ≈ 42 000 €**.
> Réno + extension, van abandonné ou reporté → ça passe, à 8 000 € près.

→ [../extension/docs/10-financabilite.md](../extension/docs/10-financabilite.md)

**⚠️ Un écart de chiffre à lever, et maintenant plus incertain qu'avant :** l'outil de prêt
provisionne **50 000 €** pour le van
(`VAN_PRICE` dans [../maison/outil_pret/app/composables/useFinances.ts](../maison/outil_pret/app/composables/useFinances.ts)).
L'ancien repère de [ADR-0004](docs/adr/0004-strategie-valeur-ducato-600.md) (37–42 k€) est
**périmé** : il visait un véhicule déjà aménagé. Depuis le passage au fourgon nu (ADR-0005), le
budget se décompose en *achat du porteur nu* (a priori moins cher) + *aménagement*
(matériaux, isolation, électricité, eau, éventuellement un siège — non chiffré). Le nouveau
total n'est pas encore estimé. **À chiffrer, puis à réconcilier avec `VAN_PRICE`, avant de
trancher.**

♻️ **7 septembre 2026 — le premier poste d'aménagement est chiffré, puis l'installateur est
choisi.** Deux devis dans la même journée pour **les sièges** : Equipage Camper Van
n° D-2026-09623 à **7 418,40 € TTC** (siège avant individuel + 2 embases + banquette-lit arrière),
puis les tarifs **AOC** relevés au configurateur le soir même. Sur le seul périmètre comparable —
le **rang I** — AOC ressort à **1 869 € TTC** contre **2 508 €**, pose et attestation de montage
comprises. **AOC est retenu**
([ADR-0019](docs/adr/0019-aoc-installateur-retenu-sieges.md),
[docs/installateurs/](docs/installateurs/courriel-devis-2026-09-04.md)). Ajouter le dépôt du dossier
VASP (**800 €**) et, si le porteur est ≥ 2022, l'option capteur (**72 €**).
⚠️ **Ce chiffre ne referme pas l'écart, il en éclaire une tranche.** ⬜ **La banquette-lit arrière
n'est pas chiffrée chez AOC** — son configurateur ne couvre que les places avant, et c'est le gros
du poste (4 910 € TTC chez Equipage). Et rien de tout cela ne couvre l'isolation, le mobilier,
l'électricité, l'eau, le chauffage, ni le porteur. `VAN_PRICE` reste inchangé à 50 000 € tant que
le total n'est pas construit.
