const inputNumberSpan = document.querySelector('#inputNumber');
const range = document.querySelector('#range');
const slikaKisobran = document.querySelector('.slikaKisobran');


const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const left = document.querySelector('#left');
const right = document.querySelector('#right');

slikaKisobran.style.animationPlayState = 'paused';
inputNumberSpan.innerHTML =`speed: ${range.value}`;

range.addEventListener('change',setDuration);


function setDuration(){
        let vrednost = parseInt(range.value);
        
        switch (vrednost){
            case 1:
                vrednost = 20;
                break;
            case 2:
                vrednost = 19;
                break;
            case 3:
                vrednost = 18;
                break;
            case 4:
                vrednost = 17;
                break;
            case 5:
                vrednost = 16;
                break;
            case 6:
                vrednost = 15;
                break;
            case 7:
                vrednost = 14;
                break;
            case 8:
                vrednost = 13;
                break;
            case 9:
                vrednost = 12;
                break;
            case 10:
                vrednost = 11;
                break;
            case 11:
                vrednost = 10;
                break;
            case 12:
                vrednost = 9;
                break;
            case 13:
                vrednost = 8;
                break;
            case 14:
                vrednost = 7;
                break;
            case 15:
                vrednost = 6;
                break;
            case 16:
                vrednost = 5;
                break;
            case 17:
                vrednost = 4;
                break;
            case 18:
                vrednost = 3;
                break;
            case 19:
                vrednost = 2;
                break;
            case 20:
                vrednost = 1;
                break;
        }
        
        inputNumberSpan.innerHTML = `speed: ${range.value}`;
        slikaKisobran.style.animationDuration = `${vrednost}s`;
        
}


start.addEventListener('click',()=>{
        slikaKisobran.style.animationPlayState = 'running';
})

stop.addEventListener('click',()=>{
    slikaKisobran.style.animationPlayState = 'paused';
})

left.addEventListener('click',()=>{
    slikaKisobran.style.animationDirection = 'reverse';
})

right.addEventListener('click',()=>{
    slikaKisobran.style.animationDirection = 'normal';
})




