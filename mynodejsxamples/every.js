const numbers = [1, 2, 3, 4, 5];

const allGreaterThanZero = numbers.every(function(number) {

  return number > 0;

});

console.log('allGreaterThanZero = ', allGreaterThanZero);