const flag = WebTransportDatagramDuplexStream;

let flagValue = new Promise(function (resolve, reject) {

    if (flag) {

        resolve("There is a flag value.");

    } else {

        reject("There is no flag value");

    }
});

flagValue
    .then(

        function mySuccessValue(myresult) {

            console.log("successValue(myresult) = " + myresult);

        },
    )
    .catch(

        function myErrorValue(myresult) {

            console.log("errorValue(myresult) = " + myresult);

        }
    );