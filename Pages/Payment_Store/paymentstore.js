const ak47 = document.getElementById("ak47");
const poison = document.getElementById("poison");
const whisky = document.getElementById("whisky");
const diamond = document.getElementById("diamond");
const drug = document.getElementById("drug");
const hacker = document.getElementById("hacker");
const btn = document.getElementById("buy");
const home = document.getElementById("home");
let i = 1;
let cost = 0;

ak47.addEventListener("click",(event)=>{
    event.preventDefault();
    document.getElementById("cart-item").innerHTML += `<p> ${i}. AK47 --> $240</p>`
    i++;
    cost += 240;
    document.getElementById("totalcost").textContent = `Total : $ ${cost}`
})

poison.addEventListener("click",(event)=>{
    event.preventDefault();
    document.getElementById("cart-item").innerHTML += `<p> ${i}. Poison --> $370</p>`
    i++;
    cost += 370;
    document.getElementById("totalcost").textContent = `Total : $ ${cost}`
})

drug.addEventListener("click",(event)=>{
    event.preventDefault();
    document.getElementById("cart-item").innerHTML += `<p> ${i}. Drug --> $120</p>`
    i++;
    cost += 120;
    document.getElementById("totalcost").textContent = `Total : $ ${cost}`
})

diamond.addEventListener("click",(event)=>{
    event.preventDefault();
    document.getElementById("cart-item").innerHTML += `<p> ${i}. Diamond --> $200</p>`
    i++;
    cost += 200;
    document.getElementById("totalcost").textContent = `Total : $ ${cost}`
})

whisky.addEventListener("click",(event)=>{
    event.preventDefault();
    document.getElementById("cart-item").innerHTML += `<p> ${i}. Whisky --> $30</p>`
    i++;
    cost += 30;
    document.getElementById("totalcost").textContent = `Total : $ ${cost}`
})

hacker.addEventListener("click",(event)=>{
    event.preventDefault();
    document.getElementById("cart-item").innerHTML += `<p> ${i}. Hacker --> $800</p>`
    i++;
    cost += 800;
    document.getElementById("totalcost").textContent = `Total : $ ${cost}`
})

btn.addEventListener("click",(event)=>{
    event.preventDefault();
    if (cost > 0){
        document.getElementById("cart-item").textContent = "";
        document.getElementById("store").style.display = "none";
        document.getElementById("payment").style.display = "flex";
        document.getElementById("payment-value").textContent = `Total Cost : ${cost}`;
        i = 1;
        cost = 0;
    }else{
        alert("No Items Added to Cart");
    }
})

home.addEventListener("click",(event)=>{
    location.reload();
})
