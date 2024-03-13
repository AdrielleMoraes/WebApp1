let elapsed_time = 0
let total_time = 0
let seconds = 0
let minutes = 0

let intervalID

window.onload = function () {
    document.getElementById("start_btn").onclick = function() {StartTimer()}

    document.getElementById("stop_btn").onclick = function() {StopTimer()}

}

function StartTimer(){
    document.getElementById("start_btn").disabled = true
    seconds = parseInt(document.getElementById("seconds").value)
    minutes = parseInt(document.getElementById("minutes").value)

    total_time = minutes*60 + seconds
    elapsed_time = total_time
    
    intervalID = setInterval(ShowTime, 1000)
}

function StopTimer(){
    clearInterval(intervalID)

    elapsed_time=0
    total_time = 0

    document.getElementById("timerDisplay").innerText = "00:00"
    document.getElementById("start_btn").disabled = false
    document.getElementById("stop_btn").disabled = true

    
}

function ShowTime() {
    document.getElementById("stop_btn").disabled = false

    let time = ""
    elapsed_time--
    seconds--

    document.getElementById("progress-bar").style.width = normalise(total_time,elapsed_time) + "%"

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
    if (elapsed_time == 0) {
        StopTimer()
    }
}

function normalise(max_x, x){
    console.log(`${total_time} - ${elapsed_time} -> ${Math.ceil((x / max_x) * 100)}`)
    
    return Math.ceil((x / max_x) * 100);
}