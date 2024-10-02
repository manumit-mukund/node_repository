async function f() {

  console.log('Waiting for the result...');

  let promise = new Promise((resolve, reject) => {

    setTimeout(() => resolve("resolved!"), 2000)

  });

  let result = await promise;

  console.log('result = ', result);
}

f();