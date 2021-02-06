import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Patient} from 'src/app/patient'
import {Analyze} from 'src/app/analyze'

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[]=[];
  analyzes: Analyze[]=[];
  description = {
    surname:'',
    name:'',
    patronymic:'',
    dateBirth:null,
    gender:'',
    bloodType:null,
    phone:'',
    email: '',
    country:'',
    region:'',
    street:'',
    houseDetails:'',
    socialStatus:'',
    maritalStatus:''
  };
  descrAnal={
    patientId:'',
    test:''

  };
  constructor(private http: HttpClient) { 
  
  }
  
  ngOnInit() {
    this.http.get('assets/patients.json').subscribe((data:Patient)=> this.patients=data["patientList"]);
    this.http.get('assets/patients.json').subscribe((data:Analyze)=> this.analyzes=data["analyzes"]);
    
    
    
    
  }
  showInfo(value){
      let selectedPat = this.patients.find(patient=> patient.id == value)
      let selectedAnal = this.analyzes.find(analyze=> analyze.patientId == value)
      
     
      this.description={
        surname: selectedPat.surname,
        name:selectedPat.name,
        patronymic:selectedPat.patronymic,
        dateBirth:selectedPat.dateBirth,
        gender:selectedPat.gender,
        bloodType:selectedPat.bloodType,
        phone:selectedPat.phone,
        email:selectedPat.email,
        country:selectedPat.country,
        region:selectedPat.region,
        street:selectedPat.street,
        houseDetails:selectedPat.houseDetails,
        socialStatus:selectedPat.socialStatus,
        maritalStatus:selectedPat.maritalStatus,
      }
      if (selectedAnal == undefined){
        this.descrAnal={
          patientId:'',
          test:''
        };
      }
      else{
        this.descrAnal={
          patientId:selectedAnal.patientId,
          test:selectedAnal.test
        }
      }
      
     
      
      console.log(this.description)
  }
 
 
  
  

}
