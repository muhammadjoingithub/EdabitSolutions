function isDisarium(n) {
    let array = String(n).split(""); // Convert number to string and split into an array of digits
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
      let digit = parseInt(array[i]); // Convert digit from string to integer
      sum += Math.pow(digit, i+1); // Add digit raised to its position to the sum
    }
    
    return sum === n; // Check if sum is equal to the number itself
  }
console.log(isDisarium(75));
console.log(isDisarium(135));
console.log(isDisarium(544));
console.log(isDisarium(518));
console.log(isDisarium(8));
console.log(isDisarium(466));
