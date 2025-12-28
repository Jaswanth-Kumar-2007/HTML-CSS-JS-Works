const val = document.getElementById("task-bar");
const sub = document.getElementById("submit");
const task = document.getElementById("task-display");
let i = 1;


sub.addEventListener("click",(event) => {
    event.preventDefault();
    console.log(val.value);
    if (val.value != ""){
        document.getElementById("task-display").style.border = "2px solid black";
        document.getElementById("error").textContent = "";
        task.innerHTML += `<p>${i}. ${val.value}</p>`;
        i ++;
        val.value = ""
    }else{
        document.getElementById("error").textContent = "Enter Value is Inappropriate";
    }
    
})
