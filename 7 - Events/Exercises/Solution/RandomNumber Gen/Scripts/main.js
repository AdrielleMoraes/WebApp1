function $(id) {
    return document.getElementById(id)
}

//Assigning events to html elemtns
window.onload = function () {
    $("generate_random").onclick = generateRandom
    $("lower_range").oninput = updateLimits
    $("upper_range").oninput = updateLimits
}


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




