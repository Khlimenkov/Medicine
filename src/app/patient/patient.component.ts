import { Component } from '@angular/core';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Address } from '../patient';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  patient: Patient;
  address: Address;
patientForm = this.fb.group({
    id:[''],
    surname: ['',Validators.required],
    name:['',Validators.required],
    patronymic:['',Validators.required],
    dateBirth:[''],
    gender:[''],
    bloodType:[''],
    idAddress:[''],
    phone:[''],
    email: [''],
    socialStatus:[''],
    maritalStatus:[''],
  });
  formAdress = this.fb.group({
      id:[''],
      country:[''],
      region:[''],
      cityVillage:[''],
      street:[''],
      houseDetails:[''],
  });
  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    public fb: FormBuilder,
    private http: HttpClient) {}

  ngOnInit() { 
    if(this.getPatient !=null){
      this.getPatient();
    }
    
  }
  
  getPatient():void{
    const id = this.route.snapshot.paramMap.get('id');
    this.patientService.getPatient(id).subscribe(patient =>{
       this.patient = patient
    console.log(this.patient)
    this.setPatientId(this.patient.id);
       this.patientForm.patchValue({
        id: this.patient.id,
        surname: this.patient.surname,
        name:this.patient.name,
        patronymic:this.patient.patronymic,
        dateBirth:this.patient.dateBirth,
        gender:this.patient.gender,
        bloodType:this.patient.bloodType,
        idAddress:this.patient.idAddress,
        phone:this.patient.phone,
        email: this.patient.email,
        socialStatus:this.patient.socialStatus,
        maritalStatus:this.patient.maritalStatus,
        
        })
        this.patientService.getAdress(this.patient.idAddress).subscribe(address =>{
          this.address = address;
  
          this.formAdress.patchValue({
            id:this.address.id,
            country:this.address.country,
            region:this.address.region,
            cityVillage:this.address.cityVillage,
            street:this.address.street,
            houseDetails:this.address.houseDetails,
          });
        })
      });
     
    }
    idAddress;
    patientid;
    setPatientId(patientid:string){
      if(patientid!=null){
        this.patientid = patientid;
      }
    }
  submitForm() {
    
    let formAdressObj = this.formAdress.getRawValue();
    let serializedAdressForm = JSON.stringify(formAdressObj)
    
    
    let httpOptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }
    this.http.post('http://127.0.0.1:8000/api/Address/', serializedAdressForm, httpOptions).subscribe(
      (response) => {
        console.log(response)
        
        this.idAddress= response
        this.idAddress = this.idAddress.id;
        this.patientForm.controls['idAddress'].setValue(this.idAddress)
        let formObj = this.patientForm.getRawValue();
        let serializedForm = JSON.stringify(formObj);
        console.log(serializedForm);
        this.http.post('http://127.0.0.1:8000/api/Patient/', serializedForm, httpOptions)
    .subscribe(
      (response) => {
        this.patientid = response;
        this.patientid = this.patientid.id;
        this.setPatientId(this.patientid);
        console.log(response)
      },
      
      (error) => console.log(error),
      
    )
       },
      (error) => console.log(error),
     
    )
    
    
    
  }
}
