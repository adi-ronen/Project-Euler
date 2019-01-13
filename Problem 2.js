//Problem 2 - Even Fibonacci numbers
const evenFibonaccinumbers = limit => {
  let minus2=0, minus1=1, sum=0, fib
  while(minus2+minus1<limit){
    fib = minus2+minus1
    sum+= (fib%2===0) ? fib : 0
    minus2 = minus1
    minus1 = fib
  }
  return sum
}
evenFibonaccinumbers(4000000)
