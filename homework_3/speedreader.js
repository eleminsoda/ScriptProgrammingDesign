// The JS file for the homework3, Script Programming design, Spring 2019

'use strict'

// when the page content finishes loading ...
window.onload = function() {
    console.log("window.onload, start binding...");
    // set click triggers
    document.getElementById('start').onclick = startAnimation;
    document.getElementById('stop').onclick = stopAnimation;

    // set trigger for changes of the font size
    let sizeNodes = document.getElementsByName("size");
    for (let node of sizeNodes) {
        node.onchange = changeFontSize;
    }

    // set trigger for changes of the display speed
    document.getElementById('speed').onchange = changeDisplaySpeed;
    disableButton('stop');
}

let displayList = []
let interval = 0;
let index = -1;

// called the the start button is pressed
function startAnimation() {
    let showArea = document.getElementById("show-area");

    let text = document.getElementById('text-input').value;
    let wordList = text.trim().split(/\s+/);

    if (wordList.length == 1 && wordList[0] === '') {
        console.log("the text area is empty");
        return;
    } else {
        setDisableStatus('start');
    }

    displayList = [];
    let punctuation = [',', '.', '!', '?', ':', ";", "，", "。", "？", "；", "："];
    for (let word of wordList) {
        let lastCh = word.charAt(word.length - 1);
        let newWord = '';
        if (punctuation.indexOf(lastCh) !== -1) {
            newWord = word.slice(0, -1);
            // push the word twice if it ends with a punctuation mark
            displayList.push(newWord);
            displayList.push(newWord);
        } else {
            displayList.push(word);
        }
    }

    // because of the feature of clearInterval, we have to add the last word twice into the queue
    let lastWord = displayList[displayList.length - 1];
    displayList.push(lastWord);

    let speed = parseInt(document.getElementById('speed').value);
    index = 0;
    // start displaying the words
    interval = setInterval(() => {
        showArea.innerText = displayList[index];
        console.log("now index: " + index + ", word: " + displayList[index])
        index += 1;

        if (index >= displayList.length) {
            stopAnimation();
        }
    }, speed);
}

// stop the animation
function stopAnimation() {
    console.log("stop animation");
    clearInterval(interval);
    let showArea = document.getElementById("show-area");
    showArea.innerText = "";
    setDisableStatus('stop');
}

// change the font size according to the size selected
function changeFontSize() {
    let sizeNodes = document.getElementsByName("size");
    for (let node of sizeNodes) {
        // get the node that is checked
        if (node.checked === true) {
            console.log("Already found the fontSize node...");

            let showArea = document.getElementById("show-area");
            console.log("fontSize changed to " + node.value);
            showArea.style.fontSize = node.value;
            break;
        }
    }
}

// change display speed
function changeDisplaySpeed() {
    let newSpeed = parseInt(document.getElementById('speed').value);
    console.log('changing display speed to ' + newSpeed);

    // clear the interval first
    clearInterval(interval);

    // set new interval based on new display speed
    let showArea = document.getElementById("show-area");
    let wordNow = showArea.innerText;

    // if the display hasn't start yet...
    if (index < 0) {
        return;
    }

    interval = setInterval(() => {
        showArea.innerText = displayList[index];
        console.log("now index: " + index + ", word: " + displayList[index])
        index += 1;

        if (index >= displayList.length) {
            stopAnimation();
        }
    }, newSpeed);
}

// disable the start or stop button
function disableButton(type) {
    let another = '';
    if (type === 'start') {
        another = 'stop';
    } else if (type === 'stop') {
        another = 'start';
    } else {
        alert("Type error!");
        return;
    }

    let button = document.getElementById(type);
    button.disabled = true;
    button.style.backgroundColor = 'lightgray';

    button = document.getElementById(another);
    button.disabled = false;
    button.style.backgroundColor = 'white';
}

// set the disable status of the textarea
function setTextArea() {
    let textarea = document.getElementById('text-input');
    let status = textarea.disabled;

    if (status) {
        textarea.disabled = false;
    } else {
        textarea.disabled = true;
    }
}

// set the disable status for both the button and the textarea
function setDisableStatus(type) {
    disableButton(type);
    setTextArea();
}
