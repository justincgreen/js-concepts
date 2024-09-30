/*
  Callback function
  A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
*/

function greet(name, callback) {
  console.log('Hello ' + name);
  callback();
}

function convo() {
  console.log('how are you?');
}

greet('Bob', convo);