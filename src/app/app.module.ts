import {Routes, RouterModule} from '@angular/router'
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
const appRoutes: Routes =[
  { path:'', component: MednavComponent },
  { path:'medicalcard', component: MednavComponent},
  { path:'patientlist', component: PatientListComponent}

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
    PatientListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
