const weakSet = new WeakSet();

console.log('weakSet = ', weakSet);

const obj = {a:1};

weakSet.add(obj);

console.log('weakSet = ', weakSet);

console.log('weakSet.has(obj) = ' , weakSet.has(obj));

weakSet.delete(obj);

console.log('weakSet = ', weakSet);

console.log('weakSet.has(obj) = ',weakSet.has(obj));