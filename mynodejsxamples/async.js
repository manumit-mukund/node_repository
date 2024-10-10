async function f() {

  console.log('Waiting for the result...');

  let promise_var = new Promise((myRresolve, myReject) => {

    setTimeout(() => myRresolve("resolved!"), 2000)

  });

  let result = await promise_var;

  console.log('result = ', result);
}

f();