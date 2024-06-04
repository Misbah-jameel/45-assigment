let guestList : string[]=["Laiba","misbah","madiha","jawera","ayesha"];
//Ex :15;
let not_present:string="Laiba";
let new_guest :string ="Sana";
guestList[0]= new_guest;
for(let i =0; i< guestList.length; i++){
    console.log(`Hello, ${guestList[i]}:\nyou are invited in today's dinner party\n`);}
    console.log(`\nMiss . ${not_present} will not come tomorrow party`)
    guestList.unshift("asma","hafsa","iram");
    for(let i =0; i< guestList.length; i++){
        console.log(`Hello, ${guestList[i]}:\nyou are invited in today's dinner party\n`);}
        