import { Observable } from 'rxjs';

const promValue = new Promise((resolve, reject) => {

  //it will be executed immediately, no matter then()/catch() is used or not
  console.log('promise is defined');
  resolve(123);

});

console.log('promValue = ', promValue);


const obsValue = new Observable((mySubscriber) => {

  //it will NOT be executed untill we subscribe to this obs
  console.log('Observable is defined');
  mySubscriber.next(456);

});
