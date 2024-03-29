import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Patient, TreatmentSession, NationCl025 } from 'src/app/models';
import { PatientService } from '../patient.service';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit {
  constructor(private patientSevice: PatientService) {}
   patients: Patient[];
   treatments: TreatmentSession[] = [];
   ills: NationCl025[] = [];
   search = new FormControl('');
  ngOnInit() {
    this.getPatients()
  }
   getPatients(): void {
    this.patientSevice.getPatients().subscribe(patients => this.patients = patients)
  }
   add(patient : Patient): void{
    this.patientSevice.addPatient(patient).subscribe(patient => this.patients.push(patient))
  }
   deletePatient(patient : Patient) : void {
    this.patients = this.patients.filter(p => p !==patient);
    this.patientSevice.deletePatient(patient).subscribe();
  }
  
   searchList(){
    console.log(this.search.value);
    if(this.search.value != ''){
      return this.patients.filter(patient=> patient.surname.toUpperCase().match(this.search.value.toUpperCase()) )
    }
    
    else {return this.patients;}
  } 


   

  
}
