class UI {
   constructor() {
      this.location = document.querySelector('#w-location');
      this.desc = document.querySelector('#w-desc');
      this.string = document.querySelector('#w-string');
      this.icon = document.querySelector('#w-icon');
      this.humidity = document.querySelector('#w-humidity');
      this.dewpoint = document.querySelector('#w-dewpoint');
      this.feelsLike = document.querySelector('#w-feels-like');
      this.wind = document.querySelector('#w-wind');
   }

   paint(current) {
      this.location.textContent = current.sender_name;
      this.desc.textContent = current.weather;
      this.string.textContent = current.pressure;
      this.icon.setAttribute('src', weather.icon_url);
      this.humidity.textContent = `Relative Humidity: ${current.humidity}`;
      this.dewpoint.textContent = `Dew Point: ${current.dew_point}`;
      this.feelsLike.textContent = `Feels Like: ${current.feels_like}`;
      this.wind.textContent = `Wind: ${current.wind_deg}`;
   }
}
