import { Observable } from 'rxjs';

const prom = new Promise((resolve, reject) => {

  //it will be executed immediately, no matter then()/catch() is used or not
  console.log('promise is defined');
  resolve(1);

});

const obs = new Observable((subscriber) => {

  //it will NOT be executed untill we subscribe to this obs
  console.log('Observable is defined');
  subscriber.next(1);
  
});
