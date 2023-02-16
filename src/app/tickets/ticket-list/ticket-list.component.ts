import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { TicketService } from "../../../services/ticket/ticket.service";
import { Ticket } from "../../../models/ticket";

@Component({
  selector: "app-ticket-list",
  templateUrl: "./ticket-list.component.html",
  styleUrls: ["./ticket-list.component.scss"],
})
export class TicketListComponent implements OnInit {
  public ticketList: Ticket[] = [];
  showAllTickets: boolean = false;

  constructor(
    public ticketService: TicketService,
    private changesDetector: ChangeDetectorRef
  ) {
    this.ticketService.tickets$.subscribe(
      (tickets) => (this.ticketList = tickets)
    );
  }

  ngOnInit() {}

  ticketHasBeenSelected(hasBeenSelected: boolean) {
    console.log("event received from child:", hasBeenSelected);
  }

  ticketHasBeenArchived(ticket: Ticket) {
    this.ticketService.archiveTicket(ticket);
    this.changesDetector.detectChanges();
  }
}
