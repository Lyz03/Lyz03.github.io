let screen = document.getElementById('screen');
screen.addEventListener("keypress", function () {

});
// setting buttons
// numbers
document.getElementById('zero').addEventListener("click", function() {
    screen.value += 0;
});

document.getElementById('one').addEventListener("click", function () {
    screen.value += 1;
});

document.getElementById('two').addEventListener("click", function () {
    screen.value += 2;
});

document.getElementById('tree').addEventListener("click", function () {
    screen.value += 3;
});

document.getElementById('four').addEventListener("click", function () {
    screen.value += 4;
});

document.getElementById('five').addEventListener("click", function () {
    screen.value += 5;
});

document.getElementById('six').addEventListener("click", function () {
    screen.value += 6;
});

document.getElementById('seven').addEventListener("click", function () {
    screen.value += 7;
});

document.getElementById('eight').addEventListener("click", function () {
    screen.value += 8;
});

document.getElementById('nine').addEventListener("click", function () {
    screen.value += 9;
});

// Operator
// modulo
document.getElementById('modulo').addEventListener("click", function () {
    screen.value += '%';
});

// division
document.getElementById('division').addEventListener("click", function () {
    screen.value += '/';
});

// x
document.getElementById('x').addEventListener("click", function () {
    screen.value += '*';
});

// minus
document.getElementById('minus').addEventListener("click", function () {
    screen.value += '-';
});

// plus
document.getElementById('plus').addEventListener("click", function () {
    screen.value += '+';
});

// comma
document.getElementById('comma').addEventListener("click", function () {
    screen.value += '.';
});

// clean
document.getElementById('c').addEventListener('click', function () {
    screen.value = '';
});

// equal
document.getElementById('equal').addEventListener("click", calc);




// calc for you :

function calc() {
    screen.value = eval(screen.value.toString());
}

