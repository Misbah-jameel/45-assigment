

let personName: string  = "Misbah jameel";
console.log("UpperCase", personName.toUpperCase()) ;



console.log('LowerCase', personName.toLowerCase());


console.log('TitleCase', personName.replace(/\b\w/g, char => char.toUpperCase()));