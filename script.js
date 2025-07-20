document.getElementById("searchButton").addEventListener("click", function () {
  const city = document.getElementById("cityInput").value.trim();
  if (city === "") {
    return;
  }

  const apiKey = "6471b7c9f7f0e27d44941a71cdea0f32"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 404) {  
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
      } else {
        
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
        
        const temperature = data.main.temp;
        const cityName = data.name;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const weatherIcon = data.weather[0].icon; 
       
        document.querySelector(".temp").textContent = `${temperature}°C`;
        document.querySelector(".city").textContent = cityName;
        document.querySelector(".humidity").textContent = `${humidity}%`;
        document.querySelector(".wind").textContent = `${windSpeed} km/h`;
       
        const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}.png`; 
        document.querySelector(".weather-icon").src = iconUrl;
      }
    })
    .catch(error => {
      console.error(error);
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    });
});
