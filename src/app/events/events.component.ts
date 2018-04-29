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
  picUrl: 'https://pixel.nymag.com/imgs/fashion/daily/2017/09/10/10-nicki-minaj-philipp-plein.w710.h473.jpg'
}, {
  id: 2,
  name: 'NICK JONAS',
  tour: '\'Live In Concert\' Tour',
  date: 'JUNE 13, 2018',
  picUrl: 'https://pbs.twimg.com/profile_images/955533548408066048/PAn90S7T_400x400.jpg'
}, {
  id: 3,
  name: 'TAYLOR SWIFT',
  tour: 'The 1989 World Tour',
  date: 'APRIL 21, 2019',
  picUrl: 'https://pixel.nymag.com/imgs/daily/vulture/2017/11/09/09-taylor-swift-ranking-feature.nocrop.w1600.h2147483647.jpg'
}, {
  id: 4,
  name: 'SAM SMITH',
  tour: 'In the Lonely Hour Tour',
  date: 'FEBRUARY 18, 2019',
  picUrl: 'https://media.pitchfork.com/photos/59298fd8c0084474cd0be3be/1:1/w_300/013f677e.jpg'
}, {
  id: 5,
  name: 'IGGY AZALEA',
  tour: '\'Great Escape\' Tour',
  date: 'AUGUST 22, 2019',
  picUrl: 'http://thatgrapejuice.net/wp-content/uploads/2016/11/iggy-azalea-2016-620x413-thatgrapejuice-600x400.jpg'
}, {
  id: 6,
  name: 'BRANDON FLOWERS',
  tour: 'with Temper Trap',
  date: 'AUGUST 22, 2019',
  picUrl: 'https://images.shazam.com/artistart/a40796957_s400.jpg'
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
