

var currentTempEL = document.getElementById("temperature");
var currentHumidityEL = document.getElementById("humidity");
var currentWindEL = document.getElementById("wind-speed");

var todayWeather = document.getElementById("today-weather");
var fiveDay = document.getElementById("five-day-header");

var searchCityBtn = document.getElementById("searchBtn");
var cleanHistoryBtn = document.getElementById("clearBtn");

var historyForm = document.getElementById("history");

var cityInput = document.querySelector("#enter-city");

var cityContainerEl = document.querySelector(".card-body")

// Api key var
var apiKey = "dd4d87d154e89b6f6b514b66a97d76de"

function formSubmitHandler(event) {
    event.preventDefault();

    var cityEl = cityInput.value.trim();

    if (cityEl) {
        getForecastWeather(cityEl);

        cityContainerEl.textContent = '';
        cityInput.value = '';
    } else {
        alert('Please enter a valid city');
    }
};



function getForecastWeather(cityName) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                return response.json();
            }
        }

        ).then(function (data) {
            console.log(data);
            var citySearched = data.city.name
            var currentData = data.list[0]
            var forecastArray = [data.list[7], data.list[15], data.list[23], data.list[31], data.list[39]];
            // var currentHumidity = data.list[0].main.humidity

            console.log(citySearched);
            console.log(currentData);
            console.log(forecastArray);
            console.log(data.list[7]);


            displayForecastData(forecastArray);




        })

}

var displayEL = document.getElementsByClassName("card-body");
// var newP = document.createElement("p")
function displayForecastData(data) {

    // citiesSearchTerm.textContent = searchTerm;

    for (var i = 0; i < data.length; i++) {




        var forecastTempEl = document.createElement("p");
        var final = forecastTempEl.textContent = (data[i].main.temp);
        displayEL.append(final)

        // var forecastHumidityEl = document.createElement("p");
        // forecastHumidityEl.innerHTML = (data[i].main.humidity);

        // var forecastWindEl = document.createElement("p");
        // forecastWindEl.innerHTML = (data[i].wind.speed);


    }



}





searchCityBtn.addEventListener('click', formSubmitHandler);












// getForecastWeather("tokyo")










// data.list[0].main
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={apiKey}