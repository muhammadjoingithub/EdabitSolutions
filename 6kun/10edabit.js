function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function primorial(n) {
  let count = 0;
  let prime = 2;
  let primorial = 1;
  
  while (count < n) {
    if (isPrime(prime)) {
      primorial *= prime;
      count++;
    }
    prime++;
  }
  
  return primorial;
}


console.log(primorial(1)); 
console.log(primorial(2)); 
console.log(primorial(6)); 