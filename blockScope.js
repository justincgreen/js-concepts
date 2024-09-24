/*
  Block Scope
  This scope restricts the variable that is declared inside a specific block, from access by the outside of the block. The let & const keyword facilitates the variables to be block scoped. In order to access the variables of that specific block, we need to create an object for it. Variables declared with the var keyword, do not have block scope.
*/
function blockScopeExample() {
  let outsideBlock = 'I am outside the block';

  if (true) {
    let insideBlock = 'I am inside the block';
    console.log(insideBlock); // Output: 'I am inside the block'
    console.log(outsideBlock); // Output: 'I am outside the block'
  }

  // console.log(insideBlock); // Uncaught ReferenceError: insideBlock is not defined
  console.log(outsideBlock); // Output: 'I am outside the block'
}

blockScopeExample();