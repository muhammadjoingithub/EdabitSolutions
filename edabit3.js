function fibSeq(n) {
    if (n === 0) {
        return [];
    }
    let sequence = [0];
    let a = 0;
    let b = 1;
    for (let i = 1; i < n; i++) {
        sequence.push(b);
         let temp = b;
          b = a + b;
          a = temp;
    }
    return sequence;
}
console.log(fibSeq(4));
console.log(fibSeq(7));
console.log(fibSeq(0));
