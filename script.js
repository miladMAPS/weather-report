const storage = new Storage();
const weatherLocaton = storage.getLocationData();
const weather = new Weather(weatherLocaton);

const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  
  weather.changeLocation(city);
  storage.setLocationData(city);
  getWeather();
  
  $('#locModal').modal('hide');
});


function getWeather() {
  weather.getWeather()
    .then(results => ui.paint(results))
    .catch(err => console.log(err));
}