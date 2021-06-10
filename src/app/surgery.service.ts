import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import {NationalCl026, Surgery, TreatmentStage } from 'src/app/models';


@Injectable({ providedIn: 'root' })
export class SurgeryService {

    private surgeryUrl = 'http://127.0.0.1:8000/api/Surgery/';
    private nationCl026Url = 'http://127.0.0.1:8000/api/NationCl026/';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }


  getSurgerys(): Observable<Surgery[]> {
    return this.http.get<Surgery[]>(this.surgeryUrl)
  }
  
  getSurgery(id: string): Observable<Surgery> {
    const url = `${this.surgeryUrl}${id}`;
    return this.http.get<Surgery>(url);
  }
  getNationCl026 (){
      return this.http.get<NationalCl026[]>(this.nationCl026Url);
  }
 

  addSurgery(surgery: string) {
    return this.http.post(this.surgeryUrl, surgery, this.httpOptions)
  }
  

  /** DELETE: delete the hero from the server */
  deleteSurgery(surgery: Surgery | string): Observable<Surgery> {
    const id = typeof surgery === 'string' ? surgery : surgery.id; 
    const url = `${this.surgeryUrl}${id}`;
    return this.http.delete<Surgery>(url, this.httpOptions)
  }
  
  /** PUT: update the hero on the server */
  updateSurgery(surgery: Surgery): Observable<any> {
    return this.http.post(this.surgeryUrl, surgery, this.httpOptions)
  }
  

}