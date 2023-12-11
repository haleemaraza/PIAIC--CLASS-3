// another examole of if nested statment 
var _app = "netfilx";
var _age = 18;
if (_app === "netfilx") {
    if (_age >= 18) {
        console.log("you can install this app");
    }
    else {
        console.log("you are not allowed");
    }
}
var mysteryBox;
mysteryBox = 5; // You put a number in the box
mysteryBox = 'hello'; // Now, it's a string in the box
// TypeScript is cautious and wants you to be sure about what's in the box
// before you use it.
// Check the type before using it
if (typeof mysteryBox === 'string') {
    var strLength_1 = mysteryBox.length;
}
// Or, you can tell TypeScript that you know the type (Type Assertion)
var strLength = mysteryBox.length;
console.log(mysteryBox);
var number;
number = 5;
number = "hello";
if (typeof number === 'string') {
    console.log(number);
}
