import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-cardInfo',
  templateUrl: 'cardInfo.component.html',
  styleUrls: ['cardInfo.component.css'],
})
export class CardInfoComponent implements OnChanges {
  @Input() infoWeather: any;
  country: string;
  temp: number;
  humidity: number;
  description: string;
  timezone: number;
  visibility: number;
  pressure: number;
  temp_max: number;
  sugges: string;

  ngOnChanges() {
    this.country = this.infoWeather?.sys.country;
    this.temp = this.infoWeather?.main.temp;
    this.humidity = this.infoWeather?.main.humidity;
    this.description = this.infoWeather?.weather[0].description;
    this.timezone = this.infoWeather?.timezone;
    this.visibility = this.infoWeather?.visibility;
    this.pressure = this.infoWeather?.main.pressure;
    this.temp_max = this.infoWeather?.main.temp_max;
  }

  suggestion(): string {
    const temperature = this.temp - 273;
    if (temperature <= 10) {
      this.sugges = 'wear winter clothes';
    }
    if (temperature >= 11) {
      this.sugges = 'Wear comfortable clothing';
    }
    if (temperature >= 25) {
      this.sugges = 'Wear light clothing';
    }
    return this.sugges;
  }
}
