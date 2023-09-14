function matrix(x, y, z) {
    let subarrays = [];
    
    for(let i = 0; i < x; i++) {
        let subarray = [];
    
          for(let j = 0; j < y; j++) {
            subarray.push(z);
          }
    
        subarrays.push(subarray);
    }
    
    return subarrays;
}
    
console.log(matrix(3, 2, 3)); 
console.log(matrix(2, 1, "edabit")); 
console.log(matrix(3, 2, 0)); 