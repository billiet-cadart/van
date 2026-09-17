import { z } from 'zod'

const FicheSchema = z.strictObject({
  '@context': z.literal('https://schema.org'),
  '@type': z.literal('Vehicle'),
  'name': z.string(),
  'description': z.string(),
  'image': z.array(z.url()),
  'url': z.url(),
  'offers': z.strictObject({
    '@type': z.literal('Offer'),
    'availability': z.literal('http://schema.org/InStock'),
    'price': z.int(),
    'priceCurrency': z.literal('EUR'),
  }),
  'itemCondition': z.literal('https://schema.org/UsedCondition'),
  'brand': z.strictObject({
    '@type': z.literal('Brand'),
    'name': z.string(),
  }),
  'model': z.string(),
  'vehicleModelDate': z.preprocess(Number, z.number()),
  'mileageFromOdometer': z.strictObject({
    '@type': z.literal('QuantitativeValue'),
    'value': z.preprocess(Number, z.number()),
    'unitCode': z.literal('KMT'),
  }),
  'color': z.string().optional(),
  'bodyType': z.null(),
  'vehicleEngine': z.strictObject({
    '@type': z.literal('EngineSpecification'),
    'fuelType': z.enum(['5', '2']),
  }),
  'vehicleTransmission': z.literal('Manuelle'),
  'numberOfDoors': z.number().nullable(),
  'vehicleSeatingCapacity': z.number().nullable(),
})

export default FicheSchema

export type Fiche = z.infer<typeof FicheSchema>
