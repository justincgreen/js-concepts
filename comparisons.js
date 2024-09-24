const foo = 1;
const bar = '1';

// == value equality operator (only compares the values)
// if(foo == bar) {
//   console.log(true); // will return true because values are the same even thought the data type isn't
// }else {
//   console.log(false);
// }

// === strict equality operator (compares the value and the data types)
if(foo === bar) {
  console.log(true); // will return false because the data types of the values are not the same
}else {
  console.log(false);
}

// Object.is 
// console.log(Object.is(foo, bar));