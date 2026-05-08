const display = document.getElementById("detail_bar");
const chapter = document.getElementById("bgd_cha");
const verse = document.getElementById("bgd_ver");
const btn = document.getElementById("bgd_sub");
const language = document.getElementById("bgd_lang");
let cha = 0;
let ver = 0;
let lang = "";

async function getbgd(cha,ver,lang){
    try{
        let data = `https://corsproxy.io/?https://gita-api.vercel.app/${lang}/verse/${cha}/${ver}`;
        let bgd = await fetch(data);
        let res = await bgd.json();
        console.log(bgd);
        console.log(res);
        if(res["purport"]){
            display.value = res["purport"][0];
        }else{
            display.value = res["error"];
        }
    }catch(err){
        console.log(err);
    }
}

btn.addEventListener("click",(event)=>{
    event.preventDefault();
    cha = chapter.value;
    console.log(cha);
    ver = verse.value;
    console.log(ver);
    lang = language.value;
    console.log(lang);
    getbgd(cha,ver,lang);
})






