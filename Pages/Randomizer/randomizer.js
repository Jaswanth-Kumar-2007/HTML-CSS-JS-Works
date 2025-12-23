const number = document.getElementById("number");
let set = document.getElementById("set");
const btn = document.getElementById("back")

function random(data){
    let s = Math.round(Math.random() * number.value)
    let p = data.split(",");
    if (number.value == p.length){
        if (s == 0){
            console.log(p[1],0)
            return p[0];
        }else{
            console.log(p[s-1],s)
            return p[s-1];
        }
    }else{
        return "Input not Match with Number"
    }
}

document.getElementById("sec-1").style.display = "block";
document.getElementById("sec-2").style.display = "none";

document.getElementById("sub").addEventListener("click",() => {
    event.preventDefault();
    document.getElementById("num-error").textContent = ""
    console.log(number.value);
    if (number.value <= 0){
        document.getElementById("num-error").textContent = "Wrong Input"
    }else{
        document.getElementById("sec-1").style.display = "none";
        document.getElementById("sec-2").style.display = "flex";
    }
    console.log("Printed");
    
})

document.getElementById("subm").addEventListener("click",() => {
    event.preventDefault();
    document.getElementById("dis").value = random(set.value);
    console.log("Randomized");
})


btn.addEventListener("click",() => {
    document.getElementById("sec-2").style.display = "none";
    document.getElementById("sec-1").style.display = "block";
})






