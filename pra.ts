//        CLASS 3
//     if or else and if nested statment 

// information given by people
 let user_Country = "pakistan";
 let user_Age = 17 ;

  // only allow these people 
 if (user_Country === "pakistan"){
 if (user_Age >= 18) {
     console.log("here is your ticket");
  } else {
     console.log("you are not eligible ");
  }
 } else 
 console.log("invalid Country ")

//    another example 
let _app = "netfilx";
let _age = 18;

if (_app === "netfilx"){
 if(_age >= 18){
    console.log("you can install this app");
 }   
else {
    console.log ("you are not allowed")
}
}

//   another  example 
console.log("taking decision");
let budget = 40000
let cycle = 40000
let color ="red"
if (((color =="blue" || color =="black" || color =="red") &&  cycle <= budget)){
    console.log("buy cycle")
}
else{
    console.log("i need to build my skills to earn more")
}




