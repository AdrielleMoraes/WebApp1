/*
Some Rules of this Quiz
1. You will have only <span>15 seconds</span> per each question.
2. Once you select your answer, it can't be undone.
3. You can't select any option once time goes off.
4. You can't exit from the Quiz while you're playing.
5. You'll get points on the basis of your correct answers.
*/
let question_number = 0 //current question number
let score = 0


let questions = [
    "1. What does HTML stand for?",
    "2. What does CSS stand for?",
    "3. How do you call a function named myFunction in JavaScript?",
    "4.Which JavaScript event is triggered when the user clicks on an HTML element?",
    "5.In web development, what does DOM stand for?"
]

let options = [
    "Hypertext markup language", "Hyper Text Preprocessor", "Hyper Text Multiple Language", "Hyper Tool Multi Language",
    "Common Style Sheet", "Colorful Style Sheet", "Cascading Style Sheet", "Computer Style Sheet",
    "call myFunction();", "invoke myFunction();", "run myFunction();", "myFunction();",
    "onhover", "onmousedown", "onmouseclick", "onclick",
    "Data Object Model", "Document Object Model", "Design Object Model", "Development Object Model"
]

let correct = [0, 2, 3, 3, 1]

let timerElapsed, timerID
let totalTimer = 5


function $(id) {
    return document.getElementById(id)
}
window.onload = function () {
    $("start-btn").onclick = function () {
        $("quiz-box").classList.remove("hidden")
        $("start-btn").disabled = true
        StartGame()
    }

    $("next-btn").onclick = NextQuestion

    document.getElementById("option-0").onclick = function () {
        Feedback(0)
    }
    document.getElementById("option-1").onclick = function () {
        Feedback(1)
    }
    document.getElementById("option-2").onclick = function () {
        Feedback(2)
    }
    document.getElementById("option-3").onclick = function () {
        Feedback(3)
    }

}


function StartGame() {
    $("next-btn").innerText = "Next Question"
    score = 0
    question_number = 0
    NextQuestion()
}

function Timer() {
    timerElapsed++

    document.getElementById("time-left").innerText = totalTimer - timerElapsed
    if (timerElapsed >= totalTimer) {
        alert("Timer expired!")
        //show correct answer
        Feedback(correct[question_number - 1])
    }

}

function NextQuestion() {

    // start timer 
    timerElapsed = 0
    timerID = setInterval(Timer, 1000)

    $("next-btn").disabled = true

    if (question_number == 5) {
        $("quiz-box").classList.add("hidden")
        $("results-box").classList.remove("hidden")
        $("start-btn").disabled = false

        //stop timer
        clearInterval(timerID)
    }
    if (question_number == 4) {
        $("next-btn").innerText = "End Quiz"
    }
    // populate quiz-box with question title and options
    $("question-title").innerText = questions[question_number]

    for (let i = 0; i < 4; i++) {
        let optionID = "option-" + i
        let option = $(optionID)

        index = question_number * 4 + i
        option.disabled = false
        optionText = options[index]
        option.innerText = optionText

        option.classList.remove("incorrect-option")
        option.classList.remove("correct-option")
        option.classList.remove("expired-option")

    }
    question_number++
    UpdateQuestionBar()

}

function UpdateQuestionBar() {
    $("question-counter").innerText = question_number
    $("progress-bar").style.width = (20 * question_number) + "%"
}

function Feedback(optionID) {

    //stop timer
    clearInterval(timerID)

    $("next-btn").disabled = false

    correct_option = correct[question_number - 1]

    $("option-" + (correct_option)).classList.add("correct-option")


    if (timerElapsed >= totalTimer) {
        $("option-" + (optionID)).classList.add("expired-option")
    }
    else if (optionID == correct_option) {
        console.log(timerElapsed)
        score++
    }
    else {

        $("option-" + (optionID)).classList.add("incorrect-option")
    }
    $("score").innerText = score

    //disable buttons
    for (let i = 0; i < 4; i++) {
        let optionID = "option-" + i
        $(optionID).disabled = true
    }

}