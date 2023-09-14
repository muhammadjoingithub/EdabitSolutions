function calculateBurglaryValue(stolenItems) {
    const totalValue = Object.values(stolenItems).reduce((acc, value) => acc + value, 0);
    
    if (totalValue === 0) {
        return "Lucky you!";
    } else {
        return totalValue;
    }
}
    
const stolenItems1 = {
    tv: 30,
    skate: 20,
    stereo: 50,
};
console.log(calculateBurglaryValue(stolenItems1)); // Output: 100
    const stolenItems2 = {
    painting: 20000,
};
console.log(calculateBurglaryValue(stolenItems2));
    const stolenItems3 = {};
console.log(calculateBurglaryValue(stolenItems3)); 