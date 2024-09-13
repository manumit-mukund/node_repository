const flag = true;

let countValue = new Promise(function (resolve, reject) {

    if (flag) {

        resolve("There is a count value.");

    } else {

        reject("There is no count value");

    }
});

console.log(countValue);