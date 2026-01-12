const values = [5, 1, 3, 2, 4];

console.log('values = ', values);

const toSortedValues = values.toSorted((a, b) => a - b);

console.log('\nvalues after toSorted() = ', values);

console.log('\ntoSortedValues = ', toSortedValues);

const toSortedValuesDescending = values.toSorted((a, b) => b - a);

console.log('\ntoSortedValuesDescending = ', toSortedValuesDescending);

