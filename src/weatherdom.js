function currentIcon(icon) {
    const currentIcon = document.getElementById("currentIcon");
    currentIcon.src = icon;
}

function currentTemp(temp) {
    const currentTemp = document.getElementById("currentTemp");
    currentTemp.textContent = (((temp-273.15)*1.8)+32).toPrecision(3);
}

function currentPrecip(precip) {
    const currentPrecip = document.getElementById("currentPrecip");
    currentPrecip.textContent = "Preciptition: " + precip*100 + "%";
}

function currentHumid(humid) {
    const currentHumid = document.getElementById("currentHumid");
    currentHumid.textContent = "Humidity: " + humid;
}

function currentWind(windSpeed, windDirection) {
    const currentWind = document.getElementById("currentWind");
    currentWind.textContent = "Wind: " + Math.round(windSpeed) + "mph " + degToCompass(windDirection);
}

//Converts 0-360 degress to cardinal direction
function degToCompass(num) {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
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
    location.textContent = currentLocation;
}

function time(currentTime) {
    const time = document.getElementById("time");
    time.textContent = "Updated at " + currentTime;
} 

function search() {
    const searchBar = document.getElementById("search")
    return searchBar.value;
}

function renderChartObject(day,temp,windSpeed,windDirection,icon) {
    const container = document.createElement("div");
    const header = document.createElement("p");
    const temperature = document.createElement("p");
    const wind = document.createElement("p")
    const symbol = document.createElement("img")

    header.textContent = day;
    temperature.textContent = temp;
    header.textContent = windSpeed + " " + windDirection;
    symbol.src = icon;

    container.appendChild(header);
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