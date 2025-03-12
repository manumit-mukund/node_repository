
const set1 = new Set();

console.log("set1 = ", set1);
console.log();

const set2 = new Set([1, 'hello', { count: true }]);

console.log('\nset2 = ', set2);

const set3 = new Set([1, 1, 2, 2]);

console.log("\nset3 = ", set3);

const set4 = new Set([1, 2, 3]);
console.log("\nset4 = ", set4.values());