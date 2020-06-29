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
import { MatTabsModule, MatFormField, MatExpansionPanelTitle, MatExpansionModule, MatFormFieldModule, MatFormFieldControl, MatInputModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
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
    SignUpDocenteComponent
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
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'pacienteAdd', component: PacienteAddComponent },
      { path: 'pacienteList', component: PacienteListComponent },
      { path: 'companionAdd', component: CompanionAddComponent },
      { path: 'clinicHistory/:idPaciente', component: ClinicalHistoryComponent },
      { path: 'rol', component: RolComponent },
      { path: 'signUp/estudiante', component: SignUpStudentsComponent },
      { path: 'signUp/docente', component: SignUpDocenteComponent },
      { path: 'login', component: LoginComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
