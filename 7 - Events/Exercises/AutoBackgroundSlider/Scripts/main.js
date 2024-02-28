function $(id) {
    return document.getElementById(id)
}

//Assigning events to html elemtns
window.onload = function () {

    //one event for each slider

    //one event for the checkbox
}


/*
Use componentToHex() to convert from RGB to hexadecimal. You have to convert three times
 */
function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}


function updateColorValue(r, g, b) {
    //if the checkbox is checked you have to convert each colour component to Hex 
    //next you display the value of the current value

}


// Change background color
function changeBackground() {

    //get current value for red and update the text element with the current value

    //get current value for green and update the text element with the current value

    //get current value for blue and update the text element with the current value


    // change color of the element

    // call updateColorValue() to display the current value in either RGB or hex
}
