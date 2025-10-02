// tests/math.spec.js
import { test, expect } from '@playwright/test';
import { addNumbers } from 'math.js'; // Adjust path if needed

test.describe('addNumbers function', () => {
  test('should correctly add two numbers', () => {
    expect(addNumbers(5, 3)).toEqual(8);
  });

  test('should correctly add multiple numbers', () => {
    expect(addNumbers(1, 2, 3, 4)).toEqual(10);
  });

  test('should return the number itself if only one number is provided', () => {
    expect(addNumbers(7)).toEqual(7);
  });

  test('should return 0 if no numbers are provided', () => {
    expect(addNumbers()).toEqual(0);
  });

  test('should handle negative numbers correctly', () => {
    expect(addNumbers(-5, 10)).toEqual(5);
  });
});