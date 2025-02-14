function initializeGame() {
    return new Promise((resolve) => {
        console.log("Initializing...");
        setTimeout(() => {
            console.log("Game Ready!");
            resolve();
        }, 2000);
    });
}

module.exports = { initializeGame };