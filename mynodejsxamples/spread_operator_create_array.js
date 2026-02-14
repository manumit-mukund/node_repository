const originalFruits = ["apple", "banana"];

console.log('originalFruits : ', originalFruits);

const newFruitsEnd = [...originalFruits, "orange"];
console.log('\nnewFruitsEnd : ', newFruitsEnd);

const newFruitsStart = ["orange", ...originalFruits];
console.log('\nnewFruitsStart : ', newFruitsStart);

