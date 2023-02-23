import { Component, Input, OnInit } from "@angular/core";
import { StudentService } from "src/services/student/student.service";
import { Student } from "../../../models/student";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.scss"],
})
export class StudentComponent implements OnInit {
  @Input()
  student: Student;

  constructor(public studentService: StudentService) {}

  ngOnInit() {}
}
