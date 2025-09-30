const jwt = require('jsonwebtoken');

const secretKey = 'srujal';

const token = jwt.sign({

    id: 1,
    username: 'manu'

}, secretKey, { expiresIn: '1h' });

console.log('token = ', token);


