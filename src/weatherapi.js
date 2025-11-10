const API_KEY = "321fced271988d7f1f4b1dcd0fd26cf1"; 

// Build the API request for a city
function requestWeather(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
}

// Fetch current weather data for a given city
async function weatherAPIData(city) {
  try {
    const res = await fetch(requestWeather(city), { mode: "cors" });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    const data = await res.json();

    const simplified = {
      locationName: data.name,
      current: {
        temp: data.main.temp,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        wind_deg: data.wind.deg,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        weather: data.weather,
      },
    };

    return simplified;
  } catch (err) {
    console.error("Weather fetch failed:", err);
  }
}

export default weatherAPIData;
