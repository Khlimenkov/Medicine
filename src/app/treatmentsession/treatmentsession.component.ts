import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-treatmentsession',
  templateUrl: './treatmentsession.component.html',
  styleUrls: ['./treatmentsession.component.css']
})
export class TreatmentsessionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addTreatmentSession(){
    let row = document.createElement('div');
      row.id='cloneSession';    
      row.innerHTML = ` 
      <table _ngcontent-eii-c290=""><tr _ngcontent-eii-c290=""><td _ngcontent-eii-c290=""><mat-form-field _ngcontent-eii-c290="" class="mat-form-field ng-tns-c116-24 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder"><div class="mat-form-field-wrapper ng-tns-c116-24"><div class="mat-form-field-flex ng-tns-c116-24"><!--bindings={
        "ng-reflect-ng-if": "false"
      }--><!--bindings={
        "ng-reflect-ng-if": "0"
      }--><div class="mat-form-field-infix ng-tns-c116-24"><input _ngcontent-eii-c290="" matinput="" id="codeIll" class="mat-input-element mat-form-field-autofill-control ng-tns-c116-24 cdk-text-field-autofill-monitored" ng-reflect-id="codeIll" aria-invalid="false" aria-required="false"><span class="mat-form-field-label-wrapper ng-tns-c116-24"><label class="mat-form-field-label ng-tns-c116-24 mat-empty mat-form-field-empty ng-star-inserted" ng-reflect-disabled="true" id="mat-form-field-label-41" ng-reflect-ng-switch="true" for="codeIll" aria-owns="codeIll"><!--bindings={
        "ng-reflect-ng-switch-case": "false"
      }--><mat-label _ngcontent-eii-c290="" class="ng-tns-c116-24 ng-star-inserted">Классификатор</mat-label><!--bindings={
        "ng-reflect-ng-switch-case": "true"
      }--><!--bindings={
        "ng-reflect-ng-if": "false"
      }--></label><!--bindings={
        "ng-reflect-ng-if": "true"
      }--></span></div><!--bindings={
        "ng-reflect-ng-if": "0"
      }--></div><div class="mat-form-field-underline ng-tns-c116-24 ng-star-inserted"><span class="mat-form-field-ripple ng-tns-c116-24"></span></div><!--bindings={
        "ng-reflect-ng-if": "true"
      }--><div class="mat-form-field-subscript-wrapper ng-tns-c116-24" ng-reflect-ng-switch="hint"><!--bindings={
        "ng-reflect-ng-switch-case": "error"
      }--><div class="mat-form-field-hint-wrapper ng-tns-c116-24 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style="opacity: 1; transform: translateY(0%);"><!--bindings={
        "ng-reflect-ng-if": ""
      }--><div class="mat-form-field-hint-spacer ng-tns-c116-24"></div></div><!--bindings={
        "ng-reflect-ng-switch-case": "hint"
      }--></div></div></mat-form-field></td><td _ngcontent-eii-c290=""><mat-form-field _ngcontent-eii-c290="" class="mat-form-field ng-tns-c116-25 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-legacy mat-form-field-can-float mat-form-field-has-label mat-form-field-hide-placeholder"><div class="mat-form-field-wrapper ng-tns-c116-25"><div class="mat-form-field-flex ng-tns-c116-25"><!--bindings={
        "ng-reflect-ng-if": "false"
      }--><!--bindings={
        "ng-reflect-ng-if": "0"
      }--><div class="mat-form-field-infix ng-tns-c116-25"><input _ngcontent-eii-c290="" matinput="" id="nameIll" class="mat-input-element mat-form-field-autofill-control ng-tns-c116-25 cdk-text-field-autofill-monitored" ng-reflect-id="nameIll" aria-invalid="false" aria-required="false"><span class="mat-form-field-label-wrapper ng-tns-c116-25"><label class="mat-form-field-label ng-tns-c116-25 mat-empty mat-form-field-empty ng-star-inserted" ng-reflect-disabled="true" id="mat-form-field-label-43" ng-reflect-ng-switch="true" for="nameIll" aria-owns="nameIll"><!--bindings={
        "ng-reflect-ng-switch-case": "false"
      }--><mat-label _ngcontent-eii-c290="" class="ng-tns-c116-25 ng-star-inserted">Диагноз</mat-label><!--bindings={
        "ng-reflect-ng-switch-case": "true"
      }--><!--bindings={
        "ng-reflect-ng-if": "false"
      }--></label><!--bindings={
        "ng-reflect-ng-if": "true"
      }--></span></div><!--bindings={
        "ng-reflect-ng-if": "0"
      }--></div><div class="mat-form-field-underline ng-tns-c116-25 ng-star-inserted"><span class="mat-form-field-ripple ng-tns-c116-25"></span></div><!--bindings={
        "ng-reflect-ng-if": "true"
      }--><div class="mat-form-field-subscript-wrapper ng-tns-c116-25" ng-reflect-ng-switch="hint"><!--bindings={
        "ng-reflect-ng-switch-case": "error"
      }--><div class="mat-form-field-hint-wrapper ng-tns-c116-25 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style="opacity: 1; transform: translateY(0%);"><!--bindings={
        "ng-reflect-ng-if": ""
      }--><div class="mat-form-field-hint-spacer ng-tns-c116-25"></div></div><!--bindings={
        "ng-reflect-ng-switch-case": "hint"
      }--></div></div></mat-form-field></td></tr><tr _ngcontent-eii-c290=""><td _ngcontent-eii-c290=""><mat-form-field _ngcontent-eii-c290="" appearance="fill" class="mat-form-field ng-tns-c116-26 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label" ng-reflect-appearance="fill"><div class="mat-form-field-wrapper ng-tns-c116-26"><div class="mat-form-field-flex ng-tns-c116-26"><!--bindings={
        "ng-reflect-ng-if": "false"
      }--><!--bindings={
        "ng-reflect-ng-if": "0"
      }--><div class="mat-form-field-infix ng-tns-c116-26"><input _ngcontent-eii-c290="" id="startSession" matinput="" type="datetime-local" class="mat-input-element mat-form-field-autofill-control ng-tns-c116-26 cdk-text-field-autofill-monitored" ng-reflect-id="startSession" ng-reflect-type="datetime-local" aria-invalid="false" aria-required="false"><span class="mat-form-field-label-wrapper ng-tns-c116-26"><label class="mat-form-field-label ng-tns-c116-26 ng-star-inserted" ng-reflect-disabled="true" id="mat-form-field-label-45" ng-reflect-ng-switch="true" for="startSession" aria-owns="startSession"><!--bindings={
        "ng-reflect-ng-switch-case": "false"
      }--><mat-label _ngcontent-eii-c290="" class="ng-tns-c116-26 ng-star-inserted">Начало лечения</mat-label><!--bindings={
        "ng-reflect-ng-switch-case": "true"
      }--><!--bindings={
        "ng-reflect-ng-if": "false"
      }--></label><!--bindings={
        "ng-reflect-ng-if": "true"
      }--></span></div><!--bindings={
        "ng-reflect-ng-if": "0"
      }--></div><div class="mat-form-field-underline ng-tns-c116-26 ng-star-inserted"><span class="mat-form-field-ripple ng-tns-c116-26"></span></div><!--bindings={
        "ng-reflect-ng-if": "true"
      }--><div class="mat-form-field-subscript-wrapper ng-tns-c116-26" ng-reflect-ng-switch="hint"><!--bindings={
        "ng-reflect-ng-switch-case": "error"
      }--><div class="mat-form-field-hint-wrapper ng-tns-c116-26 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style="opacity: 1; transform: translateY(0%);"><!--bindings={
        "ng-reflect-ng-if": ""
      }--><div class="mat-form-field-hint-spacer ng-tns-c116-26"></div></div><!--bindings={
        "ng-reflect-ng-switch-case": "hint"
      }--></div></div></mat-form-field></td><td _ngcontent-eii-c290=""><mat-form-field _ngcontent-eii-c290="" appearance="fill" class="mat-form-field ng-tns-c116-27 mat-primary mat-form-field-type-mat-input mat-form-field-appearance-fill mat-form-field-can-float mat-form-field-should-float mat-form-field-has-label" ng-reflect-appearance="fill"><div class="mat-form-field-wrapper ng-tns-c116-27"><div class="mat-form-field-flex ng-tns-c116-27"><!--bindings={
        "ng-reflect-ng-if": "false"
      }--><!--bindings={
        "ng-reflect-ng-if": "0"
      }--><div class="mat-form-field-infix ng-tns-c116-27"><input _ngcontent-eii-c290="" id="endSession" matinput="" type="datetime-local" class="mat-input-element mat-form-field-autofill-control ng-tns-c116-27 cdk-text-field-autofill-monitored" ng-reflect-id="endSession" ng-reflect-type="datetime-local" aria-invalid="false" aria-required="false"><span class="mat-form-field-label-wrapper ng-tns-c116-27"><label class="mat-form-field-label ng-tns-c116-27 ng-star-inserted" ng-reflect-disabled="true" id="mat-form-field-label-47" ng-reflect-ng-switch="true" for="endSession" aria-owns="endSession"><!--bindings={
        "ng-reflect-ng-switch-case": "false"
      }--><mat-label _ngcontent-eii-c290="" class="ng-tns-c116-27 ng-star-inserted">Конец лечения</mat-label><!--bindings={
        "ng-reflect-ng-switch-case": "true"
      }--><!--bindings={
        "ng-reflect-ng-if": "false"
      }--></label><!--bindings={
        "ng-reflect-ng-if": "true"
      }--></span></div><!--bindings={
        "ng-reflect-ng-if": "0"
      }--></div><div class="mat-form-field-underline ng-tns-c116-27 ng-star-inserted"><span class="mat-form-field-ripple ng-tns-c116-27"></span></div><!--bindings={
        "ng-reflect-ng-if": "true"
      }--><div class="mat-form-field-subscript-wrapper ng-tns-c116-27" ng-reflect-ng-switch="hint"><!--bindings={
        "ng-reflect-ng-switch-case": "error"
      }--><div class="mat-form-field-hint-wrapper ng-tns-c116-27 ng-trigger ng-trigger-transitionMessages ng-star-inserted" style="opacity: 1; transform: translateY(0%);"><!--bindings={
        "ng-reflect-ng-if": ""
      }--><div class="mat-form-field-hint-spacer ng-tns-c116-27"></div></div><!--bindings={
        "ng-reflect-ng-switch-case": "hint"
      }--></div></div></mat-form-field></td></tr></table>`; 
      document.querySelector('.TreatmentSession').appendChild(row); 
  }
  deleteTreatmentSession(){
    var description = document.getElementById("cloneSession");
    description.remove();
  }

}
