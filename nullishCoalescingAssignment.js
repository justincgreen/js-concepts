/*
  Nullish coalescing assignment (??=)
  The nullish coalescing assignment (??=) operator, also known as the logical nullish assignment operator, only evaluates the right operand and assigns to the left if the left operand is nullish (null or undefined).
*/

const a = { duration: 50 }
console.log(a.speed); // undefined
a.speed ??= 25; // since speed is undefined it will be set to 25
console.log(a.speed) // 25

a.duration ??= 10;
console.log(a.duration) // 50, not 10 since a duration value has already been set.