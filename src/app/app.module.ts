
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MednavComponent } from './mednav/mednav.component';
import { TreatmentsessionComponent } from './treatmentsession/treatmentsession.component';
import { TreatmentstagesComponent } from './treatmentstages/treatmentstages.component';
import { AnalyzesComponent } from './analyzes/analyzes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientListComponent } from './patient-list/patient-list.component';
import { TreatmentsStageComponent } from './treatments-stage/treatments-stage.component';
import { SurgeryComponent } from './surgery/surgery.component';
import { UltrasoundTherapyComponent } from './ultrasound-therapy/ultrasound-therapy.component';
import { PhysiotherapyComponent } from './physiotherapy/physiotherapy.component';
// import { LoginComponent } from './login.component';
// import { SignupComponent } from './signup.component';
// import { AuthGuard, AuthInterceptor, AuthService } from './auth.service';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes =[
  { path:'', component:MednavComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignupComponent },
  { path:'medicalcard', component: MednavComponent, },
  { path:'patientlist', component: PatientListComponent, },
  { path:'detail/:id', component:PatientComponent, },
  { path:'detailStage/:id', component:TreatmentsStageComponent,},

];

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    NavigationComponent,
    MednavComponent,
    TreatmentsessionComponent,
    TreatmentstagesComponent,
    AnalyzesComponent,
    PatientListComponent,
    TreatmentsStageComponent,
    SurgeryComponent,
    UltrasoundTherapyComponent,
    PhysiotherapyComponent,
    // LoginComponent,
    // SignupComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
   
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
