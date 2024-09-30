/*
  Default Params
  Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
*/

const multiply = (x, y = 1) => {
  console.log(x * y);
}

multiply(5); // 5
multiply(5, 5); // 25