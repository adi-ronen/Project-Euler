//Problem 1 - Multiples of 3 and 5
const multiplesOf3and5 = limit => {
  let sum = 0
  for (let i=3;i<limit;i++) {
    sum += (i%3===0||i%5===0) ? i : 0
  }
  return sum
}

multiplesOf3and5(10000)
