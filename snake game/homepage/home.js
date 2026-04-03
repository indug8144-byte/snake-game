const buttonClickSound = new Audio('button.mp3');

const startBtn          = document.getElementById('startBtn');
const highScoreElement  = document.getElementById('highScore');
const soundBtn          = document.getElementById('soundBtn');
const exitBtn           = document.getElementById('exitBtn');

// High Score
let highScore = parseInt(localStorage.getItem('snakeHighScore')) || 0;
highScoreElement.innerText = highScore;

// Start Game
startBtn.addEventListener('click', () => {
    if (isSoundOn) buttonClickSound.play();
    window.location.href = '../play page/play.html';
});

// Sound Toggle
let isSoundOn = false;
soundBtn.addEventListener('click', () => {
    isSoundOn = !isSoundOn;
    soundBtn.innerText = `Sound: ${isSoundOn ? 'ON' : 'OFF'}`;
    if (isSoundOn) buttonClickSound.play();
});

// Exit
exitBtn.addEventListener('click', () => {
    if (confirm("Are you sure you want to exit?")) {
        if (isSoundOn) buttonClickSound.play();
        setTimeout(() => window.close(), 300);
    }
});

// Call this from play.html when player loses
function updateHighScore(currentScore) {
    if (currentScore > highScore) {
        highScore = currentScore;
        localStorage.setItem('snakeHighScore', highScore);
        highScoreElement.innerText = highScore;
    }
}