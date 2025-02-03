async function getWeather(){
const city = document.getElementById('cityInput').value;
const apiKey = 'e1475860a3add91b1eedd6d4f89a6f23';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
try {
    const response = await fetch(url);
    if(!response.ok){
        throw new Error('city not found');
    }
    const data = await response.json();
    displayWeather(data);
    
} catch (error) {
    document.getElementById('weatherResult').innerHTML = `
            <p style="color: red;">Error: ${error.message}</p>
        `;
}
}
function displayWeather(data) {
    const weatherDiv = document.getElementById('weatherResult');
    weatherDiv.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>🌡️ Temperature: ${data.main.temp}°C</p>
        <p>🌤️ Weather: ${data.weather[0].description}</p>
        <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
    `;
}