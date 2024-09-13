let countValue = new Promise(function (resolve, reject) {

    resolve("Promise resolved");

});


countValue
    .then(function successValue1(result) {

        console.log('result = ' + result);

    })

    .then(function successValue2() {

        console.log("successValue2");

    });