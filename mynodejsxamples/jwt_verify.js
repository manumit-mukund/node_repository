const jwt = require('jsonwebtoken');

const secretKey = 'srujal';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJtYW51IiwiaWF0IjoxNzU5MjE4OTA4LCJleHAiOjE3NTkyMjI1MDh9.-7ZoOXLdiVn_aDpbUAKnG2yxmx3Z1SuLqwEOUSTyJvw";

console.log('token = ', token);


jwt.verify(token, secretKey, (err, decoded) => {

    if (err) {

        console.log('\nToken is invalid');

    } else {

        console.log('\nDecoded Token:', decoded);

    }
});
