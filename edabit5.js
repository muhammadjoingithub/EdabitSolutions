function numInStr(arr) {
    let result = [];
    for (let str of arr) {
       for (let char of str) {
            if (!isNaN(char)) {
               result.push(str);
               break;
            }
        }
    }
    return result;
}
console.log(numInStr(["1a", "a", "2b", "b"]));
console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["this is a test", "test1"]));
