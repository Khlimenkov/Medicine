import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { TreatmentStage } from '../models';
import { StagesService } from '../stages.service';

@Component({
  selector: 'app-treatments-stage',
  templateUrl: './treatments-stage.component.html',
  styleUrls: ['./treatments-stage.component.css']
})
export class TreatmentsStageComponent implements OnInit {
   idSession:string;
  constructor(
    private stagesService: StagesService,
    private route: ActivatedRoute,
    public fb: FormBuilder,
    private http: HttpClient) {}
   stage: TreatmentStage;
   stages = new FormArray([]);
  ngOnInit(): void {
    this.idSession = '';
    this.idSession = this.route.snapshot.paramMap.get('id');
    if (this.idSession != null){
      this.getStages(this.idSession);
    }
    
    console.log(this.idSession);
  }

   addStage():void{
    
    let stage = new FormGroup({
      id:new FormControl(''),
      stageName: new FormControl(''),
      startStage: new FormControl(''),
      endStage: new FormControl(''),
      idSession: new FormControl(this.idSession),
    });
    this.stages.push(stage);
  }
   getStages(idSession:string) : void {
    this.idState = [];
    this.stagesService.getStages().pipe(map(data => {
      return data.filter(d=> d.idSession == idSession);
    })).subscribe(response => {
      
      for (let index = 0; index < response.length; index++){
        this.addStage();
        this.stages.controls[index].patchValue({
          id: response[index].id,
          stageName: response[index].stageName,
          startStage: response[index].startStage.split(':').slice(0,2).join(':'),
          endStage: response[index].endStage.split(':').slice(0,2).join(':'),
          idSession: idSession
        });
        this.stagesService.getStates().pipe(map(data=>{
          return data.filter(d=> d.idStage == response[index].id)
        })).subscribe(state =>{
  
          
          this.idState.push(state[0].id)
        })
      
      }
    })
  }
   deleteStage(index:number){
    if(this.stages.length > 0){
      this.stages.removeAt(index);
      if(this.idSession != null){
        this.stagesService.getStages().pipe(map(data =>{
          return data.filter(d=> d.idSession == this.idSession)
        })).subscribe(response => {
            this.stagesService.deleteStage(response[index]).subscribe();
        })
      }
    } 
   
  }
   idState:Array<string>;
   submitStages(){
    this.idState = [];
    this.stagesService.getStages().pipe(map(data =>{
      return data.filter(d=> d.idSession == this.idSession)
    })).subscribe(stages=>{
      if (stages.length == 0){
        let formStagesObj = this.stages.getRawValue();
        formStagesObj.forEach((el, i)=>{
          
          let serializedStageForm = JSON.stringify(el);
        
          this.stagesService.addStage(serializedStageForm).subscribe((response:{id:string}) =>{
            this.stagesService.addState(JSON.stringify({id:'',idStage:response.id})).subscribe(
              (response:{id:string}) => {
                
                this.idState.push(response.id);
              })
           
          })
          
        })
      }
      if (stages.length != 0){
        stages.forEach((stage)=>{
          this.stagesService.deleteStage(stage).subscribe(()=>{
            let formStagesObj = this.stages.getRawValue();
        formStagesObj.forEach((el, i)=>{
          let serializedStageForm = JSON.stringify(el);
          this.stagesService.addStage(serializedStageForm).subscribe((response:{id:string}) =>{
            this.stagesService.addState(JSON.stringify({id:'',idStage:response.id})).subscribe(
              (response:{id:string}) => {
                
                this.idState.push(response.id);
              }
            )
            
            
          })
          });
        });
      }
    )}
   
    
  })
 }
}
