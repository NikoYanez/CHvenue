// Modules
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
import { EventsdesktopComponent } from './eventsdesktop/eventsdesktop.component';
import { TestNavComponent } from './test-nav/test-nav.component';

// Font Awesome Icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EventgridComponent } from './eventgrid/eventgrid.component';


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
    EventsdesktopComponent,
    TestNavComponent,
    EventgridComponent
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
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
