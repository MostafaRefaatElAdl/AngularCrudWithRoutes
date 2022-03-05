import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {
  newDepartment:Department= new Department(0,"","");
  constructor(private stdSer:DepartmentService,private router:Router) { }
  
    ngOnInit(): void {
    }
  
    addDepartment(){
      this.stdSer.add(this.newDepartment).subscribe({
        next:a=>{this.newDepartment=a}
      })
      this.router.navigate(["./department"])
    }

}
