function add(x){

    return function(y){

      return x + y;

    };

  }
  
  var addTwo = add(2);
  
 console.log('add(3)(4) = ',  add(3)(4));
 console.log('addTwo(4) = ',  addTwo(4));
