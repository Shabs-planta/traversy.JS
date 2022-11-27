class Storage {
   constructor() {
      this.latitude;
      this.longitude;
      this.defaultLatitude = '25.7617';
      this.defaultLongitude = '80.1918';
   }

   getLocationData() {
      if(localStorage.getItem('latitude') === null) {
         this.latitude = this.defaultLatitude;
      }else {
         this.latitude = localStorage.getItem('latitude');
      }

      if(localStorage.getItem('longitude') === null) {
         this.longitude = this.defaultLongitude;
      }else {
         this.longitude = localStorage.getItem('longitude');
      }

      return {
         latitude: this.latitude,
         longitude: this.longitude
      }
   }

   setLocationData(latitude, longitude){
      localStorage.setItem('latitude', latitude);
      localStorage.setItem('longitude', longitude);
   }
}