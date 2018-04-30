import { Component, OnInit } from '@angular/core';
import {faReply, faRetweet, faStar} from '@fortawesome/free-solid-svg-icons';
import {faInstagram} from '@fortawesome/fontawesome-free-brands';

@Component({
  selector: 'app-ig',
  templateUrl: './ig.component.html',
  styleUrls: ['./ig.component.sass']
})
export class IgComponent implements OnInit {
  instagram = faInstagram;
  retweet = faRetweet;
  reply = faReply;
  star = faStar;
  artists = [{
    id: 1,
    name: 'NICKI MINAJ',
    caption: 'The Pink Print Tour',
    picUrl: '../assets/nikkiminaj.jpg'
  }, {
    id: 2,
    name: 'NICK JONAS',
    caption: '\'Live In Concert\' Tour',
    picUrl: '../assets/nickjonas.jpg'
  }, {
    id: 3,
    name: 'TAYLOR SWIFT',
    caption: 'The 1989 World Tour',
    picUrl: '../assets/taylorswift.jpg'
  }];

  constructor() { }

  ngOnInit() {
  }

}
