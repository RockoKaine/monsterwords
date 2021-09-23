const gameArea = document.getElementById('game-area');
const rainbowWords = ["I", "Like", "The", "Look", "At", "My", "A", "See", "Me"];
const playBtn = document.getElementById('play-button');
const audio = document.querySelector('audio');
const wordCards = document.querySelectorAll('.the-words');
const correctScore = document.getElementById('correct-answers');
const incorrectScore = document.getElementById('incorrect-answers');
let roundStarted = false;
let theWord = "";
let score = 0;
let wrongGuesses = 0;
let rightGuesses = 0;



function populateGameArea() {
    for (let word of rainbowWords) {
        gameArea.innerHTML += `<span class="the-words" onClick="playCard(this.innerText)"><p>${word}</p></span>`;
    }

}

function playWord(e) {
    roundStarted = true;
    theWord = rainbowWords[Math.floor(Math.random() * (rainbowWords.length + 1) + 1)].toLowerCase()
    audio.src = `audio/round1/${theWord}.ogg`;
    console.log(theWord)
    audio.play();
    playBtn.innerHTML = "Replay " + '<i class="fas fa-redo-alt" id="replay-icon"></i>';
    // playBtn.innerText = "Replay";
    return audio.src;
}

function replayWord() {
    audio.src = `audio/round1/${theWord}.ogg`;
    audio.play();

}

function playCard(e) {
    audio.src = `audio/round1/${e.toLowerCase()}.ogg`;
    audio.play();

    if(roundStarted){
        if(theWord === e.toLowerCase()){
            rightGuesses++;
            roundStarted = false;
            playBtn.innerHTML = "Play " + '<i class="far fa-play-circle" id="replay-icon"></i>';
            console.log('winner winner chicken dinner');
            correctScore.innerText = rightGuesses + " ";
            document.getElementById('confetti').style.display = "block";
            setTimeout(hide, 1000);
            
        } else {
            wrongGuesses++;
            incorrectScore.innerText = " " + wrongGuesses;
            console.log('try agin looser')
        }
    }

}


function hide() {
    document.getElementById('confetti').style.display = "none";
}

populateGameArea();

playBtn.addEventListener('click', ()=> {



    if(!roundStarted) {
        playWord();
    } else{
        replayWord();
    }
});



