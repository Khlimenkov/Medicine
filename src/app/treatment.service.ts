import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { NationCl025, TreatmentSession } from 'src/app/models';


@Injectable({ providedIn: 'root' })
export class TreatmentService {

    private treatmentsUrl = 'http://127.0.0.1:8000/api/TreatmentSession/';
    private illsUrl = 'http://127.0.0.1:8000/api/NationCl025/';
    private comorbidityUrl = 'http://127.0.0.1:8000/api/Comorbidity/';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }


  getTreatments(): Observable<TreatmentSession[]> {
    return this.http.get<TreatmentSession[]>(this.treatmentsUrl)
  }
  getIlls(): Observable<NationCl025[]>{
      return this.http.get<NationCl025[]>(this.illsUrl);
  }
  getTreatment(id: string): Observable<TreatmentSession> {
    const url = `${this.treatmentsUrl}${id}`;
    return this.http.get<TreatmentSession>(url);
  }
  getIll(id:string): Observable<NationCl025> {
    const url = `${this.illsUrl}${id}`;
    return this.http.get<NationCl025>(url);
  }

  addComorbidity(comorbidity:string){
    return this.http.post(this.comorbidityUrl, comorbidity, this.httpOptions);
  }
 

  addTreatment(treatment: string) {
    return this.http.post(this.treatmentsUrl, treatment, this.httpOptions)
  }
  addIll(ill: string) {
    return this.http.post(this.illsUrl, ill, this.httpOptions)
  }

  /** DELETE: delete the hero from the server */
  deleteTreatment(treatment: TreatmentSession | string): Observable<TreatmentSession> {
    const id = typeof treatment === 'string' ? treatment : treatment.id; 
    const url = `${this.treatmentsUrl}${id}`;
    return this.http.delete<TreatmentSession>(url, this.httpOptions)
  }
  deleteIll(ill: NationCl025 | string): Observable<NationCl025> {
    const id = typeof ill === 'string' ? ill : ill.id; 
    const url = `${this.illsUrl}${id}`;
    return this.http.delete<NationCl025>(url, this.httpOptions)
  }

  /** PUT: update the hero on the server */
  updateTreatment(treatment: TreatmentSession, id: string): Observable<any> {
    return this.http.post(`${this.treatmentsUrl}${id}`, treatment, this.httpOptions)
  }
  updateIll(ill: NationCl025): Observable<any> {
    return this.http.post(this.illsUrl, ill, this.httpOptions)
  }

}