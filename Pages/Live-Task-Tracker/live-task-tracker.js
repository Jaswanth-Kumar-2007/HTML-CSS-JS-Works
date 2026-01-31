const button = document.getElementById("submit");
const input = document.getElementById("text");
const noteBox = document.getElementById("note");

let res = JSON.parse(localStorage.getItem("store")) || [];

function renderNotes() {
    noteBox.innerHTML = "";
    for (let i = 0; i < res.length; i++) {
        noteBox.innerHTML += `<p>${i + 1}. ${res[i]}</p>`;
    }
}

function cleartext() {
    localStorage.removeItem("store");
}

renderNotes();

button.addEventListener("click",(event)=>{
    event.preventDefault();
    if (input.value.trim() === "") return;

    res.push(input.value);
    localStorage.setItem("store", JSON.stringify(res));

    input.value = "";
    renderNotes();
})