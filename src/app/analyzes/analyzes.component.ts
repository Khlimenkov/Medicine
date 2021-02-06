import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-analyzes',
  templateUrl: './analyzes.component.html',
  styleUrls: ['./analyzes.component.css']
})
export class AnalyzesComponent implements OnInit {
  constructor() {
   }
  analyzes = new FormArray([]);
  ngOnInit(): void {
  }
  addAnalyze(){
    const group = new FormGroup({
      codeTest:new FormControl(),
      nameTest:new FormControl(),
      laboratoryName:new FormControl(),
      valueTest:new FormControl(),
      unitTest:new FormControl(),
      dateTest:new FormControl(),
    })
    this.analyzes.push(group);
  }
  deleteAnalyze(){
    this.analyzes.removeAt(-1)
    }

}
