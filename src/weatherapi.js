//String used to fetch API data for a city
function requestAPICity(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=` + city + `&appid=0102347143dfbb9da8fa1a6c7f338297`;
}

//String used to fetch API data using the coordinates from an object
function requestAPICoords(coordinates, part) {
    return 'https://api.openweathermap.org/data/2.5/onecall?lat=' + coordinates.lat + `&lon=` + coordinates.lon + `&exclude=` + part + `&appid=0102347143dfbb9da8fa1a6c7f338297`;
}

//Creates a coordinates object by fetching the API data for long/lat for a city by name
async function getCoords(city) {
    try {
        const location = await fetch(requestAPICity(city))
        const locationData = await location.json();
        const cityCoordinates= {
            name:locationData.name,
            lon:locationData.coord.lon,
            lat:locationData.coord.lat
        }
        return cityCoordinates;
    } catch {
        console.log("city error")
    }
}

//Creates the weather data object to be used in the application
async function weatherAPIData(city) {
    try {
        const location = await getCoords(city)
        const response = await fetch(requestAPICoords(location,"minutely,alerts"), {mode: 'cors'})
        const data = await response.json()
        data.locationName = location.name;
        return data;
    } catch {
        console.log("error");
    }
}

export default weatherAPIData;