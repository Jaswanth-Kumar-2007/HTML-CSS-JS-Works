const display = document.getElementById("dis");
const reset = document.getElementById("reset");
let i;


let saved = localStorage.getItem("i");
let num = parseInt(saved,10);
if (saved) {
  display.value = num;
  console.log(num);
  num += 1;
  localStorage.setItem("i",num);
}else{
    localStorage.setItem("i",0);
    console.log(0);
}

reset.addEventListener("click",() => {
    localStorage.setItem("i",0);
    location.reload();
    console.log("Reset")
})

