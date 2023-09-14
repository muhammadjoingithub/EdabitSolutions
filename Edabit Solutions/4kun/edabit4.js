function rps(p1, p2) {
    if(p1 === p2) {
        return "It’s a draw";
    }
    
    if(
      (p1 === "Rock" && p2 === "Scissors") ||
      (p1 === "Scissors" && p2 === "Paper") ||
       (p1 === "Paper" && p2 === "Rock")
    ) {
        return "The winner is p1";
    } else {
        return "The winner is p2";
    }
}
    
console.log(rps("Rock", "Paper")); // “The winner is p2”
console.log(rps("Scissors", "Paper")); // “The winner is p1”
console.log(rps("Paper", "Paper")); // “It’s a draw”