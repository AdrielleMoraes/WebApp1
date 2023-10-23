// Global variables
var score = 0; // player's score
var isInfinite; // game mode

var moleInterval; // this is the id of the function that runs every second

/**
 * Quest #1: Define a function to get elements based on their ID. 
 *  The name of this function should be "$" and it takes as parameter a string containing the id of the html element
*/ 
function $(id){
  return document.getElementById(id)
}


/**
 * Quest #2: Create a function that generates a random number between a lower limit and an upper limit.
 * The name of the function should be "randomNumber" and it takes as parameter a lowerLimit and an upper limit.
 */
function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

/**
 * Quest #3: Create a function that reads the 'checked' attribute of the html element with id = 'isInfinite' and
 * updates the value of the global variable "isInfinite".
 * The name of the function should be "setGameMode" and it takes no parameters
*/
function setGameMode(){
  isInfinite = $('isInfinite').checked
}

/**
 * Quest #4: Create a function to set the "disabled" attribute of the html elements ("startBtn" and "isInfinite") to true and
 * add the css class "disabledBtn" to the class list of the element "startBtn".
 * The name of the function should be "disableStartUI" and it takes no parameters
 */
function disableStartUI(){
  // disable start button and checkbox
  $("startBtn").classList.add("disabledBtn")
  $("startBtn").disabled = true
  $('isInfinite').disabled = true

}

/**
 * Quest #5: Create a function to set the "disabled" attribute of the html element "restartBtn" to false and
 * remove the css class "disabledBtn" from the class list of this element.
 * The name of the function should be "enableRestartUI" and it takes no parameters
 */
function enableRestartUI(){
    // enable restart button
    $("restartBtn").classList.remove("disabledBtn")
    $("restartBtn").disabled = false
}

/**
 * Quest #6: Use the window.onload event to:
 * 1: assign the function "startGame()" to the onclick event of the html element with id = "startBtn"
 * 2: assign the function "restartGame()" to the onclick event of the html element with id = "restartBtn"
 */
window.onload = function(){
  $("startBtn").onclick = function(){startGame()}
  $("restartBtn").onclick = function(){restartGame()}
}

/**
 * Quest # : Create a function with the name "restartGame" that reloads the page by calling the function "location.reload()"
 */
function restartGame(){
  location.reload()
}

/**
 * This function is called when the user clicks the start button.
 * This function is used to run "createMole" indefinitely every "time_interval" in milliseconds 
 */
function startGame() {
  setGameMode();
  disableStartUI();
  enableRestartUI();

  // a new mole is created every two seconds
  let time_interval = 2000
  moleInterval = setInterval(createMole, time_interval)
}

/**
 * Quest #: Implement the function createMole. This function is executed every 2 seconds and
 * 1 - Get an array containing all the elements that have the class name "hole". For this you should use the function document.getElementsByClassName()
 * 2 - Create a variable that will store a random number between 0 and the length of the array obtained in step #1. Use the function randomNumber() for this
 * 2 - Create a new html element of type "div" with name "mole"
 *    2a - Create another html element of type "div" with name "punched_mole"
 * 3 - Add the CSS class "mole" to the newly created html element
 */
function createMole() {
  var holes = document.getElementsByClassName("hole");

  var random_hole = randomNumber(0, holes.length)
  var moleHole = holes[random_hole];

  // create a new html element that will be our mole and the punched mole
  var mole = document.createElement("div");
  var punched_mole = document.createElement("div");

  // style them accordingly using the classes provided in the css file
  mole.classList.add("mole");
  punched_mole.classList.add("punched-mole");


  // make this div a child of the random role we got previously
  moleHole.appendChild(punched_mole);
  moleHole.appendChild(mole);
  

  // add a click event to the mole
  mole.addEventListener("click", function() {

    // add an attribute to the mole that tells if the mole was clicked or not
    mole.setAttribute("clicked", true)

    // remove mole from your html if it was clicked
    mole.remove();

    // the punched mole will only appear if the first mole was clicked. Also, it will be removed 200ms after the first one
    setTimeout(function() {
      punched_mole.remove();
    }, 200);

    // add 1 to the overall score
    updateScore(1);

  });


  // create a function that will remove the mole if it isn't clicked
  // This function handles cases where the mole was not clicked
  var intervalToClick = randomNumber(1000, 2000); // this specifies for how long the mole is visible on the screen

  // this is a timed function. It will execute the provided function after the specified amount of time
  setTimeout(function() {
    if(!mole.getAttribute("clicked"))
    {
      punched_mole.remove();
      mole.remove();

      if(isInfinite){
        updateScore(-1);
      }
    }
    
  }, intervalToClick);
}

/**
 * Quest #: Create a function with the name updateScore that takes as parameter the "amount" 
 * that will be decreased or increased to the global variable "score".
 * This function should be able to:
 * 1 - add the amount to the score -> score+=amount
 * 2 - check if the score is greater than 0
 *     2a - if the score is greater than 0 it sets the innerHTML of html element with id "message" to 'Game Over! Restart the game!'
 *     2b - call the function "clearInterval(moleInterval)". This will stop the creation of new moles in your game
 * 3 - set the value of the element with id = 'score' to the updated score
 */
function updateScore(amount) {

}

