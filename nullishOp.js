/*
  Nullish coalescing operator (??)
  The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
*/

const foo = null ?? 'This displays becase null was defined on the left';
console.log(foo);

const bar = undefined ?? 'Undefined caused this value to be set';
console.log(bar);

const baz = 0 ?? 42;
console.log(baz); // this will still be 0 because null or undefined wasn't expected;