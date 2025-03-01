const values = [5, 1, 3, 2, 4];

console.log('values = ', values);

const sortedValues = values.toSorted((a, b) => a - b);

console.log('\nvalues after toSorted() = ', values);

console.log('\nsortedValues = ', sortedValues);

