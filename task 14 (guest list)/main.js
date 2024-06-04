"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
let guestList = ["misbah", "madiha", "jawera", "ayesha"];
exports.guestList = guestList;
console.log("GuestList:");
for (let i = 0; i < guestList.length; i++) {
    console.log(`${guestList[i]}`);
}
console.log("\nInivitation:");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Hello, ${guestList[i]}:\nyou are invited in today's dinner party`);
}
