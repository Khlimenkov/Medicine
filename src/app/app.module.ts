import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MednavComponent } from './mednav/mednav.component';
import { TreatmentsessionComponent } from './treatmentsession/treatmentsession.component';
import { TreatmentstagesComponent } from './treatmentstages/treatmentstages.component';
import { AnalyzesComponent } from './analyzes/analyzes.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    NavigationComponent,
    MednavComponent,
    TreatmentsessionComponent,
    TreatmentstagesComponent,
    AnalyzesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
