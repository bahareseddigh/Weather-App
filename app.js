const apiKey = "06a8bc90ecdfec3b13370cc0ada7e76a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=tehran";


async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}




checkWeather();