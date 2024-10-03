const a = { duration: 50, title: '' };

a.duration ||= 10;
console.log('a.duration = ', a.duration);


a.title ||= 'title is empty.';
console.log('a.title = ', a.title);

const x = 1;
x ||= 2;
console.log('x = ', x);

let y ='';
y ||= 2;
console.log('y = ', y);
