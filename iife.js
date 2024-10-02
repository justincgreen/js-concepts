/*
  IIFE (Immediately Invoked Function Expression)
  In an IIFE, the function is invoked immediately and creates a local scope, which prevents variables inside the function from polluting the global namespace. By using an IIFE, you can encapsulate variables and functions so they don’t interfere with other code on the page.

*/

(
  () => {
    console.log('Called immediately when the page loads')
  }
)();