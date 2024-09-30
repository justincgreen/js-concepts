/*
  Function borrowing allows us to use the methods of one object on a different object without having to make a copy of that method and maintain it in two separate places. It is accomplished through the use of .call(), .apply(), or .bind(), all of which exist to explicitly set this on the method we are borrowing.
*/

const person1 = {
  name: 'Hank',
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const person2 = {
  name: 'Bob'
};

// Borrowing person1's greet method for person2
person1.greet.call(person2);  // Output: "Hello, my name is Bob"

let dog1 = {
  name: 'Bud',
  greet: function() {
    console.log(`Hello ${this.name}`);
  }
}

let dog2 = {
  name: 'Oliver'
}

dog1.greet.call(dog2);