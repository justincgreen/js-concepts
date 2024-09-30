/*
  Rest parameters
  The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
*/

function sum(...args) {
  console.log(...args);
  let total = 0;
  
  for(const arg of args) {
    total += arg;
  }
  
  console.log(total);
}

sum(1,2,3,4,5)