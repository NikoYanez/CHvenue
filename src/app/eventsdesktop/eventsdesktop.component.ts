import { Component, OnInit, ViewChild } from '@angular/core';
import { ARTISTS } from '../artists';
import { artistFilter } from '../test-nav/test-nav.component';
import {TestNavComponent} from '../test-nav/test-nav.component';

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
