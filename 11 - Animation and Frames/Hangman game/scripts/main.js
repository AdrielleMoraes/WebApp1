let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

let word;              // Selected word
let guess;             // Guess
let geusses = [];      // Stored geusses
let lives;             // Lives
let counter;           // Count correct geusses
let space;              // Number of spaces in word '-'

// create alphabet buttons
function CreateAlphabetButtons() {
    buttons_list = document.getElementById('buttons')

    for (let i = 0; i < alphabet.length; i++) {
        newButton = document.createElement('button')
        newButton.classList.add("w3-button", "w3-black", "w3-margin-right", "w3-margin-top")
        let letter = alphabet[i]
        newButton.id = letter
        newButton.innerHTML = letter;
        newButton.onclick = function () { Check(letter) }
        buttons_list.appendChild(newButton)
    }
}

// Show lives
function UpdateLives() {
    // Get elements
    let showLives = document.getElementById("mylives")
    showLives.innerHTML = "You have " + lives + " lives"
    if (lives < 1) {
        showLives.innerHTML = "Game Over"
    }
    for (let i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
            showLives.innerHTML = "You Win!"
        }
    }
}

function Check(letter) {
    let button = document.getElementById(letter)
    button.disabled = true
    let guess = letter

    for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
            geusses[i].innerHTML = guess
            counter += 1
        }
    }
    let j = (word.indexOf(guess))
    if (j === -1) {
        lives -= 1;
    }
    UpdateLives()
}

window.onload = function () {



    CreateAlphabetButtons()


    // Create guesses ul
    result = function () {
        wordHolder = document.getElementById('hold');

        for (let i = 0; i < word.length; i++) {
            guess = document.createElement('span');
            if (word[i] === "-") {
                guess.innerHTML = " - ";
                space = 1;
            } else {
                guess.innerHTML = " _ ";
            }

            geusses.push(guess);
            wordHolder.appendChild(guess);
        }
    }


    // Reset
    document.getElementById('reset').onclick = function () {
        reset()
    }

    play();
}

// Play
function play () {
    let words = ["everton", "liverpool", "swansea", "chelsea", "hull"];

    word = words[Math.floor(Math.random() * words.length)];
    console.log(word);


    geusses = [];
    lives = 10;
    counter = 0;
    result();
    UpdateLives();

}

function reset() {
    location.reload()
}


