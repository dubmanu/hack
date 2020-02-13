const addButton = document.querySelector('button.add');
const list = document.querySelector('ul.items');

const handleButtonClick = e => {
  //Engade elemento á lista
  const newItem = document.createElement('li');
  newItem.textContent = `Ítem número ${list.children.length +
    1} (probablemente)`;

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete');
  deleteButton.textContent = 'Borrar';

  newItem.append(deleteButton);

  list.prepend(newItem);
};

const handleDeleteButtonDelegated = e => {
  const target = e.target;

  if (target.matches('button.delete')) {
    const li = target.parentElement;
    li.remove();
  }
};

addButton.addEventListener('click', handleButtonClick);
list.addEventListener('click', handleDeleteButtonDelegated);
