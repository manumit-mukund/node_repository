
let promiseValue = new Promise(function (resolve, reject) {

    resolve('Promise resolved');

});

promiseValue.finally(

    function myGreet() {

        console.log('finally executed.');
        console.log('\npromiseValue = ', promiseValue);

    }
);