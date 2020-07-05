window.addEventListener("load", () => {
  let long;
  let lat;

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
          const weather = Math.round(data.main.temp - 273.15);
          console.log(weather);
        });
    });
  }
});
