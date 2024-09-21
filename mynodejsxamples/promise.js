const flag = true;

let countValue = new Promise(function (resolve, reject) {

    if (flag) {

        resolve("There is a flag value.");

    } else {

        reject("There is no flag value");

    }
});

console.log('countValue = ', countValue);