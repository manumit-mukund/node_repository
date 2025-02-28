const arr = [

    { year: "2024", id: 0 },
    { year: "2023", id: 1 },
    { year: "2024", id: 2 },
    { year: "2023", id: 3 }

];

const obj = Object.groupBy(arr, (a) => a.year);

console.log('\narr in the default format');

console.log(obj); 

console.log('\narr in a tabular format');

console.table(obj);