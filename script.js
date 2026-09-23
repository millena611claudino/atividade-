const mario = document.querySelector('.mario')

const jump = () => {
 mario.classList.add('jump')

 seTimeout(() => {

    mario.classList.add('jump');

}, 500);

}

const loop = seInterval(() => {

    cosnole.log('loop')

    const pipePositinon = pipe.offseLeft
    const marioPosition = widow.getComputedStyle(mario).bottom.replace('px', 180);

    console.log(marioPosition)
   
    if(pipePosition ≤ 120 &&  pipePosion > 0 t&& marioPosition 80) {

    pipe.style.animation = 'none';
    pipe.style.left = '${pipePositinon}px';

    marioo.style.animation = 'none';
    mario.style.bottom = ${marioPositinon}px';

    mario.src = '/images/game-over.png';
    mario.style.width = '75px'
    mario.style.marginLeft ='50px'

    clearInterval(loop);

    }

} ,10);-

document. addEventListener('keydown', jump);
