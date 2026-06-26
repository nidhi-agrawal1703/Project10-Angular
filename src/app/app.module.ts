import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS,HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpServiceService } from './http-service.service';
import { EndpointServiceService } from './endpoint-service.service';
import { ServiceLocatorService } from './service-locator.service';
import { AuthServiceService } from './auth-service.service';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { CollegeComponent } from './college/college.component';
import { CourseComponent } from './course/course.component';
import { FacultyComponent } from './faculty/faculty.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { StudentComponent } from './student/student.component';
import { SubjectComponent } from './subject/subject.component';
import { TimetableComponent } from './timetable/timetable.component';
import { RoleListComponent } from './role/role-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { CourseListComponent } from './course/course-list.component';
import { FacultyListComponent } from './faculty/faculty-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { StudentListComponent } from './student/student-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { UserListComponent } from './user/user-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader,TranslateModule } from '@ngx-translate/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetpasswordComponent } from './login/forgetpassword.component';
import { ChangepasswordComponent } from './user/changepassword.component';

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UserComponent,
    RoleComponent,
    CollegeComponent,
    CourseComponent,
    FacultyComponent,
    MarksheetComponent,
    StudentComponent,
    SubjectComponent,
    TimetableComponent,
    RoleListComponent,
    CollegeListComponent,
    CourseListComponent,
    FacultyListComponent,
    MarksheetListComponent,
    StudentListComponent,
    SubjectListComponent,
    UserListComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    ForgetpasswordComponent,
    ChangepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    HttpServiceService,
    EndpointServiceService,
    ServiceLocatorService,
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthServiceService, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
