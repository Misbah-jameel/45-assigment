"use strict";
//Default parameters in function
function make_shirts(Size, Message = "hello") {
    return Size + " " + Message;
}
console.log(make_shirts("medium"));
console.log(make_shirts("medium", "i am abdullah"));
