//Problem 4 -Largest palindrome product
const largestPalindromeProduct = (limit,min) => {
  let max = 0
  for(let i=limit; i>=min; i--) {
    for(let j=i; j>=min; j--) {
      let product = i*j
      if(product<max) break
      let reverse = Number(product.toString().split("").reverse().join(""))
      max = (product===reverse) ? Math.max(max,product) : max
    }
  }
  return max
}
largestPalindromeProduct(999,100)
