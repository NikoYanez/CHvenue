import { Component, OnInit } from '@angular/core';
import {faReply, faRetweet, faStar} from '@fortawesome/free-solid-svg-icons';
import {faInstagram} from '@fortawesome/fontawesome-free-brands';
import { ARTISTSIG } from '../artists';

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
  artists = ARTISTSIG;

  constructor() { }

  ngOnInit() {
  }

}
