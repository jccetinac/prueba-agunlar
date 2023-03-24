import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import cities from '../const/cities';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  weatherCurrent: any;
  idSelectedCity = 1;
  cityList = cities;
  constructor(private api: ApiService) {}

  selectChange(event) {
    this.idSelectedCity = event.target.value;
    this.api.get(this.idSelectedCity).subscribe((res) => {
      this.weatherCurrent = res;
    });
  }

  ngOnInit() {
    this.api.get(this.idSelectedCity).subscribe((res) => {
      this.weatherCurrent = res;
    });
  }
}
