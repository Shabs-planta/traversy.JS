// init Storage
const storage = new Storage()
// get stored location
const weatherLocation = storage.getLocationData();

// init Weather object
const weather = new Weather(weatherLocation.latitude, weatherLocation.longitude);

// init UI
const ui = new UI()

// Get weather on DOM load.
document.addEventListener('DOMContentLoaded', getWeather);

// Adding eventlistener to the button
document.querySelector('#w-chamge-button').addEventListener('click', (e) => {
   // Add input ID`s
   const latitude = document.getElementById('lat').value;
   const longitude = document.getElementById('lon').value;

   weather.changeLocation(latitude, longitude);

   // set localStorage
   storage.setLocationData(latitude, longitude);

   // GET and display weather
   getWeather();

   // close model
   $('#locModal').modal('hide');
})


function getWeather() {
   weather.getWeather()
   .then(result => {
      ui.paint(result)
   })
   .catch(err => console.log(err))
}
