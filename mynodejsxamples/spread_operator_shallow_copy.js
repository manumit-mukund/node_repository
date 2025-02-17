const originalArray = [[1, 2, 3, 4], 12];

const copiedArray = [...originalArray];

console.log('originalArray ', originalArray);

console.log('copiedArray = ', copiedArray);

copiedArray[0].push(99);

console.log('\noriginalArray ', originalArray);

console.log('copiedArray = ', copiedArray);

copiedArray.push(99);

console.log('\noriginalArray ', originalArray);

console.log('copiedArray = ', copiedArray);

//copiedArray[0][0].push(99); // TypeError: copiedArray[0][0].push is not a function

console.log('\ncopiedArray[0][0] ', copiedArray[0][0]);

console.log('copiedArray[0][1] ', copiedArray[0][1]);

//console.log('copiedArray = ', copiedArray);