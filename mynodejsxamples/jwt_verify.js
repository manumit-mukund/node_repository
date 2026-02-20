const jwt = require('jsonwebtoken');

const secretKey = 'srujal';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtYW51IiwiaWF0IjoxNzcxNTc4ODc2LCJleHAiOjE3NzE1ODI0NzZ9.jDymbCx7Mv765flzvnyzLEkfDFmr0uhbHAmZNBshRqA";

console.log('token = ', token);


jwt.verify(token, secretKey, (err, decoded) => {

    if (err) {

        console.log('\nToken is invalid');

    } else {

        console.log('\nDecoded Token:', decoded);

    }
});
