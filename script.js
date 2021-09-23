const gameArea = document.getElementById('game-area');
const rainbowWords = ["I", "Like", "The", "Look", "At", "My", "A", "See", "Me"];
const playBtn = document.getElementById('play-button');
const audio = document.querySelector('audio');
const wordCards = document.querySelectorAll('.the-words');
let roundStarted = false;
let theWord = "";
let score = 0;
let wrongGuesses = 0;
let rightGUesses = 0;



function populateGameArea() {
    for (let word of rainbowWords) {
        gameArea.innerHTML += `<span class="the-words" onClick="playCard(this.innerText)"><p>${word}</p></span>`;
    }

}

function playWord(e) {
    roundStarted = true;
    theWord = rainbowWords[Math.floor(Math.random() * rainbowWords.length + 1)].toLowerCase()
    audio.src = `audio/round1/${theWord}.ogg`;
    console.log(theWord)
    audio.play();
    playBtn.innerText = "Replay";
    return audio.src;
}

function replayWord() {
    // audio.src = `audio/round1/${theWord}.ogg`;
    audio.play();

}

function playCard(e) {
    audio.src = `audio/round1/${e.toLowerCase()}.ogg`;
    audio.play();

    if(roundStarted){
        if(theWord === e.toLowerCase()){
            roundStarted = false;
            playBtn.innerText = "Play";
            console.log('winner winner chicken dinner');
            
            
        } else {
            console.log('try agin looser')
        }
    }

}


populateGameArea();

playBtn.addEventListener('click', ()=> {
    if(!roundStarted) {
        playWord();
    } else{
        replayWord();
    }
});



