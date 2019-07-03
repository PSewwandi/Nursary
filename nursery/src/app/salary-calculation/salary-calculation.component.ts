import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../shared/teacher.service';
import { Attendance } from '../shared/attendance.model';
import { Teacher } from '../shared/teacher.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-salary-calculation',
  templateUrl: './salary-calculation.component.html',
  styleUrls: ['./salary-calculation.component.css']
})
export class SalaryCalculationComponent implements OnInit {
  report;
  teacherId;
  salary;
  days;
  perDayRate;
  allowances;
  advance;
  constructor(private firestore:AngularFirestore,private service:TeacherService,private toastr : ToastrService) { }

  ngOnInit() {
    this.getAttendanceReport(6);   
  }

  getAttendanceReport(month) {
    // this.report = Array.from(this.attendance)
    //   .reduce((obj, v) => Object.assign(obj, { [v[0]]: 0 }), {});
    this.report = {
      T001: 0,
      T002: 0,
      T003: 0,
      T004: 0,
      T005: 0
    };

    this.firestore.collection<Attendance>('teacherattendance', ref => ref.where('month', '==', month))
      .valueChanges()
      .subscribe(attendances => {
        console.log('ATTENDANCE', attendances.map(v => v.attendance));
        console.log('report', this.report);

        this.report = attendances.map(v => v.attendance).reduce((sum, o) => {
          Object.keys(o).forEach(k => {
            sum[k] += o[k];
          }); return sum;
        }, this.report);

        console.log(this.report);
      })
  }

  getSalary() {
    const tDays = this.report[this.teacherId];
    if (tDays) {
      this.days = tDays;
      this.salary = tDays * this.perDayRate + Number(this.allowances) - Number(this.advance);
      console.log(this.days, this.salary, this.perDayRate);
    }
  }
}
