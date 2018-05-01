import { Component, OnInit } from '@angular/core';
import { ARTISTS } from '../artists';

@Component({
  selector: 'app-eventsdesktop',
  templateUrl: './eventsdesktop.component.html',
  styleUrls: ['./eventsdesktop.component.sass']
})
export class EventsdesktopComponent implements OnInit {
  days = [];
  d = new Date();
  dayName = '';

  artists = ARTISTS;

  getDayName(date) {
    this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    this.d = new Date(date);
    this.dayName = this.days[this.d.getDay()];
    return this.dayName;
  }
  constructor() { }

  ngOnInit() {
  }

}
