import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from './weather-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  city:string="";
  result:any;
  constructor(private data:WeatherDataService) {
  }

  ngOnInit(){
    this.data.getWeather('New Delhi').subscribe((data)=>{
      this.result=data;
    });
  }

  getCity(cityName:string) {
    this.data.getWeather(cityName).subscribe((data)=>{
      this.result=data;
      console.log(data);
    });
  }


}
