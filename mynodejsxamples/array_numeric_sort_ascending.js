const array = [4, 10, 1, 5, 2, 11];

console.log('array = ', array);

array.sort(function (a, b) {

    return a - b

}

);

console.log('\nsorted array ascending = ', array);

array.sort(); //sorted array =  [ 1, 10, 11, 2, 4, 5 ]

console.log('\nsorted array using array.sort() = ', array);