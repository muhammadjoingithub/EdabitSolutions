function isAvgWhole(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const avg = sum / arr.length;
    return Number.isInteger(avg);
}
    
console.log(isAvgWhole([1, 3])); // true
console.log(isAvgWhole([1, 2, 3, 4])); // false
console.log(isAvgWhole([1, 5, 6])); // true
console.log(isAvgWhole([1, 1, 1])); // true
console.log(isAvgWhole([9, 2, 2, 5])); // false