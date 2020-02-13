const ps = document.querySelectorAll('p');

for (const p of ps) {
  // p.style.background = 'lightgray';
  // p.style.textDecoration = 'overline';

  // p.style.cssText = 'color: blue; opacity: 0.8;';
  // p.setAttribute('style', 'color: red; opacity: 0.3;');

  //Mostra todos os estilos que afectan ao elemento
  const allStyles = window.getComputedStyle(p);

  // console.log(allStyles);
  // console.log(allStyles.getPropertyValue('color'));
}

const firstP = ps.item(0); // igual a ps[0]
console.log(firstP.getAttribute('class'));

// firstP.setAttribute('class', 'intro importante'); // REGULAR
// firstP.setAttribute('class', firstP.getAttribute('class').split(' ')[0]); // MAL

firstP.classList.add('importante');
firstP.classList.remove('intro');

// firstP.classList.toggle('importante'); //se a ten quítaa
// firstP.classList.toggle('importante'); //se non a ten engádea

console.log(firstP.classList.contains('intro')); //true se ten a clase intro, se non false

firstP.classList.replace('importante', 'moi-importante');

const button = document.querySelector('button');

button.onclick = () => {
  firstP.classList.toggle('importante');
};
