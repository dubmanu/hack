//Timeouts

const showNavigatorInfo = () => console.log(window.navigator.userAgent);

const delayed = setTimeout(showNavigatorInfo, 2000);

setTimeout(() => {
  console.log(window.innerWidth);
}, 1000);

clearTimeout(delayed);

//Intervals

function currentTime() {
  console.log(Date.now());
}

// setInterval(currentTime, 1000);
let contador = 10;

const tick = () => {
  if (contador > 0) {
    console.log(contador);
    contador = contador - 1;
  } else {
    console.log('BOOOOM!');
    clearInterval(countdown);
  }
};

const countdown = setInterval(tick, 1000);
