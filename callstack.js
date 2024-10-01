/*
  https://www.lydiahallie.com/blog/event-loop
*/
// console.log('one');
// console.log('two');

function logThree() {
  console.log('three');
}

function logThreeandFour() {
  logThree();
  console.log('four');
}

// logThreeandFour();

setTimeout(() => {
  console.log('2 seconds');
}, 2000);

setTimeout(() => {
  console.log('100ms');
}, 100);

console.log('End of script')