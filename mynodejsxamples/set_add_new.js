const set = new Set([1, 2]);
console.log('set =', set.values());

set.add(3);
console.log('\nset =', set.values());

set.add(1);
console.log('\nset =', set.values());

set.add('a');
console.log('\nset =', set.values());

set.add('Hello');
console.log('\nset =', set.values());