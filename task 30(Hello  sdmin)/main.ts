let users: string[]=["admin","misbah","abdullah","umair"];

for(let user of users){
    if(user === "admin"){
        console.log("Hello admin would you like to see the report");
    }else{
        console.log(`Hello ${user} , thankyou logging in`);
    }
}