import { Component, OnInit } from '@angular/core';
import {faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram, faTwitter, faYoutube} from '@fortawesome/fontawesome-free-brands';
export { artistFilter };

let artistFilter = '';

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
  artistFilterValue = '';
  constructor() { }

  ngOnInit() {
  }

  onUpdateSearch(event: Event) {
    this.artistFilterValue = (<HTMLInputElement>event.target).value;
    console.log(this.artistFilterValue);
    artistFilter = this.artistFilterValue;
  }

  returnArtistFilter() {
    console.log(artistFilter);
    return this.artistFilterValue;
  }

}
