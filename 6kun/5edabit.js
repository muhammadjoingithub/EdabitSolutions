function textToNumberBinary(text) {
    const words = text.toLowerCase().split(" ");
    let binaryString = "";
    
    for (let word of words) {
    if (word === "zero" || word === "one") {
    binaryString += word === "zero" ? "0" : "1";
    }
    }
    
    const excess = binaryString.length % 8;
    if (excess !== 0) {
    binaryString = binaryString.slice(0, binaryString.length - excess);
    }
    
    return binaryString;
    }
console.log(textToNumberBinary("zero one zero one zero one zero one"));
console.log(textToNumberBinary("Zero one zero ONE zero one zero one"));
console.log(textToNumberBinary("zero one zero one zero one zero one one two"));
console.log(textToNumberBinary("zero one zero one zero one zero three"));
console.log(textToNumberBinary("one one"));
