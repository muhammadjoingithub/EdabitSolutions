function capMe(arr) {
    let capitalizedArr = [];
    for (let i = 0; i < arr.length; i++) {
      let name = arr[i];
      let capitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      capitalizedArr.push(capitalized);
    }
    return capitalizedArr;
  }

console.log(capMe(["mavis", "senaida", "letty"]));
console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"]) );
console.log(capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]));
