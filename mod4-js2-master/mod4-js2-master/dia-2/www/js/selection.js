// Seleccionando un elemento
const mainTitle = document.getElementById('main-title');
mainTitle.style.color = 'red';
// console.log(mainTitle);

const firstP = document.querySelector('.content p:first-of-type');
// console.log(firstP);

// Seleccionando varios elementos
// document.getElementsByTagName
const allH2 = document.getElementsByTagName('h2');

// console.log(allH2);

// console.log(allH2[0]);

for (const p of allH2) {
  p.style.backgroundColor = 'gold';
}

// document.getElementsByClassName
const allP = document.getElementsByClassName('intro');

for (const p of allP) {
  p.style.textDecoration = 'overline';
}

// document.querySelectorAll
const firstChilds = document.querySelectorAll('body :nth-child(2)');

// console.log(firstChilds);

//Recuperamos o firstP seleccionado actualmente

//elemento pai
// const firstPParent = firstP.parentElement;
// console.log(firstPParent);

//fillos do elemento pai
// const firstPParentChildren = firstPParent.children;

//primeiro e último fillo do elemento pai
// console.log(firstPParent.firstElementChild);
// console.log(firstPParent.lastElementChild);

//elemento irmán anterior e posterior
// console.log(firstPParent.previousElementSibling);
// console.log(firstPParent.nextElementSibling);

//Recuperamos o firstP seleccionado actualmente

const firstPParentNode = firstP.parentNode;

console.log(firstPParentNode);
console.log(firstPParentNode.childNodes);

/*
firtPParentNode.parentNode; // nodo pai
firtPParentNode.childNodes; // todos os nodos fillos
firtPParentNode.firstChild; // primeiro nodo fillo
firtPParentNode.lastChild; // ultimo nodo fillo
firtPParentNode.previousSibling; // nodo irmán previo
firtPParentNode.nextSibling; // nodo irmán seguinte
*/
