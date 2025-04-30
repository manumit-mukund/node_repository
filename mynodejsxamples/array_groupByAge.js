require("core-js/actual/array/group-by-to-map");
require("core-js/actual/array/group-by");


const people = [

  { name: 'N1', age: 21 },
  { name: 'N2', age: 22 },
  { name: 'N3', age: 22 },
  { name: 'N4', age: 21 }
  
];

const peopleGroupedByAge = people.groupBy(person => person.age);

console.log('people in  normal format after groupBy', people);

console.log('\npeopleGroupedByAge in  normal format', peopleGroupedByAge);

console.table('\npeopleGroupedByAge in  table format');

console.table(peopleGroupedByAge);