// === weatherapi.js ===

const API_KEY = "321fced271988d7f1f4b1dcd0fd26cf1";

// --- Updated Endpoints ---
// The Geo API is now separate, and One Call v3.0 is the current forecast endpoint.

function requestGeo(city) {
  return `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
}

function requestOneCall(lat, lon, part = "minutely,alerts") {
  return `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API_KEY}`;
}

// --- Core Functions ---

// Fetch coordinates for a city name
async function getCoords(city) {
  try {
    const res = await fetch(requestGeo(city));
    if (!res.ok) throw new Error("Bad geo response");
    const [data] = await res.json();
    if (!data) throw new Error("City not found");
    return { name: data.name, lat: data.lat, lon: data.lon };
  } catch (err) {
    console.error("Geo fetch error:", err);
  }
}

// Fetch weather data for the coordinates
async function weatherAPIData(city) {
  try {
    const location = await getCoords(city);
    if (!location) throw new Error("No location data");
    const res = await fetch(requestOneCall(location.lat, location.lon), {
      mode: "cors",
    });
    if (!res.ok) throw new Error("Weather API error");
    const data = await res.json();
    data.locationName = location.name;
    return data;
  } catch (err) {
    console.error("Weather data error:", err);
  }
}

export default weatherAPIData;
