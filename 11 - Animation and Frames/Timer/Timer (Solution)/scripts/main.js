let total_seconds = 0 //store total number of seconds
let seconds = 0
let minutes = 0

//identifier of the set interval function
let intervalID

window.onload = function () {

    //Add events to the buttons
    document.getElementById("start_btn").onclick = function() {StartTimer()}
    document.getElementById("stop_btn").onclick =function() {StopTimer()}

}

//Use this function to start the timer (handle start button click event)
function StartTimer() {
    // disable start button
    document.getElementById("start_btn").disabled = true

    //read user input (minutes and seconds)
    seconds = parseInt(document.getElementById("seconds").value)
    minutes = parseInt(document.getElementById("minutes").value)

    // Calculate the total number of seconds your timer is on and store this in the total_seconds variable
    total_seconds = minutes * 60 + seconds


    // use setInterval to call showTime every 1000ms
    intervalID = setInterval(ShowTime, 1000)
}

//This function is called when the stop button is pressed
function StopTimer() {
    clearInterval(intervalID)
    document.getElementById("timerDisplay").innerText = "00:00"
    document.getElementById("start_btn").disabled = false
    document.getElementById("stop_btn").disabled = true
}

function ShowTime() {
    document.getElementById("stop_btn").disabled = false

    let time = ""
    total_seconds--
    seconds--
    if (seconds < 0) {
        minutes--
        seconds = 59
    }

    time = "0" + minutes + ":" + seconds
    if (minutes < 10) {
        time = "0" + minutes + ":" + seconds
        if (seconds < 10) {
            time = "0" + minutes + ":0" + seconds
        }
    }

    document.getElementById("timerDisplay").innerText = time
    if (total_seconds == 0) {

        StopTimer()
    }
}