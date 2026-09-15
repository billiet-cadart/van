# Durée de vie du porteur et coût par an — la métrique qui manquait

> Note de recherche vivante, 7 septembre 2026, corrigée le 14 septembre 2026 (usage réel mesuré à
> 17 143 km/an, remplace l'hypothèse non mesurée de 10 000 km/an — §5, §6, §9). Elle porte la
> **méthode de calcul et les chiffres** ; la décision qu'elle a produite est consignée à part, dans
> l'[ADR-0020](adr/0020-plancher-de-millesime-13-ans-de-vie-restante.md) — plancher de millésime à
> 2019, kilométrage sorti des critères de tri.

Elle répond à un manque signalé noir sur blanc par l'[ADR-0008](adr/0008-van-definitif-pas-tremplin.md) :
depuis que le van n'est plus un achat-tremplin, *« ce qui compte devient la fiabilité et le coût
d'entretien sur un horizon long (10-15 ans), **pas encore mesuré comme tel dans ce dépôt** »*. Le
[glossaire](GLOSSARY.md) dit la même chose : le coût de possession a perdu sa composante dominante
(la décote) sans qu'on lui en donne une nouvelle.

## 1. Le résultat, en une phrase

🔴 **L'âge tue le véhicule ; le kilométrage se paie — et parfois tue aussi.** Sur ce format et cet
usage, ce n'est *le plus souvent* pas le compteur qui décide de la fin de vie — c'est le calendrier.
⚠️ Nuance ajoutée le 14 septembre 2026 (usage réel mesuré, §5-6) : à notre rythme d'usage réel
(17 143 km/an), le compteur redevient la contrainte pour une poignée de candidats très kilométrés —
ce n'est donc plus « jamais ». Le marché continue de faire payer l'âge presque rien (**≈ 380 € le
millésime**) alors qu'une année de vie en plus vaut **≈ 2 000 €** dans notre calcul. C'est là qu'est
la valeur, pas dans un compteur bas — sauf pour les candidats déjà très kilométrés, où le compteur
mord directement sur cette valeur.

## 2. Pourquoi raisonner en € par an, et pas en prix d'achat

Parce que **l'aménagement ne survit pas au porteur**. Les sièges homologués, la banquette, le
plancher, l'isolation, l'électricité, le dossier VASP : tout ça est dépensé *sur ce véhicule-là* et
disparaît avec lui. C'est la différence de fond avec l'[ADR-0004](adr/0004-strategie-valeur-ducato-600.md),
qui raisonnait décote sur un véhicule qu'on revendait.

Conséquence directe : le coût réel n'est pas le prix du porteur, c'est

```
coût annuel ≈ (prix du porteur + aménagement) / années de vie restantes   +   entretien annuel
```

Et comme l'aménagement (14–21 k€, § 4) est **plus gros que le porteur** (6–20 k€) et **identique quel
que soit le porteur choisi**, le dénominateur — les années restantes — pèse plus lourd que le
numérateur. Économiser 4 000 € à l'achat en perdant 4 ans de vie est une mauvaise affaire d'un
facteur 2.

## 3. Les deux horloges

Deux choses peuvent tuer le van. Il faut les chiffrer séparément.

| Horloge | Repère retenu | Fourchette | Source / statut |
|---|---|---|---|
| **Calendaire** (corrosion, plastiques, joints, électronique, pièces) | **20 ans** | 18–25 ans | Les constructeurs de porteurs tiennent les pièces détachées **20 ans**, ensuite ils écoulent les stocks. À 20 ans « les plastiques vieillissent, l'alu se corrode, les joints sèchent », et les porteurs Fiat ont une réputation de rouille des longerons et traverses. *Source secondaire (presse camping-car), ordre de grandeur* |
| **Kilométrique** (moteur, transmission) | **400 000 km** | 300 000–500 000 km | 2.3 Multijet : 300–500 k km sans ouvrir le bloc, entretien rigoureux, courroie de distribution respectée. 2.3 dCi (Master/Movano) : **chaîne**, > 300 k km, mais turbo/injecteurs/chaîne au-delà de 200 000 km. *Sources secondaires convergentes* |

⚠️ **Le facteur qui déplace vraiment l'horloge calendaire, c'est le sel.** Usage ski + hivers en
Isère = routes salées. C'est la variable la plus actionnable de tout ce calcul (§ 8).

## 4. Ce qu'on met dans « aménagement » — ⚠️ hypothèse, pas un chiffrage

Le total n'est toujours pas construit (écart ouvert du [README](../README.md)). Provision de travail
pour cette note, à ne **pas** reprendre comme un chiffre acquis :

| Poste | Provision | Statut |
|---|---|---|
| Sièges rang I, pose comprise (AOC) | **1 869 €** | ✅ relevé au configurateur, [ADR-0019](adr/0019-aoc-installateur-retenu-sieges.md) |
| Banquette-lit arrière + piétement | 3 500–5 000 € | ⬜ non chiffrée chez AOC ; repère Equipage **4 910 € TTC** |
| Dossier DREAL (+ capteur 72 € si ≥ 2022, + autorisation constructeur 50/220 €) | 800–1 100 € | ✅ tarif AOC |
| Isolation, mobilier, fenêtres, lanterneau | 3 000–5 000 € | ⚠️ estimation |
| Électricité (batterie, solaire, convertisseur — tout en R10) | 2 000–4 000 € | ⚠️ estimation |
| Eau + cuisine gaz + certification Qualigaz/Veritas | 1 500–2 500 € | ⚠️ estimation |
| Chauffage diesel homologué R10 + R122 | 1 200–2 500 € | ⚠️ estimation |
| **Total** | **≈ 14 000 – 21 000 €** | ⚠️ **retenu 17 000 € pour les calculs ci-dessous** |

📌 Point à remonter ailleurs : porteur (10–17 k€) + aménagement (14–21 k€) donne **≈ 25 à 38 k€**,
là où l'outil de prêt provisionne **50 000 €** (`VAN_PRICE`). L'écart va probablement dans le bon
sens — mais tant que la banquette et l'aménagement ne sont pas chiffrés, **on ne touche pas
`VAN_PRICE`**.

## 5. Ce que ça donne sur les 68 candidats actifs

♻️ *Recalculé le 7 septembre 2026 au soir, après la sortie de trois porteurs propulsion
([ADR-0021](adr/0021-exclure-les-porteurs-propulsion.md)) : le lot passe de 71 à 68 candidats, et les
coefficients de régression du § 7 avec lui (380 €/millésime et 268 €/10 000 km, contre 385 € et
267 €). Aucune conclusion de cette note n'en dépend — les trois sortants n'étaient ni en tête ni en
queue du classement.*

♻️ **Corrigé le 14 septembre 2026** : le 10 000 km/an d'origine était une hypothèse non mesurée
(§9, ci-dessous). Il est remplacé par **17 143 km/an**, mesuré sur la voiture actuelle (20 000 km
parcourus en 14 mois, même usage prévu en van) — cette valeur est maintenant celle utilisée dans le
[comparateur](marche/comparateur-2026-08-31.html) (`KM_PAR_AN`). Le classement et le tableau
ci-dessous sont recalculés à ce taux, sur les 68 candidats actuellement dans le fichier (leur
composition a un peu bougé depuis le 7 septembre, indépendamment de ce changement de taux).
🔴 **Conséquence qui contredit une prémisse de l'[ADR-0020](adr/0020-plancher-de-millesime-13-ans-de-vie-restante.md)** :
à ce rythme, l'horloge kilométrique redevient parfois contraignante — **7 des 38 candidats retenus
sont désormais limités par le compteur, pas par le calendrier** (§6 le détaille).

Calcul : `années restantes = min(20 − âge, (400 000 − km) / 17 143)`, aménagement 17 000 €.
Les cinq meilleurs et les cinq pires du dossier :

| € / an | Années restantes | Limité par | Modèle | Prix | Millésime | km |
|---:|---:|---|---|---:|---:|---:|
| **1 999** | 18,0 | calendrier | Transit L3H2 | 18 990 € | 2024 | 43 809 |
| **2 008** | 15,9 | kilométrage | Boxer L3H2 | 14 980 € | 2022 | 127 000 |
| **2 015** | 15,6 | kilométrage | Boxer L3H2 | 14 450 € | 2022 | 132 450 |
| **2 033** | 15,0 | calendrier | Boxer L3H2 | 13 490 € | 2021 | 141 593 |
| **2 050** | 15,0 | calendrier | Master L3H2 | 13 750 € | 2021 | 120 000 |
| … | | | | | | |
| 9 000 | 3,0 | calendrier | Boxer L3H2 | 10 000 € | 2009 | 138 000 |
| 9 600 | 3,0 | calendrier | Boxer L3H2 | 11 800 € | 2009 | 90 000 |
| 14 900 | 2,0 | calendrier | Ducato L3H2 | 12 800 € | 2008 | 86 700 |
| 18 377 | 1,5 | kilométrage | Sprinter L3H2 | 9 800 € | 2008 | 375 000 |
| 55 600 | 0,5 | calendrier | Master L3H2 | 10 800 € | 2002 | 135 000 |

⚠️ Le Jumper 2022 162 450 km et le Boxer 2019 224 000 km, qui occupaient les deux premières places
au taux de 10 000 km/an, sortent du top 5 : leur kilométrage élevé les rend désormais limités par le
compteur plutôt que par le calendrier (§6).

🔴 **Le prix affiché ne classe pas les candidats ; l'âge, oui.** Sur les 61 candidats Crit'Air 2 (millésime ≥ 2011), le prix d'achat varie de **×2,5** et le coût par an de **×2,5** — échelles comparables, mais **classements inversés** : sur les 10 moins chers à l'achat, **2 seulement** sont dans les 10 meilleurs en coût par an. Le moins cher du dossier (Boxer 2019, 224 000 km, 7 990 €) revient à **2 434 €/an**, ×1,22 le meilleur (**1 999 €/an**, Transit 2024 à 18 990 €). ✅ Et une fois le plancher de millésime appliqué, le prix cesse largement de départager : sur les 38 candidats retenus, ×2,5 d'écart de prix ne fait plus que **×1,4** d'écart de coût réel.

Deux comparaisons qui résument tout :

- Le **Jumper 2022 à 162 450 km (13 490 €)** bat toujours le **Master 2021 à 59 191 km (19 999 €)** :
  2 200 €/an contre 2 467 €/an. Mais l'écart s'est effondré (561 € → 267 €) et l'argument change de
  sens : à 17 143 km/an, le Jumper a désormais **13,9 ans** de vie restante contre **15,0** pour le
  Master — ⚠️ ce n'est plus « 100 000 km de plus pour un an de plus », c'est 100 000 km de plus pour
  1,1 an de *moins*, compensé par un prix bien inférieur. **Le compteur haut se paie bel et bien** —
  la formulation d'origine (« le compteur bas ne rapporte rien ») ne tient plus telle quelle.
- Le candidat à 7 990 € — le moins cher du dossier — est le **Boxer 2019 224 000 km**, pas le
  « Master 2013 » cité dans une version antérieure de cette note (aucun candidat de ce profil dans
  le fichier actuel ; possible confusion à l'écriture, non éclaircie). Il coûte **2 434 €/an**, soit
  **+22 %** par rapport au Transit 2024, contre les « +87 % » avancés à l'origine.

### Robustesse

Le classement ne bouge pratiquement pas quand on change les hypothèses **de prix d'aménagement**
(testé à 10 k€ et 25 k€) ou de **vie moteur/calendaire** (testé à 300 000 km et 25 ans) : le peloton
2021-2022 reste en tête. En revanche, le taux de km/an, lui, **fait bouger le classement** — ce
n'était pas visible tant que 10 000 km/an tenait lieu d'hypothèse par défaut. Le test à 15 000 km/an
avait déjà signalé le seul point sensible (« le Boxer 2019 à 224 000 km sort du top 5 dès qu'on
suppose le moteur plus fragile ou l'usage plus soutenu ») ; le taux mesuré (17 143 km/an, plus élevé
encore) confirme cette prédiction et en ajoute un second, le Jumper 2022 à 162 450 km. Autrement dit :
⚠️ **la conclusion dépend peu du prix de l'aménagement, mais dépend du kilométrage annuel réel** —
raison de plus pour l'avoir mesuré plutôt que supposé.

## 6. Le kilométrage se paie — il ne tue pas

Deux faits, à ne pas confondre.

**a) Le compteur devient la contrainte plus tôt qu'on ne le pensait.** ♻️ *Corrigé le
14 septembre 2026 : recalculé à 17 143 km/an mesuré, contre 10 000 km/an d'origine (hypothèse non
mesurée, § 9) — les deux tableaux qui suivent changent.* À 17 143 km/an (usage réel de la voiture
actuelle, même usage prévu en van), un van n'a plus forcément le temps d'arriver au bout de sa vie
calendaire avant d'atteindre 400 000 km. Le plafond qui en découle **monte quand le véhicule est
plus vieux** — contre-intuitif, mais logique : plus il est vieux, moins il lui reste d'années pour
rouler.

| Millésime | Années visées | km maximum à l'achat (17 143 km/an) | km maximum à l'achat (10 000 km/an, périmé) |
|---|---:|---:|---:|
| 2013 | 7 | 280 000 | 330 000 |
| 2017 | 11 | 211 000 | 290 000 |
| 2019 | 13 | 177 000 | 270 000 |
| 2021 | 15 | 143 000 | 250 000 |
| 2023 | 17 | 109 000 | 230 000 |

🔴 **Ce n'est plus vrai : 8 des 68 candidats actifs dépassent leur plafond**, dont le Boxer 2019
224 000 km et le Jumper 2022 162 450 km utilisés en exemple au § 5. Le kilométrage écarte désormais
des candidats — via le coût par an (§5), pas via un critère de recherche séparé : le plancher de
recherche reste uniquement le millésime ([ADR-0020](adr/0020-plancher-de-millesime-13-ans-de-vie-restante.md)),
dont les plafonds chiffrés ont été corrigés en conséquence le même jour.

**b) Mais il coûte, en pièces d'usure.** ⚠️ *Estimation raisonnée, pas un relevé* : pneus, freins,
embrayage + volant moteur, courroie de distribution (~120 000 km sur les Sevel et PSA), risque
turbo/injecteurs → de l'ordre de **3 à 5 c€/km**, soit **3 000 à 5 000 € par 100 000 km**.

Or le marché décote **268 € par 10 000 km** (régression sur les 68 candidats, § 7) — soit
**2 680 € pour 100 000 km**. ✅ **C'est à peu près le juste prix de l'usure.** Acheter kilométré
n'est donc ni une bonne ni une mauvaise affaire : c'est neutre. On paie plus tard ce qu'on
n'a pas payé à l'achat.

## 7. L'âge, lui, ne se paie presque pas

Régression sur les 68 candidats : `prix ≈ 380 € × millésime − 268 € par 10 000 km`.

⚠️ **Ce coefficient est biaisé et il faut le dire** : l'échantillon est tronqué à 20 000 € par le
critère de recherche, donc les millésimes récents n'y entrent que s'ils sont abîmés ou très
kilométrés. Le vrai prix du millésime sur le marché ouvert est plus élevé. Mais c'est **exactement
le coefficient utile pour nous** : il dit ce que coûte une année de plus *à l'intérieur de notre
enveloppe*, pas sur le marché en général.

Les moyennes brutes disent la même chose :

| Millésime | n | Prix moyen | km moyen |
|---|---:|---:|---:|
| 2013 | 4 | 10 445 € | 199 172 |
| 2017 | 7 | 15 798 € | 137 588 |
| 2019 | 11 | 13 597 € | 131 369 |
| 2021 | 13 | 17 939 € | 102 874 |
| 2022 | 8 | 16 396 € | 122 225 |

**Passer d'un 2017 à un 2022 coûte ≈ 600 € en moyenne et achète 5 ans de vie.** Au tarif de nos
2 000 €/an, ces 5 ans en valent 10 000. C'est l'anomalie la plus exploitable du dossier.

📌 **Règle de négociation qui en découle** : une année de millésime en plus justifie de payer
**jusqu'à ~2 000 € de plus**. Un compteur plus bas de 50 000 km justifie **~1 300 €**, pas plus.
Si un vendeur inverse ce rapport, c'est lui qui a raison sur le marché et nous qui devons partir.

## 8. Le levier le plus rentable n'est pas à l'achat

Puisque c'est le **dénominateur** qui commande, tout ce qui allonge la vie calendaire rapporte
~2 000 € par année gagnée. Par ordre de rendement :

1. 🔴 **Traitement anticorrosion du châssis et des bas de caisse dès l'achat** (~500–1 000 €).
   Sur un van qui verra du sel de déneigement tous les hivers, c'est *la* dépense qui agit
   directement sur la contrainte qui mord. Gagner 2 ans = ~4 000 € de valeur pour ~800 €.
2. **Vidanges plus fréquentes que le carnet** (15 000 km au lieu de 20–30 000 — recommandé aussi
   bien sur le 2.3 Multijet que sur les BlueHDi), filtre à gasoil tous les 30 000 km.
3. **Courroie de distribution refaite au rachat si le justificatif manque** (~600–900 € sur Sevel /
   PSA — sur Master/Movano c'est une chaîne, rien à faire mais un bruit à écouter au démarrage).
4. **Stationnement à l'abri** quand c'est possible : c'est la différence entre une cellule qui tient
   25 ans et une qui pose problème à 10.

## 9. Ce que cette note ne tranche pas

- ✅ **Tranché le 7 septembre 2026, le jour même** : le plancher **≥ 2019** devient un critère
  éliminatoire de recherche, ≥ 2021 une cible de tri, et le kilométrage sort des critères
  ([ADR-0020](adr/0020-plancher-de-millesime-13-ans-de-vie-restante.md)). Le contrôle qu'exigeait
  la leçon de l'[ADR-0017](adr/0017-2-places-avant-critere-de-budget-pas-de-recherche.md) a été fait
  avant adoption : **38 candidats sur 68** survivent au plancher.
- ⚠️ **Le contre-argument au « le plus récent possible » : l'AdBlue.** Les Euro 6 récents ajoutent
  un système SCR dont les pannes sont chères — réservoir déformé, injecteur cristallisé, sondes de
  qualité, souvent **> 2 000 €** et parfois avant 100 000 km. Un millésime plus récent achète des
  années de carrosserie et paie en électronique de dépollution. Non quantifié ici : à intégrer au
  jour où on compare deux candidats précis, et **à vérifier véhicule par véhicule** (la présence
  d'AdBlue ne se déduit pas du millésime seul).
- ✅ **Tranché le 14 septembre 2026** : les 10 000 km/an n'étaient qu'une hypothèse, jamais
  mesurée. Remplacés par **17 143 km/an**, mesuré sur l'usage réel de la voiture actuelle
  (20 000 km / 14 mois, même usage prévu en van) — voir §5 et §6 pour l'effet sur le classement et
  le plafond kilométrique. 🔴 Contrairement à ce que disait la version précédente de cette note,
  cette fois **ça change la conclusion** : le kilométrage redevient parfois limitant.
- ⬜ **L'entretien annuel n'est pas dans le classement** — seulement le capital. Il pousse dans le
  même sens (un vieux coûte plus cher à entretenir), donc l'omettre est **conservateur** : le vrai
  écart entre un 2013 et un 2022 est plus grand que celui affiché.
- 🗄️ **Sans effet sur la ZFE** : tous les candidats diesel sont Crit'Air 2 au mieux, le millésime n'y
  change rien au-dessus du plancher de janvier 2011 ([zfe-grenoble.md](zfe-grenoble.md)).

## Sources

Ordres de grandeur moteur et entretien — sources secondaires (presse spécialisée, garages,
forums), convergentes entre elles, **aucune n'est un document constructeur** :

- [Zone Rupteur — fiabilité 2.3 Multijet](https://zonerupteur.fr/fiches-vehicules/moteur-fiat-ducato-23-multijet-fiabilite/) ·
  [Carverif — Ducato III 2.3 MultiJet](https://carverif.fr/blogs/fiabilite-voitures/fiat-ducato-iii-diesel-23-multijet) ·
  [AD — courroie de distribution Ducato](https://www.ad.fr/guides/guide-conseil/distribution/courroie-de-distribution-fiat-ducato-quand-la-changer-et-a-quel-prix)
- [France Moteurs Utilitaires — 2.3 dCi Renault](https://www.francemoteursutilitaires.com/2026/02/07/fiabilite-moteur-2-3-dci-renault-analyse-complete-par-france-moteurs-utilitaires/) ·
  [Carverif — Master 2.3 dCi](https://carverif.fr/blogs/fiabilite-voitures/fiabilite-renault-master-2-3-dci)
- [Étoile Collections — 2.2 BlueHDi 140, pannes AdBlue](https://www.etoilecollections.fr/fiabilite-moteur-2-2-bluehdi-140/) ·
  [Garage Renom — Boxer BlueHDi, points à vérifier](https://www.garage-renom.fr/peugeot-boxer-bluehdi-problemes-points-verifier/)
- [Danago — durée de vie d'un camping-car](https://danago-location.fr/achat-choix/duree-de-vie-camping-car) ·
  [L'Actu Auto — longévité des porteurs](https://lactuauto.fr/duree-de-vie-camping-car-quel-modele-choisir-pour-une-longevite-maximale/) ·
  [Fourgonlesite — repérer et traiter la rouille avant d'aménager](https://www.fourgonlesite.com/van-lifestyle/26432-reperer-et-traiter-la-rouille-avant-damenager-un-van/)

Données prix / millésime / kilométrage : les **68 candidats actifs** du
[comparateur](marche/comparateur-2026-08-31.html) au 7 septembre 2026.
