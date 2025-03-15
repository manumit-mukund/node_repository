const weakMap = new WeakMap();

const user1 = { id: 1 };
const user2 = { id: 2 };

weakMap.set(user1, 'Ramesh');
weakMap.set(user2, 'Mukesh');

console.log('weakMap.get(user1) = ', weakMap.get(user1));

console.log();

console.log('weakMap.get(user2) = ', weakMap.get(user2));

console.log('\nweakMap = ', weakMap);

// Deleting a key-value pair from the WeakMap
weakMap.delete(user1);

console.log(weakMap.get(user1));

