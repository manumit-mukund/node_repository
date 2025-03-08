const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

const arr3 = [3, 4, 5];

const arr11 = arr1;

const arr111 = [...arr1];

const arr12 = [...arr1, ...arr2];

const arr122 = [arr1, arr2];

const arr1222 = [arr1, ...arr2];

const arr23 = [...arr2, ...arr3];

const arr13 = [...arr1, ...arr3];

const arr123 = [...arr1, ...arr2, ...arr3];

console.log('arr11 = ', arr11);

console.log('\narr111 = ', arr111);

console.log('\narr12 = ', arr12);

console.log('\narr122 = ', arr122);

console.log('\narr1222 = ', arr1222);

console.log('\narr23 = ', arr23);

console.log('\narr13 = ', arr13);

console.log('\narr123 = ', arr123); 