//ALWAYS store the ID of setInterval functions in a GLOBAL variable.
let intervalID;

window.onload = function () {
    // call this function every 1000ms
    intervalID = setInterval(ShowTime, 1000);

}


function ShowTime() {
    //get current date:
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59


    //Add extra 0 if number is less than 10
    if (h < 10) {
        h = "0" + h
    }

    if (m < 10) {
        m = "0" + m
    }

    if (s < 10) {
        s = "0" + s
    }

    let time = h + ":" + m + ":" + s + " ";
    document.getElementById("clockDisplay").innerText = time;
}

function pauseTimer() {
    //we use the id to stop the interval
    clearInterval(intervalID)
}