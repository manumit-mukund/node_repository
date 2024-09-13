let countValue = new Promise(function (resolve, reject) {

    resolve("Promise resolved");

});


countValue
    .then(function successValue(result) {

        console.log('result = ' + result);

    })

    .then(function successValue1() {

        console.log("successValue1");

    });