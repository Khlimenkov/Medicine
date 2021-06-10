import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import {State, TreatmentStage } from 'src/app/models';


@Injectable({ providedIn: 'root' })
export class StagesService {

    private stagesUrl = 'http://127.0.0.1:8000/api/StageOfTreatment/';
    private statesUrl = 'http://127.0.0.1:8000/api/State/';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }


  getStages(): Observable<TreatmentStage[]> {
    return this.http.get<TreatmentStage[]>(this.stagesUrl)
  }
  
  private getStage(id: string): Observable<TreatmentStage> {
    const url = `${this.stagesUrl}${id}`;
    return this.http.get<TreatmentStage>(url);
  }
  getStates(): Observable<State[]> {
    return this.http.get<State[]>(this.statesUrl)
  }
  addState(state: string){
    return this.http.post(this.statesUrl, state, this.httpOptions)
  }

  addStage(treatment: string) {
    return this.http.post(this.stagesUrl, treatment, this.httpOptions)
  }
  
  deleteState(state: State | string): Observable<State> {
    const id = typeof state === 'string' ? state : state.id; 
    const url = `${this.stagesUrl}${id}`;
    return this.http.delete<State>(url, this.httpOptions)
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