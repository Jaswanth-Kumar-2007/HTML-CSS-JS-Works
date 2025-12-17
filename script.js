const btn = document.getElementById("themeToggle");

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
