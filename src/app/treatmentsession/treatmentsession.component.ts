import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Inject, Input, NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MedicalStaff, NationCl025, TreatmentSession } from '../models';
import { PatientService } from '../patient.service';
import { TreatmentService } from '../treatment.service';
import { map, catchError } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../doctor.service';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-treatmentsession',
  templateUrl: './treatmentsession.component.html',
  styleUrls: ['./treatmentsession.component.css']
})
export class TreatmentsessionComponent implements OnInit {
  @Input()  PatientId:string;
   treatment: TreatmentSession;
   ill: NationCl025;
  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private treatmentsService: TreatmentService,
    private doctorService: DoctorService,
    public fb: FormBuilder,
    private http: HttpClient) {}
   treatments = new FormArray([]);
   ills = new FormArray([]);
  ngOnInit(): void {
    
  }
   ngOnChanges(){
    this.getNationalCl();
    this.getDoctors();
    if(this.PatientId != null){
      this.getTreatment(this.PatientId);
    }
    
  }
   addTreatmentSession():void{
    let ill = new FormGroup({
      id:new FormControl(''),
      idSession:new FormControl(''),
      idNameIll:new FormControl(''),
      
      
    })
    this.ills.push(ill);
    console.log(this.ills);
    
    let treatment = new FormGroup({
      id:new FormControl(''),
      idPatient:new FormControl(''),
      idMainIll:new FormControl(''),
      startSession:new FormControl(''),
      endSession:new FormControl(''),
      idDoctor:new FormControl(''),
    })
    this.treatments.push(treatment);
    
    

      
}
   deleteTreatmentSession(index:number){
    if(this.treatments.length >= 0){
      this.treatments.removeAt(index);
      this.ills.removeAt(index);
      if(this.PatientId!= null){
        this.treatmentsService.getTreatments().pipe(map(data =>{
          return data.filter(d=> d.idPatient == this.PatientId)
        })).subscribe(response => {
          console.log(response[index]);
            this.treatmentsService.deleteTreatment(response[index]).subscribe();
        })
      }
    } 
   
  }
   illNames:Array<NationCl025> = [];
   doctors:Array<MedicalStaff> = [];
   getNationalCl(){
    this.treatmentsService.getIlls().subscribe(response=>{
      response.forEach((el)=> this.illNames.push(el))
      
    })
  }
   getDoctors(){
    this.doctorService.getDoctors().subscribe(response=>{
      response.forEach((el)=> this.doctors.push(el))
    })
  }
   idIll;
   getTreatment(PatientId:string):void{
    this.treatmentsService.getTreatments().pipe(map(data =>{
        return data.filter(d=> d.idPatient == PatientId)
      })
    ).subscribe(response => {
      
      for (let index = 0; index < response.length; index++) {
        let treatment = new FormGroup({
          id:new FormControl(''),
          idPatient:new FormControl(''),
          idMainIll:new FormControl(''),
          startSession:new FormControl(''),
          endSession:new FormControl(''),
          idDoctor:new FormControl(''),
        })
        this.treatments.push(treatment);
        console.log(this.treatments.controls[index])
        this.treatments.controls[index].patchValue({
          id: response[index].id,
          idPatient:response[index].idPatient,
          idMainIll:response[index].idMainIll,
          startSession: response[index].startSession.split(':').slice(0,2).join(':'),
          endSession:response[index].endSession.split(':').slice(0,2).join(':'),
          idDoctor:response[index].idDoctor,
        });
        this.treatmentsService.getIlls().pipe(map(data=>{
          return data.filter(d=> d.id == response[index].idMainIll)
        })).subscribe(responseIll => {
          
          
          let ill = new FormGroup({
            id:new FormControl(''),
            idSession:new FormControl(''),
            idNameIll:new FormControl(''),
          })
          this.ills.push(ill);
          this.ills.controls[index].patchValue({
            idNameIll:responseIll[0].id,
          })
        })
        
        
      }
      
    })
  }
   submitForm(){
    this.treatmentsService.getTreatments().pipe(map(data=>{
      return data.filter(d=> d.idPatient == this.PatientId)
    })).subscribe(treatments => {
      if(treatments.length != 0){
        treatments.forEach((treatment)=>{
          console.log(treatment);
          this.treatmentsService.deleteTreatment(treatment).subscribe(() => {
          this.ills.controls.forEach((el, i)=>{
              this.treatments.controls[i].patchValue({
                idMainIll: this.ills.controls[i].value.idNameIll,
                idPatient: this.PatientId,
               
              });
              let formTreatmentObj = this.treatments.getRawValue();
              let serializedTreatmentForm = JSON.stringify(formTreatmentObj[i]);
              this.treatmentsService.addTreatment(serializedTreatmentForm).subscribe((treatment)=>{
              })
          });
          });
        })
      }

      if(treatments.length == 0){
      
       
          this.ills.controls.forEach((el, i)=>{
            
              this.treatments.controls[i].patchValue({
                idMainIll: this.ills.controls[i].value.idNameIll,
                idPatient: this.PatientId
              });
              let formTreatmentObj = this.treatments.getRawValue();
              let serializedTreatmentForm = JSON.stringify(formTreatmentObj[i]);
              
             
              this.treatmentsService.addTreatment(serializedTreatmentForm).subscribe((responsqe)=>{
                
              })
           
            
          });
      }
      setTimeout(()=> this._document.defaultView.location.reload(), 1000);

      
    })
    

  }

  
  

}
