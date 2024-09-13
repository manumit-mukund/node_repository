function callbackFunction() {

    console.log('Callback function');

}


function higherOrderFunction(func) {

    console.log('Higher order function')
    func()

}

higherOrderFunction(callbackFunction);