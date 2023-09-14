function consecutiveSum(n) {
let i = 1;
while (i * (i + 1) < 2 * n) {
     let a = (n - (i * (i + 1)) / 2) / (i + 1);
       if (a - Math.floor(a) == 0) {
       return true;
        }
        i++;
    }
return false;
}

console.log(consecutiveSum(9));
console.log(consecutiveSum(10));
console.log(consecutiveSum(64));

