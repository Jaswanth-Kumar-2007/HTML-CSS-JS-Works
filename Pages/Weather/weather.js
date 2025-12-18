const weatherForm = document.getElementById("weather-form");
const cityInput = document.getElementById("search-bar");
const card = document.getElementById("weather-bar");
const apiKey = "b25d926087b0a801314267cc716d0717";
const weath = document.getElementById("weather")
const btn = document.getElementById("dark");

btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    weath.classList.toggle("dark-mode");
});


card.style.display = "none";

weatherForm.addEventListener("submit",async event => {
     event.preventDefault();
     const city = cityInput.value.trim();
     const latdata = await getlatandlong(city);
     if (latdata.results && latdata.results.length > 0){
        console.log("City Found")
        console.log(latdata)
        const lat = latdata.results[0]["latitude"]
        const long = latdata.results[0]["longitude"]
        console.log(lat,long)
        const weatherData = await getWeatherData(lat,long);
        let citname = weatherData["name"];
        console.log(citname,city)
        if (citname.toLowerCase() == city.toLowerCase()){
            displayWeatherinfo(weatherData);
            console.log("Details Printed")
        }else{
            displayError();
            console.log("Details Not Printed")
        }
     }else{
        console.log("City Not Found")
        displayError();
     }
});


async function getlatandlong(city){
    const ans = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
    const res = await fetch(ans);
    if (!res.ok){
        throw new Error("Could not Fetch Latitude and Longitude");
    }
    return await res.json()
}


async function getWeatherData(lat,long){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
    console.log(apiUrl);

    const response = await fetch(apiUrl);

    if (!response.ok){
        throw new Error("Could not fetch weather data");
    }
    return await response.json();
}

function displayWeatherinfo(data){
    card.style.display = "flex";
    console.log(data);
    const icon = data.weather[0]["main"];
    let citname = data["name"];
    const temp = data.main["temp"];
    const hum = data.main["humidity"];
    document.getElementById("citydisplay").textContent = citname;
    document.getElementById("descdisplay").textContent = icon;
    document.getElementById("tempdisplay").textContent = Math.round((temp - 273)) + "°C";
    document.getElementById("humidity").textContent = "Humidity : " + hum + "%";
    if (icon == "Clear"){
        document.getElementById("weatheremoji").textContent = "☁️"
    }else if (icon == "Haze"){
        document.getElementById("weatheremoji").textContent = "🌫️"
    }else if (icon == "Clouds"){
        document.getElementById("weatheremoji").textContent = "🌩️"
    }else if (icon == "Rainy"){
        document.getElementById("weatheremoji").textContent = "⛈️"
    }else{
        document.getElementById("weatheremoji").textContent = "❓"
    }
    document.getElementById("errordisplay").style.display = "none";
}



function displayError(){
    document.getElementById("errordisplay").style.display = "block";
    document.getElementById("errordisplay").textContent = "City Not Found";
    card.style.display = "none";  
}

