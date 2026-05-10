require ("core-js/actual/object/group-by");


const people = [

    { year: "2024", id: 0 },
    { year: "2023", id: 1 },
    { year: "2024", id: 2 },
    { year: "2023", id: 3 }

];

const arrgroupBy = Object.groupBy(people, person => person.year);

console.log('\npeople after groupBy', people);

console.log('\narrgroupBy in the default format', arrgroupBy);

console.log('\narrgroupBy in a tabular format');

console.table(arrgroupBy);