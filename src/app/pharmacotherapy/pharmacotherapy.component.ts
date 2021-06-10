import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { NationClPills } from '../models';
import { PharmacotherapyService } from '../pharmacotherapy.service';

@Component({
  selector: 'app-pharmacotherapy',
  templateUrl: './pharmacotherapy.component.html',
  styleUrls: ['./pharmacotherapy.component.css']
})
export class PharmacotherapyComponent implements OnInit {

   idStage:string;
  constructor(
    private therapyService: PharmacotherapyService,
    
    private route: ActivatedRoute,
    public fb: FormBuilder,
    private http: HttpClient) {}

  ngOnInit(): void {
    this.getNationalClPill();
  
    this.idStage = '';
    this.idStage = this.route.snapshot.paramMap.get('id');
    if(this.idStage != null){
      this.getTherapies(this.idStage);
    }
  }
   therapies = new FormArray([]);
   pills: Array<NationClPills> = [];
   getNationalClPill(){
    this.therapyService.getNationClPills().subscribe(response =>{
      response.forEach((el)=> this.pills.push(el));
    })
  }
 

   addTherapy():void{
    let therapy = new FormGroup({
      id:new FormControl(''),
      dosePill: new FormControl(''),
      unitPill: new FormControl (),
      datePill: new FormControl(''),
      idStage:new FormControl(this.idStage),
      idNamePill: new FormControl('')
     })
     this.therapies.push(therapy);
  }

   getTherapies(idStage:string) : void{
    this.therapyService.getTherapys().pipe(map(data=>{
      return data.filter(d=> d.idStage == idStage);
    })).subscribe(response=>{
      console.log(response);
      for(let index = 0; index< response.length; index++){
        this.addTherapy();
        this.therapies.controls[index].patchValue({
          id:response[index].id,
          dosePill: response[index].dosePill,
          unitPill: response[index].unitPill,
          datePill: response[index].datePill.split(':').slice(0,2).join(':'),
          idStage:response[index].idStage,
          idNamePill: response[index].idNamePill,
        })
      }
    })
  }
   deleteTherapy(index:number){
    if(this.therapies.length > 0){
      this.therapies.removeAt(index);
      if(this.idStage != null){
        this.therapyService.getTherapys().pipe(map(data =>{
          return data.filter(d=> d.idStage == this.idStage)
        })).subscribe(response => {
            this.therapyService.deleteTherapy(response[index]).subscribe();
        })
      }
    } 
  }
   submitTherapies(){
    this.therapyService.getTherapys().pipe(map(data=>{
      return data.filter(d=> d.idStage == this.idStage)
    })).subscribe(therapys => {
      if(therapys.length == 0){
        let formSurgeryObj = this.therapies.getRawValue();
        formSurgeryObj.forEach((el)=>{
          let serializedSurgeryForm = JSON.stringify(el);
          this.therapyService.addTherapy(serializedSurgeryForm).subscribe(response=> console.log(response))
        })
      }
      else {
        therapys.forEach((therapy)=>{
          this.therapyService.deleteTherapy(therapy).subscribe(()=>{
            let formSurgeryObj = this.therapies.getRawValue();
            formSurgeryObj.forEach((el)=>{
              let serializedSurgeryForm = JSON.stringify(el);
              console.log(serializedSurgeryForm);
              this.therapyService.addTherapy(serializedSurgeryForm).subscribe(response=> console.log(response))
            })
          })
        })
      }
    })
  }

}
