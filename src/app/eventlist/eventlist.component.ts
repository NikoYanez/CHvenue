import { Component, OnInit } from '@angular/core';
import { ARTISTS } from '../artists';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.sass']
})
export class EventlistComponent implements OnInit {
  ticket = faTicketAlt;
  days = [];
  d = new Date();
  dayName = '';

  artistList = ARTISTS;
  artists = this.artistList;

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
