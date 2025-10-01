
let promiseValue = new Promise(function (resolve, reject) {

    reject('Promise rejected');

});

promiseValue
    .catch(

        function myErrorValue(result) {

            console.log("myErrorValue(result) = " + result);

        }
    ) // It's a must to have a catch() method to handle the rejected promise.

    .finally(

        function myGreet() {

            console.log('\nfinally executed.');

        }
    );

