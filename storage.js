class Storage {
  constructor() {
    this.city;
    this.defaultCity = 'London';
  }
  
  getLocationData() {
    if(!localStorage.getItem('city')) {
      this.city = this.defaultCity;
    }
      else {
        this.city = localStorage.getItem('city');
      }
    return this.city;
  }
  
  setLocationData(city) {
    localStorage.setItem('city', city);
  }
}