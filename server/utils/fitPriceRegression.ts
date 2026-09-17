import solveLinearSystem3 from './solveLinearSystem3'

export type Vec3 = [number, number, number]

export default function fitPriceRegression(rows: Array<{ year: number, km: number, price: number }>) {
  const XtX: [Vec3, Vec3, Vec3] = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  const Xty: Vec3 = [0, 0, 0]

  for (const d of rows) {
    const x: Vec3 = [1, d.year, d.km]
    for (let i = 0; i < 3; i++) {
      Xty[i]! += x[i]! * d.price
      for (let j = 0; j < 3; j++) {
        XtX[i]![j]! += x[i]! * x[j]!
      }
    }
  }

  return solveLinearSystem3(XtX, Xty)
}
