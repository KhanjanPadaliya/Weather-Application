const apiKey = "a2b9a0ff6b3ba17795170e8a29aff594";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("cityname");
const searchBtn = document.getElementById("Btn");

const weatherIcon = document.getElementById("weather-icon");
async function checkWeather(city) {
    const responce = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (responce.status == 404) {
        document.getElementById("error").style.display = "block";
        document.getElementById("weather").style.display = "none";
    }
    else {
        var data = await responce.json();
        console.log(data);
        document.getElementById("city").innerHTML = data.name;
        document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.getElementById("feels_like").innerHTML = "Feels like: "+Math.round(data.main.feels_like) + "°c";
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("wind").innerHTML = data.wind.speed + " km/h";
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        else if (data.weather[0].main == "Haze") {
            weatherIcon.src = "images/Haze.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }

        document.getElementById("weather").style.display = "block";
        document.getElementById("error").style.display = "none";
    }

}

searchBtn.addEventListener("click", function () {
    checkWeather(searchBox.value);
})