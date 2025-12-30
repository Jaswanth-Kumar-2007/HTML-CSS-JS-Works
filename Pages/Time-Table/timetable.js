function checkOrientation() {
    const isMobile = window.innerWidth <= 768;
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    const warning = document.getElementById("rotate-warning");

    if (isMobile && isPortrait) {
        warning.style.display = "flex";
    } else {
        warning.style.display = "none";
    }
}

checkOrientation();


window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);
