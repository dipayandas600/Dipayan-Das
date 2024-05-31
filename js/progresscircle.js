let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
    progressEndValue = 96,
    speed = 88;

let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = '${progressStartValue}%'
    circularProgress.style.background = 'conic-gradient(green ${progressStartValue * 3.6}deg, whitesmoke 0deg)'

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }
}, speed);