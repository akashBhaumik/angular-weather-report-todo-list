import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.scss']
})
export class WeatherWidgetMainComponent implements OnInit {
  weatherData : any ;
  cityName: string="kolkata"
  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.getWeatherData()
    console.log(this.weatherData)
  }
async getWeatherData()
{
  this.http.
  get(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=8b476ec08575ae9d6b5ee0086b92dd54`).subscribe((data)=> {
  this.setWeatherData(data)
  },err=> {
    console.log(err)
  });
  
  
}
setWeatherData(data : any)
{
  
  this.weatherData = data;
  console.log(this.weatherData)
  let sunsetTime = new Date(this.weatherData.sys.sunset * 1000);
  let sunriseTime = new Date(this.weatherData.sys.sunrise * 1000);
  this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
  let currentDate = new Date();
  let utc = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60000);
this.weatherData.cityDate = new Date(utc + (this.weatherData.timezone * 1000));
  console.log(sunriseTime)
  console.log(sunsetTime)
 
  
  // this.weatherData.isDay = currentDate.getTime() < sunriseTime.getTime();

  // this.weatherData.isNight = currentDate.getTime() < sunsetTime.getTime();
  // this.weatherData.isDay = currentDate.getTime() > sunriseTime.getTime();
  // this.weatherData.isNight = currentDate.getTime()  > (sunsetTime.getTime() )
  this.weatherData.isDay = (currentDate.getTime()  < sunsetTime.getTime());
  console.log(this.weatherData.isDay)
  console.log(this.weatherData.isNight)

 

  this.weatherData.tmp_celcius = (this.weatherData.main.temp - 273.15).toFixed(0);
  this.weatherData.tmp_min = (this.weatherData.main.temp_min - 273.15).toFixed(0);
  this.weatherData.tmp_max = (this.weatherData.main.temp_max - 273.15).toFixed(0);
  this.weatherData.tmp_feels_like = (this.weatherData.main.feels_like - 273.15).toFixed(0);
}

//search city
search() {
  this.getWeatherData();

}

}
