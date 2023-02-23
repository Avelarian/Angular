import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentListComponent } from "./students";
import { TicketListComponent } from "./tickets";

const routes: Routes = [
  { path: "", redirectTo: "/tickets", pathMatch: "full" },
  { path: "tickets", component: TicketListComponent },
  { path: "students", component: StudentListComponent },
  { path: "**", redirectTo: "/tickets" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
