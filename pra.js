"use strict";
//   practice IT
// user info nested 
// this statment is given by customer 
let user_Country = "pakistan";
let user_Age = 17;
// only allow these people 
if (user_Country === "pakistan") {
    if (user_Age >= 18) {
        console.log("here is your ticket");
    }
    else {
        console.log("you are not eligible ");
    }
}
else
    console.log("invalid Country ");
// // aray [] inside array is called element
let fruit1 = "apple";
let fruit2 = "banana";
let fruit3 = "orange ";
//               0         1         2  
let fruit_s = ["apple", "banana ", "orange"];
console.log(fruit_s[2]);
let pets = [];
pets[0] = "cat";
pets[1] = "dog";
let pet = ["cat", "rabbit", "cow"];
// // pop is a function like console and etc it removes end elements 
// // like the answer of this console is only cat is the answer
pet.pop();
pet.pop();
console.log(pet);
//  pop cancel the last element but push add element in last in  the array
