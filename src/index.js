import {fromUnixTime, format} from 'date-fns'
import weatherAPIData from "./weatherapi"
import {currentIcon, currentTemp, currentPrecip, currentHumid, currentWind, 
    sunrise, sunset, location, time, search, renderChartObject} from "./weatherdom";

let weatherLocation = "chicago";
const searchButton = document.getElementById("searchButton")
searchButton.addEventListener("click", () => changeLocation());

const tempSwitch = document.getElementById("tempSwitch")
tempSwitch.addEventListener("change",() => changeUnit());

const checkbox = document.getElementById("checkbox")

//Updates current weather Icon
function updateIcon() {
    weatherAPIData(weatherLocation).then(function(data){
        let icon = "http://openweathermap.org/img/wn/" + data.current.weather[0].icon+"@2x.png";
        currentIcon(icon);
    })
}

//Converts Kelvin to F
function convertKToF(temp) {
    return (((temp-273.15)*1.8)+32).toPrecision(2) + " °F";
}

//Converts Kelvin to C
function convertKToC(temp) {
    return (temp-273.15).toPrecision(2) + " °C";
}

//Converts C to F
function convertCToF(temp) {
    return (temp*(9/5)+32).toPrecision(2) + " °F";
}

//Converts F to C
function convertFToC(temp) {
    return ((temp-32)*(5/9)).toPrecision(2) + " °C";
}

//Modifies temperature in weekly forecast
function changeWeeklyTemp(funct) {
    const weeklyItems=document.querySelectorAll(".weeklyTemp")

    weeklyItems.forEach((item) => {
        let temp = Number(item.textContent.replace(/\D/g,""))
        item.textContent= "Temp: " + funct(temp);
    })
}

//Toggles between F and C
function changeUnit() {
    const celcius = document.getElementById("celcius")
    const fahrenheit = document.getElementById("fahrenheit")
    if(checkbox.checked === true){
        changeWeeklyTemp(convertFToC)
        checkbox.checked = false;
        fahrenheit.style.color="#999999"
        fahrenheit.style.opacity="0.5"
        celcius.style.color="#F67280"
        celcius.style.opacity="1"
    } else {
        changeWeeklyTemp(convertCToF)
        checkbox.checked=true;
        fahrenheit.style.color="#F67280"
        fahrenheit.style.opacity="1"
        celcius.style.color="#999999"
        celcius.style.opacity="0.5"
    }
    checkbox.checked=!checkbox.checked;
    updateCurrentTemp()
}

//Checks current switch position for weekly temperature
function checkSwitch(temp) {
    if(checkbox.checked === true){
        return convertKToC(temp)
    } else {
        return convertKToF(temp)
    }
}

//Updates current temperature in the header
function updateCurrentTemp(){
    weatherAPIData(weatherLocation).then(function(data){
        currentTemp(checkSwitch(data.current.temp))
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

//Updates the head to show location of the forecast
function updateLocation() {
    weatherAPIData(weatherLocation).then(function(data){
        location(data.locationName)
    })
}

//Displays current time for the location given
function updateTime() {
    weatherAPIData(weatherLocation).then(function(data){
        time(convertTime(data.current.dt))
    })
}

//Changes location when search is executed
function changeLocation() {
        weatherLocation = search();
        clearChart();
        updateWeather();
}

function updateChartDaily() {
    const weatherChart = document.getElementById("weatherChart")
    weatherAPIData(weatherLocation).then(function(data){     
        data.daily.forEach((e) =>  {
            let day = convertDay(e.dt)
            let date = convertDate(e.dt);
            let icon = "http://openweathermap.org/img/wn/" + e.weather[0].icon+"@2x.png";
            weatherChart.appendChild(renderChartObject(day,date,checkSwitch(e.temp.day),e.wind_speed,e.wind_deg,icon))
        })
    })
}

//Formats time 
function convertTime(unix) {
    let date = fromUnixTime(unix);
    return format(new Date(date), "K':'mm bbbb")
}

//Formats day of the week
function convertDay(unix) {
    let day = fromUnixTime(unix).getDay()
    if (day === 0) {
        return "Sunday"
    } else if (day === 1) {
        return "Monday"
    } else if (day === 2) {
        return "Tuesday"
    } else if (day === 3) {
        return "Wednesday"
    } else if (day === 4) {
        return "Thursday"
    } else if (day === 5) {
        return "Friday"
    } else if (day === 6) {
        return "Saturday"
    } 
}

//Formats Date for Weather Items
function convertDate(unix) {
    let month = fromUnixTime(unix).getMonth()
    let date = fromUnixTime(unix).getDate();
    
    if (month === 0) {
        return "Jan " + date;
    } else if (month === 1) {
        return "Feb " + date;
    } else if (month === 2) {
        return "Mar " + date;
    } else if (month === 3) {
        return "Apr " + date;
    } else if (month === 4) {
        return "May " + date;
    } else if (month === 5) {
        return "Jun " + date;
    } else if (month === 6) {
        return "Jul " + date;
    } else if (month === 7) {
        return "Aug " + date;
    } else if (month === 8) {
        return "Sep " + date;
    } else if (month === 9) {
        return "Oct " + date;
    } else if (month === 10) {
        return "Nov " + date;
    } else if (month === 11) {
        return "Dec " + date;
    }
}

//Clears the weather chart
function clearChart() {
    const weatherChart = document.getElementById("weatherChart")
    while (weatherChart.firstChild) {
        weatherChart.removeChild(weatherChart.firstChild);
    }
}

function updateWeather() {
    updateIcon();
    updateCurrentTemp();
    changeUnit();
    updatePrecip();
    updateHumid();
    updateWind();
    updateSunrise();
    updateSunset();
    updateLocation();
    updateTime();
    search();
    updateChartDaily();
}

updateWeather();