
let flagValue = new Promise(function (resolve, reject) {

    resolve('Promise resolved');

});

flagValue.finally(

    function myGreet() {

        console.log('finally executed.');

    }
);