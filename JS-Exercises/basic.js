const on = document.getElementById("bulbon");
const off = document.getElementById("bulboff");
let blb = document.getElementById("bulb");
let txt = document.getElementById("text");

on.addEventListener("click",(e)=>{
    e.preventDefault();
    blb.src = "pic_bulbon.gif";
    document.getElementById("text").innerHTML = "Bulb ON";
    window.alert("Bulb ON");
})

off.addEventListener("click",(e)=>{
    e.preventDefault();
    blb.src = "pic_bulboff.gif";
    document.getElementById("text").innerHTML = "Bulb OFF";
    window.alert("Bulb OFF");
})


