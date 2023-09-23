function countLoneOnes(num) {
    const str = num.toString();
    let count = 0;
    
    for(let i = 0; i < str.length; i++) {
      if(str[i] === '1') {
        if(i === 0) {
          if(str[i] !== str[i+1]) {
            count++;
          }
        } else if (i === str.length - 1) {
          if(str[i] !== str[i-1]) {
            count++;
          }
        } else {
          if(str[i] !== str[i-1] && str[i] !== str[i+1]) {
            count++;
          }
        }
      }
    }
    
    return count;
  }
  
  console.log(countLoneOnes(101)); // 2
  console.log(countLoneOnes(1191)); // 1
  console.log(countLoneOnes(1111)); // 0
  console.log(countLoneOnes(462)); // 0
  