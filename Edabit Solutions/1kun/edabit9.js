function boxSeq(step) {
    let boxes = 0;
    for (let i = 1; i <= step; i++) {
         if (i % 2 === 1) {
             boxes += 3;
         } else {
            boxes -= 1;
         }
    }
    return boxes;
}
    
    console.log(boxSeq(0)); 
    console.log(boxSeq(1));
    console.log(boxSeq(2));