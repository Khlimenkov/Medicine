import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { LabTestService } from '../labtest.service';
import { MeasurementService } from '../measurement.service';
import { CatalogMeasurement } from '../models';


@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.css']
})
export class MeasurementComponent implements OnInit {

   idState:string;
  constructor(
    private measurementService: MeasurementService,
    
    private route: ActivatedRoute,
    public fb: FormBuilder,
    private http: HttpClient) {}

  ngOnInit(): void {
    this.getCatalog();
  
    this.idState = '';
    this.idState = this.route.snapshot.paramMap.get('id');
    if(this.idState != null){
      this.getLabTests(this.idState);
    }
  }
   measurements = new FormArray([]);
   catalog: Array<CatalogMeasurement> = [];
   getCatalog(){
    this.measurementService.getcatalogUrl().subscribe(response =>{
      response.forEach((el)=> this.catalog.push(el));
    })
  }
 

   addMeasurement():void{
    let test = new FormGroup({
      id:new FormControl(''),
      valueMeasurement: new FormControl(''),
      dateMeasurement: new FormControl(''),
      idCatalogMeasurement:new FormControl(''),
      idMedStaff: new FormControl(''),
      idState: new FormControl(this.idState)
     })
     this.measurements.push(test);
  }

   getLabTests(idState:string) : void{
    this.measurementService.getMeasurements().pipe(map(data=>{
      return data.filter(d=> d.idState == idState);
    })).subscribe(response=>{
      
      for(let index = 0; index< response.length; index++){
        this.addMeasurement();
        this.measurements.controls[index].patchValue({
          id:response[index].id,
          valueMeasurement: response[index].valueMeasurement,
          dateMeasurement: response[index].dateMeasurement.split(':').slice(0,2).join(':'),
          idCatalogMeasurement:response[index].idCatalogMeasurement,
         
          idState: response[index].idState,
        
         
        })
       
      }
    })
  }
   deleteMeasurement(index:number){
    if(this.measurements.length > 0){
      this.measurements.removeAt(index);
      if(this.idState != null){
        this.measurementService.getMeasurements().pipe(map(data =>{
          return data.filter(d=> d.idState == this.idState)
        })).subscribe(response => {
            this.measurementService.deleteMeasurement(response[index]).subscribe();
        })
      }
    } 
  }
   submitMeasurements(){
    this.measurementService.getMeasurements().pipe(map(data=>{
      return data.filter(d=> d.idState == this.idState)
    })).subscribe(measurementes => {
      if(measurementes.length == 0){
        let formSurgeryObj = this.measurements.getRawValue();
        formSurgeryObj.forEach((el)=>{
          let serializedSurgeryForm = JSON.stringify(el);
          this.measurementService.addMeasurement(serializedSurgeryForm).subscribe();
        })
      }
      else {
        measurementes.forEach((measur)=>{
          this.measurementService.deleteMeasurement(measur).subscribe(()=>{
            let formSurgeryObj = this.measurements.getRawValue();
            formSurgeryObj.forEach((el)=>{
              let serializedSurgeryForm = JSON.stringify(el);
              console.log(serializedSurgeryForm);
              this.measurementService.addMeasurement(serializedSurgeryForm).subscribe();
            })
          })
        })
      }
    })
  }
}
