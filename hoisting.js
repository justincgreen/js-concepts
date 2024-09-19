hello(); // this works since function declarations are hoisted, meaning can be called before they are defined
helloTwo(); // will not work since function expressions are not hoisted.

// function declaration
function hello() {
  console.log('hello');
}

// function expression (arrow function)
const helloTwo = () => {
  console.log('Hello 2');
}

// helloTwo(); // this works since helloTwo has been defined above