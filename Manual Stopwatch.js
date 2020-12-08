var hours = document.querySelector("#hour");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");


var start = document.querySelector(".start");
var pause = document.querySelector(".pause");
var resume = document.querySelector(".resume");
var reset = document.querySelector(".reset");


var interval = null;

seconds.addEventListener("keyup", function () {
    if (this.value > 60 || this.value < 0 || this.value.length == 3) {
        this.value = "";
    }
});

minutes.addEventListener("keyup", function () {
    if (this.value > 60 || this.value < 0 || this.value.length == 3) {
        this.value = "";
    }
});

hours.addEventListener("keyup", function () {
    if (this.value > 99 || this.value < 0 || this.value.length == 3) {
        this.value = "";
    }
});


function stopwatch() {
    if (seconds.value == 0) {
        seconds.value = 60;
        minutes.value--;
    } else {
        seconds.value--;
    }

    if (minutes.value < 0) {
        minutes.value = 60;
        hours.value--;
    }

    if (hours.value < 0) {
        hours.value = 99;
    }

    if (seconds.value == 0 && minutes.value == 0 && hours.value == 0) {
        clearInterval(interval);
        seconds.value = "0";
        minutes.value = "0";
        hours.value = "0";
    }
}
start.addEventListener("click", function () {
    if (seconds.value == "00" && minutes.value == "00" && hours.value == "00") {
        clearInterval(interval);
        seconds.value = "0";
        minutes.value = "0";
        hours.value = "0";
    } else if (seconds.value == "" && minutes.value == "" && hours.value == "") {
        clearInterval(interval);
        seconds.value = "0";
        minutes.value = "0";
        hours.value = "0";
    } else if (seconds.value == "0" && minutes.value == "0" && hours.value == "0") {
        clearInterval(interval);
        seconds.value = "0";
        minutes.value = "0";
        hours.value = "0";
    } else {
        interval = setInterval(stopwatch, 1000);
        this.style.visibility = "hidden";
        pause.style.visibility = "visible";
        reset.style.visibility = "visible";
        seconds.setAttribute("disabled","disabled");
        minutes.setAttribute("disabled","disabled");
        hours.setAttribute("disabled","disabled");
    }
});

pause.addEventListener("click", function () {
    clearInterval(interval);
    this.style.visibility = "hidden";
    resume.style.visibility = "visible";
});

resume.addEventListener("click",function(){
    this.style.visibility = "hidden";
    pause.style.visibility = "visible";
    if(seconds.value == "0" && minutes.value == "0" && hours.value == "0")
        {
            clearInterval(interval);
        }
    else
        {
            interval = setInterval(stopwatch,1000);
        }
});

reset.addEventListener("click",function(){
    this.style.visibility = "hidden";
    pause.style.visibility = "hidden";
    resume.style.visibility = "hidden";
    start.style.visibility = "visible";
    
    clearInterval(interval);
    
    seconds.value = "0";
    minutes.value = "0";
    hours.value = "0";
    
    seconds.removeAttribute("disabled","disabled");
    minutes.removeAttribute("disabled","disabled");
    hours.removeAttribute("disabled","disabled");
});