//Problem 6 - Sum square difference
const sumSquareDifference = limit => {
  let sumOfTheSquares = 0,  squareOfTheSum = 0
  for(let i=1; i<=limit; i++){
    sumOfTheSquares += Math.pow(i,2)
    squareOfTheSum += i
  }
  return Math.pow(squareOfTheSum,2) - sumOfTheSquares
}
sumSquareDifference(100)
