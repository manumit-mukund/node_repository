const a = { duration: 50, title: '' };

a.duration ||= 10;
console.log('a.duration = ', a.duration);


a.title ||= 'My title';
console.log('a.title = ', a.title);

const x = 1;
x ||= 2;
console.log('x = ', x);

let x1;
x1 ||= 2;
console.log('x1 = ', x1);

let x2 = 3;
x2 = 4;
console.log('x2 = ', x2);

let y ='';
y ||= 2;
console.log('y = ', y);
