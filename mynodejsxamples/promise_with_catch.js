const count = SVGComponentTransferFunctionElement;

let countValue = new Promise(function (resolve, reject) {

    if (count) {

        resolve("There is a count value.");

    } else {

        reject("There is no count value");

    }
});

countValue.then(

    function successValue(result) {

        console.log("successValue(result) = " + result);

    },
)
    .catch(

        function errorValue(result) {

            console.log("errorValue(result) = " + result);

        }
    );