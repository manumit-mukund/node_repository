const a = true;
const b = 'true';

console.log('(a == b) = ', (a == b));

//Url: https://www.freecodecamp.org/news/loose-vs-strict-equality-in-javascript/
//It is because the value of the variable a (true) gets converted to a number before the comparison. 
// So after comparison – where we're now comparing 1 and 'true' – we get false because the variables contain different values.