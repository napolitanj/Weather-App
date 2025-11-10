// === weatherapi.js ===
// WeatherAPI.com integration (free, no billing)

const API_KEY = "f1e13d6ef01849208ed162836251011"; 

function requestWeather(city) {
  return `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=no`;
}

async function weatherAPIData(city) {
  try {
    const res = await fetch(requestWeather(city), { mode: "cors" });
    if (!res.ok) throw new Error(`WeatherAPI error: ${res.status}`);
    const data = await res.json();

    const simplified = {
      locationName: data.location.name,
      current: {
        temp: data.current.temp_c, 
        humidity: data.current.humidity,
        wind_speed: data.current.wind_kph,
        wind_deg: data.current.wind_degree,
        sunrise: null, 
        sunset: null,
        weather: [
          {
            description: data.current.condition.text,
            icon: data.current.condition.icon,
          },
        ],
      },
    };

    return simplified;
  } catch (err) {
    console.error("Weather fetch failed:", err);
    return null;
  }
}

export default weatherAPIData;
