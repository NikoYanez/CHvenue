import { Component, OnInit } from '@angular/core';
import {faReply, faRetweet, faStar} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/fontawesome-free-brands';

@Component({
  selector: 'app-fb',
  templateUrl: './fb.component.html',
  styleUrls: ['./fb.component.sass']
})
export class FbComponent implements OnInit {
  facebook = faFacebook;
  retweet = faRetweet;
  reply = faReply;
  star = faStar;
  repeat = [1, 2, 3];
  constructor() { }

  ngOnInit() {
  }

}
