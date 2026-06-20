//--------------------------test for true..................................
const numbers = [1, 2, 3, 4, 5];

const everyGreaterThanZero = numbers.every(function (number) {

  return number > 0;

});

console.log('everyGreaterThanZero = ', everyGreaterThanZero);


//--------------------------test for false..................................
const numbers1 = [1, 2, 3, 4, 0, 5];

const everyGreaterThanZero1 = numbers1.every(function (number) {

  return number > 0;

});

console.log('\neveryGreaterThanZero1 = ', everyGreaterThanZero1);