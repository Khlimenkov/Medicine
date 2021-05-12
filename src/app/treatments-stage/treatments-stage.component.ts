import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { TreatmentStage } from '../patient';
import { StagesService } from '../stages.service';

@Component({
  selector: 'app-treatments-stage',
  templateUrl: './treatments-stage.component.html',
  styleUrls: ['./treatments-stage.component.css']
})
export class TreatmentsStageComponent implements OnInit {
  @Input() idSession:string;
  constructor(
    private stagesService: StagesService,
    private route: ActivatedRoute,
    public fb: FormBuilder,
    private http: HttpClient) {}
  stage: TreatmentStage;
  stages = new FormArray([]);
  ngOnInit(): void {
  }

  addStage():void{
    
    let stage = new FormGroup({
      id:new FormControl(''),
      stageName: new FormControl(''),
      startStage: new FormControl(''),
      endStage: new FormControl(''),
      idSession: new FormControl(''),
    });
    this.stages.push(stage);
    console.log(this.stages);
  }
  getStages(idSession:string) : void {
    this.stagesService.getStages().pipe(map(data => {
      return data.filter(d=> d.idSession = idSession);
    })).subscribe(response => {
      for (let index = 0; index< response.length; index++){
        this.addStage();
        this.stages.controls[index].patchValue({
          id: response[index].id,
          stageName: response[index].stageName,
          startStage: response[index].startStage,
          endStage: response[index].endStage,
          idSession: response[index].idSession
        });
      
      }
    })
  }
  deleteStage(index:number){
    if(this.stages.length >= 0){
      this.stages.removeAt(index);
      if(this.idSession != null){
        this.stagesService.getStages().pipe(map(data =>{
          return data.filter(d=> d.idSession == this.idSession)
        })).subscribe(response => {
          console.log(response[index]);
            this.stagesService.deleteStage(response[index]).subscribe();
        })
      }
    } 
   
  }
  submitStages(){
    this.stagesService.getStages().pipe(map(data =>{
      return data.filter(d=> d.idSession == this.idSession)
    })).subscribe(stages=>{
      if (stages.length == 0){
        let formStagesObj = this.stages.getRawValue();
        formStagesObj.forEach((el, i)=>{
          let serializedStageForm = JSON.stringify(el);
          this.stagesService.addStage(serializedStageForm).subscribe()
        })
      }
      if (stages.length != 0){
        stages.forEach((stage)=>{
          this.stagesService.deleteStage(stage).subscribe(()=>{
            let formStagesObj = this.stages.getRawValue();
        formStagesObj.forEach((el, i)=>{
          let serializedStageForm = JSON.stringify(el);
          this.stagesService.addStage(serializedStageForm).subscribe()
          });
        });
      }
    )}
   
    
  })
 }
}
