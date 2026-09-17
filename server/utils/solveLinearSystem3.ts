import type { Vec3 } from './fitPriceRegression'

// Note = écart en % au "prix attendu" pour ce profil âge/km, estimé par régression
// linéaire prix ~ année + km sur le lot (moindres carrés). Négatif = moins cher que
// le marché (bonne affaire), positif = plus cher. En %, pas en €, pour rester
// comparable entre un van à 13 000 € et un van à 30 000 € (un même écart en € pèse
// proportionnellement plus sur le moins cher des deux). Ignore volontairement
// l'état/aménagement — tout sera refait de toute façon. Recalculé à chaque
// ajout/retrait d'annonce (les coefficients bougent avec le lot).
export default function solveLinearSystem3(A: [Vec3, Vec3, Vec3], b: Vec3): Vec3 {
  // b[i] nécessite un "!" car TS craint qu'il soit undefined
  const M = A.map((row, i) => [...row, b[i]!])

  for (let i = 0; i < 3; i++) {
    let pivot = i
    for (let k = i + 1; k < 3; k++) {
      // On certifie que M[k] et M[k][i] existent avec "!"
      if (Math.abs(M[k]![i]!) > Math.abs(M[pivot]![i]!)) {
        pivot = k
      }
    }

    const temp = M[i]!
    M[i] = M[pivot]!
    M[pivot] = temp

    const Mi = M[i]!
    for (let k = i + 1; k < 3; k++) {
      const Mk = M[k]!
      const f = Mk[i]! / Mi[i]!

      for (let j = i; j <= 3; j++) {
        Mk[j] = Mk[j]! - f * Mi[j]!
      }
    }
  }

  const x: Vec3 = [0, 0, 0]
  for (let i = 2; i >= 0; i--) {
    const Mi = M[i]!
    let s = Mi[3]!

    for (let j = i + 1; j < 3; j++) {
      s -= Mi[j]! * x[j]!
    }
    x[i] = s / Mi[i]!
  }

  return x
}
