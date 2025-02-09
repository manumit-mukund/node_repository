const set = new Set([1, 2]);
console.log('set =', set.values());

set.add(3);
console.log('set =', set.values());

set.add(1);
console.log('set =', set.values());

set.add('a');
console.log('set =', set.values());

set.add('Hello');
console.log('set =', set.values());