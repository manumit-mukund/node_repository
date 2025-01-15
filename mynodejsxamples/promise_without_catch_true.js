const flag = true;

let promiseValue = new Promise(function (myResolve, myReject) {

    if (flag) {

        myResolve("There is a flag value.");

    } else {

        myReject("There is no flag value");

    }
});

console.log('promiseValue = ', promiseValue);