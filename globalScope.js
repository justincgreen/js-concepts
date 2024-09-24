/*
 Global scope 
 Variables declared Globally (outside any function) have Global Scope. Global variables can be accessed from anywhere in a JavaScript program.
*/

const hello = 'Hello World';

console.log(hello);

const myFunction = () => {
  console.log(hello, 'referenced from myFunction');
}

myFunction();