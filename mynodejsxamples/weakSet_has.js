const weakSet = new WeakSet();

console.log('weakSet = ', weakSet);

const obj = { a: 1 };

weakSet.add(obj);

console.log('\nweakSet = ', weakSet);

console.log('\nweakSet.has(obj) = ', weakSet.has(obj));

weakSet.delete(obj);

console.log('\nweakSet = ', weakSet);

console.log('\nweakSet.has(obj) = ', weakSet.has(obj));