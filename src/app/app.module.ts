import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TicketComponent, TicketFormComponent, TicketListComponent } from './tickets';
import { TicketService } from '../services/ticket/ticket.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FilterPipe } from "./pipes/filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketFormComponent,
    TicketListComponent,
    HeaderComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Import all dependencies
  ],
  providers: [TicketService], // All the services need to be provided
  bootstrap: [AppComponent],
})
export class AppModule {}
