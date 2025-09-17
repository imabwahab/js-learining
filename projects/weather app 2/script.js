const weatherInput = document.getElementById('weather-input');
const searchButton = document.getElementById('search-button');
const locationButton = document.getElementById('location-button');

const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');


const apiKey = "9c8622b0f57d4d4b948163526251609";

async function fetchWeatherData(query) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=no`
    );
    if (!response.ok) throw new Error("City not found!");
    return await response.json();
  } catch (err) {
    alert(err.message);
    return null;
  }
}

// Update UI
function displayWeather(result) {
  if (!result) return;
  cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
  cityTime.innerText = `Local Time: ${result.location.localtime}`;
  cityTemp.innerText = `${result.current.temp_c} °C`;
}

// Search by city
searchButton.addEventListener('click', async () => {
  const value = weatherInput.value.trim();
  if (!value) {
    alert("Please enter a city name.");
    return;
  }
  const result = await fetchWeatherData(value);
  displayWeather(result);
});

// Wrap geolocation in Promise
function getCurrentPositionPromise() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// Search by current location
locationButton.addEventListener('click', async () => {
  try {
    const position = await getCurrentPositionPromise();
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    const result = await fetchWeatherData(`${lat},${long}`);
    displayWeather(result);
  } catch (err) {
    alert("Failed to get location: " + err.message);
  }
});
