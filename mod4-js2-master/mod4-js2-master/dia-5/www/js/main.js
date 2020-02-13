const url = 'https://randomuser.me/api/';

const showUser = user => {
  const img = document.createElement('img');
  img.setAttribute('src', user.picture.large);

  document.body.appendChild(img);
};

// fetch(url)
//   .then(response => response.json())
//   .then(content => {
//     showUser(content.results[0]);
//   })
//   .catch(error => {
//     console.log('petición incorrecta');
//   })
//   .finally(() => console.log('acabei de cargar'));

const doRequest = async () => {
  try {
    const response = await fetch(url);
    const userData = await response.json();

    showUser(userData.results[0]);
  } catch (error) {
    console.error(error.message);
  }
};

doRequest();
