(() => {
  const API_URL = 'http://localhost:3000/employees';

  // Function to generate random string 10 digit alphanumerical
  function generateRandomString(length = 10) {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  // Function to add new data
  const form = document.getElementById('form');

  console.log(form);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form submitted');

    const id = generateRandomString();
    const name = document.querySelector('#name').value;
    const position = document.querySelector('#position').value;

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id, name, position}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        window.location.href = '/';
      });
  });
})();
