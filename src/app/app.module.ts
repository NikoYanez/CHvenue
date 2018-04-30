// Modules
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { IfMediaModule } from 'ng2-if-media';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChlogoComponent } from './chlogo/chlogo.component';
import { EventsComponent } from './events/events.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { SocialComponent } from './social/social.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { IgComponent } from './ig/ig.component';
import { FbComponent } from './fb/fb.component';
import { DirectionsComponent } from './directions/directions.component';

// Font Awesome Icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EventsdesktopComponent } from './eventsdesktop/eventsdesktop.component';

const mediaConfig = {
  breakpoints: {
    tablet: {
      value: '768px',
      param: 'width'
    },
    budgetHeight: {
      value: '480px',
      param: 'height'
    },
    widescreen: {
      value: '1024px',
      param: 'width'
    },
    print: {
      media: 'print'
    },
    landscape: '(orientation: landscape)'
  },
  vendorBreakpoints: ['bootstrap'],  // include 3rd party namespace
  throttle: 100
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChlogoComponent,
    EventsComponent,
    NewsletterComponent,
    SocialComponent,
    SocialmediaComponent,
    IgComponent,
    FbComponent,
    DirectionsComponent,
    EventsdesktopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    FontAwesomeModule,
    TabsModule.forRoot(),
    RouterModule,
    TabsModule,
    IfMediaModule.withConfig(mediaConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
