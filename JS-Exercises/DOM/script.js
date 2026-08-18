const set = document.getElementById("task_setter");
const res = document.getElementById("task_submit");
const bod = document.querySelector(".task_body");

res.addEventListener('click',(e) => {
    e.preventDefault();
    const div = document.createElement("div");
    div.className = "task_value";
    const p = document.createElement("p");
    p.textContent = set.value;
    const button = document.createElement("button")
    button.className = "task_delete";
    button.textContent = "Delete";
    div.appendChild(p);
    div.appendChild(button);
    bod.appendChild(div);
    set.value = "";
});

bod.addEventListener('click', (e) => {
    if (e.target.classList.contains("task_delete")) {
        e.target.parentElement.remove();
    }
});

