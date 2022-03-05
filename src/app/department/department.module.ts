import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentEditComponent } from './department-edit/department-edit.component';
import { FormsModule } from '@angular/forms';
import { DepartmentDeleteComponent } from './department-delete/department-delete.component';

const routes:Routes=[
  {path:"",component:DepartmentListComponent},
  {path:"add",component:DepartmentAddComponent},
  {path:"edit/:id",component:DepartmentEditComponent},
  {path:"delete/:id",component:DepartmentDeleteComponent}
]


@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentDetailsComponent,
    DepartmentEditComponent,
    DepartmentDeleteComponent,
  ],
  imports: [
    CommonModule,FormsModule,RouterModule.forChild(routes)
  ]
})
export class DepartmentModule { }
