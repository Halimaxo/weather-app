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

// console.log(weatherSearchBtn);

function getWeatherData() {
  var searchLocation = inputField.value;

  var latAndLon =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    searchLocation +
    "&limit=1&appid=f1483ebfebd864431fd44f2588c040e8";

  console.log(latAndLon);

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

      console.log(lat, lon, latAndLonData);

      var weatherApi =
        "http://api.openweathermap.org/data/2.5/forecast?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=f1483ebfebd864431fd44f2588c040e8";
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
          const name = weatherData.city.name;
          const temp = weatherData.list[0].main.temp;
          const humidity = weatherData.list[0].main.humidity;
          const windSpeed = weatherData.list[0].wind.speed;
          console.log(name, temp, humidity, windSpeed);

          document.querySelector(".card-title").innerText =
            "Weather in " + name;

          document.querySelector(".temperature").innerText =
            "Temperature: " + temp;

          document.querySelector(".humidity").innerText =
            "Humidity: " + humidity;

          document.querySelector(".wind-speed").innerText =
            "Wind Speed: " + windSpeed;
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
