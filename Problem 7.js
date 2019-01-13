//Problem 7 - 10001st prime
const primest = index => {
  let j=1, i=3
  while(j<index) {
    j += isPrime(i) ? 1 : 0 
    i++
  }
  return --i
}
const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false
  return num !== 1 && num !== 0
}
primest(10001) 
