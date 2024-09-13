
let flagValue = new Promise(function (resolve, reject) {

    reject('Promise rejected');

});

flagValue.then(

    function successValue(result) {

        console.log("successValue(result) = " + result);

    },
)
    .catch(

        function errorValue(result) {

            console.log("errorValue(result) = " + result);

        }
    ).

    finally(

        function greet() {

            console.log('finally executed.');

        }
    );

