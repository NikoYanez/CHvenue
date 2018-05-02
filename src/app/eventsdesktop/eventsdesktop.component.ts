import { Component, OnInit } from '@angular/core';
import {faTh} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';

@Component({
  selector: 'app-eventsdesktop',
  templateUrl: './eventsdesktop.component.html',
  styleUrls: ['./eventsdesktop.component.sass']
})
export class EventsdesktopComponent implements OnInit {
  list = faBars;
  grid = faTh;
  constructor() { }

  ngOnInit() {
  }

}
