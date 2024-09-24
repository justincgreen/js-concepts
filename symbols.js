/*
  Symbols
  a "symbol" represents a unique identifier,
  "hidden" object properties
  https://javascript.info/symbol
*/

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2) // false, symbols are unique