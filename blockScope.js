/*
  Block Scope
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