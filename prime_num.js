function identifyPrime(num) {
  let c = 0;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      c++;
    }
  }
  if (c==0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
let n=10
identifyPrime(n)