window.onload = function () {
    console.log("window.onload, start binding...");
    document.getElementById('start').onclick = startAnimation;
    document.getElementById('stop').onclick = stopAnimation;
}

function startAnimation() {
    let showArea = document.getElementById("show-area");

    let text = document.getElementById('text-input').value;
    let wordList = text.split(' ');

    let punctuation = [',', '.', '!', '?', ':', ";", "，", "。", "？", "；", "："];
    let displayList = [];
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
        console.log("word: " + word + ", newword: " + newWord);
    }

    setTimeout(() => {

    }, 2000);
    let index = 0;
    let interval = setInterval(() => {
        if (index === displayList.length - 1) {
            clearInterval(interval);
        }

        showArea.innerText = displayList[index];
        console.log("now index: " + index + ", word: " + displayList[index])
        index += 1;
    }, 171);
    // showArea.innerText = wordList.join('-');
}

function stopAnimation() {
    let showArea = document.getElementById("show-area");
    showArea.innerText = "";
}

function changeTextDisplay() {

}