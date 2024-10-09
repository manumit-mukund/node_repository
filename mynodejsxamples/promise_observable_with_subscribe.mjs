import { Observable } from 'rxjs';

const promValue = new Promise((myResolve, myReject) => {

  //it will be executed immediately, no matter then()/catch() is used or not
  console.log('promise is defined');
  myResolve(123);

});

console.log('promValue = ', promValue);


const obsValue = new Observable((mySsubscriber) => {

  //it will NOT be executed untill we subscribe to this obs
  console.log('Observable is defined');
  mySsubscriber.next(456);

});

obsValue.subscribe((myValue) => {

  console.log('value emitted from obs is: ', myValue);

});