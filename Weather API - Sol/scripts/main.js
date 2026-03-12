const sunnyIcon = "&#9728" // ☀️
const rainyIcon = "&#127783" // 🌧️

const dublin = {
  "lat": 53.3331, // find latitude and longitude for dublin in the API documentation
  "long": -6.2489
}
const london = {
  "lat": 51.5085, // find latitude and longitude for london in the API documentation
  "long": -0.1257
}
const paris = {
  "lat": 48.8534, // find latitude and longitude for paris in the API documentation
  "long": 2.3488
}
const newyork = {
  "lat": 40.7143, // find latitude and longitude for newyork in the API documentation
  "long": -74.006
}
const rio = {
  "lat": -22.9064, // find latitude and longitude for rio in the API documentation
  "long": -43.1822
}

let forecastContainer = document.getElementById("forecastContainer")


window.onload = function () {
  document.getElementById("citySelect").onchange = function () {

    //clear container
    forecastContainer.innerHTML = ""

    let cityName = document.getElementById("citySelect").value

    if (cityName === "") {
      return
    } else if (cityName === "dublin") {
      city = dublin
    } else if (cityName === "london") {
      city = london
    } else if (cityName === "paris") {
      city = paris
    } else if (cityName === "newyork") {
      city = newyork
    } else if (cityName === "rio") {
      city = rio
    }

    forecastContainer.classList.remove("hidden")

    console.log("Selected city:", city)
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.long}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=GMT`)
      .then(response => response.json())
      .then(data => { processWeatherData(data) })
      .catch(error => console.error("Error fetching weather data:", error))
  }
}

function processWeatherData(data) {
  console.log(data)
  let size = "w3-third"

  num_days = data.daily.time.length
  for (let i = 0; i < num_days; i++) {
    const date = data.daily.time[i]
    const maxTemp = data.daily.temperature_2m_max[i]
    const minTemp = data.daily.temperature_2m_min[i]
    const rainProb = data.daily.precipitation_probability_max[i]

    icon = sunnyIcon
    if (rainProb > 5) {
      icon = rainyIcon
    } 

    if(i === num_days-1){
      size = "w3-col s12 "
    }
    createWeatherCard(date, maxTemp, minTemp, rainProb, icon, size)
  }

}

function createWeatherCard(date, maxTemp, minTemp, rainProb, icon, size) {

  let col = document.createElement("div")
  col.className =  size + " w3-margin-bottom"

  let card = document.createElement("div")
  card.className = "w3-card w3-white w3-padding"

  let dateDiv = document.createElement("div")
  dateDiv.className = "w3-large w3-text-grey"
  dateDiv.textContent = date

  let iconDiv = document.createElement("div")
  iconDiv.className = "w3-jumbo"
  iconDiv.innerHTML = icon

  let maxDiv = document.createElement("div")
  maxDiv.className = "w3-large"
  maxDiv.textContent = `Max: ${maxTemp}°C`

  let minDiv = document.createElement("div")
  minDiv.className = "w3-large"
  minDiv.textContent = `Min: ${minTemp}°C`

  let rainDiv = document.createElement("div")
  rainDiv.className = "w3-text-blue"
  rainDiv.textContent = `Rain: ${rainProb} % `

  card.appendChild(dateDiv)
  card.appendChild(iconDiv)
  card.appendChild(maxDiv)
  card.appendChild(minDiv)
  card.appendChild(rainDiv)

  col.appendChild(card)
  forecastContainer.appendChild(col)
}