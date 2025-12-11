const params = new URLSearchParams(window.location.search);
const number = params.get("num");
const oncall = document.getElementById("display");
console.log(number);
display.value = number;

const buttons = document.querySelectorAll(".onbtn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    });
});
