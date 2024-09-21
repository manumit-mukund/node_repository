import { Observable } from 'rxjs';

/********** Promise **************/
const prom = new Promise((resolve, _reject) => {
  //only this value will be resolved
  resolve(1);

  //once value is resolved, that's the end,we can't resolve multiple values, so below resolve() will be ignored
  resolve(2);
  resolve(3);

});

prom.then((value) => {

  console.log('resolved promise value - ', value);

});

/************ Observable ***********/
const obs = new Observable((subscriber) => {

  //multiple values can be emitted
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.next(4);

});

obs.subscribe((value) => {

  console.log('value emitted from obs - ', value);
  
});