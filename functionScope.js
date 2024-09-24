/*
  Function Scope 
  When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.
*/
const myFunction = () => {
  const hello = 'Hello World';
  console.log(hello);
}

console.log(hello); // cant access the "hello" const since its block scoped to myFunction