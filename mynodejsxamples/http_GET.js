const apiUrl = 'http://localhost:9001/users/getall';

// Make a GET request
fetch(apiUrl)
  .then(myresponse => {

    if (!myresponse.ok) {

      throw new Error('Network response was not ok');
    }

    return myresponse.json();

  })
  .then(mydata => {

    console.log(mydata);

  })
  .catch(myerror => {

    console.error('Error:', myerror);

  });