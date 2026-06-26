import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list.component';
import { RoleComponent } from './role/role.component';
import { RoleListComponent } from './role/role-list.component';
import { CollegeComponent } from './college/college.component';
import { CollegeListComponent } from './college/college-list.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course/course-list.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/student-list.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup.component';
import { ForgetpasswordComponent } from './login/forgetpassword.component';
import { ChangepasswordComponent } from './user/changepassword.component';

const routes: Routes = [
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'userlist',
    component:UserListComponent
  },
   {
    path:'user/:id',
    component:UserComponent
  },
   {
    path:'role',
    component:RoleComponent
  },
  {
    path:'rolelist',
    component:RoleListComponent
  },
  {
    path:'role/:id',
    component:RoleComponent
  },
  {
    path:'college',
    component:CollegeComponent
  },
  {
    path:'collegelist',
    component:CollegeListComponent
  },
  {
    path:'college/:id',
    component:CollegeComponent
  },
  {
    path:'course',
    component:CourseComponent
  },
  {
    path:'courselist',
    component:CourseListComponent
  },
  {
    path:'course/:id',
    component:CourseComponent
  },
  {
    path:'faculty',
    component:FacultyComponent
  },
  {
    path:'facultylist',
    component:FacultyListComponent
  },
  {
    path:'faculty/:id',
    component:FacultyComponent
  },
  {
    path:'marksheet',
    component:MarksheetComponent
  },
  {
    path:'marksheetlist',
    component:MarksheetListComponent
  },
  {
    path:'marksheet/:id',
    component:MarksheetComponent
  },
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'studentlist',
    component:StudentListComponent
  },
  {
    path:'student/:id',
    component:StudentComponent
  },
  {
    path:'subject',
    component:SubjectComponent
  },
   {
    path:'subjectlist',
    component:SubjectListComponent
  },
  {
    path:'subject/:id',
    component:SubjectComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'forgetpassword',
    component:ForgetpasswordComponent
  },
  {
    path:'changepassword',
    component:ChangepasswordComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
