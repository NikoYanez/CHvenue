import { Component, OnInit } from '@angular/core';
import { ARTISTS } from '../artists';

@Component({
  selector: 'app-eventgrid',
  templateUrl: './eventgrid.component.html',
  styleUrls: ['./eventgrid.component.sass']
})
export class EventgridComponent implements OnInit {
  days = [];
  d = new Date();
  dayName = '';
  artists = ARTISTS;
  constructor() { }

  ngOnInit() {
  }

  getDayName(date) {
    this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.d = new Date(date);
    this.dayName = this.days[this.d.getDay()];
    return this.dayName;
  }
}
