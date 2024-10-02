const numbers = [1, 2, 3, 4, 5];

const allGreaterThanZero = numbers.every(function(number) {

  return number > 0;

});


//--------------------------test for false..................................

console.log('allGreaterThanZero = ', allGreaterThanZero);

const numbers1 = [1, 2, 3, 4, 0, 5];

const allGreaterThanZero1 = numbers1.every(function(number) {

  return number > 0;

});

console.log('allGreaterThanZero1 = ', allGreaterThanZero1);