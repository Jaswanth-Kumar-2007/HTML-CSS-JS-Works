let Per1 = document.getElementById("name1");
let Per2 = document.getElementById("name2");
const res = document.getElementById("result");
let i1;
let i2;
let myarray1 = [];
let myarray2 = [];
let flames = ["f","l","a","m","e","s"];
let answer = document.getElementById("ans");

res.addEventListener("click",(event)=>{
    event.preventDefault();

    myarray1 = [];
    myarray2 = [];
    flames = ["f","l","a","m","e","s"];

    i1 = Per1.value;
    i2 = Per2.value;

    for(let i = 0;i < i1.length;i++){
        myarray1.push(i1[i].toLowerCase());
    }
    console.log(myarray1);
    for(let j = 0;j < i2.length;j++){
        myarray2.push(i2[j].toLowerCase());
    }
    console.log(myarray2);
    for(let x = 0;x < myarray1.length;x++){
        for(let y = 0;y < myarray2.length;y++){
            if(myarray1[x] == myarray2[y]){
                myarray1.splice(x,1);
                myarray2.splice(y,1);
                x--;
                break;
            }
        }
    }
    console.log(myarray1);
    console.log(myarray2);
    let val = myarray1.length + myarray2.length;
    let index = 0;

    // Flames Rule 

    while(flames.length > 1){
        index = (index + val - 1) % flames.length;
        flames.splice(index,1);
        console.log(flames);
    }
    
    if(flames[0] == "f"){
        console.log("Friend");
        answer.value = "Friend";
    }else if(flames[0] == "l"){
        console.log("Love");
        answer.value = "Love";
    }else if(flames[0] == "a"){
        console.log("Affection");
        answer.value = "Affection";
    }else if(flames[0] == "m"){
        console.log("Marriage");
        answer.value = "Marriage";
    }else if(flames[0] == "e"){
        console.log("Enemy");
        answer.value = "Enemy";
    }else if(flames[0] == "s"){
        console.log("Sister");
        answer.value = "Sister";
    }
})




