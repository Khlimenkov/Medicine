import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import {NationalCl026, NationClPills, Pharmacotherapy} from 'src/app/models';


@Injectable({ providedIn: 'root' })
export class PharmacotherapyService {

    private therapyUrl = 'http://127.0.0.1:8000/api/Pharmacotherapy/';
    private nationClPillUrl = 'http://127.0.0.1:8000/api/NationClPill/';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }


  getTherapys(): Observable<Pharmacotherapy[]> {
    return this.http.get<Pharmacotherapy[]>(this.therapyUrl)
  }
  
  private getTherapy(id: string): Observable<Pharmacotherapy> {
    const url = `${this.therapyUrl}${id}`;
    return this.http.get<Pharmacotherapy>(url);
  }
  getNationClPills (){
      return this.http.get<NationClPills[]>(this.nationClPillUrl);
  }
 

  addTherapy(therapy: string) {
    return this.http.post(this.therapyUrl, therapy, this.httpOptions)
  }
  

  /** DELETE: delete the hero from the server */
  deleteTherapy(therapy: Pharmacotherapy | string): Observable<Pharmacotherapy> {
    const id = typeof therapy === 'string' ? therapy : therapy.id; 
    const url = `${this.therapyUrl}${id}`;
    return this.http.delete<Pharmacotherapy>(url, this.httpOptions)
  }
  
  /** PUT: update the hero on the server */
  updateTherapy(therapy: Pharmacotherapy): Observable<any> {
    return this.http.post(this.therapyUrl, therapy, this.httpOptions)
  }
  

}