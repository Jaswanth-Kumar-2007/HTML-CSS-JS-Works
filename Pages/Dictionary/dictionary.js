const wordsearch = document.getElementById("word-search");
const wordinput = document.getElementById("search-bar");
const card = document.getElementById("word-bar");

card.style.display = "none";

wordsearch.addEventListener("submit", async (event) => {
    event.preventDefault();
    const word = wordinput.value;
    try {
        const worddata = await getworddata(word);
        if (!worddata || worddata.title === "No Definitions Found") {
            displayError();
            return;
        }
        if (!worddata[0] || !worddata[0].word) {
            displayError();
            return;
        }
        if (worddata[0].word.toLowerCase() === word.toLowerCase()) {
            displaydata(worddata);
            console.log("Details Printed");
        } else {
            displayError();
        }
    } catch (error) {
        console.error(error);
        displayError();
    }
});



async function getworddata(word){
    const apiurl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    console.log(apiurl);
    const response = await fetch(apiurl);
    if (!response.ok){
        throw new Error ("Could not fetch Word Data")
    }
    return await response.json();
}

function displaydata(data){
    card.style.display = "flex";
    const word = data[0]["word"];
    const partsofspeech = data[0].meanings[0]["partOfSpeech"];
    const definition = data[0].meanings[0]["definitions"][0]["definition"];
    document.getElementById("word").textContent = "Word : " + word;
    document.getElementById("partofspeech").textContent = "Parts of Speech : " + partsofspeech;
    document.getElementById("definition").textContent = "Definition : " + definition;
    document.getElementById("errordisplay").style.display = "none";
}

function displayError(){
    document.getElementById("errordisplay").style.display = "block";
    document.getElementById("errordisplay").textContent = "Word Not Found";
    card.style.display = "none";  
}