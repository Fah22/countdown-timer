// create variables to store the days, hours, minutes and seconds until coumtdown date
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
