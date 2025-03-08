async function f() {

  let result = 'Initial value';

  console.log('Waiting for the result...');

  let promise_var = new Promise((myRresolve, myReject) => {

    setTimeout(() => myRresolve("resolved!"), 2000)

  });

  result = await promise_var;

  console.log('\nresult = ', result);
}

f();