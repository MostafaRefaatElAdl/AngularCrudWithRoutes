import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departments: Department[] = [];
  deptSelected: Department = new Department(0, "", "");
  constructor(private stdSer: DepartmentService,private router:Router) { }

  ngOnInit(): void {
    this.stdSer.getAllDepartments().subscribe({
      next: a => { this.departments = a; }
    })
  }

  // //^function to delete data
  // delete(id: number)
  // {
  //   if(confirm("It will be deleted from database, are you sure ?")){
  //     this.stdSer.deleteDepartment(id).subscribe({
  //       next: a => { this.deptSelected = a; }
  //     })
  //   }
  // }

}
