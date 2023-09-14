function jazzify(arr) {
    let jazzified = [];
    
    for(let i = 0; i < arr.length; i++) {
    let chord = arr[i];
    
    if(chord.charAt(chord.length - 1) !== "7") {
    jazzified.push(chord + "7");
    } else {
    jazzified.push(chord);
    }
    }
    
    return jazzified;
    }
    
    console.log(jazzify(["G", "F", "C"])); 
    console.log(jazzify(["Dm", "G", "E", "A"])); 
    console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])); 
    console.log(jazzify([]));