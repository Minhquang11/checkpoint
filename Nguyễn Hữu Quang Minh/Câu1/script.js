
let m = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100];


let filteredM = m.filter(element => typeof element === 'number');


let mSquared = filteredM.map(element => Math.pow(element, 2));


console.log(filteredM); 
console.log(mSquared); 