// Problem 9 - Special Pythagorean triplet
const specialPythagoreanTriplet = sum => {
  for (let a = 0; a < 1000/3; a++) {
    for (let b = a + 1; b < 1000/2; b++) {
      for (let c = b + 1; c < 1000; c++) {
        if ( a+b+c==1000 && (a*a)+(b*b)==(c*c)) {
          return [a, b, c]
        }
      }
    }
  }
  return null
}

specialPythagoreanTriplet(1000)
