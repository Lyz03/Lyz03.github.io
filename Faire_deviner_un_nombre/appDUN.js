let randomNumber = Math.floor(Math.random() * 100);

if (randomNumber === 0) {
    randomNumber = 1;
}

let submit = document.getElementById('guess_submit');
let userGuess = document.getElementById('user_guess');

let guessCountP = document.getElementById('guess_count');
let lastResult = document.getElementById('last_result');
let lowOrHi =document.getElementById('low_or_hi');

let guessCount = 1;
let resetButton;


submit.addEventListener("click", checkGuesses);

document.body.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        checkGuesses()
    }
});

// check what the guess and what to do with it
function checkGuesses() {
    let guess = Number(userGuess.value);
    if (guessCount === 1){
        guessCountP.innerText = "Propositions précédentes : ";
    }
    guessCountP.innerText += ' ' +guess;

    if (guess === randomNumber) {
        lastResult.innerText = "Bravo, vous avez gagné !";
        lowOrHi.innerText = '';
        gameEndButton();
    } else if (guessCount === 10 ) {
        lastResult.innerText = "Vous avez perdu !";
        lowOrHi.innerText = '';
        gameEndButton();
    } else {
        lastResult.innerText = "Faux !";
        if (guess < randomNumber) {
            lowOrHi.innerText = 'trop petit';
        } else if (guess > randomNumber) {
            lowOrHi.innerText = 'trop grand';
        }
    }
    guessCount++;
    userGuess.value = '';
    userGuess.focus();
}

// disable submit and add a reset button
function gameEndButton() {
    userGuess.disabled = true;
    submit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.innerText = 'Recommencer';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', gameEnd);
}

// reset the game
function gameEnd() {
    guessCount = 1;
    resetButton.parentNode.removeChild(resetButton);
    userGuess.disabled = false;
    submit.disabled = false;
    userGuess.value = '';
    guessCountP.innerText = '';
    lastResult.innerText = '';

    randomNumber = Math.floor(Math.random() * 100);
}

