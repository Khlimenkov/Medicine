import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { PhysiotherapyService } from '../physiotherapy.service';

@Component({
  selector: 'app-physiotherapy',
  templateUrl: './physiotherapy.component.html',
  styleUrls: ['./physiotherapy.component.css']
})
export class PhysiotherapyComponent implements OnInit {

   idStage:string;
  constructor(
    private therapyService: PhysiotherapyService,
    
    private route: ActivatedRoute,
    public fb: FormBuilder,
    private http: HttpClient) {}

  ngOnInit(): void {
  
    this.idStage = '';
    this.idStage = this.route.snapshot.paramMap.get('id');
    if(this.idStage != null){
      this.getTherapies(this.idStage);
    }
  }
   therapies = new FormArray([]);
 
 

   addTherapy():void{
    let therapy = new FormGroup({
      id:new FormControl(''),
      namePhysiotherapy: new FormControl(''),
      valuePhysiotherapy: new FormControl (),
      unitPhysiotherapy: new FormControl(''),
      idStage:new FormControl(this.idStage),
      datePhysiotherapy: new FormControl(''),
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
          namePhysiotherapy: response[index].namePhysiotherapy,
          valuePhysiotherapy: response[index].valuePhysiotherapy,
          unitPhysiotherapy: response[index].unitPhysiotherapy,
          idStage:response[index].idStage,
          datePhysiotherapy: response[index].datePhysiotherapy.split(':').slice(0,2).join(':'),
         
        })}
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
