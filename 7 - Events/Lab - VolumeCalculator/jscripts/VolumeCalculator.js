
/*
    Important notes:
        Your need to attach an onchange event to the select element in order to toggle the visibility of 
        the calculators. The function "switchVolume" is responsible for implementing this functionality. This
        function also updates the value of the variable "volume" to the current selection.

        The function "calculateVolume" is called when there is an oninput event for the textboxes.


*/

let volume = "none" // use this variable to control which shape is shown on the page

function $(id) {
    return document.getElementById(id)
}

window.onload = function () {
    //Assign events to html elements

}

//Use this function to control what happens when the value of the select changes
function switchVolume() {
    
    //You have to show the selected option and hide all other options

    //Update "volume" to the current selection
    volume = "cube" // cube is just a placeholder here. You have to assign volume to the selected option!!
}

//Use this function to calculate the volume of the shape. In this example there is no button and the volume
// is calculated whenever the user adds content to the textboxes.
function calculateVolume() {

    //use a set of if statements to calculate the volume of the selected shape
    /*
        if(volume = "cube")
            //calculate the volume of the cube by implementing the formulas in the images
    */
    

    //update the html element that displays the result
}

function reset() {
    //this function resets the value of ALL textboxes to ""
}

function validateInput(id){
    //use this function to check if the value of the element with given id is a number
    //Display a warning message if the user input is not valid
}


