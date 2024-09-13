
const set1 = new Set();

console.log("set1 = ", set1);
console.log();

const set2 = new Set([1, 'hello', { count: true }]);

console.log('set2 = ', set2);
console.log();

const set3 = new Set([1, 1, 2, 2]);
console.log("set3 = ", set3);
console.log();

const set4 = new Set([1, 2, 3]);
console.log();
console.log("set4 = ", set4.values());