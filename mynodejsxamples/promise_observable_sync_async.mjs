import { Observable } from 'rxjs';

/********************************** Promise ******************************/
//Promsises are alwas Async
let promiseValue = new Promise((resolve, reject) => {

  //resolving  value syncchronously
  console.log('promise is defined');
  resolve(1);

});

promiseValue.then((value) => {

  console.log('promiseValue = ', value);

});


/********************************* Observable *****************************/
//Observable can be both Sync and Async
let observableValue = new Observable((subscriber) => {

  //emitting value Synchronously
  subscriber.next(2);

  setTimeout(() => {

    //emitting value Asynchronously
    subscriber.next(3);
  }, 3000);

});

observableValue.subscribe((value) => {

  console.log('observableValue = ', value);

});