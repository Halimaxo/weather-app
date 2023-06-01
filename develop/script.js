//ed9e74b645329e040d2d7fc1db70ac25
//create an event listener upon clicking the search button. Whatever the value is in the input field will be the city name
//create function for getting current data and weather info

var weatherSearchBtn = document.getElementById("search-btn");

console.log(weatherSearchBtn);

function getWeatherData() {
  var weatherApi =
    "api.openweathermap.org/data/2.5/forecast?lat=41.87&lon=87.62&appid=ed9e74b645329e040d2d7fc1db70ac25";
  console.log(weatherApi);

  //use a fetch function to make a call to an API
  fetch(weatherApi, {
    method: "GET",
  }).then((res) => {
    return res.json();
  });
  //return exits the function
}

weatherSearchBtn.addEventListener("click", getWeatherData);

//400 level: The API is not reached or that the API you are trying to call does not exist

//500 level: API is reached but the wrong request is made so the way the request is made needs to be changed. or whatever you're trying to get from that API does not exist.
