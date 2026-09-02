# Cuisine au gaz, chauffage au diesel

## Contexte

L'[ADR-0009](0009-layout-lit-fixe-banquette-lit.md) laissait la question ouverte : gaz ou
tout-électrique pour la cuisine et le chauffage ? Ça change le contenu du dossier VASP, mais pas
le fait d'avoir à en déposer un — obligatoire dans tous les cas vu le lit fixe et la banquette
homologuée déjà retenus. Détails et sources → [recherche-marche-sieges.md](../recherche-marche-sieges.md).

Décidé d'abord « tout au gaz », puis affiné : le chauffage seul est reconsidéré au profit du
diesel, la cuisson restant au gaz.

## Décision

- **Cuisson : au gaz.**
- **Chauffage : au diesel** (Webasto/Eberspächer/Autoterm ou équivalent homologué E/R10).
  ⚠️ **Référence réglementaire corrigée (2 septembre 2026)** : R10 seul ne suffit pas — c'est le
  règlement de **compatibilité électromagnétique**, exigé sur beaucoup d'appareils du dossier
  (frigo, régulateur de charge…). Le règlement propre aux **systèmes de chauffage** des véhicules
  M/N/O est le **règlement ONU n° 122**. Un chauffage à combustion doit satisfaire **R10 *et*
  R122**, et c'est le **certificat R122** que le dossier DREAL attend. Sans effet sur la décision
  (les trois marques citées sont homologuées) — mais c'est la pièce à exiger du vendeur, et le
  bon mot-clé pour écarter les chauffages génériques.
  ✅ **Tranché (31 août 2026)** : l'usage ski qui motivait le gaz au départ reste incertain, mais
  la famille ne veut pas attendre de le savoir pour se décider — voir *Pourquoi*.

## Pourquoi

- Cuisson gaz : rapidité, indépendance de la batterie/du solaire pour un usage quotidien simple.
- Chauffage diesel plutôt que gaz : puise directement dans le réservoir du véhicule — autonomie
  bien supérieure à une bouteille de gaz (qui tient ~3-4 nuits en usage courant), et cité comme
  plus résistant au froid extrême. Peut tourner en roulant, contrairement au gaz. Libère la place
  et le poids d'une bouteille de gaz dédiée au chauffage.
- **Pas besoin d'attendre que l'usage ski se précise pour trancher** : installer le diesel dès le
  début du chantier est plus simple qu'après les finitions, et ajouter un chauffage gaz après coup
  sur une installation cuisson déjà certifiée demanderait une nouvelle certification
  Qualigaz/Veritas (voir *Conséquences*) — un risque et un coût qu'on préfère éviter plutôt que de
  garder l'option ouverte. Le diesel n'a pas ce problème, et la famille sera de toute façon
  contente d'avoir un chauffage, ski ou pas.
- ✅ **Confirmé par la famille : la priorité reste d'être en règle pour la route et le contrôle
  technique**, quel que soit le système retenu — gaz certifié (Qualigaz/Bureau Veritas) et
  chauffage diesel homologué (E/R10), systématiquement, jamais de raccourci même si ça coûte plus
  cher ou prend plus de temps. Ce principe s'applique aussi à la banquette homologuée
  ([ADR-0009](0009-layout-lit-fixe-banquette-lit.md)) : l'auto-installation reste possible, mais
  seulement dans les règles (PV du fabricant, attestation en bonne et due forme).

## Conséquences

- Le dossier VASP inclut la **certification gaz** pour la cuisson (Qualigaz ou Bureau Veritas,
  normes EN 1949/EN 721) et, séparément, l'**homologation du chauffage diesel** (marquage CE +
  R10 + E obligatoire — Webasto/Eberspächer/Autoterm compatibles VASP ; ⚠️ éviter les chauffages
  diesel génériques/chinois sans ces marquages, risque de refus DREAL). Ce sont deux circuits de
  certification distincts, déposés dans le même dossier RTI si installés dès le départ.
- Installation du chauffage diesel : échappement étanche vers l'extérieur, prise d'air de
  combustion indépendante de l'air intérieur, protection thermique — points de contrôle DREAL
  identifiés.
- Ajouter le chauffage gaz *après coup* sur une installation cuisson déjà certifiée compterait
  comme une modification de l'installation gaz, nécessitant une nouvelle certification
  Qualigaz/Veritas (l'ajout d'un appareil n'est pas exempté, contrairement au remplacement d'un
  appareil de cuisson existant) — c'est la raison principale d'avoir tranché le diesel maintenant
  plutôt que d'attendre. Le diesel, choisi ici, évite ce problème pour le chauffage — mais s'il
  était ajouté après une première réception VASP, ce serait probablement aussi à déclarer en
  modification, via le circuit véhicule (E/R10) plutôt que gaz. Pas confirmé en détail (situation
  qui ne devrait plus se présenter, le diesel étant installé dès le départ).
- ⚠️ **Contrainte à respecter, pas une option** : sauter une certification (gaz ou diesel) pour
  économiser n'est pas viable — dossier VASP refusé d'office, risque d'amende (jusqu'à ~750 €) et
  surtout risque de refus d'indemnisation assurance en cas de sinistre, avec deux jeunes enfants
  à bord.
- Pas de contrôle gaz périodique automatique en France une fois la réception initiale obtenue —
  la certification n'est requise qu'à la réception et à toute modification ultérieure.
- Choix précis des appareils (marque/modèle du chauffage diesel, appareil de cuisson gaz,
  éventuellement eau chaude) et de l'installateur/certificateur : pas encore fait.
