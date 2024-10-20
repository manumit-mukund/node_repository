const flag = false;

let promiseValue = new Promise(function (resolve, reject) {

    if (flag) {

        resolve("There is a flag value.");

    } else {

        reject("There is no flag value");

    }
});

promiseValue
    .then(

        function mySuccessValue(myresult) {

            console.log("mySuccessValue(myresult) = " + myresult);

        },
    )
    .catch(

        function myErrorValue(myresult) {

            console.log("myErrorValue(myresult) = " + myresult);

        }
    );