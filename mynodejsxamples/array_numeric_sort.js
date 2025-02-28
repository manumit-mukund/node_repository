const array = [4, 10, 1, 5, 2, 11];

console.log('array = ', array);

array.sort(function (a, b) {

    return a - b

}

);

console.log('\nsorted array = ', array);

array.sort(function (a, b) {

    return b - a

}

);

console.log('\nreverse sorted array = ', array);