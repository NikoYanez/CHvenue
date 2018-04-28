import { Component, OnInit } from '@angular/core';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/fontawesome-free-brands';
import { faTwitter } from '@fortawesome/fontawesome-free-brands';
import { faFacebook } from '@fortawesome/fontawesome-free-brands';
import { faYoutube } from '@fortawesome/fontawesome-free-brands';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
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
