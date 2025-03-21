const a = { duration: 50, title: '' };

a.duration ||= 10;
console.log('a.duration = ', a.duration);


a.title ||= 'My title';
console.log('\na.title = ', a.title);

const x = 1;
x ||= 2;
console.log('\nx = ', x);

let x1;
x1 ||= 2;
console.log('\nx1 = ', x1);

let x2 = 3;
x2 = 4;
console.log('\nx2 = ', x2);

let y ='';
y ||= 2;
console.log('\ny = ', y);
