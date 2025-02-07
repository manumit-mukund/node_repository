const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

const arr3 = [3, 4, 5];

const arr12 = [...arr1, ...arr2];

const arr23 = [...arr2, ...arr3];

const arr13 = [...arr1, ...arr3];

const arr123 = [...arr1, ...arr2, ...arr3];


console.log('arr12 = ', arr12); 

console.log('arr23 = ', arr23); 

console.log('arr13 = ', arr13); 

console.log('arr123 = ', arr123); 