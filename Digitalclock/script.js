setInterval(()=>{
    const time = document.querySelector("#time"); // select an html element with the id time using doc.queryselector ...... this id is use to get current time
    let date = new Date(); //this represent current  date and time
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds(); //by these 3 we get hour mint or sec
    let day_night = "AM";
    if(hours >12){                   //If the hour is greater than 12, it sets day_night to "PM" and subtracts 12 from the hour to convert it to a 12-hour format.
        day_night = "PM";
        hours = hours - 12;
    }
    //It checks if the hour, minute, or second is less than 10. If so, it prepends a "0" to the respective value.
    if(hours < 10){                  
        hours = "0" + hours; 
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){                   
        seconds = "0" + seconds;
    }
    //It constructs a string representing the time in the format "HH:MM:SS AM/PM" using the concatenated values of hours, minutes, seconds, and day_night.
    //It updates the textContent property of the selected HTML element to display the current time.
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
});