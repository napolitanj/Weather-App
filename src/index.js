import {fromUnixTime} from 'date-fns'
import weatherAPIData from "./weatherapi"
import {currentIcon, currentTemp, currentPrecip, currentHumid, currentWind, 
    sunrise, sunset, location, time, search, renderChartObject} from "./weatherdom";

let weatherLocation = "chicago";
const searchButton = document.getElementById("searchButton")
searchButton.addEventListener("click", () => changeLocation());

//Updates current weather Icon
function updateIcon() {
    weatherAPIData(weatherLocation).then(function(data){
        let icon = "http://openweathermap.org/img/wn/" + data.current.weather[0].icon+"@2x.png";
        currentIcon(icon);
    })
}

//Updates current temperature to the header
function updateTemp() {
    weatherAPIData(weatherLocation).then(function(data){
        currentTemp(data.current.temp)
    })
}

//Updates current precipitation chance to the header
function updatePrecip() {
    weatherAPIData(weatherLocation).then(function(data){
        currentPrecip(data.daily[0].pop)
    })
}

//Updates current humidity to the header
function updateHumid() {
    weatherAPIData(weatherLocation).then(function(data){
        currentHumid(data.current.humidity)
    })
}

//Updates current windspeed and direction to the header
function updateWind() {
    weatherAPIData(weatherLocation).then(function(data){
        currentWind(data.current.wind_speed,data.current.wind_deg)
    })
}

//Updates time of sunrise
function updateSunrise() {
    weatherAPIData(weatherLocation).then(function(data){
        sunrise(convertTime(data.current.sunrise))
    })
}

//Updates time of sunset
function updateSunset() {
    weatherAPIData(weatherLocation).then(function(data){  
        sunset(convertTime(data.current.sunset))
    })
}

//Updates the location of the forecast
function updateLocation() {
    weatherAPIData(weatherLocation).then(function(data){
        location(data.locationName)
    })
}

//Displays current time for the location given
function updateTime() {
    weatherAPIData(weatherLocation).then(function(data){
        console.log(data.current.dt)
        time(convertTime(data.current.dt))
    })
}

function changeLocation() {
        weatherLocation = search(),
        console.log(weatherLocation)
        updateHeader();
}

function updateChartDaily() {
    weatherAPIData().then(function(data){
        console.log(data.daily.temp.day)
        daily.forEach((day) => renderChartObject(data.daily.temp.day))
    })
}

//Formats time 
function convertTime(unix) {
    let date = fromUnixTime(unix);
    let hours = date.getHours()
    console.log(hours)
    //Modify for if minutes are less than 10.
    if (hours < 12) {
        return String(date.getHours()) + ":" + String(date.getMinutes() + " a.m.");
    } else {
    return String(date.getHours()-12) + ":" + String(date.getMinutes() + " p.m.");
    }
}

function updateHeader() {
    updateIcon();
    updateTemp();
    updatePrecip();
    updateHumid();
    updateWind();
    updateSunrise();
    updateSunset();
    updateLocation();
    updateTime();
    search();
}

updateHeader();