import type { Fiche } from './FicheSchema'

const ANNEE_COURANTE = 2026
const AMENAGEMENT = 17000 // € — provision, § 4 de la note
const VIE_CALENDAIRE = 20 // ans
const VIE_MOTEUR = 400000 // km
const KM_PAR_AN = 20000 / 14 * 12 // ≈ 17 143 km/an — mesuré sur la voiture actuelle
// (20 000 km / 14 mois), même usage prévu en van
const ANNEES_MINIMUM = 13 // 🔴 plancher éliminatoire de l'ADR-0020

export default function getExtendedProperties(data: Fiche) {
  const ansCalendaire = VIE_CALENDAIRE - (ANNEE_COURANTE - data.vehicleModelDate)
  const ansMoteur = (VIE_MOTEUR - data.mileageFromOdometer.value) / KM_PAR_AN
  const yearsLeft = Math.max(Math.min(ansCalendaire, ansMoteur), 0.5)

  return {
    yearsLeft: Math.round(yearsLeft),
    // limitedBy: ansCalendaire < ansMoteur ? 'calendrier' : 'kilométrage',
    costPerYear: Math.round((data.offers.price + AMENAGEMENT) / yearsLeft),
    // Plafond data km au-delà duquel le compteur deviendrait la contrainte
    // kmCeiling: Math.max(VIE_MOTEUR - KM_PAR_AN * Math.max(ansCalendaire, 0), 0),
    offCriteria: ansCalendaire < ANNEES_MINIMUM,
  }
}

export type ExtendedProperties = ReturnType<typeof getExtendedProperties>
