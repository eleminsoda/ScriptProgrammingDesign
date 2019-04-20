'use strict'

window.onload = function () {
    let shuffleButton = document.getElementById('shufflebutton');
    shuffleButton.onclick = shuffle;

    insertPuzzle();
}

let puzzleSize = 4;
let puzzleNodes = [];

function insertPuzzle() {
    let puzzleArea = document.getElementById('puzzlearea');
    let puzzleCount = puzzleSize * puzzleSize;

    // create each node in for loop
    for (let i = 1; i <= puzzleCount; i++) {
        let newNode = document.createElement('div');
        let row = i % puzzleSize;
        let col = Math.ceil(i / puzzleSize);
        newNode.id = "node_" + row + "_" + col;

        newNode.style.border = "5px solid black";
        newNode.style.width = "100px";
        newNode.style.height = "100px";
        newNode.style.position = "absolute";
        newNode.style.left = (col - 1) * 100 + "px";
        newNode.style.top = row * 100 + "px";

        newNode.innerText = row + "_" + col;

        puzzleArea.appendChild(newNode);
    }
}

function shuffle() {

}