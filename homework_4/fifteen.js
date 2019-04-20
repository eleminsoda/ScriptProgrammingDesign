'use strict'

window.onload = function () {
    let shuffleButton = document.getElementById('shufflebutton');
    shuffleButton.onclick = shuffle;

    insertPuzzle();
}

let puzzleSize = 4;
let puzzleNodes = [];
let blankIndex = 16;

function insertPuzzle() {
    let puzzleArea = document.getElementById('puzzlearea');
    let puzzleCount = puzzleSize * puzzleSize;

    // create each node in for loop
    for (let i = 1; i <= puzzleCount; i++) {
        let newNode = document.createElement('div');
        let row = Math.floor((i - 1) / puzzleSize);
        let col = (i - 1) % puzzleSize;
        newNode.id = "node_" + row + "_" + col;

        newNode.style.border = "5px solid black";
        newNode.style.width = "100px";
        newNode.style.height = "100px";
        newNode.style.position = "absolute";
        newNode.style.left = col * 100 + "px";
        newNode.style.top = row * 100 + "px";
        newNode.style.backgroundImage = "url(background.jpg)";


        newNode.style.clip = "rect(" + row * 100 + "px," + (col + 1) * 100 + "px," + (row + 1) * 100 + "px," + col * 100 + "px)";
        alert("rect(" + row * 100 + "px," + (col + 1) * 100 + "px," + (row + 1) * 100 + "px," + col * 100 + "px)");

        newNode.innerText = i + "";

        puzzleArea.appendChild(newNode);
    }
}

function shuffle() {

}