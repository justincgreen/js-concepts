/*
  this keyword when used in a method relates to the object it's in
*/
const person = {
  firstName: 'Hank',
  lastName: 'Hill',
  fullName: function() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

person.fullName();