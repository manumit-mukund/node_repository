import { Observable } from 'rxjs';

const promiseValue = new Promise((resolve, reject) => {

  //it will be executed immediately, no matter then()/catch() is used or not
  console.log('promise is defined');
  resolve(333);

});

//console.log('promiseValue = ', promiseValue); This is also working fine


const observableValue = new Observable((mySubscriber) => {

  //it will NOT be executed untill we subscribe to this observer
  console.log('Observable is defined');
  mySubscriber.next(444);

});
