const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");



ctx.setLineDash([]); // reset

// Player position
let x = 25;
let y = 300;
let speed = 5;

// Movement flags
let moveUp = false;
let moveDown = false;
let moveLeft = false;
let moveRight = false;

// Key Down
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") moveUp = true;
    if (event.key === "ArrowDown") moveDown = true;
    if (event.key === "ArrowLeft") moveLeft = true;
    if (event.key === "ArrowRight") moveRight = true;
});

// Key Up
document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowUp") moveUp = false;
    if (event.key === "ArrowDown") moveDown = false;
    if (event.key === "ArrowLeft") moveLeft = false;
    if (event.key === "ArrowRight") moveRight = false;
});

// Game Loop
function gameLoop() {

    // Clear screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.setLineDash([15, 15]);

    for (let i = 1; i < 6; i++) {
        ctx.strokeStyle = "black";
        ctx.beginPath();
        ctx.moveTo(i * 100, 0);
        ctx.lineTo(i * 100, 400);
        ctx.stroke();
    }

    // Update position
    if (moveUp) y -= speed;
    if (moveDown) y += speed;
    if (moveLeft) x -= speed;
    if (moveRight) x += speed;

    // Draw player
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, 50, 50);

    requestAnimationFrame(gameLoop);
}

// Start game
gameLoop();