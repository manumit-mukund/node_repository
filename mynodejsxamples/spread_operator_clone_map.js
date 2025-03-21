const map = { a: 1, b: 2 };

console.log('map = ', map);

console.log('\nmap.a = ', map.a);

console.log('\nmap.b = ', map.b);

const clonedMap = { ...map };

console.log('\nclonedMap = ', clonedMap);

const clonedMap1 = { map };

console.log('\nclonedMap1 = ', clonedMap1);