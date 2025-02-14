function movePlayer(direction) {
    return new Promise((resolve) => {
        console.log(`Moving ${direction}...`);
        setTimeout(() => {
            console.log(`Moved ${direction}!`);
            resolve(direction);
        }, 1000);
    });
}

module.exports = { movePlayer };
