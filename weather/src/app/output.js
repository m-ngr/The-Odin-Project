const output = {
  container: document.getElementById("weather-info"),
  city: document.getElementById("city-name"),
  country: document.getElementById("country"),
  temperature: document.getElementById("temperature"),
  temperatureFeel: document.getElementById("temperature-feel"),
  humidity: document.getElementById("humidity"),
  wind: document.getElementById("wind"),
};

const error = {
  container: document.getElementById("weather-error"),
  message: document.getElementById("error-msg"),
};

function showInfo(info) {
  output.container.classList.remove("hide");
  error.container.classList.add("hide");

  output.city.innerText = info.name;
  output.country.innerText = info.sys.country;
  output.temperature.innerText = `${info.main.temp} °C`;
  output.temperatureFeel.innerText = `Feels Like: ${info.main.feels_like} °C`;
  output.humidity.innerText = `Humidity: ${info.main.humidity} %`;
  output.wind.innerText = `Wind: ${info.wind.speed} km/h`;
}

function showError(message) {
  error.container.classList.remove("hide");
  output.container.classList.add("hide");

  error.message.innerText = message;
}

export default function showWeatherInfo(info) {
  if (info.cod === 200) {
    showInfo(info);
  } else {
    showError(info.message);
  }
}
