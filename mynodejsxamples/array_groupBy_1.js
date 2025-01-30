require("core-js/actual/array/group-by-to-map");
require("core-js/actual/array/group-by");


const people = [

  { name: 'N1', age: 21 },
  { name: 'N2', age: 22 },
  { name: 'N3', age: 22 },
  { name: 'N4', age: 21 },
  { name: 'N5', age: 25, city: "Delhi" },
 
  
];

console.log('people before groupBy: ', people);

const groupedByAge = people.groupBy(person => person.age);

console.log('\npeople after groupBy: ', people);

console.log('\ngroupedByAge: ', groupedByAge);

console.log('\ngroupedByAg in a tabular format');

console.table(groupedByAge);