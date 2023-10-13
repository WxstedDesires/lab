// Initialize variables
let min = 1;
let max = 100;
let randomNumber;
let attempts = 0;
let gameRunning = false;

// Generate a random number between min and max
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to update game status text
function updateGameStatusText(status) {
    document.getElementById('game-status').textContent = `Game Status: ${status}`;
}

// Start the game
document.getElementById('start-button').addEventListener('click', function () {
    gameRunning = true;
    updateGameStatusText('Running');
    document.getElementById('message').textContent = 'Game is running. Make a guess.';
    document.getElementById('guess').value = ''; // Clear the guess input
    randomNumber = generateRandomNumber(min, max);
    attempts = 0;
    document.getElementById('check-button').disabled = false;
    document.getElementById('start-button').disabled = true;
});

// Check the user's guess
document.getElementById('check-button').addEventListener('click', function () {
    if (gameRunning) {
        const userGuess = parseInt(document.getElementById('guess').value);
        attempts++;

        if (userGuess === randomNumber) {
            document.getElementById('message').textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
            updateGameStatusText('Stopped');
            document.getElementById('check-button').disabled = true;
            document.getElementById('start-button').disabled = false;
        } else if (userGuess < randomNumber) {
            document.getElementById('message').textContent = 'Try a higher number.';
        } else {
            document.getElementById('message').textContent = 'Try a lower number.';
        }
    }
});

// Restart the game
document.getElementById('restart-button').addEventListener('click', function () {
    gameRunning = false;
    updateGameStatusText('Stopped');
    document.getElementById('message').textContent = 'Game has been restarted.';
    document.getElementById('check-button').disabled = false;
    document.getElementById('start-button').disabled = false;
    document.getElementById('guess').value = '';
});
