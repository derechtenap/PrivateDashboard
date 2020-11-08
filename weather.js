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

    console.log(timeConverter(weather.daily[1].dt));
    console.log(unixToDay(weather.daily[0].dt));
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
  function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    //let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   // let day = days[a.getDay()];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    //var hour = a.getHours();
    //var min = a.getMinutes();
    //var sec = a.getSeconds();
    //var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    var time = date + ' ' + month + ' ' + year;
    return time;
  }
  
  let weekdays = ["Mo.","Di.","Mi.","Do.","Fr.","Sa.","So."];

  function unixToDay(UnixDay){
    var b = new Date(UnixDay*1000);
    var day = weekdays[b.getDay()];

    return day;
  }


  function weeklyForecast(weather){
    for (let i = 1; i <= weather.daily.length; i++){
      switch (unixToDay(weather.daily[i].dt)) {
        case "Mo.":
          
          break;
        case "Di.":

          break;
        case "Mi.":

          break;
        case "Do.":

          break;
        case "Fr.":

          break;  
        case "Sa.":

          break;
        case "So.":

          break;
      
      }
     
   }
}



/*
  fetch(`${api.base}onecall?q=${query}&units=metric&APPID=${api.key}`)


  */