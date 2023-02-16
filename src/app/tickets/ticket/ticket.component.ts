import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { STUDENTS_MOCKED } from "src/mocks/students.mock";
import { Ticket } from "../../../models/ticket";

@Component({
  selector: "app-ticket",
  templateUrl: "./ticket.component.html",
  styleUrls: ["./ticket.component.scss"],
})
export class TicketComponent implements OnInit {
  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input()
  ticket: Ticket;

  @Output()
  ticketHasBeenSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  ticketHasBeenDeleted: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  @Output()
  ticketHasBeenArchived: EventEmitter<Ticket> = new EventEmitter<Ticket>();

  constructor() {}

  ngOnInit() {}

  selectTicket() {
    this.ticketHasBeenSelected.emit(true);
  }

  getTicketClass(value: string) {
    switch (value) {
      case "SI":
        return "fas fa-laptop";
      case "GE":
        return "fas fa-briefcase";
      case "GB":
        return "fas fa-table";
      default:
        return "fas fa-question";
    }
  }

  archiveTicket(ticket: Ticket) {
    this.ticketHasBeenArchived.emit(ticket);
  }

  getStudentName(id: number) {
    return STUDENTS_MOCKED.find((student) => student.id === id).lastName;
  }
}
