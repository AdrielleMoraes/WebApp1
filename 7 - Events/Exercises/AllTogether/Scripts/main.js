function $(id) {
    return document.getElementById(id)
}

//Assigning events to html elements
window.onload = function () {

    //add an onchange event for the select

    /*
    Events for the first example
     */

    /*
    Events for the second example
     */

}

//control which examples will be displayed
function ShowSelected(selectID) {
    //get the value of the current selection

    //start by making all elements invisible. You will make them visible depending on the selected option
    $("color_example").classList.add("hidden"); // invisible
    $("number_example").classList.add("hidden"); // invisible

    //create a set of if else statements to change their visibility

    /*
        if option == "color_example"
            //remove hidden class from "color_example" to make it visible
    
        if option == "number_example"
           //remove hidden class from "number_example" to make it visible
    
        if option == "all"
            //remove hidden class from "color_example" to make it visible
            //remove hidden class from "number_example" to make it visible
    */
}

/*
    Functions for the first example (random number generator)
*/


/*
    Functions for the second example (random number generator)
*/




