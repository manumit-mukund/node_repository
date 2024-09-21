import { Observable } from 'rxjs';

//Promsises are alwas Async
let prom1 = new Promise((resolve, reject) => {
    
  //resolving  value syncchronously
    resolve(1);

  });

  prom1.then((value) => {

    console.log('resolve promise value- ', value);

  });

  console.log('call stack over 1');

  
  /**************** Observable ****************/
  
  //Observable can be both Sync and Async
  let obs = new Observable((subscriber) => {
    
    //emitting value Synchronously
    subscriber.next(1);
  
    setTimeout(() => {
      
      //emitting value Asynchronously
      subscriber.next(2);
    }, 2000);

  });
  
  obs.subscribe((value) => {

    console.log('value emitted from obs - ', value);

  });
  
  console.log('call stack over 2');