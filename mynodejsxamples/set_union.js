function union(setA, setB) {

    let unionSetA = new Set(setA);

    for (let i of setB) {

        unionSetA.add(i);

    }
    return unionSetA
}

let setA = new Set(['apple', 'mango', 'orange']);
let setB = new Set(['grapes', 'apple', 'banana']);

let resultSet = union(setA, setB);

console.log('resultSet = ', resultSet);