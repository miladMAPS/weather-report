class Weather {
  constructor(city) {
    this.apiKey = 'ea25cd16e1d019547267f59cb4dc83e2';
    this.city = city;
  }
  
  async getWeather() {
    let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`;
    //if something went wrong, first use (proxyUrl + targetUrl) instead of (targetUrl)
    const response = await fetch(targetUrl);
    
    const responseData = await response.json();
    
    return responseData;
  }
  
  changeLocation(city){
    this.city = city;
  }
}