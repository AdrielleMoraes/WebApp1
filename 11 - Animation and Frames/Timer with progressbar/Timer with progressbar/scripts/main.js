let elapsed_time = 0
let total_time = 0
let seconds = 0
let minutes = 0

let intervalID

window.onload = function () {


}

function normalise(max_x, x){
    console.log(`${total_time} - ${elapsed_time} -> ${Math.ceil((x / max_x) * 100)}`)
    
    return Math.ceil((x / max_x) * 100);
}

function ShowTime() {

    document.getElementById("progress-bar").style.width = normalise(total_time,elapsed_time) + "%"

}

