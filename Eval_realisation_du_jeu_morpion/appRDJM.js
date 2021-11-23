// disable the context menu
document.getElementById('play_set').addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

let box = document.querySelectorAll('section button');
let playerTurn = document.getElementById('player_turn');
let resetButton = document.getElementById('reset');
let choice = document.getElementById("one_or_two_players");
let enable = false;
let a = 1;
let b;

// Checks if the touch is used
isTouch = !!("ontouchstart" in window || navigator.msMaxTouchPoints);

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('mouseup', function (e) {

        // right or left click, player turn & 1 or 2 players
        if (enable === false) {
            // touch device ?
            if (isTouch) {
                if (a % 2 === 1 && box[i].innerHTML !== 'X' && box[i].innerHTML !== 'O') {
                    left(i);
                    a++;
                } else {
                    if (choice.selectedIndex === 1) {
                        pc();
                        playerTurn.innerText = "Tour du joueur X";
                        a++;
                    }
                    if (a % 2 === 0 && box[i].innerHTML !== 'X' && box[i].innerHTML !== 'O') {
                        right(i);
                        a++;
                    }
                }
            } else {
                // right or left click ?
                switch (e.button) {
                    case 0:
                        if (choice.selectedIndex === 1) {
                            playerTurn.innerText = "Tour du joueur O (clic droit pour faire jouer l'ordi)";
                        } else {
                            playerTurn.innerText = "Tour du joueur O";
                        }
                        if (a % 2 === 1 && box[i].innerHTML !== 'X' && box[i].innerHTML !== 'O') {
                            left(i);
                            a++;
                        }
                        break;
                    case 2:
                        if (choice.selectedIndex === 1) {
                            pc();
                            playerTurn.innerText = "Tour du joueur X";
                            a++;
                        } else if (a % 2 === 0 && box[i].innerHTML !== 'X' && box[i].innerHTML !== 'O') {
                            right(i);
                            playerTurn.innerText = "Tour du joueur X";
                            a++;
                        }
                        break;
                }
            }

        }

        winCondition();
    });
}

// draw X
function left(index) {
    box[index].innerHTML = 'X';
}

//draw O
function right(index) {
    box[index].innerHTML = 'O';
}

// test if someone won
function winCondition() {
    //line 1
    if (box[0].innerHTML === box[1].innerHTML && box[1].innerHTML === box[2].innerHTML) {
        b = box[0].innerHTML;
        win()
    }
    // line 2
    else if (box[3].innerHTML === box[4].innerHTML && box[4].innerHTML === box[5].innerHTML) {
        b = box[3].innerHTML;
        win();
    }
    // line 3
    else if (box[6].innerHTML === box[7].innerHTML && box[7].innerHTML === box[8].innerHTML) {
        b = box[6].innerHTML;
        win();
    }

    // column 1
    else if (box[0].innerHTML === box[3].innerHTML && box[3].innerHTML === box[6].innerHTML) {
        b = box[0].innerHTML;
        win();
    }

    //column 2
    else if (box[1].innerHTML === box[4].innerHTML && box[4].innerHTML === box[7].innerHTML) {
        b = box[1].innerHTML;
        win();
    }

    // column 3
    else if (box[2].innerHTML === box[5].innerHTML && box[5].innerHTML === box[8].innerHTML) {
        b = box[2].innerHTML;
        win();
    }

    // diagonal top left, bottom right
    else if (box[0].innerHTML === box[4].innerHTML && box[4].innerHTML === box[8].innerHTML) {
        b = box[0].innerHTML;
        win();
    }

    // diagonal top right, bottom left
    else if (box[2].innerHTML === box[4].innerHTML && box[4].innerHTML === box[6].innerHTML) {
        b = box[2].innerHTML;
        win();
    }

    // both players loose
    else {
        let c = 0;
        for (let i = 0; i < box.length; i++) {
            if (box[i].innerHTML === 'X' || box[i].innerHTML === 'O') {
                c++;
            }
        }
        if (c === 9) {
            playerTurn.innerText = 'Match nul !';
            playerTurn.style.fontSize = '1.5rem';
            resetButton.style.display = 'block';
            resetButton.addEventListener("click", resetGame);
        }
    }
}

/* What to do if someone win :
* add a sentence saying which player won
* display the reset game button
 */
function win() {
    if (b === 'X') {
        playerTurn.innerText = 'Joueur X à gagné !'
        playerTurn.style.fontSize = '1.5rem';
        resetButton.style.display = 'block';
        resetButton.addEventListener("click", resetGame);
        enable = true;
    } else if (b === 'O') {
        playerTurn.innerText = 'Joueur O à gagné !'
        playerTurn.style.fontSize = '1.5rem';
        resetButton.style.display = 'block';
        resetButton.addEventListener("click", resetGame);
        enable = true;
    }
}

// reset the game
function resetGame() {
    for (let i = 0; i < box.length; i++) {
        box[i].innerHTML = '';
    }
    a = 1;
    enable = false;
    playerTurn.style.fontSize = '1rem';
    playerTurn.innerText = 'Vous pouvez commencer, le joueur X avec le clic gauche et le joueur O avec le clic droit'
        + '\n' + 'Le joueur X commence';
    resetButton.style.display = 'none';
}

/* player vs computer
* choose a random box and set a "O" in it
 */
function pc() {
    let boxToPlay = Math.floor(Math.random() * 8)
    if (box[boxToPlay].innerHTML === "") {
        box[boxToPlay].innerHTML = "O"
    } else if (box[boxToPlay].innerHTML !== "") {
        pc();
    }
}

