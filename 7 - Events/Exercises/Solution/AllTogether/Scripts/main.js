function $(id) {
    return document.getElementById(id)
}

//Assigning events to html elemtns
window.onload = function () {

    $("select_examples").onchange = function () {
        ShowSelected("select_examples")
    }

    $("red_range").oninput = changeBackground
    $("green_range").oninput = changeBackground
    $("blue_range").oninput = changeBackground

    $("check_hex").onclick = function () {
        updateColorValue(0, 255, 255)
    }

    /*
    Events for the second example
     */

    $("generate_random").onclick = generateRandom
    $("lower_range").oninput = updateLimits
    $("upper_range").oninput = updateLimits
}

//control which examples will be displayed
function ShowSelected(selectID) {
    let option = $(selectID).value
    console.log(option)


    $("color_example").classList.add("hidden"); // invisible
    $("number_example").classList.add("hidden"); // invisible


    if (option == "color_example") {
        $("color_example").classList.remove("hidden"); // visible
    }

    if (option == "number_example") {
        $("number_example").classList.remove("hidden"); // visible
    }

    if (option == "all") {
        $("number_example").classList.remove("hidden"); // visible
        $("color_example").classList.remove("hidden"); // visible
    }
}

/*
    Area for the first example (background color)
*/

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

/*
    End of rea for the first example (background color)
*/
function updateLimits() {
    let lower = parseInt($("lower_range").value)
    let upper = parseInt($("upper_range").value)

    $("lower_current").innerText = lower
    $("upper_current").innerText = upper
}


function generateRandom() {
    let min = parseInt($("lower_range").value)//get value of the first slider
    let max = parseInt($("upper_range").value)//get value of the second slider

    // this line will generate a random number between min and max values.
    let random_number = Math.floor(Math.random() * (max - min + 1)) + min

     // handle cases where min is greater than max by showing an error message to the user
    if (min >= max) {
        $("random_number").innerText = "Could not generate a random number within the given limits!"
    }

    else {
        $("random_number").innerText = random_number
    }
}

/*
    Area for the second example (random number generator)
*/




