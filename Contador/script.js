//Declatando as variaveis
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let trashEl = document.getElementById("count-el")
let count = 0;


function increment(){
    count++
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function trash(){
    saveEl = 0;
    trashEl.textContent = 0;
}