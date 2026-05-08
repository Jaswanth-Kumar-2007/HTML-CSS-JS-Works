const content = document.getElementById("quote_text");
const button = document.getElementById("quote_generate");

async function getquote() {
    try {
        const quote = "https://motivational-spark-api.vercel.app/api/quotes";

        const res = await fetch(quote);

        console.log(res);

        if (!res.ok) {
            content.textContent = "Quote not Generated";
        } else {

            const data = await res.json();

            console.log(data);

            content.textContent = data[Math.floor(Math.random()*data.length)]["quote"];
        }

    } catch (err) {
        content.textContent = err.message;
    }
}

button.addEventListener("click",(event)=>{
    event.preventDefault();
    getquote();
})

