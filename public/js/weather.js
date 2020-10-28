var api = {
    key:"16097ceeccf43bca442735334506a958",
    base:"https://api.openweathermap.org/data/2.5/",
    lat: "51.286473",
    long: "7.679787"
}
var searchbox = document.querySelector('.searchBox');
if (searchbox){
searchbox.addEventListener('keypress', setQuery);

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

function getResults(query){
    fetch(`${api.base}onecall?lat=${api.lat}&lon=${api.long}&lang=de&units=metric&APPID=${api.key}`)
        .then (weather => {
            return weather.json();
        }).then (displayResults);
}


function displayResults(weather){
    
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `Altena, Deutschland`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);


    let icon = document.querySelector('.icon');
    icon.innerHTML = "<img src=weatherIcons/"+weather.current.weather[0].icon +"@2x.png>";

    let temp = document.querySelector(' .temp');
    temp.innerText = `${Math.round(weather.current.temp)}°C`;

    let weather_el = document.querySelector(' .weather');
    weather_el.innerText = weather.current.weather[0].description;

    let feels = document.querySelector('.feels');
    feels.innerText = `${Math.round(weather.current.feels_like)} °C`;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.daily[0].temp.min)}°C / ${Math.round(weather.daily[0].temp.max)}°C`;

    let hum = document.querySelector('.humidity');
    hum.innerText = `${weather.current.humidity} %`;

    

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

function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }


  function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    var time = date + ' ' + month + ' ' + year;
    return time;
  }
  console.log(timeConverter(weather.daily[0].dt));



  function weeklyForecast(){

}

let weekdays = ["Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag","Sonntag"];

/*
  fetch(`${api.base}onecall?q=${query}&units=metric&APPID=${api.key}`)


  */