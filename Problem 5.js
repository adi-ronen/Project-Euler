//Problem 5 - Smallest multiple
const smallestMultiple = upTo => {
  let array = Array.from(Array(upTo).keys()).map(x=>x+1)
  let limit = array.reduce(multiple), ans
  let primeLimit = primesUpTo(array.slice(-1)).reduce(multiple)
  for(let i=primeLimit; i <= limit; i+=primeLimit) {
    ans = true
    for(let j=array.slice(-1); j>array[0]; j--) {
      if(i%j!==0) {
        ans = false 
        break
      }
    }
    if(ans) return i
  }
  return limit
}
const multiple = (a,b) => a*b 
const primesUpTo = limit => {
  const ans = []
  for(let i=0; i<=limit; i++){
    if(isPrime(i)) ans.push(i)
  }
  return ans
}
const isPrime = num => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false
  return num !== 1 && num !== 0
}
smallestMultiple(20)
