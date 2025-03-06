import { Observable } from 'rxjs';

/********************************** Promise ******************************/
const promiseValue = new Promise((resolve, reject) => {

  //only this value will be resolved
  resolve(1);

  //once value is resolved, that's the end, we can't resolve multiple values, so the resolve() below will be ignored
  resolve(2);
  resolve(3);

});

promiseValue.then((value) => {

  console.log('\npromiseValue = ', value);

});

/************ Observable ***********/
const observableValue = new Observable((subscriber) => {

  //multiple values can be emitted
  subscriber.next(4);
  subscriber.next(4);
  subscriber.next(5);
  subscriber.next(6);

});

observableValue.subscribe((value) => {

  console.log('\nobservableValue = ', value);

});