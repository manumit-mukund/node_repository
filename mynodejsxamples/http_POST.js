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
  .then(response => {

    if (!response.ok) {

      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json(); // Parse the JSON response
  })
  .then(data => {

    console.log('Success:', data);

  })
  .catch(error => {

    console.error('Error:', error);

  });