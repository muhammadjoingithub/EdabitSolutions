function hashPlusCount(str) {
    let hashCount = 0;
    let plusCount = 0;
        for (let char of str) {
           if (char === '#') {
                  hashCount++;
            } else if (char === '+') {
                 plusCount++;
            }
    }
    return [hashCount, plusCount];
}
    
    console.log(hashPlusCount("###+"));
    console.log(hashPlusCount("##+++#")); 
    console.log(hashPlusCount("#+++#+#++#")); 
    console.log(hashPlusCount(""));