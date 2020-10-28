import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
 


  constructor() { 
    
  }

  ngOnInit(): void {
   
  }
  
  
  patient = {
    id:'',
    name:'',
    surname:'',
    birthday:'',
    gender:'',
    blood:'',
    phone:'',
    email:'',
    adress:'',
  }
  
  PatientSave(){
    var patient_id=(<HTMLInputElement>document.getElementById('patient-id')).value
    var patient_name =(<HTMLInputElement>document.getElementById('patient-name')).value
    var patient_surname =(<HTMLInputElement>document.getElementById('patient-surname')).value
    var patient_birthday =(<HTMLInputElement>document.getElementById('patient-birthday')).value
    var patient_gender =(<HTMLInputElement>document.getElementById('patient-gender')).value
    var patient_blood =(<HTMLInputElement>document.getElementById('patient-blood')).value
    var patient_phone =(<HTMLInputElement>document.getElementById('patient-phone')).value
    var patient_email =(<HTMLInputElement>document.getElementById('patient-email')).value
    var patient_adress =(<HTMLInputElement>document.getElementById('patient-adress')).value
    if ((patient_id = '') && (patient_surname = '') && (patient_name='')){
      return false;
    }
    else{
      this.patient.id = patient_id;
      this.patient.name = patient_name;
      this.patient.surname = patient_surname;
      this.patient.birthday = patient_birthday;
      this.patient.gender = patient_gender;
      this.patient.blood = patient_blood;
      this.patient.phone = patient_phone;
      this.patient.email = patient_email;
      this.patient.adress = patient_adress;
    }
    console.log(this.patient);
    
  }
 
 
  

}
