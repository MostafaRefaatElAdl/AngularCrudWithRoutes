import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { DepartmentService } from './department.service';
import { StudentService } from './student.service';
import { FormsModule } from '@angular/forms';
import { DepartmentDeleteComponent } from './department/department-delete/department-delete.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { RouterModule, Routes } from '@angular/router'
import { ErrorComponent } from './error/error.component';

const routes:Routes=[
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"department",loadChildren:()=>import("./department/department.module").then(m=>m.DepartmentModule)},
  {path:"**",component:ErrorComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    StudentAddComponent,
    StudentListComponent,
    StudentEditComponent,
    StudentDetailsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DepartmentService,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
