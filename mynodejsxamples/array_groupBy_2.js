const arr = [

    { year: "2024", id: 0 },
    { year: "2023", id: 1 },
    { year: "2024", id: 2 },

];

const obj = Object.groupBy(arr, (el) => el.year);

console.log(obj); 