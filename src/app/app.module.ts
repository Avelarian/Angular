import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import {
  TicketComponent,
  TicketFormComponent,
  TicketListComponent,
} from "./tickets";
import { TicketService } from "../services/ticket/ticket.service";
import { ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { FilterPipe } from "./pipes/filter.pipe";
import { AppRoutingModule } from "./app-routing.module";
import {
  StudentComponent,
  StudentFormComponent,
  StudentListComponent,
} from "./students";

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketFormComponent,
    TicketListComponent,
    HeaderComponent,
    FilterPipe,
    StudentComponent,
    StudentListComponent,
    StudentFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Import all dependencies
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [TicketService], // All the services need to be provided
  bootstrap: [AppComponent],
})
export class AppModule {}
