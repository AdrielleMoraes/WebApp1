function $(id) {
    return document.getElementById(id)
}

//Assigning events to html elemtns
window.onload = function () {

    $("red_range").oninput = changeBackground
    $("green_range").oninput = changeBackground
    $("blue_range").oninput = changeBackground

    $("check_hex").onclick = changeBackground
}


function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}


function updateColorValue(r, g, b) {
    if ($("check_hex").checked) {
        $("hex_value").innerText = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
    }
    else {
        $("hex_value").innerText = `RGB(${r}, ${g}, ${b})`
    }
}


// Change background color
function changeBackground() {

    //get current value for red and update the text element with the current value
    let red = parseInt($("red_range").value)
    $("red_current").innerText = red

    //get current value for green and update the text element with the current value
    let green = parseInt($("green_range").value)
    $("green_current").innerText = green

    //get current value for blue and update the text element with the current value
    let blue = parseInt($("blue_range").value)
    $("blue_current").innerText = blue


    // change color of the element
    $("background-color").style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')'

    updateColorValue(red, green, blue)

}
