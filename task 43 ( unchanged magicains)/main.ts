let magicians: string[] = ["Misbah", "Alina", "Abdullah"];
function make_great(magicians: string[]): string[] {
  let great: string[] = [];
  magicians.forEach((magic) => {
    great.push(`${magic}, the great`);
  });
  return great;
}
function show_magicians(magicians: string[]) {
  magicians.forEach((magicians) => {
    console.log(magicians);
  });
}
let great = make_great(magicians.slice());
console.log("Original Array");

show_magicians(magicians);
console.log("modified array");

show_magicians(great);