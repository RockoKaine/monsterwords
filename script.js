const gameArea = document.getElementById('game-area');
const rainbowWords = ["I", "Like", "The", "Look", "At", "My", "A", "See", "Me"];
const playBtn = document.getElementById('play-button');
const audio = document.querySelector('audio');
const wordCards = document.querySelectorAll('.the-words');

function populateGameArea() {
    for (let word of rainbowWords) {
        gameArea.innerHTML += `<span class="the-words" onClick="playCard(this.innerText)"><p>${word}</p></span>`;
    }

}

function playWord(e) {
    audio.src = `audio/round1/${rainbowWords[Math.floor(Math.random() * rainbowWords.length + 1)].toLowerCase()}.ogg`;
    console.log(e.target.innerText)
    audio.play();
}


function playCard(e) {
    audio.src = `audio/round1/${e.toLowerCase()}.ogg`;
    audio.play();
}


populateGameArea();

playBtn.addEventListener('click', playWord);



