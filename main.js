/* get the date we are counting down to
let countDownDate = new Date("Jan 1, 2022 00:00:00").getTime();

// countdown function

let countDown = setInterval(countDownFuunction = () => {
    let now = new Date().getTime();

    // time between now and 2022
    let timeBetween = countDownDate - now;

    // time calculations
    let days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeBetween % (1000 * 60 * 60 
        * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeBetween % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeBetween % (1000 * 60)) / 1000);

    // display
    document.getElementById('timer').innerHTML = days + 'days ' + hours + 'h ' + minutes + 'mins ' + seconds + 'secs '

    // when the countdown finishes - TURN UP
    if (timeBetween < 0) {
        clearInterval(countDown);
        document.getElementById('timer').innerHTML = 'TURN UP!!!'
    }
}, 1000);*/

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// get current year so that each year it keeps updating
const currentYear = new Date().getFullYear();

// get the date we are counting down to 
const countdownDate = new Date(`January 1 ${currentYear + 1} 00:00:00`);

// countdown calculations 
const countdownFunction = () => {
    // get current date
    const currentDate = new Date();

    // calculate the time difference between new year time and todays date
    const timeDifference = countdownDate - currentDate;

    let numDays = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
    let numHours = Math.floor(timeDifference / 60 / 60) % 24;
    let numMins = Math.floor(timeDifference / 1000 / 60) % 60;
    let numSecs = Math.floor(timeDifference / 1000) % 60
    
    // display
    days.innerHTML = numDays;
    hours.innerHTML = numHours;
    minutes.innerHTML = numMins;
    seconds.innerHTML = numSecs;


}

// set interval for changes every second 
setInterval(countdownFunction, 1000);
