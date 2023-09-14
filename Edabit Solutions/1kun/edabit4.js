function numberSplit(num) {
    var half = Math.floor(num / 2);
    var otherHalf = Math.ceil(num / 2); 
    return [half, otherHalf]; 
}
console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));
