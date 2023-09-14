function mean(num) {
    let digits = num.toString().split('');
    let sum = 0;
    
    for(let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]);
    }
    
    return Math.floor(sum / digits.length);
}
    
console.log(mean(42));
console.log(mean(12345)); 
console.log(mean(666)); 