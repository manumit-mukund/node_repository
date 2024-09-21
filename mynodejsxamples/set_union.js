let setA = new Set(['apple', 'mango', 'orange']);
let setB = new Set(['grapes', 'apple', 'banana']);

let resultSet = myUnion(setA, setB);
function myUnion(setA, setB) {

    let unionSetA = new Set(setA);

    for (let i of setB) {

        unionSetA.add(i);

    }
    return unionSetA
}

console.log('resultSet = ', resultSet);