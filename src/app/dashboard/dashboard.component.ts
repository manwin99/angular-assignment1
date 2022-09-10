import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fudata:any;
  joy=true
  constructor(private user:WeatherService) { }

  ngOnInit(): void {
  }
  getme(){
    this.joy=false

    this.user.getdata().subscribe(data=>this.fudata=data);
  }

}
