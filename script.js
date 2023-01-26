let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');


let hour = 0;
let minutes =0;
let seconds = 0;
let count = 0;

startBtn.addEventListener('click', function (){
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function (){
    timer = false;

});

resetBtn.addEventListener('click', function (){
    timer = false;
     
    hour = 0;
    minutes = 0;
    seconds = 0;
    count = 0;

    document.getElementById('hr').innerHTML='00';
    document.getElementById('min').innerHTML='00';
    document.getElementById('sec').innerHTML='00';
    document.getElementById('count').innerHTML='00';
    
});

function stopWatch(){
if(timer){
    count++;

    if(count == 100){
        seconds++;
        count =0;
        
    }
    if(seconds == 60){
        minutes++;
        seconds =0;
    }
    if(minutes == 60){
        hour++;
        minutes=0;
        seconds=0;
    }

    let hrString = hour;
    let minString =  minutes;
    let secString = seconds;
    let countString = count;

    if(hour < 10){
        hrString = '0'+hrString;
    }
    if(minutes < 10){
        minString = '0'+minString;
    }
    if(seconds < 10){
        secString = '0'+secString;
    }
    if(count < 10){
        countString = '0'+countString;
    }



    document.getElementById('hr').innerHTML = hrString;
    document.getElementById('min').innerHTML = minString;
    document.getElementById('sec').innerHTML = secString;
    document.getElementById('count').innerHTML = countString;
    setTimeout(stopWatch,10);
}


}
