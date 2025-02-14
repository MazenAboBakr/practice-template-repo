let playerScore = 0;

function calculateScore(points) {
    return new Promise((resolve) => {
        setTimeout(() => {
            playerScore += points;
            console.log(`Score: ${playerScore}`);
            resolve(playerScore);
        }, 1500);
    });
}

module.exports = { calculateScore };
