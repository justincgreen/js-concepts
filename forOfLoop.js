/*
  For...of loop
  a slightly less verbose version of a for loop
*/

const nums = [1,2,3];
const str = 'hello';
const uint8 = new Uint8Array([15, 192, 16]);

for(let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// for..of loop does the same iteration as the for loop with less boilerplate code
for (let num of nums) {
  console.log(num);
}

for(let s of str) {
  console.log(s.toUpperCase());
}

for(let unit of uint8) {
  console.log(unit.toString(16)) // log hexadecimal representation
}
