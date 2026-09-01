const timerEL = document.getElementById("contagem");
const marksList = document.getElementById("markslist");
let intervalID = 0;
let timer = 0;
let marks = [];

const formattimer = (contador) => {
    const hours = Math.floor(contador / 360000);
    const minutes = Math.floor((contador % 360000) / 6000);
    const seconds = Math.floor((contador % 6000) / 100);
    const hundredths = contador % 100;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundredths.toString().padStart(2, '0')}`;
};

const toggletimer = () => {
    const button = document.getElementById("power");
    const action = button.getAttribute("action");

    clearInterval(intervalID);

    if(action == "start" || action == "continue"){
        intervalID = setInterval(() => {
            timer += 1;
            settimer(timer);
        },10);
        button.setAttribute('action','pause');
        button.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else if (action == 'pause'){
        button.setAttribute('action','continue');
        button.innerHTML = '<i class="fa-solid fa-play"></i>';

    }
}

const settimer = (contador) => {
    timerEL.innerText = formattimer(contador);
};

const resetTimer = () => {
    clearInterval(intervalID);
    timer = 0;
    marks = [];
    settimer(timer);
    marksList.innerHTML = '';
    const button = document.getElementById('power');
    button.getAttribute('action','start');
    button.innerHTML = '<i class="fa-solid fa-play"></i>';
}

document.getElementById('power').addEventListener('click', toggletimer);
document.getElementById('restart').addEventListener('click', resetTimer);