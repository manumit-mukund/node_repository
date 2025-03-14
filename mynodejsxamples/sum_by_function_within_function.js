function add(x){

    return function(y){

      return x + y;

    };

  }
  
 console.log('add(3)(4) = ',  add(3)(4));

 var addTwo = add(2);

 console.log('\naddTwo( = ',  addTwo);

 console.log('\naddTwo(4) = ',  addTwo(4));
