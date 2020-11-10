var api = {
  key: "16097ceeccf43bca442735334506a958",
  base: "https://api.openweathermap.org/data/2.5/",
  lat: "51.286473",
  long: "7.679787"
}
/* Funktion falls man manuell Ort eingeben will bzw. über getLocation arbeiten will!
function setQuery(evt){
    if (evt.keyCode == 13){
        getResults(searchbox.value);
        console.log(searchbox.value);
        getLocation();
    }
}
*/

function getResults(query) {
  fetch(`${api.base}onecall?lat=${api.lat}&lon=${api.long}&lang=de&units=metric&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayWeatherWidgetFull);

    fetch(`${api.base}weather?lat=${api.lat}&lon=${api.long}&lang=de&units=metric&APPID=${api.key}`)
    .then(weatherCurrent => {
      return weatherCurrent.json();
    }).then(displayResults);

}


function displayWeatherWidgetFull(weather) {
  //displayResults(weather);
  dailyForecast(weather);
  hourlyForecast(weather);

  console.log(weather);
}

// Die Funktion muss mit dem Current Weather Apicall gemacht werden. Weiterer Fetch in getResults + Anpassung der Json ansteuerung
function displayResults(weatherCurrent) {

  console.log(weatherCurrent);

  let icon = document.querySelector('.icon');
  icon.innerHTML = "<img src=weatherIcons/" + weatherCurrent.weather[0].icon + "@2x.png>";

  let temp = document.querySelector(' .temp');
  temp.innerText = `${Math.round(weatherCurrent.main.temp)}°C`;

  let weather_el = document.querySelector(' .weather');
  weather_el.innerText = weatherCurrent.weather[0].description;

  let feels = document.querySelector('.feels');
  feels.innerText = `${Math.round(weatherCurrent.main.feels_like)} °C`;

  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weatherCurrent.main.temp_max)}°C / ${Math.round(weatherCurrent.main.temp_min)}°C`;

  let hum = document.querySelector('.humidity');
  hum.innerText = `${weatherCurrent.main.humidity} %`;

  let windSpeed = document.querySelector('.windSpeed');
  windSpeed.innerText = `${weatherCurrent.wind.speed} m/s`;

}

/* Aktuellen Standort abfragen. Jedoch zu ungenau für optimalen Erfolg aktuell
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function showPosition(position) {
      var location = {
          latitude : position.coords.latitude,
          longitude : position.coords.longitude
      }
 console.log(position.coords.latitude , position.coords.longitude);
 console.log(location.latitude);
  }

*/
function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[a.getDay()];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  //var time = date + ' ' + month + ' ' + year;
  return time;
}

let weekdays = ["Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa.", "So."];

function unixToDay(UnixDay) {
  var b = new Date(UnixDay * 1000);
  var day = weekdays[b.getDay()];

  return day;
}

function unixToHour(UnixDay) {
  var b = new Date(UnixDay * 1000);
  var hour = b.getHours();
  var minutes = b.getMinutes();

  var time = hour + `:` + minutes + `0`;

  return time;
}


function dailyForecast(weather) {
  for (let i = 0; i < (weather.daily.length - 2); i++) {
    var headerDay = document.getElementById("dailyHeaderSlot" + (i+1));
    headerDay.innerText = unixToDay(weather.daily[i].dt);

    var iconElement = document.getElementById("iconSlot" + (i+1));
    iconElement.innerHTML = "<img src=weatherIcons/" + weather.daily[i].weather[0].icon + "@2x.png>";

    var tempElement = document.getElementById("bodySlot" + (i+1));
    tempElement.innerText = `${Math.round(weather.daily[i].temp.day)}°C`;

  }
}

function hourlyForecast(weather) {
  for (let i = 0; i < 6; i++){
    var headerHourly = document.getElementById("hourlyHeaderSlot" + (i+1));
    headerHourly.innerText = unixToHour(weather.hourly[i].dt);

    var iconElementHourly = document.getElementById("hourlyIconSlot" + (i+1));
    iconElementHourly.innerHTML = "<img src=weatherIcons/" + weather.hourly[i].weather[0].icon + "@2x.png>";

    var tempElementHourly = document.getElementById("hourlyBodySlot" + (i+1));
    tempElementHourly.innerText = `${Math.round(weather.hourly[i].temp)}°C`;
  }

}


/*
  fetch(`${api.base}onecall?q=${query}&units=metric&APPID=${api.key}`)


  */