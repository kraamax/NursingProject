import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PacienteListComponent } from './components/paciente/paciente-list/paciente-list.component';
import { CompanionAddComponent } from './components/paciente/companion-add/companion-add.component';
import { PacienteAddComponent } from './components/paciente/paciente-add/paciente-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule, MatFormField, MatExpansionPanelTitle, MatExpansionModule, MatFormFieldModule, MatFormFieldControl, MatInputModule, MatButtonModule, MatIconModule, MatCardModule, MatStepperModule, MatOptionModule, MatSelectModule, MatSlideToggleModule, MatDialogRef, MatDialogModule } from '@angular/material';
import { ClinicalHistoryComponent } from './clinical-history/clinical-history.component';
import { PacienteSeeDatosPComponent } from './components/paciente/paciente-see-datos-p/paciente-see-datos-p.component';
import { AntecedentesPersonalesComponent } from './components/paciente/antecedentes/antecedentes-personales/antecedentes-personales.component';
import { GinecoObstetricosComponent } from './components/paciente/antecedentes/gineco-obstetricos/gineco-obstetricos.component';
import { AntecedentesFamiliaresComponent } from './components/paciente/antecedentes/antecedentes-familiares/antecedentes-familiares.component';
import { PersonalSocialComponent } from './components/paciente/antecedentes/personal-social/personal-social.component';
import { VitalSignsComponent } from './Components/paciente/vital-signs/vital-signs.component';
import { AnthropometricMeasuresComponent } from './Components/paciente/anthropometric-measures/anthropometric-measures.component';
import { PhysicalExamComponent } from './Components/paciente/physical-exam/physical-exam.component';
import { RolComponent } from './Components/rol/rol.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpStudentsComponent } from './components/signUps/sign-up-students/sign-up-students.component';
import { SignUpDocenteComponent } from './components/signUps/sign-up-docente/sign-up-docente.component';
import { ToastrModule } from 'ngx-toastr';
import { UserListComponent } from './components/user-list/user-list.component';
import { AuthGuard } from './services/guards/auth.guard';
import { AuthInterceptor } from './services/guards/auth.interceptor';
import { NavbarStudentComponent } from './navbar-student/navbar-student.component';
import { NavbarProfessorComponent } from './navbar-professor/navbar-professor.component';
import { AdmissionRequestComponent } from './components/admin/admission-request/admission-request.component';
import { DialogComponent } from './components/admin/dialog/dialog.component';
import { SendRequestDialogComponent } from './components/student/send-request-dialog/send-request-dialog.component';
import { StudentsRequestsListComponent } from './components/professor/students-requests-list/students-requests-list.component';
import { StudentsListComponent } from './components/professor/students-list/students-list.component';
import { PatientsByStudentListComponent } from './components/professor/patients-by-student-list/patients-by-student-list.component';
 

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PacienteAddComponent,
    PacienteListComponent,
    CompanionAddComponent,
    ClinicalHistoryComponent,
    PacienteSeeDatosPComponent,
    AntecedentesPersonalesComponent,
    AntecedentesFamiliaresComponent,
    PersonalSocialComponent,
    GinecoObstetricosComponent,
    VitalSignsComponent,
    AnthropometricMeasuresComponent,
    PhysicalExamComponent,
    RolComponent,
    LoginComponent,
    SignUpStudentsComponent,
    SignUpDocenteComponent,
    UserListComponent,
    NavbarStudentComponent,
    NavbarProfessorComponent,
    AdmissionRequestComponent,
    DialogComponent,
    SendRequestDialogComponent,
    StudentsRequestsListComponent,
    StudentsListComponent,
    PatientsByStudentListComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatSlideToggleModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      progressBar:true
    }),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'pacienteAdd', component: PacienteAddComponent, canActivate:[AuthGuard], data: { roles:['Student','Professor']} },
      { path: 'pacienteList', component: PacienteListComponent,canActivate:[AuthGuard], data: { roles:['Student','Professor']} },
      { path: 'clinicHistory/:idPaciente', component: ClinicalHistoryComponent, canActivate:[AuthGuard], data: { roles:['Student','Professor']} },
      { path: 'rol', component: RolComponent },
      { path: 'signUp/estudiante', component: SignUpStudentsComponent },
      { path: 'signUp/docente', component: SignUpDocenteComponent },
      { path: 'login', component: LoginComponent },
      { path: 'admissionRequests', component: AdmissionRequestComponent },
      { path: 'studentsRequests', component: StudentsRequestsListComponent, canActivate:[AuthGuard], data: { roles:['Professor']} },
      { path: 'acceptedStudents', component: StudentsListComponent, canActivate:[AuthGuard], data: { roles:['Professor']} },
      { path: 'patientsByStudent/:idUser', component: PatientsByStudentListComponent, canActivate:[AuthGuard], data: { roles:['Professor']} },

    ]),
    BrowserAnimationsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,
              useClass:AuthInterceptor,
              multi:true}],
  entryComponents: [
    DialogComponent,
    SendRequestDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
