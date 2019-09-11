//listen for key press
window.addEventListener("keydown", pressedKey);

// play sounds
let sound1 = new Audio("https://cdn.glitch.com/6a0e5a69-0b54-4757-b123-be0000b6626b%2Fboom.wav?v=1567987615953");
let sound2 = new Audio("https://cdn.glitch.com/6a0e5a69-0b54-4757-b123-be0000b6626b%2Fclap.wav?v=1567987623062");
let sound3 = new Audio("https://cdn.glitch.com/6a0e5a69-0b54-4757-b123-be0000b6626b%2Fhihat.wav?v=1567987625131");
let sound4 = new Audio("https://cdn.glitch.com/6a0e5a69-0b54-4757-b123-be0000b6626b%2Fkick.wav?v=1567987628854");
let sound5 = new Audio("https://cdn.glitch.com/6a0e5a69-0b54-4757-b123-be0000b6626b%2Fopenhat.wav?v=1567987634509");
let sound6 = new Audio("https://cdn.glitch.com/6a0e5a69-0b54-4757-b123-be0000b6626b%2Fride.wav?v=1567987639096");
let sound7 = new Audio("https://cdn.glitch.com/6a0e5a69-0b54-4757-b123-be0000b6626b%2Fsnare.wav?v=1567987642332");
let sound8 = new Audio("https://cdn.glitch.com/6a0e5a69-0b54-4757-b123-be0000b6626b%2Ftink.wav?v=1567987645181");
let sound9 = new Audio("https://cdn.glitch.com/6a0e5a69-0b54-4757-b123-be0000b6626b%2Ftom.wav?v=1567987647588");
let boom = document.getElementById("btn1").addEventListener('click', () => {sound1.play()});
let clap = document.getElementById("btn2").addEventListener('click', () => {sound2.play()});
let hiHat = document.getElementById("btn3").addEventListener('click', () => {sound3.play()});
let kick = document.getElementById("btn4").addEventListener('click', () => {sound4.play()});
let openHat = document.getElementById("btn5").addEventListener('click', () => {sound5.play()});
let ride = document.getElementById("btn6").addEventListener('click', () => {sound6.play()});
let snare = document.getElementById("btn7").addEventListener('click', () => {sound7.play()});
let tink = document.getElementById("btn8").addEventListener('click', () => {sound8.play()});
let tom = document.getElementById("btn9").addEventListener('click', () => {sound9.play()});


function pressedKey(keypress) {

    if (keypress.keyCode === 97) {
        sound1.play();
    } else if (keypress.keyCode === 98) {
        sound2.play();
    } else if (keypress.keyCode === 99) {
        sound3.play();
    } else if (keypress.keyCode === 100) {
        sound4.play();
    } else if (keypress.keyCode === 101) {
        sound5.play();
    } else if (keypress.keyCode === 102) {
        sound6.play();
    } else if (keypress.keyCode === 103) {
        sound7.play();
    } else if (keypress.keyCode === 104) {
        sound8.play();
    } else if (keypress.keyCode === 105) {
        sound9.play();
    }
};
