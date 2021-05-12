import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import {TreatmentStage } from 'src/app/patient';


@Injectable({ providedIn: 'root' })
export class StagesService {

    private stagesUrl = 'http://127.0.0.1:8000/api/StageOfTreatment/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }


  getStages(): Observable<TreatmentStage[]> {
    return this.http.get<TreatmentStage[]>(this.stagesUrl)
  }
  
  getStage(id: string): Observable<TreatmentStage> {
    const url = `${this.stagesUrl}${id}`;
    return this.http.get<TreatmentStage>(url);
  }
  
 

  addStage(treatment: string) {
    return this.http.post(this.stagesUrl, treatment, this.httpOptions)
  }
  

  /** DELETE: delete the hero from the server */
  deleteStage(treatment: TreatmentStage | string): Observable<TreatmentStage> {
    const id = typeof treatment === 'string' ? treatment : treatment.id; 
    const url = `${this.stagesUrl}${id}`;
    return this.http.delete<TreatmentStage>(url, this.httpOptions)
  }
  
  /** PUT: update the hero on the server */
  updateStage(treatment: TreatmentStage): Observable<any> {
    return this.http.post(this.stagesUrl, treatment, this.httpOptions)
  }
  

}