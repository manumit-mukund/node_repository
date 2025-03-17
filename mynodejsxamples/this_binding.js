const person = {

  firstName: 'Ramesh',

  lastName: 'Kumar',

  fullName: function () {

    return `${this.firstName} ${this.lastName}`;

  },

  arrowFullName: () => `${this.firstName} ${this.lastName}`

};

console.log('person.firstName = ', person.firstName);

console.log('\nperson.fullName() = ', person.fullName());

console.log('\nperson.arrowFullName() = ', person.arrowFullName());