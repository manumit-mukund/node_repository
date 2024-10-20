import { Observable } from 'rxjs';

const promiseValue = new Promise((myResolve, myReject) => {

  //it will be executed immediately, no matter then()/catch() is used or not
  console.log('promise is defined');
  myResolve(111);

});

console.log('promiseValue = ', promiseValue);


const observableValue = new Observable((mySubscriber) => {

  //it will NOT be executed untill we subscribe to this obs
  console.log('Observable is defined.');
  mySubscriber.next(222);

});

observableValue.subscribe((myValue) => {

  console.log('observableValue = ', myValue);

});