alert("Welcome to KJK Access")

const btn = document.getElementById("themeToggle");
const button = document.getElementById("page-change")

btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

function updateTime() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    if (hours >12){
        hours = hours - 12;
        time_display.value = hours + ":" + minutes + ":" + seconds + " " + "PM";
    }else{
        time_display.value = hours + ":" + minutes + ":" + seconds + " " + "AM";
    }

    
}

setInterval(updateTime, 1000); 

button.addEventListener("click", function () {
    const img = document.getElementById("off-button");

    if (img.src.includes("off-button.png")) {
        img.src = "Assets/on-button.png";
        document.getElementById("page-1").style.display = "none"
        document.getElementById("page-2").style.display = "grid"
        document.getElementById("page-detail").textContent = "Page 2"
    } else {
        img.src = "Assets/off-button.png";
        document.getElementById("page-2").style.display = "none"
        document.getElementById("page-1").style.display = "grid"
        document.getElementById("page-detail").textContent = "Page 1"
    }
});

