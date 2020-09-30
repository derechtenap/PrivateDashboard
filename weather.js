var api = {
    key:"16097ceeccf43bca442735334506a958",
    base:"https://api.openweathermap.org/data/2.5/"
}
var searchbox = document.querySelector('.searchBox');
if (searchbox){
searchbox.addEventListener('keypress', setQuery);
}

function setQuery(evt){
    if (evt.keyCode == 13){
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then (weather => {
            return weather.json();
        }).then (displayResults);
}

function displayResults(weather){
    
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);


    let icon = document.querySelector('.icon');
    icon.innerHTML = "<img src=weatherIcons/"+weather.weather[0].icon +"@2x.png>";
    //icon.innerHTML = '<img src='/weatherIcons/' ${weather.weather[0].icon} '.icon@2x.png>';
    
    //icon.innerHTML = (getIcon(weather.weather[0].icon));

    let temp = document.querySelector('.current .temp');
    temp.innerText = `${Math.round(weather.main.temp)}°c`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;

}
/*
function getIcon(iconId){
    fetch('http://openweathermap.org/img/wn/'+ iconId +'@2x.png');
}*/

function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }