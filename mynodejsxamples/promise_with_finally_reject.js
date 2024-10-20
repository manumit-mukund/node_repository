
let promiseValue = new Promise(function (resolve, reject) {

    reject('Promise rejected');

});

promiseValue
    .then(

        function mySuccessValue(result) {

            console.log("mySuccessValue(result) = " + result);

        },
    )
    .catch(

        function myErrorValue(result) {

            console.log("myErrorValue(result) = " + result);

        }
    )

    .finally(

        function myGreet() {

            console.log('finally executed.');

        }
    );

