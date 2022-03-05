import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {

  departmentToEdit:Department=new Department(0,"","");

  constructor(private stdSer:DepartmentService,private router:Router,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe(a=>{
      console.log(a['id'])
      this.stdSer.getDepartmentById(a['id']).subscribe({
        next: a => { this.departmentToEdit = a; }
      })
    })
  }


  saveDepartment(){
    // this.stdSer.edit(this.departmentToEdit)
    this.stdSer.edit(this.departmentToEdit).subscribe({
      next:a=>(this.departmentToEdit=a)
    })
    this.router.navigate(["./department"])
  }

}
