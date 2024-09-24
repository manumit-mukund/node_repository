const person = {

    firstName: 'Ramesh',
    lastName: 'Kumar',
    fullName: function () {

      return `${this.firstName} ${this.lastName}`;

    },
    
    arrowFullName: () => `${this.firstName} ${this.lastName}`

  };
  
  console.log('person.fullName() = ', person.fullName());

  console.log('person.arrowFullName() = ', person.arrowFullName());