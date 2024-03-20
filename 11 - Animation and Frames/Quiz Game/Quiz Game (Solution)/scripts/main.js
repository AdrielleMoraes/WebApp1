/*
Some Rules of this Quiz
1. You will have only 15 seconds per each question.
2. Once you select your answer, it can't be undone.
3. You can't select any option once time goes off.
4. You can't exit from the Quiz while you're playing.
5. You'll get points on the basis of your correct answers.
*/

let timerID // id used when calling setInterval

let totalTimer = 15 //number of seconds the user has to answer a question!
let elapsed_time = 0 //number of seconds elapsed

let score = 0

/**
 * There are three arrays in this exercise:
 *  questions -> store the title of each question
 *  options -> store the options of each question. Note that options for question 1 are the elements 0,1 2 and 3 of this array
 *  correct -> stores the index of the correct option in a number from 0 to 3
 */
let question_number = 0 //current question number

let questions = [
    "1. What does HTML stand for?",
    "2. What does CSS stand for?",
    "3. How do you call a function named myFunction in JavaScript?",
    "4.Which JavaScript event is triggered when the user clicks on an HTML element?",
    "5.In web development, what does DOM stand for?"
]

let options = [
    //Q1 -> 0,1,2,3
    "Hypertext markup language", "Hyper Text Preprocessor", "Hyper Text Multiple Language", "Hyper Tool Multi Language",
    
    //Q2 -> 4,5,6,7
    "Common Style Sheet", "Colorful Style Sheet", "Cascading Style Sheet", "Computer Style Sheet",
    
    //Q3 -> 8,9,10,11
    "call myFunction();", "invoke myFunction();", "run myFunction();", "myFunction();",
    
    //Q4 -> 12,13,14,15
    "onhover", "onmousedown", "onmouseclick", "onclick",
    
    //Q5 -> 16,17,18,19
    "Data Object Model", "Document Object Model", "Design Object Model", "Development Object Model"
]

let correct = [0, 2, 3, 3, 1]


function $(id) {
    return document.getElementById(id)
}

window.onload = function () {

    // add a click event to the start button
    $("start-btn").onclick = function () {
        // show the quiz box and hide the  start button
        $("quiz-box").classList.remove("hidden")
        $("start-btn").disabled = true

        //call a function to Start the game
        StartGame()
    }

    // click event for the next button
    $("next-btn").onclick = function(){ShowNextQuestion()}

    // click event for each option
    document.getElementById("option-0").onclick = function () {
        SelectOption(0)
    }
    document.getElementById("option-1").onclick = function () {
        SelectOption(1)
    }
    document.getElementById("option-2").onclick = function () {
        SelectOption(2)
    }
    document.getElementById("option-3").onclick = function () {
        SelectOption(3)
    }
}

function StartGame() {
    // Reset question number and player's score
    score = 0
    question_number = 0
    $("next-btn").innerText = "Next Question"

    // show first question
    ShowNextQuestion()
}

function Timer() {
    // increment the elapsed time by 1
    elapsed_time++

    // display how many seconds left to answer the question
    document.getElementById("time-left").innerText = totalTimer - elapsed_time

    // show correct option if the timer expires
    if (elapsed_time >= totalTimer) {
        alert("Timer expired!")

        //show correct answer
        SelectOption(correct[question_number - 1])
    }

}

function ShowNextQuestion() {

    // reset elapsed time and restart timer 
    elapsed_time = 0
    timerID = setInterval(Timer, 1000)

    //disable next button (this will prevent users from skipping questions)
    $("next-btn").disabled = true

    // There's no need to show another question if there's no questions left
    if (question_number == 5) {
        //Hide the quiz box and show the results box
        $("quiz-box").classList.add("hidden")
        $("results-box").classList.remove("hidden")
        $("start-btn").disabled = false

        //stop timer
        clearInterval(timerID)
        return
    }
    if (question_number == 4) {
        $("next-btn").innerText = "End Quiz"
    }

    // populate quiz-box with question title and options

    //change question title
    $("question-title").innerText = questions[question_number]

    //set the text of each one of the 4 options
    for (let i = 0; i < 4; i++) {

        //here you have to select the "option-" html element. Use the current value of "i" to select this element!
        let optionID = "option-" + i
        let option = $(optionID)

        //you need to know what options belong to the current question. For this, use:
        index = question_number * 4 + i //then, if the question_number == 0 you select the elements [0,1,2,3]. If question_number == 1 you select elements [4,5,6,7]....
        //update the inner text of the option
        optionText = options[index]
        option.innerText = optionText


        //enable option so that users can click on it
        option.disabled = false
        //remove any css class that indicates whether the option is correct or not. 
        option.classList.remove("incorrect-option")
        option.classList.remove("correct-option")
        option.classList.remove("expired-option")

    }

    //move to next question number
    question_number++

    //update the width of the progress bar
    UpdateQuestionBar()

}


/**
 * Updates the progress bar
 */
function UpdateQuestionBar() {
    $("question-counter").innerText = question_number
    $("progress-bar").style.width = (20 * question_number) + "%"
}

/**
 * This function handles click events on the option elements
 * @param optionID a number from 0 to 3 that represents the order of the option.
 */
function SelectOption(optionID) {

    //The user already selected an option so you can stop the timer now
    clearInterval(timerID)
    //enable the "next" button so that users can move to the next question
    $("next-btn").disabled = false

    //See what is the index of the correct option
    correct_option = correct[question_number - 1]

    //add the "correct-option" class to the corresponding option
    $("option-" + (correct_option)).classList.add("correct-option")

    
    if (elapsed_time >= totalTimer) {
        $("option-" + (optionID)).classList.add("expired-option")
    }
    //check if the selected option is the correct one
    else if (optionID == correct_option) {
        score++
    }
    //incorrect selections will be highlighted in red using the css class "incorrect-option"
    else {
        $("option-" + (optionID)).classList.add("incorrect-option")
    }

    //update text with user score
    $("score").innerText = score

    //Use a for loop to disable all buttons. (This will prevent users from selecting more than one)
    for (let i = 0; i < 4; i++) {
        let optionID = "option-" + i
        $(optionID).disabled = true
    }
}