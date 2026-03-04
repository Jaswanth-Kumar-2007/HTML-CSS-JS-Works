const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const restart = document.getElementById("restart");
let timebar = document.getElementById("time");
let scorebar = document.getElementById("score");

const totalLanes = 6;
const laneWidth = canvas.width / totalLanes;

const playerWidth = 40;
const playerHeight = 70;

let currentLane = 2;
let playerY = 300;

let score = 0;
let mm = 0;
let ss = 0;
let enemySpeed = 2;

let gameStarted = false;
let gameOver = false;
let timerId;
let roadOffset = 0;

// 🎵 BACKGROUND MUSIC
const bgMusic = new Audio("bgmusic.mp3");
bgMusic.loop = true;

// 🔊 Explosion sound
const explosionSound = new Audio("explosion.mp3");

// 🖼 Images
const playerImg = new Image();
playerImg.src = "player.png";

const enemyImgs = [];
enemyImgs[0] = new Image();
enemyImgs[0].src = "enemy1.png";
enemyImgs[1] = new Image();
enemyImgs[1].src = "enemy2.png";
enemyImgs[2] = new Image();
enemyImgs[2].src = "enemy3.png";
enemyImgs[3] = new Image();
enemyImgs[3].src = "enemy4.png";
enemyImgs[4] = new Image();
enemyImgs[4].src = "enemy5.png";

const explosionImg = new Image();
explosionImg.src = "explosion.png";

// 🚗 Dynamic Enemy Array
let enemies = [];

function createEnemy(offsetY = -100) {
    enemies.push({
        lane: Math.floor(Math.random() * totalLanes),
        y: offsetY,
        img: enemyImgs[Math.floor(Math.random() * 5)]
    });
}

// Start with 3 enemies
createEnemy(-100);
createEnemy(-300);
createEnemy(-500);

// 💥 Explosion
let explosionSize = 0;
let explosionX = 0;
let explosionY = 0;
let explosionActive = false;

restart.addEventListener("click", () => location.reload());

document.addEventListener("keydown", (event) => {

    if (event.key === "Enter" && !gameStarted) {
        gameStarted = true;
        timerId = setInterval(timeupdate, 1000);
        bgMusic.play();
    }

    if (!gameStarted || gameOver) return;

    if (event.key === "ArrowLeft" && currentLane > 0) {
        currentLane--;
        score++;
        scorebar.textContent = `Score : ${score}`;
    }

    if (event.key === "ArrowRight" && currentLane < totalLanes - 1) {
        currentLane++;
        score++;
        scorebar.textContent = `Score : ${score}`;
    }
});

function timeupdate() {
    ss++;

    if (ss >= 60) {
        mm++;
        ss = 0;
    }

    let formattedSS = ss < 10 ? "0" + ss : ss;
    let formattedMM = mm < 10 ? "0" + mm : mm;

    timebar.textContent = `Time : ${formattedMM} : ${formattedSS}`;

    // Speed scaling
    if (ss > 15) enemySpeed = 3;
    if (ss > 40) enemySpeed = 4;
    if (ss > 70) enemySpeed = 5;

    // 🚦 Traffic density increase
    if (ss === 20) createEnemy(-600);
    if (ss === 40) createEnemy(-800);
    if (ss === 60) createEnemy(-1000);
}

function drawStartScreen() {
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.font = "40px Arial";
    ctx.textAlign = "center";
    ctx.fillText("CAR DODGE GAME", canvas.width / 2, 200);
    ctx.font = "25px Arial";
    ctx.fillText("Press ENTER to Start", canvas.width / 2, 260);
}

function drawGameOver() {
    ctx.fillStyle = "white";
    ctx.font = "40px Arial";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 + 100);
}

function checkCollision(enemyX, enemyY) {
    let playerX = currentLane * laneWidth + laneWidth/2 - playerWidth/2;

    if (
        playerX < enemyX + playerWidth &&
        playerX + playerWidth > enemyX &&
        playerY < enemyY + playerHeight &&
        playerY + playerHeight > enemyY
    ) {
        gameOver = true;
        clearInterval(timerId);
        bgMusic.pause();
        explosionSound.play();

        explosionActive = true;
        explosionX = playerX;
        explosionY = playerY;

        return true;
    }
    return false;
}

function gameLoop() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!gameStarted) {
        drawStartScreen();
        requestAnimationFrame(gameLoop);
        return;
    }

    // Background gradient
    let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, "#222");
    gradient.addColorStop(1, "#555");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Moving road lines
    ctx.setLineDash([20, 20]);
    ctx.lineDashOffset = -roadOffset;
    ctx.strokeStyle = "white";
    ctx.lineWidth = 3;

    for (let i = 1; i < totalLanes; i++) {
        ctx.beginPath();
        ctx.moveTo(i * laneWidth, 0);
        ctx.lineTo(i * laneWidth, canvas.height);
        ctx.stroke();
    }

    ctx.setLineDash([]);
    roadOffset += enemySpeed;

    if (!gameOver) {

        for (let enemy of enemies) {

            enemy.y += enemySpeed;

            if (enemy.y > canvas.height) {
                enemy.y = -100;
                enemy.lane = Math.floor(Math.random() * totalLanes);
            }

            let enemyX = enemy.lane * laneWidth + laneWidth/2 - playerWidth/2;

            ctx.drawImage(enemy.img, enemyX, enemy.y, playerWidth, playerHeight);

            checkCollision(enemyX, enemy.y);
        }

        let playerX = currentLane * laneWidth + laneWidth/2 - playerWidth/2;
        ctx.drawImage(playerImg, playerX, playerY, playerWidth, playerHeight);

    } else {

        if (explosionActive) {
            explosionSize += 5;
            ctx.drawImage(
                explosionImg,
                explosionX - explosionSize/2,
                explosionY - explosionSize/2,
                explosionSize,
                explosionSize
            );

            if (explosionSize > 120) explosionActive = false;
        }

        drawGameOver();
    }

    requestAnimationFrame(gameLoop);
}

gameLoop();