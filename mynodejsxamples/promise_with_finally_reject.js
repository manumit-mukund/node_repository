
let promiseValue = new Promise(function (resolve, reject) {

    reject('Promise resolved');

});

promiseValue.finally(

    function myGreet() {

        console.log('finally executed.');
        console.log('\npromiseValue = ', promiseValue);

    }
);