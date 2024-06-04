let guestList : string[]=["misbah","madiha","jawera","ayesha"];
console.log( "GuestList:");
for(let i=0; i < guestList.length; i++){
console.log(`${guestList[i]}`);
}
console.log( "\nInivitation:" );
for( let i : number =0; i < guestList.length; i++){
console.log(`Hello, ${guestList[i]}:\nyou are invited in today's dinner party`);}
export{guestList};