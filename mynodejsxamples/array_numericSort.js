const points = [40, 100, 1, 5, 25, 10];

console.log('points = ', points);

points.sort(function (a, b) {
    return a - b
}
);

console.log('sorted points = ', points);

points.sort(function (a, b) {
    return b - a
}
);

console.log('reverse sorted points = ', points);