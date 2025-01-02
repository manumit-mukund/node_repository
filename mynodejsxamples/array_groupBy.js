const people = [

  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 21 }
  
];

const groupedByAge = people.groupBy(person => person.age);

console.log(groupedByAge);