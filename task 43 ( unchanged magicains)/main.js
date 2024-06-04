"use strict";
let magicians = ["Misbah", "Alina", "Abdullah"];
function make_great(magicians) {
    let great = [];
    magicians.forEach((magic) => {
        great.push(`${magic}, the great`);
    });
    return great;
}
function show_magicians(magicians) {
    magicians.forEach((magicians) => {
        console.log(magicians);
    });
}
let great = make_great(magicians.slice());
console.log("Original Array");
show_magicians(magicians);
console.log("modified array");
show_magicians(great);
