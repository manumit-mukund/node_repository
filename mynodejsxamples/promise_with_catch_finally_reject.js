
let promiseValue = new Promise(function (resolve, reject) {

    reject('Promise rejected');

});

promiseValue
    .catch(

        function myErrorValue(result) {

            console.log("myErrorValue(result) = " + result);

        }
    )

    .finally(

        function myGreet() {

            console.log('\nfinally executed.');

        }
    );

