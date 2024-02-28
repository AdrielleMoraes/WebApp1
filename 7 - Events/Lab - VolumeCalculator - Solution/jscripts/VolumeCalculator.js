let volume = "none"

function $(id) {
    return document.getElementById(id)
}

window.onload = function () {
    //Assign events to html elements
    $("select").onchange = function (){
        switchVolume()
    } 

    $("cylinder_height").oninput = function(){ validateInput("cylinder_height") }
    $("cylinder_radius").oninput = function(){ validateInput("cylinder_radius") }

    $("pyramid_length").oninput = function(){ validateInput("pyramid_length") }
    $("pyramid_width").oninput = function(){ validateInput("pyramid_width") }
    $("pyramid_height").oninput = function(){ validateInput("pyramid_height") }

    $("cube_edge").oninput = function(){ validateInput("cube_edge") }

    $("reset_btn").onclick = function(){reset()}
}

function switchVolume() {
    $(volume).classList.toggle("hidden")

    volume = $("select").value
    console.log(volume)
    $(volume).classList.toggle("hidden")

    if (volume == 'none') {
        $("reset_btn").classList.add('hidden')
        $("image").src = ""
    }else{
        $("reset_btn").classList.remove('hidden')
        $("image").src = `images/${volume}.jpg`
    }
    
}

function calculateVolume() {
    let result = 0
    switch (volume) {
        case 'cylinder':
            let cylinder_height = $("cylinder_height").value
            let cylinder_radius = $("cylinder_radius").value

            result = Math.PI*cylinder_radius*cylinder_radius*cylinder_height
        break;

        case 'cube':
            let edge = $("cube_edge").value
            result = edge**3
            break;

        case 'pyramid':
            
            let pyramid_length = $("pyramid_length").value
            let pyramid_width = $("pyramid_width").value
            let pyramid_height = $("pyramid_height").value

            result = pyramid_length*pyramid_width*pyramid_height/3
            break;

        default:
            break;
    }

    $(volume+"_result").value = result
}

function reset() {
    $("cylinder_height").value = ""
    $("cylinder_radius").value = ""
    $("pyramid_length").value = ""
    $("pyramid_width").value = ""
    $("pyramid_height").value = ""
    $("cube_edge").value = ""

    $("pyramid_result").value = ""
    $("cylinder_result").value = ""
    $("cube_result").value = ""

}

function validateInput(id){
    value = $(id).value
    //none of the fields can accept values less or equal 0
    if(isNaN(value) || value <= 0){
        $("errormessage").classList.remove("hidden")
        $(volume+"_result").value = "0"
    }
    else
    {
        $("errormessage").classList.add("hidden")
        calculateVolume()
    }
}


