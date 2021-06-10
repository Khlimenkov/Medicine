import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { NationalCl027, NationClPills } from '../models';
import { LabTestService } from '../labtest.service';


@Component({
  selector: 'app-lab-test',
  templateUrl: './lab-test.component.html',
  styleUrls: ['./lab-test.component.css']
})
export class LabTestComponent implements OnInit {

   idState:string;
  constructor(
    private labService: LabTestService,
    
    private route: ActivatedRoute,
    public fb: FormBuilder,
    private http: HttpClient) {}

  ngOnInit(): void {
    this.getNationalCl();
  
    this.idState = '';
    this.idState = this.route.snapshot.paramMap.get('id');
    if(this.idState != null){
      this.getLabTests(this.idState);
    }
  }
   tests = new FormArray([]);
   analyzes: Array<NationalCl027> = [];
   getNationalCl(){
    this.labService.getNationCl().subscribe(response =>{
      response.forEach((el)=> this.analyzes.push(el));
    })
  }
 

   addLabTest():void{
    let test = new FormGroup({
      id:new FormControl(''),
      valueTest: new FormControl(''),
      unitTest: new FormControl (),
      dateTest: new FormControl(''),
      laboratoryName:new FormControl(''),
      nameTest: new FormControl(''),
      idState: new FormControl(this.idState)
     })
     this.tests.push(test);
  }

   getLabTests(idState:string) : void{
    this.labService.getLabTests().pipe(map(data=>{
      return data.filter(d=> d.idState == idState);
    })).subscribe(response=>{
      console.log(response);
      for(let index = 0; index< response.length; index++){
        this.addLabTest();
        this.tests.controls[index].patchValue({
          id:response[index].id,
        valueTest: response[index].valueTest,
        dateTest: response[index].dateTest.split(':').slice(0,2).join(':'),
        laboratoryName:response[index].laboratoryName,
        nameTest: response[index].nameTest,
        idState: response[index].idState,
        unitTest: response[index].unitTest
         
        })
      }
    })
  }
   deleteLabTets(index:number){
    if(this.tests.length > 0){
      this.tests.removeAt(index);
      if(this.idState != null){
        this.labService.getLabTests().pipe(map(data =>{
          return data.filter(d=> d.idState == this.idState)
        })).subscribe(response => {
            this.labService.deleteLabTest(response[index]).subscribe();
        })
      }
    } 
  }
   submittests(){
    this.labService.getLabTests().pipe(map(data=>{
      return data.filter(d=> d.idState == this.idState)
    })).subscribe(testes => {
      if(testes.length == 0){
        let formSurgeryObj = this.tests.getRawValue();
        formSurgeryObj.forEach((el)=>{
          let serializedSurgeryForm = JSON.stringify(el);
          this.labService.addLabTest(serializedSurgeryForm).subscribe();
        })
      }
      else {
        testes.forEach((test)=>{
          this.labService.deleteLabTest(test).subscribe(()=>{
            let formSurgeryObj = this.tests.getRawValue();
            formSurgeryObj.forEach((el)=>{
              let serializedSurgeryForm = JSON.stringify(el);
              console.log(serializedSurgeryForm);
              this.labService.addLabTest(serializedSurgeryForm).subscribe();
            })
          })
        })
      }
    })
  }
}
