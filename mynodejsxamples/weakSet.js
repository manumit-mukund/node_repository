const weakSet = new WeakSet();

console.log('weakSet = ', weakSet);

let obj = {
    message: 'Hi',
    sendMessage: true
}

weakSet.add(obj);

console.log('weakSet = ', weakSet);