var XMLHttpRequest = require('xhr2');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:9001/users/getall');

xhr.onload = function () {

  if (xhr.status >= 200 && xhr.status < 300) {

    console.log('XHR GET request data:', JSON.parse(xhr.responseText));

  } else {

    console.error('XHR GET request failed with status:', xhr.status);
  }
};

xhr.onerror = function () {
  // Handle network errors
  console.error('XHR GET request network error');

};

xhr.send();