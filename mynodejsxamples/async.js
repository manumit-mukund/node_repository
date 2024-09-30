async function f() {

  console.log('Please wait...for the result...');

  let promise = new Promise((resolve, reject) => {

    setTimeout(() => resolve("resolved!"), 2000)

  });

  let result = await promise;

  console.log('result = ', result);
}

f();