import { Component, OnInit } from '@angular/core';
import { faTwitter } from '@fortawesome/fontawesome-free-brands';
import { faRetweet, faReply, faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-socialmedia',
  templateUrl: './socialmedia.component.html',
  styleUrls: ['./socialmedia.component.sass']
})
export class SocialmediaComponent implements OnInit {
  twitter = faTwitter;
  retweet = faRetweet;
  reply = faReply;
  star = faStar;
  repeat = [1, 2, 3];
  constructor() { }

  ngOnInit() {
  }

}
