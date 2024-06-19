
let str = " High knowledge, high return";


let charArray = Array.from(str);


let filteredArray = charArray.filter(char => char !== ' ').map(char => char.toLowerCase());


console.log(filteredArray);
