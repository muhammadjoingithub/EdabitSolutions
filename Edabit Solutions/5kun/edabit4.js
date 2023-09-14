function chunkify(arr, n) {
    let chunks = [];
    for (let i = 0; i < arr.length; i += n) {
    chunks.push(arr.slice(i, i + n));
    }
    return chunks;
}
console.log(chunkify([2, 3, 4, 5], 2));
console.log(chunkify([2, 3, 4, 5, 6], 2));
console.log(chunkify([2, 3, 4, 5, 6, 7], 3));
console.log(chunkify([2, 3, 4, 5, 6, 7], 1));
console.log(chunkify([2, 3, 4, 5, 6, 7], 7));


