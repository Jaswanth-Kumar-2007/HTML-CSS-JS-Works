const btn1 = document.getElementById("increase");
const btn2 = document.getElementById("decrease");
const btn3 = document.getElementById("reset");
let incr = 0;
let decr = 0;
let res = 0;

btn1.addEventListener("click",() => {
    incr += 1;
    res += 1;
    console.log(res);
    document.getElementById("text-display").textContent = res;
    document.getElementById("increment").textContent = "No. of Increments : " + incr;
})

btn2.addEventListener("click",() => {
    decr += 1;
    res -= 1;
    console.log(res);
    document.getElementById("text-display").textContent = res;
    document.getElementById("decrement").textContent = "No. of Decrements : " + decr;
})

btn3.addEventListener("click",() => {
    incr = 0;
    decr = 0;
    res = 0;
    document.getElementById("text-display").textContent = res;
    document.getElementById("decrement").textContent = "No. of Decrements : " + decr;
    document.getElementById("increment").textContent = "No. of Increments : " + incr;
})