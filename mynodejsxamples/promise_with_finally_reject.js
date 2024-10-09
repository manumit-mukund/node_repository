
let flagValue = new Promise(function (resolve, reject) {

    reject('Promise rejected');

});

flagValue
    .then(

        function mySuccessValue(result) {

            console.log("successValue(result) = " + result);

        },
    )
    .catch(

        function myErrorValue(result) {

            console.log("errorValue(result) = " + result);

        }
    )

    .finally(

        function myGreet() {

            console.log('finally executed.');

        }
    );

