
window.onload = function () {
    //Assign events to html elements
    document.getElementById("selectColour").onchange = function () {
        selectColour("selectColour")
    }
}


function onTextChange(textboxID) {
    let user_input = document.getElementById(textboxID).value
    document.getElementById("msg_onInput").innerText = "Live message: " + user_input
}


function selectColour(selectID) {
    let colour = document.getElementById(selectID).value
    document.getElementById("msg_onInput").style.color = colour
}

