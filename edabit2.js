function uniqueSort(arr) {
    let uniqueArray = [];
    
    for(let i = 0; i < arr.length; i++) {
       if(uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
       }
    }
    
    uniqueArray.sort(function(a, b) {
    return a - b;
    });
    
    return uniqueArray;
}
    
console.log(uniqueSort([1, 2, 4, 3])); 
console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2])); 
console.log(uniqueSort([6, 7, 3, 2, 1])); 