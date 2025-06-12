var XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

// 2. Define the request method and URL
// The 'true' argument indicates an asynchronous request
xhr.open('POST', 'http://localhost:9001/users/add', true);

// 3. Set request headers (important for POST requests with data)
// This header tells the server that the data sent is in JSON format
xhr.setRequestHeader('Content-Type', 'application/json');

// 4. Define the response handler
xhr.onreadystatechange = function () {
    // Check if the request is complete and successful
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // Handle the server's response
        console.log('Server response:', xhr.responseText);

    } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200) {
        // Handle errors
        console.error('Request failed with status:', xhr.status);
        
    }
};

// 5. Prepare the data payload
// Data for a POST request is typically sent in the request body
const data = {

    "username": "pqr",
    "password": "pqr",
    "email": "pqr@yahoo.com"

};

// Convert the JavaScript object to a JSON string
const jsonData = JSON.stringify(data);

// 6. Send the request with the data payload
xhr.send(jsonData);