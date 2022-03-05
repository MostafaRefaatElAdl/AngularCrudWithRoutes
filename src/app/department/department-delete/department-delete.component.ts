import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department-delete',
  templateUrl: './department-delete.component.html',
  styleUrls: ['./department-delete.component.css']
})
export class DepartmentDeleteComponent implements OnInit {

 departmentToDelete:Department=new Department(0,"","");

  constructor(private stdSer:DepartmentService,private router:Router,private ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe(a=>{
      console.log(a['id'])
      this.stdSer.getDepartmentById(a['id']).subscribe({
        next: a => { this.departmentToDelete = a; }
      })
    })
  }


  deleteDepartment(){
    // if(confirm("It will be deleted from database, are you sure ?")){
      this.stdSer.deleteDepartment(this.departmentToDelete.id).subscribe({
        next: a => { this.departmentToDelete = a; }
      })
    
    this.router.navigate(["./department"])
  }
}
