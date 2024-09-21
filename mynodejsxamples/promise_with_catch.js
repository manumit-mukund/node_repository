const flag = false;

let flagValue = new Promise(function (resolve, reject) {

    if (flag) {

        resolve("There is a flag value.");

    } else {

        reject("There is no flag value");

    }
});

flagValue.then(

    function mySuccessValue(result) {

        console.log("successValue(result) = " + result);

    },
)
    .catch(

        function myErrorValue(result) {

            console.log("errorValue(result) = " + result);

        }
    );