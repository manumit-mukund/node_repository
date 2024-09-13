const originalArray = [[1, 2, 3, 4], 12];

const copiedArray = [...originalArray];

copiedArray[0].push(99);

console.log(originalArray);

console.log(copiedArray);