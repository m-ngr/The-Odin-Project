/* eslint-disable no-console */
import showWeatherInfo from "./output";

const API_KEY = "4f28884172bd56b677081236108aad10";
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");

function getWeatherInfo(city = "") {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  ).then((res) => res.json());
}

function getLocalCity() {
  return fetch("https://ipapi.co/city/").then((res) => res.text());
}

function search(event) {
  event.preventDefault();
  const city = searchInput.value.trim();
  if (city === "") return;

  getWeatherInfo(city).then(showWeatherInfo).catch(console.error);
}

export default function run() {
  getLocalCity()
    .then(getWeatherInfo)
    .then(showWeatherInfo)
    .catch(console.error);

  searchButton.addEventListener("click", search);

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      search(e);
    }
  });
}
