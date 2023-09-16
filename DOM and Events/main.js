var secretNumber = Math.trunc(Math.random() * 20) + 1;
var score = 20;

var displayMessage = function (message) {
    document.getElementById('message').textContent = message;
}

document.getElementById('check').addEventListener('click', function () {
    var guess = Number(document.getElementById('guess').value);

    if (!guess) {
        displayMessage('please input number');
    } else if (guess === secretNumber) {
        displayMessage('Correct');
        document.getElementById('number').textContent = secretNumber;
        document.body.style.backgroundColor = '#60b347';
        document.getElementById('number').style.width = '30rem';

        score++;
    } else {
        displayMessage(guess > secretNumber ? 'Lower' : 'Higher');
        score--;
    }
    document.getElementById('score').textContent = score;

    if (score === 0) {
        displayMessage('You lost the game!');
        document.getElementById('check').disabled = true;
    }
});

document.getElementById('again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    displayMessage('Start guessing...');
    document.getElementById('guess').value = '';
    document.body.style.backgroundColor = '#222';
    document.getElementById('number').style.width = '15rem';
    document.getElementById('number').textContent = '?';
    document.getElementById('score').textContent = score;
});
