function sevenBoom(arr) {
    for(let i = 0; i < arr.length; i++) {
    let number = arr[i].toString();
    
        if(number.includes("7")) {
            return "Boom!";
        }
    }
    
    return "there is no 7 in the array";
}
    
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); 
console.log(sevenBoom([8, 6, 33, 100]));
console.log(sevenBoom([2, 55, 60, 97, 86])); 