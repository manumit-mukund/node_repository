function myCallbackFunction() {

    console.log('Callback function');

}


function myHigherOrderFunction(myFunc) {

    console.log('Higher order function')
    myFunc()

}

myHigherOrderFunction(myCallbackFunction);