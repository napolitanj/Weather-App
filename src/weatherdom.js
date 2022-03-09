//Converts 0-360 degress to cardinal direction
function degToCompass(num) {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
}

function currentIcon(icon) {
    const currentIcon = document.getElementById("currentIcon");
    currentIcon.src = icon;
}

function currentTemp(temp) {
    const currentTemp = document.getElementById("currentTemp");
    currentTemp.textContent = (temp);
}

function currentPrecip(precip) {
    const currentPrecip = document.getElementById("currentPrecip");
    currentPrecip.textContent = "Preciptition: " + precip*100 + "%";
}

function currentHumid(humid) {
    const currentHumid = document.getElementById("currentHumid");
    currentHumid.textContent = "Humidity: " + humid +"%";
}

function currentWind(windSpeed, windDirection) {
    const currentWind = document.getElementById("currentWind");
    currentWind.textContent = "Wind: " + Math.round(windSpeed) + "mph " + degToCompass(windDirection);
}

function sunrise(time) {
    const sunrise = document.getElementById("sunrise");
    sunrise.textContent = "Sunrise: " + time;
}

function sunset(time) {
    const sunset = document.getElementById("sunset");
    sunset.textContent = "Sunset: " + time;
}

function location(currentLocation) {
    const location = document.getElementById("location");
    location.textContent = "Showing weather for " + currentLocation;
}

function time(currentTime) {
    const time = document.getElementById("time");
    time.textContent = "Last updated at: " + currentTime;
} 

function search() {
    const searchBar = document.getElementById("search")
    return searchBar.value;
}

function renderChartObject(day,date,temp,windSpeed,windDirection,icon) {
    const container = document.createElement("div");
    const title = document.createElement("h3");
    const dateMonth = document.createElement("p")
    const temperature = document.createElement("p");
    const wind = document.createElement("p")
    const symbol = document.createElement("img")

    container.classList.add("weatherItem")
    temperature.classList.add("weeklyTemp")

    title.textContent = day;
    dateMonth.textContent = date;
    temperature.textContent = "Temp: " + (temp);
    wind.textContent = "Wind: " + Math.round(windSpeed) + "mph " + degToCompass(windDirection);
    symbol.src = icon;

    container.appendChild(title);
    container.appendChild(dateMonth);
    container.appendChild(temperature);
    container.appendChild(wind);
    container.appendChild(symbol);

    return container;
}

export {
    currentIcon,
    currentTemp,
    currentPrecip,
    currentHumid,
    currentWind,
    sunrise,
    sunset,
    location,
    time,
    search,
    renderChartObject
};