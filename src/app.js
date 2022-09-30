function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDay();
  return `${day} ${hours}:${minutes}`;
}
function displayTemperature(response) {
  
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;

  let feelsLikeElement = document.querySelector("#feels-like");
  feelsLikeElement.innerHTML = Math.round(response.data.main.feels_like);

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);

  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);

  
 
  
}

let apiKey = "25cd738e3cff88977f45d77cbd9bfef3";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Istanbul&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(displayTemperature);