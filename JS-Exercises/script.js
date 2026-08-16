
// let and var difference

/*
{let name = "Hello";}

console.log(name);
*/

// JavaScript DataTypes

/*
let x = 3;
let x = "KJK";
let x = BigInt(2);
let x = {name:"KJK"};
let x;
let x = null; // Object
let x = Symbol();

console.log(typeof(x));
*/

// Power 
// let x = 4**2;
// let x = Math.pow(4,2);

// console.log(x);


// const cars = ["BMW","Volvo"];
// let len = cars.length;
// let text = "";

/*
for(let i = 0;i < len;i++){
    text += cars[i];
    text += " ";
}
*/

/*
let i = 0;
while(cars[i]){
    text += cars[i];
    i++;
}
console.log(text);
*/

/*
let text = "";

loop1 : for(let j = 1;j < 5;j++){
    loop2 : for(let i = 1;i < 5;i++){
        if(i == 3){
            break loop1;
        }
        text += i;
    }
}


console.log(text);
*/

// String Operations

/*
let text = "Hello World ! ";
let text2 = "KJK";

console.log(text.length);
console.log(text.at(0));
console.log(text.charAt(0));
console.log(text.charCodeAt(0));
console.log(text.concat(text2));
console.log(text.slice(2,13))
console.log(text.substring(2,13))
console.log(text.substr(2,10))

console.log(text.toUpperCase());
console.log(text.toLowerCase());


let text3 = " K J K "
console.log(text3.trim())
console.log(text3.trimStart())
console.log(text3.trimEnd())
console.log(text3.padStart(16,"a"))
console.log(text3.padEnd(16,"a"))

console.log(text3.split(' '))

console.log(text3.indexOf("K"));
console.log(text3.lastIndexOf("K"));
console.log(text3.search("K"));
console.log(text3.includes("K"));
console.log(text3.startsWith(" "));
*/

// Coversion

/*
let num = 123.1456;
let str = "10";
let x = 9.656

let a = num.toString();
let b = x.toExponential(2);
let c = Number(num);

console.log(typeof(a));
console.log(b);
console.log(c);

console.log(parseInt(str));
*/


// Arrow Functions

/*
const multiply = (a,b) => a*b;
const hello = (a) => {
    if(a > 10){
        console.log("Hi");
    }else if(a > 0){
        console.log("Hello");
    }else{
        console.log("None");
    }
};

console.log(multiply(2,3));
hello();
*/

// Objects

/*
const person = {
    "firstname" : "KJK",
    "rollno" : 2
}

console.log(person)
console.log(person["firstname"])

const app = new Object({
    firstname : "John",
    secondname : "Doe",
    fullname : function(){
        return this.firstname + " " + this.secondname
    }
})

const fruits = {Bananas : 300,Oranges : 200,Apples: 500}



console.log(app.fullname())
console.log(app.firstname)
delete app.secondname
console.log(app)
console.log("firstname" in app)
*/

// Dates 

/*
const d = new Date();

console.log(d.getDate());
console.log(d.getDay());
console.log(d.getTime());
console.log(d.getUTCDate());
console.log(d.getFullYear());
*/

/*
const cars = ["Saab","Volvo","BMW"];

console.log(cars)
console.log(cars.toString())

const fruits = ["Banana","Orange","Apple","Mango","Kiwi"]

console.log(fruits.copyWithin(2,0,2));

const newArr = fruits.flatMap(x => [x.slice(0,3)])

console.log(newArr);

console.log(fruits.splice(2,0,"Lemon","Kiwi"));

console.log(fruits.slice(0,3));

const numbers = [1,2,3,4,5,6]

let text = " ";

const myFunction = (value,index,array) => {
    text += value + " ";
}

numbers.forEach(myFunction);

console.log(text);

numbers.push(7)

console.log(numbers)
*/

// const A = new Set(['a','b','c']);
// const B = new Set(['b','c','d','e']);

// A.add('d');
// console.log(A.intersection(B));

// Maps

/*
const fruits = new Map();

fruits.set("apples",500);
fruits.set("banana",300);

console.log(fruits.keys());
console.log(fruits.values());

console.log(fruits.get("apples"));
console.log(fruits.has("apples"));
console.log(fruits.size);

const vechicle = ["BMW","Suzuki","Volvo"]

vechicle.forEach((index,value) => {
    console.log(index + " " + value);
})

const poor = vechicle.filter((x) => x != "BMW");

console.log(poor);
*/

// const arr = [10, 20, 30];

// const iterator = arr[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

/*
try {
    if (true) {
        console.log("if")
        throw new Error("Something went wrong");
    }
} catch (error) {
    console.log("catch")
    console.log(error.message);
}
*/

/*
async function GetNews(){
    const url = 'https://api.worldnewsapi.com/top-news?source-country=us&language=en&date=2024-05-29';
    const apiKey = '54daf954a86747729d802e2cb83c9ccd';

    const data = await fetch(url,{method: 'GET',
    headers: {
            'x-api-key': apiKey
        }
    })
    try{
        const res = await data.json();
        console.log(typeof(res));
        console.log(typeof(res.top_news));
        console.log(res.top_news.length);
        console.log(res["top_news"][0].news);
    }catch(e){
        console.log(e.message);
    }
}

GetNews();
*/
