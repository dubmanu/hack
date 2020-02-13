const listItems = document.querySelectorAll('ul li');

const handleItemClick = e => {
  const target = e.target;

  if (!target.hasAttribute('data-count')) {
    target.setAttribute('data-count', 0);
  }

  const updatedCount = Number(target.getAttribute('data-count')) + 1;

  target.textContent = `${updatedCount} clicks`;

  target.setAttribute('data-count', updatedCount);
};

for (const item of listItems) {
  item.addEventListener('click', handleItemClick);
}
