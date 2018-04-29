import { Component, OnInit } from '@angular/core';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons/faTicketAlt';
import {formatDate} from 'ngx-bootstrap/chronos';

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

artistList = [{
  id: 1,
  name: 'NICKI MINAJ',
  tour: 'The Pink Print Tour',
  date: 'JULY 25, 2018',
  picUrl: '../assets/nikkiminaj.jpg'
}, {
  id: 2,
  name: 'NICK JONAS',
  tour: '\'Live In Concert\' Tour',
  date: 'JUNE 13, 2018',
  picUrl: '../assets/nickjonas.jpg'
}, {
  id: 3,
  name: 'TAYLOR SWIFT',
  tour: 'The 1989 World Tour',
  date: 'APRIL 21, 2019',
  picUrl: '../assets/taylorswift.jpg'
}, {
  id: 4,
  name: 'SAM SMITH',
  tour: 'In the Lonely Hour Tour',
  date: 'FEBRUARY 18, 2019',
  picUrl: '../assets/samsmith.jpg'
}, {
  id: 5,
  name: 'IGGY AZALEA',
  tour: '\'Great Escape\' Tour',
  date: 'AUGUST 22, 2019',
  picUrl: '../assets/iggyazalea.jpg'
}, {
  id: 6,
  name: 'BRANDON FLOWERS',
  tour: 'with Temper Trap',
  date: 'AUGUST 22, 2019',
  picUrl: '../assets/brandonflowers.jpg'
}];

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
