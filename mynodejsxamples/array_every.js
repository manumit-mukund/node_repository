//--------------------------test for true..................................
const numbers = [1, 2, 3, 4, 5];

const allGreaterThanZero = numbers.every(function (number) {

  return number > 0;

});

console.log('allGreaterThanZero = ', allGreaterThanZero);


//--------------------------test for false..................................
const numbers1 = [1, 2, 3, 4, 0, 5];

const allGreaterThanZero1 = numbers1.every(function (number) {

  return number > 0;

});

console.log('\nallGreaterThanZero1 = ', allGreaterThanZero1);