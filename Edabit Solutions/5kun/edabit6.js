function primeNumbers(num) {
    let count = 0;
    
    for(let i = 2; i <= num; i++) {
          let isPrime = true;
    
            for(let j = 2; j < i; j++) {
                if(i % j === 0) {
                 isPrime = false;
                 break;
                }
    }
    
    if(isPrime) {
    count++;
    }
    }
    
    return count;
}
    
console.log(primeNumbers(10)); // 4
console.log(primeNumbers(20)); // 8
console.log(primeNumbers(30)); // 10