const peopleForm = document.forms.people;

const contentSection = document.querySelector('section#content');
const peopleList = document.querySelector('ul.people');

peopleForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const nInput = peopleForm.elements.n;
  const n = Number(nInput.value);

  if (n > 0 && n < 100) {
    getRandomData(n);
    nInput.value = '';
  }
});

async function getRandomData(number) {
  contentSection.classList.add('loading');

  try {
    const url = `https://randomuser.me/api/?results=${number}`;

    const response = await fetch(url);
    const userData = await response.json();
    writeUsers(userData.results);
  } catch (error) {
    console.error(error);
  } finally {
    contentSection.classList.remove('loading');
  }
}

function writeUsers(userData) {
  const fragment = document.createDocumentFragment();

  peopleList.innerHTML = '';

  for (const user of userData) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.setAttribute('src', user.picture.large);
    li.appendChild(img);

    fragment.appendChild(li);
  }

  peopleList.appendChild(fragment);
}
