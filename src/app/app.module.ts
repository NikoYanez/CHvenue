// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChlogoComponent } from './chlogo/chlogo.component';
import { EventsComponent } from './events/events.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

// Font Awesome Icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChlogoComponent,
    EventsComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
