
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const resultText = document.getElementById("resultText");

let name_list = {
    "Aarav": "9876543210" ,
    "Brianna":"9123456780" ,
    "Caleb": "9988776655" ,
    "Disha": "9001122334" ,
    "Ethan": "8080808080" ,
   "Farah": "9797979797" ,
    "Gavin":"9012345678" ,
    "Hiba":"9090909090" ,
     "Ishaan":"9345678123" ,
    "Jasmine":"9445566778" ,
    "Karthik":"9877896543" ,
   "Leah": "9054321876" ,
    "Mohan":"9332211009",
    "Nina":"9988001122",
     "Oscar" :"8800554433" ,
    "Priya": "9898989898" ,
    "Quentin": "9456123780" ,
    "Riya":"9911223344" ,
    "Sanjay":"9099887766" ,
    "Tara":"9334455667",
    "Uday":"9556677889" ,
    "Vani":"9000011223" ,
    "Waseem":"9665544332",
    "Xena":"9877001122" ,
    "Yusuf":"9321654780" ,
    "Sathvik":"9391106103",
    "Shamith":"9398012291",
    "Vardhan":"9949183896"
};



form.addEventListener("submit", function(event) {
    event.preventDefault();

    let enteredName = nameInput.value;

    if (name_list[enteredName]) {
        resultText.textContent = enteredName + " " + "Number: " + name_list[enteredName];
    } else {
        resultText.textContent = "Number Not Found";
    }
});


