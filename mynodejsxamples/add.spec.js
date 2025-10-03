// add.spec.js
const { test, expect } = require('@playwright/test');

test('should correctly add two numbers', async ({ page }) => {

  await page.goto('file://C:/mygitrepositories/node_repository/mynodejsxamples/index.html'); 

 
  const sum = await page.evaluate(({ num1, num2 }) => {

    return addNumbers(num1, num2);

  }, { num1: 5, num2: 3 });


  expect(sum).toBe(8);


  const anotherSum = await page.evaluate(({ num1, num2 }) => {

    return addNumbers(num1, num2);

  }, { num1: 10, num2: -2 });

  expect(anotherSum).toBe(8);
});