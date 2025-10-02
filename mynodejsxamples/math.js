// src/math.js
export function addNumbers(...numbers) {

  if (numbers.length === 0) {

    return 0;

  }
  
  return numbers.reduce((sum, current) => sum + current, 0);
}