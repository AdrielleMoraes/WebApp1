var score = 0;
var moleInterval;

function startGame() {
  moleInterval = setInterval(createMole, 1000);

  console.log(document.getElementsByClassName("hole"));
}

function createMole() {
  var holes = document.getElementsByClassName("hole");
  var moleHole = holes[Math.floor(Math.random() * holes.length)];
  var mole = document.createElement("div");
  mole.classList.add("mole");
  moleHole.appendChild(mole);
  mole.addEventListener("click", function() {
    mole.remove();
    score++;
    updateScore();
  });
  setTimeout(function() {
    mole.remove();
  }, 1000);
}

function updateScore() {
  var scoreBoard = document.getElementById("score");
  scoreBoard.innerHTML = "Score: " + score;
}