import { Component, OnInit } from '@angular/core';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons/faTicketAlt';
import { ARTISTS } from '../artists';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.sass']
})

export class EventsComponent implements OnInit {
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
