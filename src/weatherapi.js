// === weatherapi.js ===
// Mocked API response for portfolio demo — no API key needed

async function weatherAPIData(city) {
  console.log(`Mock fetch for city: ${city}`);

  // Fake sample data
  return {
    locationName: city || "Denver",
    current: {
      temp: 22.5,
      humidity: 41,
      wind_speed: 5.8,
      wind_deg: 230,
      sunrise: 1730985600,
      sunset: 1731025200,
      weather: [
        {
          description: "clear sky",
          icon: "01d",
        },
      ],
    },
  };
}

export default weatherAPIData;
