function diceGame(matrix) {
    let score = 0;
    
    for(let i = 0; i < matrix.length; i++) {
        let dice1 = matrix[i][0];
         let dice2 = matrix[i][1];
    
            if(dice1 === dice2) {
               return 0;
            }
    
        score += dice1 + dice2;
    }
    
    return score;
}
    
console.log(diceGame([[1, 2], [3, 4], [5, 6]]));
console.log(diceGame([[1, 1], [5, 6], [6, 4]]));
console.log(diceGame([[4, 5], [4, 5], [4, 5]])); 