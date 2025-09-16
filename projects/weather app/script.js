
const weatherInput = document.getElementById('weather-input');
const searchButton = document.getElementById('search-button');

const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

const apiKey = "9c8622b0f57d4d4b948163526251609";

async function fetchWeatherData(cityName) {
  const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`);
  return await promise.json();
}

searchButton.addEventListener('click', async () => {
  const value = weatherInput.value;
  const result = await fetchWeatherData(value);
  console.log(result);
  cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
  cityTime.innerText = result.location.localtime;
  cityTemp.innerText = `${result.current.temp_c} °C`;
})
