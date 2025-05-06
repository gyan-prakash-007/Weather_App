async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultBox = document.getElementById("weatherResult");
  const apiKey = "5a9c14f6271d5c864bfd5daf0be4321c"; 

  if (!city) {
    resultBox.innerHTML = "❗ Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      resultBox.innerHTML = "❌ City not found!";
      return;
    }

    const data = await response.json();
    const temp = data.main.temp;
    const weather = data.weather[0].description;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;

    resultBox.innerHTML = `
      🌡️ <strong>Temperature:</strong> ${temp}°C<br>
      ☁️ <strong>Condition:</strong> ${weather}<br>
      💧 <strong>Humidity:</strong> ${humidity}%<br>
      🌬️ <strong>Wind Speed:</strong> ${wind} km/h
    `;
  } catch (error) {
    resultBox.innerHTML = "⚠️ Something went wrong. Check internet or API key.";
    console.error(error);
  }
}
