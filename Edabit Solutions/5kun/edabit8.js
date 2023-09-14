function getFrequencies(arr) {
    let frequencies = {};
    
    for(let i = 0; i < arr.length; i++) {
    let element = arr[i];
    
    if(frequencies[element]) {
    frequencies[element]++;
    } else {
    frequencies[element] = 1;
    }
    }
    
    return frequencies;
}
    
console.log(getFrequencies(["A", "B", "A", "A", "A"]));
console.log(getFrequencies([1, 2, 3, 3, 2]));
console.log(getFrequencies([true, false, true, false, false]));
console.log(getFrequencies([]));
