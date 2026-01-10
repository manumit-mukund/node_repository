const array = [4, 10, 1, 5, 2, 11];

console.log('array = ', array);

array.sort(function (a, b) {

    return b - a

});

console.log('\nsorted array descending = ', array);

array.sort(); //sorted array =  [ 1, 10, 11, 2, 4, 5 ]

console.log('\nsorted array using array.sort() = ', array);

