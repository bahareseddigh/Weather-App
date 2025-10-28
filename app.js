const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        // console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "./assets/images/clouds.png";
            document.querySelector(".card").style.backgroundImage = "linear-gradient(45deg, #809bd9ff 0%, #b9ebd0ff 100%)";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "./assets/images/clear.png";
            document.querySelector(".card").style.backgroundImage = "linear-gradient(to right, #4facfe 0%, #05dde9ff 100%)";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "./assets/images/rain.png";
            document.querySelector(".card").style.backgroundImage = "linear-gradient(135deg, #0b3b6f 0%, #556b78 100%)";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./assets/images/drizzle.png";
            document.querySelector(".card").style.backgroundImage = "linear-gradient(135deg, #525252 0%, #3d72b4 100%)";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "./assets/images/mist.png";
            document.querySelector(".card").style.backgroundImage = "linear-gradient(to right, #9ba5a7 0%, #d8e1e3 100%)";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "./assets/images/snow.png";
            document.querySelector(".card").style.backgroundImage = "linear-gradient(135deg, #c7e1f9ff 0%, #aecee9ff 60%, #9bb7d8 100%)";
        }


        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }


}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    searchBox.value = "";
});

searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
        searchBox.value = "";
    }
});


