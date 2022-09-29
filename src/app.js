
function displayTemperature(response) {
  console.log(response.data.name);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;

  
 
  
}

let apiKey = "25cd738e3cff88977f45d77cbd9bfef3";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Istanbul&appid=${apiKey}&units=metric`;


axios.get(apiUrl).then(displayTemperature);