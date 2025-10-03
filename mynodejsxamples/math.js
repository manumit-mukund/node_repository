// math.js
function add(a, b) {
  return a + b;
}

// Make the function accessible globally for testing in the browser context
if (typeof window !== 'undefined') {
  window.add = add;
}