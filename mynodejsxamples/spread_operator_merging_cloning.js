const map1 = { a: 1, b: 2 };

const map2 = { b: 3, c: 4 };

const map3 = { ...map1, ...map2 };

console.log('map3 = ', map3);

const clonedMap1 = { ...map1 };

console.log('clonedMap1 = ', clonedMap1);