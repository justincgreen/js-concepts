/*
  Recursion
  The act of a function calling itself, recursion is used to solve problems that contain smaller sub-problems. A recursive function can receive two inputs: a base case (ends recursion) or a recursive case (resumes recursion).
*/

function countToThree(n = 1) {
  if (n > 3) {
    return; // Base case: stop when n is greater than 3
  }
  console.log(n); // Output the current number
  countToThree(n + 1); // Recursive call with n incremented by 1
}

countToThree();