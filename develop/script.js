//ed9e74b645329e040d2d7fc1db70ac25
//f1483ebfebd864431fd44f2588c040e8
//http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=f1483ebfebd864431fd44f2588c040e8
//create an event listener upon clicking the search button. Whatever the value is in the input field will be the city name
//create function for getting current data and weather info
// get any container from your webpage
// var dataContainer = the name from index.html
// fetch all the data and then append specific data to the page for the API

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
//

var weatherSearchBtn = document.getElementById("search-btn");

var weatherDataCtn = document.getElementById("cardBody");

var forecastCtn = document.querySelector(".forecast-container");

// console.log(weatherSearchBtn);

function getWeatherData() {
  var searchLocation = inputField.value;

  var latAndLon =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    searchLocation +
    "&limit=1&appid=f1483ebfebd864431fd44f2588c040e8";

  // console.log(latAndLon);

  //use a fetch function to make a call to an API
  //return exits the function

  fetch(latAndLon, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })

    .then(function (latAndLonData) {
      const lat = latAndLonData[0].lat;
      const lon = latAndLonData[0].lon;

      // console.log(lat, lon, latAndLonData);

      var weatherApi =
        "http://api.openweathermap.org/data/2.5/forecast?lat=" +
        lat +
        "&lon=" +
        lon +
        "&units=imperial&appid=f1483ebfebd864431fd44f2588c040e8";
      console.log(weatherApi);

      fetch(weatherApi, {
        method: "GET",
      })
        .then((res) => {
          return res.json();
        })

        // .then((weatherData) => console.log(weatherData));
        .then(function (weatherData) {
          console.log(weatherData);
          // for (i = 0; i < weatherData.data; i++) {
          //   console.log(weatherData);
          // }
          const currentDate = new Date().toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          });

          document.querySelector(".current-date").innerText =
            "Date: " + currentDate;

          const name = weatherData.city.name;
          const temp = weatherData.list[0].main.temp;
          const humidity = weatherData.list[0].main.humidity;
          const windSpeed = weatherData.list[0].wind.speed;
          const date0 = weatherData.list[0].dt_txt;
          // console.log(name, temp, humidity, windSpeed);

          document.querySelector(".card-title").innerText =
            "Current Weather In " + name;

          document.querySelector(".temperature").innerText =
            "Temperature: " + temp;

          document.querySelector(".humidity").innerText =
            "Humidity: " + humidity;

          document.querySelector(".wind-speed").innerText =
            "Wind Speed: " + windSpeed;

          const forecastTemp = weatherData.list[8].main.temp;
          const forecastHumidity = weatherData.list[8].main.humidity;
          const forecastWindSpeed = weatherData.list[8].wind.speed;
          const date1 = weatherData.list[8].dt_txt;

          const forecastTemp2 = weatherData.list[16].main.temp;
          const forecastHumidity2 = weatherData.list[16].main.humidity;
          const forecastWindSpeed2 = weatherData.list[16].wind.speed;
          const date2 = weatherData.list[16].dt_txt;

          const forecastTemp3 = weatherData.list[24].main.temp;
          const forecastHumidity3 = weatherData.list[24].main.humidity;
          const forecastWindSpeed3 = weatherData.list[24].wind.speed;
          const date3 = weatherData.list[24].dt_txt;

          const forecastTemp4 = weatherData.list[32].main.temp;
          const forecastHumidity4 = weatherData.list[32].main.humidity;
          const forecastWindSpeed4 = weatherData.list[32].wind.speed;
          const date4 = weatherData.list[32].dt_txt;

          // const forecastTemp5 = weatherData.list[40].main.temp;
          // const forecastHumidity5 = weatherData.list[40].main.humidity;
          // const forecastWindSpeed5 = weatherData.list[40].wind.speed;

          document.querySelector(".forecast-header").innerText =
            "5 Day Forecast";

          document.querySelector(".forecast-temperature0").innerText =
            "Temperature: " + temp;

          document.querySelector(".forecast-humidity0").innerText =
            "Humidity: " + humidity;

          document.querySelector(".forecast-wind-speed0").innerText =
            "Wind Speed: " + windSpeed;

          document.querySelector(".date-0").innerText = "Date: " + date0;

          document.querySelector(".forecast-temperature1").innerText =
            "Temperature: " + forecastTemp;

          document.querySelector(".forecast-humidity1").innerText =
            "Humidity: " + forecastHumidity;

          document.querySelector(".forecast-wind-speed1").innerText =
            "Wind Speed: " + forecastWindSpeed;

          document.querySelector(".date-1").innerText = "Date: " + date1;

          document.querySelector(".forecast-temperature2").innerText =
            "Temperature: " + forecastTemp2;

          document.querySelector(".forecast-humidity2").innerText =
            "Humidity: " + forecastHumidity2;

          document.querySelector(".forecast-wind-speed2").innerText =
            "Wind Speed: " + forecastWindSpeed2;

          document.querySelector(".date-2").innerText = "Date: " + date2;

          document.querySelector(".forecast-temperature3").innerText =
            "Temperature: " + forecastTemp3;

          document.querySelector(".forecast-humidity3").innerText =
            "Humidity: " + forecastHumidity3;

          document.querySelector(".forecast-wind-speed3").innerText =
            "Wind Speed: " + forecastWindSpeed3;

          document.querySelector(".date-3").innerText = "Date: " + date3;

          document.querySelector(".forecast-temperature4").innerText =
            "Temperature: " + forecastTemp4;

          document.querySelector(".forecast-humidity4").innerText =
            "Humidity: " + forecastHumidity4;

          document.querySelector(".forecast-wind-speed4").innerText =
            "Wind Speed: " + forecastWindSpeed4;

          document.querySelector(".date-4").innerText = "Date: " + date4;

          // document.querySelector(".forecast-temperature5").innerText =
          //   "Temperature: " + forecastTemp5;

          // document.querySelector(".forecast-humidity5").innerText =
          //   "Humidity: " + forecastHumidity5;

          // document.querySelector(".forecast-wind-speed5").innerText =
          //   "Wind Speed: " + forecastWindSpeed5;

          // for (i = 0; i < weatherData.list.length; i = i + 8) {
          // console.log();

          // const dayCard = `<div class="forecast-card">
          // <div>${"Date: " + weatherData.list[i].dt_txt}</div>
          // <div>${"Temperature: " + weatherData.list[i].main.temp}</div>
          // <div>${"Humidity: " + weatherData.list[i].main.humidity}</div>
          // <div>${"Wind Speed: " + weatherData.list[i].wind.speed}</div>
          // </div>`;
          // document.querySelector(".forecast-container").innerHTML += dayCard;

          //+= appends to the end of the string youre building.

          // var forecastCard = document.createElement("a");

          // forecastCard.textContent = weatherData.list[i].main.temp;

          // forecastCtn.appendChild(forecastCard);
          // }
        });
    });
}

function displayMedia() {
  getWeatherData();
}

localStorage.setItem("weathertDataCtn", JSON.stringify(weatherDataCtn));

const test = localStorage.getItem("weatherDataCtn");

console.log("return from local storage", JSON.parse(test));

localStorage.clear();

weatherSearchBtn.addEventListener("click", displayMedia);

//400 level: The API is not reached or that the API you are trying to call does not exist

//500 level: API is reached but the wrong request is made so the way the request is made needs to be changed. or whatever you're trying to get from that API does not exist.
