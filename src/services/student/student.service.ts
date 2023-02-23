import { Injectable } from "@angular/core";
import { Student } from "../../models/student";
import { STUDENTS_MOCKED } from "../../mocks/students.mock";
import { BehaviorSubject } from "rxjs/index";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class StudentService {
  private studentList: Student[] = STUDENTS_MOCKED;

  public students$: BehaviorSubject<Student[]> = new BehaviorSubject(
    this.studentList
  );

  constructor(public http: HttpClient) {
    this.getStudentsList();
  }

  getStudentById(id: number): Student {
    return this.studentList.find((student) => student.id === id);
  }

  getStudentsList() {
    this.http.get(environment.apiUrl + "/students").subscribe((data) => {
      for (const backendFormatStudent of data as Object[]) {
        const student = {
          id: backendFormatStudent["studentId"],
          firstName: backendFormatStudent["FrstName"],
          lastName: backendFormatStudent["LastName"],
        };
        this.studentList.push(student);
      }
      this.students$.next(this.studentList);
    });
  }

  addStudent(student: Student) {
    this.studentList.push(student);
    this.students$.next(this.studentList);
  }
}
