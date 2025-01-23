let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.text').value);
    const message = document.querySelector('.guessing');
    const scoreDisplay = document.querySelector('.score');
    
    if (!guess) {
        message.textContent = ' No number!';
    } else if (guess === secretNumber) {
        message.textContent = ' Correct Number!';
        document.querySelector('.hide').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (score > highScore) {
            highScore = score;
            document.querySelector('.high').textContent = 'High score: ' + highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            message.textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
            score--;
            scoreDisplay.textContent = 'Score: ' + score;
        } else {
            message.textContent = ' You lost the game!';
            scoreDisplay.textContent = 'Score: 0';
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.guessing').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = 'Score: ' + score;
    document.querySelector('.text').value = '';
    document.querySelector('.hide').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
});
