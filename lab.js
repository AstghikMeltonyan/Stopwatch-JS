let stopBtn = document.querySelector('.stop');
let pauseBtn = document.querySelector('.pause');
let restartBtn = document.querySelector('.restart');
let divHour = document.querySelector('.hour');
let divMinut = document.querySelector('.minut');
let divSecund = document.querySelector('.secund');


stopBtn.addEventListener('click', stopTimer );
pauseBtn.addEventListener('click', pauseTimer );
restartBtn.addEventListener('click', restartTimer)

let timerId;

function startTimer() {
   
    timerId = setInterval(()=>{
        divSecund.innerHTML++;
        if( divSecund.innerHTML <= 9 ){
            divSecund.innerHTML = '0' + divSecund.innerHTML  
        }
        if ( divSecund.innerHTML == 60 ) {
             divMinut.innerHTML++;
             if( divMinut.innerHTML <= 9 ){
                divMinut.innerHTML = '0' + divMinut.innerHTML  
            }
            divSecund.innerHTML= 1;
        }
        if (   divMinut.innerHTML == 60 ) {
            divHour.innerHTML++;
            if( divHour.innerHTML <= 9 ){
                divHour.innerHTML = '0' + divHour.innerHTML  
            }
            divMinut.innerHTML = 1;
        }
        
    }, 100)
    // startBtn.removeEventListener('click', startTimer)
}

function stopTimer(e) {
        clearInterval(timerId);
        pauseBtn.innerHTML = 'Start';
        pauseTimer(e)
}
    
function pauseTimer(e) {
  pauseBtn.classList.toggle('active')
  if( e.target.className == 'pause active' ){
    startTimer()
    pauseBtn.innerHTML = 'Pause'
  }else if( e.target.className == 'pause' ){
      clearInterval(timerId)
    pauseBtn.innerHTML = 'Start'
  }
}


function restartTimer() {
    divSecund.innerHTML = '00';
    divMinut.innerHTML = '00';
    divHour.innerHTML = '00';
}