class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  greet() {
    console.log(`My dog's name is ${this.name}, he is a ${this.breed}`);
  }
}

const myDog = new Dog('Porkchop', 'Beagle')
myDog.greet();

console.log(typeof Dog) // class is actually a constructor function under the hood
console.log(Dog === Dog.prototype.constructor); // true
console.log(Dog.prototype.greet); // the methods are in the Dog.prototype 
console.log(Object.getOwnPropertyNames(Dog.prototype)); // two methods in the prototype