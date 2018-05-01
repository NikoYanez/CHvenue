import { Component, OnInit } from '@angular/core';
import {faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faTwitter, faYoutube} from '@fortawesome/fontawesome-free-brands';

@Component({
  selector: 'app-test-nav',
  templateUrl: './test-nav.component.html',
  styleUrls: ['./test-nav.component.sass']
})
export class TestNavComponent implements OnInit {
  faSearch = faSearch;
  instagram = faInstagram;
  twitter = faTwitter;
  facebook = faFacebook;
  youtube = faYoutube;
  user = faUser;

  constructor() { }

  ngOnInit() {
  }

}
