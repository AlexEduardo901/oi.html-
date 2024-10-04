const mario = document.querySelector(".mario");
const tubo = document.querySelector(".pipe");

const pulo = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const infinito = setInterval(() => {
    
    const possicaodotubo = tubo.offsetLeft;
    const possicaodomario =    +window.getComputedStyle(mario).bottom.replace('px','');
    console.log(possicaodomario)
if(possicaodotubo <= 120 && possicaodotubo > 0 && possicaodomario < 80){
    tubo.style.animation = 'none';
    tubo.style.left =`${possicaodotubo}px`

   mario.style.animation = 'none';
   mario.style.bottom =`${possicaodomario}px`

   mario.src ="imgem/game-over.png";
   mario.style.width = "80px";

   clearInterval(infinito)
}
    
}, 10);



document.addEventListener('keydown', pulo);