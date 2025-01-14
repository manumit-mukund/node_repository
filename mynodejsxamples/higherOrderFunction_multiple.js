function myCallbackFunction1() {

    console.log('Callback function1');

}

function myCallbackFunction2() {

    console.log('Callback function2');

}


function myHigherOrderFunction(myFunc1, myFunc2) {

    console.log('Higher order function');
    
    myFunc1();
    myFunc2();

}



myHigherOrderFunction(myCallbackFunction1, myCallbackFunction2);