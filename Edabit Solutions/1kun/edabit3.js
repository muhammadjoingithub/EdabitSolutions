function binary(decimal) {
    if (decimal === 0) {
        return "0";
    }
    
    let binary = "";
    
    for (let i = 512; i >= 1; i /= 2) {
        if (decimal >= i) {
           binary += "1";
            decimal -= i;
        } else {
            binary += "0";
        }
    }
    
    return binary;
}
    
    console.log(binary(1));
    console.log(binary(5)); 
    console.log(binary(10));