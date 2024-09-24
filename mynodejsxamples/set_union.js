let setA = new Set(['apple', 'mango', 'orange']);

let setB = new Set(['grapes', 'apple', 'banana']);

let resultSet = myUnion(setA, setB);
function myUnion(setA, setB) {

    let unionSetAB = new Set(setA);

    for (let i of setB) {

        unionSetAB.add(i);

    }
    return unionSetAB
}

console.log('resultSet = ', resultSet);