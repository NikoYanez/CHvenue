import { Component, OnInit } from '@angular/core';
import {faSearch, faUser} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faTwitter, faYoutube} from '@fortawesome/fontawesome-free-brands';

@Component({
  selector: 'app-navbardesktop',
  templateUrl: './navbardesktop.component.html',
  styleUrls: ['./navbardesktop.component.sass']
})
export class NavbardesktopComponent implements OnInit {
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
