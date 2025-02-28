const apiKey = "94c69cb1deef1377532a4ce758f8875f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const card = document.querySelector("")

async function checkWeather(city){
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();

        if (data.cod === 200) {
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
            document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
            document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

            if(data.weather[0].main === "Clouds"){
                weatherIcon.src = "images/clouds.png";
            } 
            else if(data.weather[0].main === "Clear"){
                weatherIcon.src = "images/clear.png";
            } 
            else if(data.weather[0].main === "Rain"){
                weatherIcon.src = "images/rain.png";
            } 
            else if(data.weather[0].main === "Drizzle"){
                weatherIcon.src = "images/drizzle.png";
            } 
            else if(data.weather[0].main === "Mist"){
                weatherIcon.src = "images/mist.png";
            } 
            else if(data.weather[0].main === "Snow"){
                weatherIcon.src = "images/snow.png";
            }
            else if(data.weather[0].main === "Haze"){
                weatherIcon.src = "images/haze.png";
            }
        } 
        else {
            alert("City not found. Please enter a valid city name.");
        }
    } 
    catch (error) {
        console.error('Error fetching weather data:', error);
        alert("Failed to retrieve weather data. Please try again.");
    }
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim(); 
    if (city) {
        checkWeather(city); 
    } 
    else {
        alert("Please enter a city name.");
    }
});