
let flagValue = new Promise(function (resolve, reject) {

    resolve('Promise resolved');

});

flagValue.finally(

    function greet() {

        console.log('finally executed.');

    }
);