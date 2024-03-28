let incrementEl = document.getElementById("numbers-el");
let saveEl = document.getElementById("previous-el");
let numbersEl = document.getElementById("numbers-el");
let count = 0;
let resetBtnEl = document.getElementById("resetBtn-el");

function increment() {
    count += 1;
    incrementEl.textContent = count;
}

function save() {
    let counter = count + " - ";
    saveEl.textContent += counter;
    incrementEl.textContent = 0;
    count = 0;
}

function resetBtn() {



}

