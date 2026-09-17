import fs from 'fs/promises'
import path from 'path'
import { z } from 'zod'
import FicheSchema from '../utils/FicheSchema'
import getExtendedProperties from '../utils/getExtendedProperties'
import fitPriceRegression from '../utils/fitPriceRegression'

const directory = './fiches'

export default defineEventHandler(async () => {
  const files = await fs.readdir(directory)

  const promises = files.map(async (file) => {
    return JSON.parse(await fs.readFile(path.join(directory, file), 'utf-8'))
  })

  const data = await Promise.all(promises)

  const parsed = z.parse(z.array(FicheSchema), data).filter((van) => {
    if (van.vehicleEngine.fuelType !== '2') return false
    if (van.mileageFromOdometer.value > 200000) return false
    if (van.model === 'Master' && van.vehicleModelDate >= 2022) return false
    return true
  })

  const beta = fitPriceRegression(parsed.map(item => ({
    year: item.vehicleModelDate,
    km: item.mileageFromOdometer.value,
    price: item.offers.price,
  })))

  return parsed
    .map((van) => {
      const { offCriteria, ...extendedProperties } = getExtendedProperties(van)

      if (offCriteria) return null

      const predictedPrice = beta[0] + beta[1] * van.vehicleModelDate + beta[2] * van.mileageFromOdometer.value
      // négatif = moins cher que le marché (bonne affaire), positif = plus cher
      const pctVsMarket = Math.round((van.offers.price - predictedPrice) / predictedPrice * 100)

      return {
        id: van.url.split('/').at(-1),
        price: van.offers.price,
        mileage: van.mileageFromOdometer.value,
        pctVsMarket,
        year: van.vehicleModelDate,
        model: van.model,
        brand: van.brand.name,
        ...extendedProperties,
      }
    })
    .filter(i => i != null)
    .sort((a, b) => a.costPerYear - b.costPerYear)
})
