import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { StudentService } from "src/services/student/student.service";
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

  constructor(public studentService: StudentService) {}

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
    const student = this.studentService.getStudentById(id);

    return student.lastName + " " + student.firstName;
  }
}
