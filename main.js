// get the date we are counting down to
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
}, 1000);

