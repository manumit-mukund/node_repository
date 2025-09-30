const jwt = require('jsonwebtoken');
const secretKey = 'abcde12345';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtYW51IiwiaWF0IjoxNzU5MTY0NDkzLCJleHAiOjE3NTkxNjgwOTN9.SKb_OXT04XMWeu4vfCJvdBKpX-QDR2IcV1ltixfYsA4";

console.log('token = ', token);


jwt.verify(token, 'abcde12345', (err, decoded) => {

    if (err) {

        console.log('\nToken is invalid');

    } else {

        console.log('\nDecoded Token:', decoded);

    }
});
