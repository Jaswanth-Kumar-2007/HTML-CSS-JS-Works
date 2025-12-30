const button = document.getElementById("switch");

const button1 = document.getElementById("reload");

let isSathvik = false;

button.addEventListener("click", (event) => {
    event.preventDefault();

    isSathvik = !isSathvik;

    document.querySelectorAll(".Sathvik").forEach(element => {
        element.style.display = "block";
        element.style.backgroundColor = "#E56B6F";
    });

    document.querySelectorAll(".Jaswanth").forEach(element => {
        element.style.display = "none";
    });

    document.querySelectorAll(".Free").forEach(element => {
        element.style.backgroundColor = "#EAAC8B";
    });
});

button1.addEventListener("click",(event)=>{
    event.preventDefault();

    if (isSathvik){
        location.reload();
    }
})


