/*
  Promise
  A promise is an object that represents the success or failure of a given operation, usually an asynchronous operation.
  https://www.codeguage.com/courses/advanced-js/promises-basics
*/

const timerPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello');
  }, 2000)
});

timerPromise.then((response) => {
  console.log(response);
})