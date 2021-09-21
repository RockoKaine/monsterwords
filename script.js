const gameArea = document.getElementById('game-area');
const rainbowWords = ["I", "Like / like", "The / the", "Look / look", "At / at", "My / my", "A / a", "See / see", "Me / me"];

function populateGameArea() {
    for (let word of rainbowWords) {
        gameArea.innerHTML += `<span class="the-words">${word}</span>`;
    }

}

populateGameArea();