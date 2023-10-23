/**
 * List of ids:
 *  
 *  Textfield to get student name: student_name
 *  List containing all students: students_list
 *  Button to add new students: add_btn
 *  Button to select a random student from the list: random_btn
 *  Div to display the name of the selected student: selected_student
 */

/**
 * List of functions:
 * 
 *  addNewStudent()
 *  generateRandomNumber(max)
 *  selectRandomStudent()
 * 
 */
var students = [] // array to store student names

// this function is executed each time the user clicks the button "add_btn"
function addNewStudent(){

    // get the value of the text field
    let student_name = document.getElementById("student_name").value

    // validate user input
    if(student_name.length == 0){
        alert("Invalid student name")
    }

    // if input is valid we can add a new student to the list
    else{

        // get the parent element (list) where the item will be inserted into
        let students_list = document.getElementById("students_list");

        // create a new list item element to hold student information
        let newStudent = document.createElement('li'); // create a new list item

        // add the new student to the array
        students.push(student_name)

        // set the id of the student and the text that will be displayed
        newStudent.id = students.length
        newStudent.innerHTML = "Student ID: A00" + newStudent.id + " Name:  " + student_name; // the list item will receive the name of the student
        
        // add the student to the students list
        students_list.appendChild(newStudent)

        // reset the value of the text field
        document.getElementById("student_name").value = ""
    }

}

// this function generates a random number between 0 and max
function generateRandomNumber(max){
    return Math.floor(Math.random() *max)
}

// this function is executed each time the user clicks the button "random_btn"
function selectRandomStudent(){

    // We need to display an error message if the array does not contain any element
    if(students.length == 0){
        document.getElementById("selected_student").innerHTML = "Error! Please add a student to the list."
        return
    }    

    // get a random number between 0 and the length of the array
    var random_position = generateRandomNumber(students.length)

    // select the student at the random position
    let selected_student = students[random_position]
    
    // update the div with the selected student's name
    document.getElementById("selected_student").innerHTML = selected_student
}


/**
 * Button Events
 */
window.onload = function (){
    document.getElementById("add_btn").onclick = function(){
        addNewStudent()
    }

    document.getElementById("random_btn").onclick = function(){
        selectRandomStudent()
    }
}