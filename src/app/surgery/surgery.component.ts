import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { DoctorService } from '../doctor.service';
import { MedicalStaff, NationalCl026 } from '../models';
import { SurgeryService } from '../surgery.service';

@Component({
  selector: 'app-surgery',
  templateUrl: './surgery.component.html',
  styleUrls: ['./surgery.component.css']
})
export class SurgeryComponent implements OnInit {
   idStage:string;
  constructor(
    private surgeryService: SurgeryService,
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    public fb: FormBuilder,
    private http: HttpClient) {}

  ngOnInit(): void {
    this.getNationalCl026();
    this.getDoctors();
    this.idStage = '';
    this.idStage = this.route.snapshot.paramMap.get('id');
    if(this.idStage != null){
      this.getSurgeries(this.idStage);
    }
  }
   doctors:Array<MedicalStaff> = [];
   surgeries = new FormArray([]);
   surgeryNames: Array<NationalCl026> = [];
   getNationalCl026(){
    this.surgeryService.getNationCl026().subscribe(response =>{
      response.forEach((el)=> this.surgeryNames.push(el));
    })
  }
   getDoctors(){
    this.doctorService.getDoctors().subscribe(response=>{
      response.forEach((el)=> this.doctors.push(el))
    })
  }

   addSurgery():void{
    let surgery = new FormGroup({
      id:new FormControl(''),
      DateIntervention: new FormControl(''),
      idStage: new FormControl (this.idStage),
      idNameIntervention: new FormControl(''),
      idMedStuff:new FormControl('')
     })
     this.surgeries.push(surgery);
  }

   getSurgeries(idStage:string) : void{
    this.surgeryService.getSurgerys().pipe(map(data=>{
      return data.filter(d=> d.idStage == idStage);
    })).subscribe(response=>{
      console.log(response);
      for(let index = 0; index< response.length; index++){
        this.addSurgery();
        this.surgeries.controls[index].patchValue({
          id: response[index].id,
          DateIntervention: response[index].DateIntervention.split(':').slice(0,2).join(':'),
          idStage:response[index].idStage,
          idNameIntervention: response[index].idNameIntervention,
          idMedStuff:response[index].idMedStaff[0]
        })
      }
    })
  }
   deleteSurgery(index:number){
    if(this.surgeries.length > 0){
      this.surgeries.removeAt(index);
      if(this.idStage != null){
        this.surgeryService.getSurgerys().pipe(map(data =>{
          return data.filter(d=> d.idStage == this.idStage)
        })).subscribe(response => {
            this.surgeryService.deleteSurgery(response[index]).subscribe();
        })
      }
    } 
  }
   submitSurgeries(){
    console.log(this.surgeries);
    this.surgeryService.getSurgerys().pipe(map(data=>{
      return data.filter(d=> d.idStage == this.idStage)
    })).subscribe(surgeries => {
      if(surgeries.length == 0){
        let formSurgeryObj = this.surgeries.getRawValue();
        formSurgeryObj.forEach(({idMedStuff,...data})=>{
          let serializedSurgeryForm = JSON.stringify({...data, idMedStaff:[idMedStuff]});
          this.surgeryService.addSurgery(serializedSurgeryForm).subscribe(response=> console.log(response))
        })
      }
      else {
        surgeries.forEach((surgery)=>{
          this.surgeryService.deleteSurgery(surgery).subscribe(()=>{
            let formSurgeryObj = this.surgeries.getRawValue();
            formSurgeryObj.forEach(({idMedStuff,...data})=>{
              let serializedSurgeryForm = JSON.stringify({...data, idMedStaff:[idMedStuff,]});
              console.log(serializedSurgeryForm);
              this.surgeryService.addSurgery(serializedSurgeryForm).subscribe(response=> console.log(response))
            })
          })
        })
      }
    })
  }
  
}
