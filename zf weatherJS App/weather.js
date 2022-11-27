class Weather {
   constructor(latitude, longitude) {
      this.apiKey = 'a7c8c65a6c1893963c844a5978947bef';
      this.latitude = latitude;
      this.longitude = longitude;
   }

   // Fetch weather from API
   async getWeather() {
      const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${this.latitude}&lon=${this.longitude}&exclude={post}&appid=${this.apiKey}`);

      const responseData = await response.json();

      return responseData.current;
   }

   // change Weather Location
   changeLocation(latitude, longitude) {
      this.latitude = latitude;
      this.longitude = longitude;
   }
}