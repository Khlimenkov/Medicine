
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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientListComponent } from './patient-list/patient-list.component';
import { TreatmentsStageComponent } from './treatments-stage/treatments-stage.component';
import { SurgeryComponent } from './surgery/surgery.component';
import { UltrasoundTherapyComponent } from './ultrasound-therapy/ultrasound-therapy.component';
import { PhysiotherapyComponent } from './physiotherapy/physiotherapy.component';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { AuthGuard, AuthInterceptor, AuthService } from './auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PharmacotherapyComponent } from './pharmacotherapy/pharmacotherapy.component';
import { LabTestComponent } from './lab-test/lab-test.component';
import { MeasurementComponent } from './measurement/measurement.component';

const appRoutes: Routes =[
  { path:'', redirectTo:'login' , pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent,},
  { path:'medicalcard', component: MednavComponent, canActivate: [AuthGuard]},
  { path:'patientlist', component: PatientListComponent, canActivate: [AuthGuard]},
  { path:'medicalcard/detail/:id', component:PatientComponent, canActivate: [AuthGuard]},
  { path:'detailStage/:id', component:TreatmentsStageComponent,canActivate: [AuthGuard]},
  { path:'surgery/:id', component:SurgeryComponent,canActivate: [AuthGuard]},
  { path:'pharmacotherapy/:id', component:PharmacotherapyComponent,canActivate: [AuthGuard]},
  { path:'physiotherapy/:id', component:PhysiotherapyComponent,canActivate: [AuthGuard]},
  { path:'ultrasound/:id', component:UltrasoundTherapyComponent,canActivate: [AuthGuard]},
  { path:'analyze/:id', component:LabTestComponent,canActivate: [AuthGuard]},
  { path:'measurement/:id', component:MeasurementComponent,canActivate: [AuthGuard]},
  

];

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    NavigationComponent,
    MednavComponent,
    TreatmentsessionComponent,
    PatientListComponent,
    TreatmentsStageComponent,
    SurgeryComponent,
    UltrasoundTherapyComponent,
    PhysiotherapyComponent,
    LoginComponent,
    SignupComponent,
    TreatmentsStageComponent,
    PharmacotherapyComponent,
    LabTestComponent,
    MeasurementComponent
    ],
  imports: [
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }
