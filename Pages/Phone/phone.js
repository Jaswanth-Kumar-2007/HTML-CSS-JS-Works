const phone = document.getElementById("display")

function appendToDisplay(input){
    phone.value += input
}

function clearDisplay(){
    var l = phone.value.length;
    phone.value = display.value.slice(0,l-1);
}

function call() {
    let number = phone.value;

    if (number.length === 10) {
        alert("Calling " + number + " ...");
        window.location.href = "on-call/on-call.html?num=" + number;
    } else {
        alert("Invalid Number! Please enter 10 digits.");
    }
}
