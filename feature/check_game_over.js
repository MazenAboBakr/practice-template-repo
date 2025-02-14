function checkGameOver(score) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (score >= 10) {
                console.log("Game Over!");
                resolve("Game Over");
            } else {
                console.log("Continue playing...");
                resolve("Continue");
            }
        }, 1000);
    });
}

module.exports = { checkGameOver };
