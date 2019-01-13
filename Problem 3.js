//Problem 3 - Largest prime factor
const largestPrimeFactor = number => {
  let squre = Math.round(Number(Math.sqrt(number)))
  for(let i=squre; i>=3; i--){
    if(isPrime(i)&&(number%i==0)){
      return i
    }
  }
}
const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false
  return num !== 1 && num !== 0
}
largestPrimeFactor(600851475143)
