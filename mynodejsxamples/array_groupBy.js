
const people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 21 }
  ];
  
 // const groupedByAge = people.groupBy(person => person.age);
  //console.log(groupedByAge);

  const peopleByAge = Object.groupBy(people, (person) => person.age);
  console.log(groupedByAge);
  // Output: { '21': [{ name: 'Alice', age: 21 }, { name: 'Charlie', age: 21 }], '22': [{ name: 'Bob', age: 22 }] }