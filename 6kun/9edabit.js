function isFactorial(num) {
    if (num === 1){
      return true;
    } else {
      let factorial = 1;
      let i = 2;
      while (factorial < num) {
        factorial *= i;
        i++;
      }
      return factorial === num;
    }
  }
console.log(isFactorial(2));
console.log(isFactorial(27));
console.log(isFactorial(24));
