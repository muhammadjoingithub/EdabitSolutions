function countOnes(arr) {
    let count = 0;
    for (let row of arr) {
        for (let num of row) {
          if (num === 1) {
              count++;
           }
        }
    }
    return count;
}
    
console.log(countOnes([
    [1, 0],
    [0, 0]
    ])); 
    
console.log(countOnes([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1]
    ])); 
    
console.log(countOnes([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33]
    ])); 