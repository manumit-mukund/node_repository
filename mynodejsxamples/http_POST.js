const apiUrl = 'http://localhost:9001/users/add';

const postData = {

  "username": "pqr",
  "password": "pqr",
  "email": "pqr@yahoo.com"

};

fetch(apiUrl, {

  method: 'POST',

  headers: {
    'Content-Type': 'application/json',
  },

  body: JSON.stringify(postData),

})
  .then(myresponse => {

    if (!myresponse.ok) {

      throw new Error(`HTTP error! status: ${myresponse.status}`);
    }

    return myresponse.json(); // Parse the JSON response
  })
  .then(mydata => {

    console.log('Success:', mydata);

  })
  .catch(myerror => {

    console.error('Error:', myerror);

  });