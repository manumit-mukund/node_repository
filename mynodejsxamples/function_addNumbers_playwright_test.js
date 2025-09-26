// addition.spec.js
const { test, expect } = require('@playwright/test');
const { addNumbers } = require('./function_addNumbers'); // Import the add function

test('should correctly add two numbers', async ({ page }) => {
  // Call the add function directly in your test
  const result = addNumbers(5, 3);

  // Assert that the result is as expected
  await expect(result).toBe(8);
});

test('should handle negative numbers correctly', async ({ page }) => {
  const result = addNumbers(-5, 3);
  await expect(result).toBe(-2);
});

test('should handle zero correctly', async ({ page }) => {
  const result = addNumbers(10, 0);
  await expect(result).toBe(10);
});