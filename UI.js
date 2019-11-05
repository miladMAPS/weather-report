class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.details = document.getElementById('w-details')
    this.humidity = document.getElementById('w-humidity');
    this.heatIndex = document.getElementById('w-heat-index');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }
  
  paint(weather) {
    if(weather.cod === 200) {
      const TK = weather.main.temp,
          TF = 1.8 * TK - 459.67,
          RH = weather.main.humidity,
          HI = 2.05*TF + 10.1433*RH - 0.2247*TF*RH - 0.00683783*TF*TF - 0.054817*RH*RH + 0.001229*TF*TF*RH + 0.000853*TF*RH*RH - 0.00000199*TF*TF*RH*RH - 42.379,
          DP = TK + 0.2 * RH - 293.15;
      this.location.textContent = `${weather.name}, ${weather.sys.country}`;
      this.desc.textContent = weather.weather[0].description;
      this.string.textContent = `${( TK - 273.15 ).toFixed(1)}°C (${( 1.8 * TK - 459.67 ).toFixed(1)}°F)`;
      this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
      this.details.style.display = 'block';
      this.humidity.textContent = `Relative Humidity: ${RH}%`;
      this.heatIndex.textContent = `Heat Index (Feels Like) : ${((5/9)*HI - 160/9).toFixed(1)}°C (${HI.toFixed(1)}°F)`;
      this.dewpoint.textContent = `Dew Point: ${DP.toFixed(1)}°C (${(1.8 * DP + 32).toFixed(1)}°F)`;
      this.wind.textContent = `Wind: ${weather.wind.speed} m/s From ${weather.wind.deg}° direction`;
    } else{
        this.location.textContent  = 'City Not Found!';
        this.desc.innerHTML = '<br>Check Your Input.<br><br>';
        this.string.innerHTML = '<i class="fa fa-remove"></i>';
        this.icon.setAttribute('src', '');
        this.details.style.display = 'none';
      }
  }
}