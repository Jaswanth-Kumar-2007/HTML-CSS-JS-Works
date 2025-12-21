const btn = document.getElementById("submit");
const color = document.getElementById("res");
const dark = document.getElementById("dark");

btn.addEventListener("click",() => {
    event.preventDefault();
    if (color.value.trim() == ""){
        document.body.style.backgroundColor = "white";
        console.log("white")
    }
    document.body.style.backgroundColor = color.value.trim();
    console.log(color.value.trim())
})

dark.addEventListener("click",() => {
    event.preventDefault();
    document.body.classList.toggle("black");
})