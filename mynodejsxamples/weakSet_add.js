const weakSet = new WeakSet();

console.log('weakSet = ', weakSet);

let obj = {

    message: 'Hi',
    sendMessage: true

}

weakSet.add(obj);

console.log('\nweakSet = ', weakSet);

//console.log('\nweakSet = ', weakSet.values()); //weakSet.values is not a function