/*
  this keyword when used in a method relates to the object it's in.
  you cannot change the value of this only where its referenced with call(), apply(), and bind()
*/
const person = {
  firstName: 'Hank',
  lastName: 'Hill',
  fullName: function() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

person.fullName();