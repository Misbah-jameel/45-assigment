//Default parameters in function

function make_shirts(Size: string, Message: string = "hello") {
    return Size + " " + Message;
  }
  console.log(make_shirts("medium"));
  console.log(make_shirts("medium", "i am abdullah"));
  