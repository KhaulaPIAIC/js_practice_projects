var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens");  // document.getElementById() is used to retrieve a specific HTML element by its unique id,
// providing a way to access and interact with that element in JavaScript.
var appendSeconds = document.getElementById("seconds");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var interval; //to store linear values 

//this function will run when click on start 

function startTimer(){
    tens++;

    if(tens < 9){
        appendTens.innerHTML= "0" +tens; // ye html ki file k andar modification k liye use kiya hai 
    }
    if(tens>9){
        appendTens.innerHTML= tens;
    }
    if(tens>99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML  = "0" + 0;
    }
    if(seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
}
buttonStart.onclick = function(){
    interval = setInterval(startTimer);
};

buttonStop.onclick = function(){
    clearInterval(interval);
};

buttonReset.onclick = function(){
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;

};