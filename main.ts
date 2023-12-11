//       CLASS 3
//     unknown

let mysteryBox: unknown;
mysteryBox = 5; // You put a number in the box
mysteryBox = 'hello'; // Now, it's a string in the box
// TypeScript is cautious and wants you to be sure about what's in the box
// before you use it.
// Check the type before using it
if (typeof mysteryBox === 'string') {
  let strLength: number = mysteryBox.length;
}
// Or, you can tell TypeScript that you know the type (Type Assertion)
let strLength: number = (mysteryBox as string).length;
console.log(mysteryBox)



// another example
 let number: unknown;
 number =5;
  number = "hello"
 if (typeof number === 'string'){
  console.log(number)
 }















