function myCallbackFunction() {

    console.log('\nCallback function');

}


function myHigherOrderFunction(myFunc) {

    console.log('Higher order function');
    
    myFunc();

}

myHigherOrderFunction(myCallbackFunction);