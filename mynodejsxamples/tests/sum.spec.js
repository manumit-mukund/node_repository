// tests/sum.spec.js
const { test, expect } = require('@playwright/test');
const { add } = require('../sum.js'); // Adjust the path as needed

test('should add two numbers correctly', () => {
  // Call the function directly and store the result
  const result = add(5, 10);

  // Use Playwright's expect for assertions
  expect(result).toBe(15);
});

test('should handle negative numbers', () => {
    const result = add(-1, 5);
    expect(result).toBe(4);
});

test('should handle zeros', () => {
    const result = add(0, 0);
    expect(result).toBe(0);
});
