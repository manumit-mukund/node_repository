const jwt = require('jsonwebtoken');
const secretKey = 'abcde12345';

const token = jwt.sign({

    id: 1,
    username: 'manu'

}, secretKey, { expiresIn: '1h' });

console.log('token = ', token);


jwt.verify(token, 'abcde12345', (err, decoded) => {

    if (err) {

        console.log('\nToken is invalid');

    } else {

        console.log('\nDecoded Token:', decoded);

    }
});
