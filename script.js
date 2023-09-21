const apiKey = "a320d8486cc2177266f45bfcaa6738d6"; // Your API key here
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=tokyo";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`); // Fetch data from API. await is a keyword that waits for the promise to be resolved.
    var data = await response.json(); // Convert data to JSON.
    
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;
}

checkWeather();