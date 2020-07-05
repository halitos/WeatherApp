window.addEventListener("load", () => {
  let long;
  let lat;
  let descriptionDisplay = document.querySelector(".temp-description");
  let tempDisplay = document.querySelector(".temperature-degree");
  let location = document.querySelector(".location-timezone"); //data.name? or data.system.timezone

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const apiKey = "dd6f4a8f86f1e0d151f9aa4151d91313";

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;

      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const weatherTemp = Math.round(data.main.temp - 273.15);
          const weatherDescription = data.weather[0].description;
          tempDisplay.innerText = weatherTemp;
          descriptionDisplay.innerText = weatherDescription;
          location.innerText = data.name;
          const weatherIcon = data.weather[0].icon;
          const iconImg = document.querySelector("img");
          const iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
          iconImg.setAttribute("src", iconUrl);
        });
    });
  }
});
