import { Component, OnInit } from '@angular/core';
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/fontawesome-free-brands';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.sass']
})
export class SocialComponent implements OnInit {
  instagram = faInstagram;
  twitter = faTwitter;
  facebook = faFacebook;

  constructor() { }

  ngOnInit() {
  }

}
