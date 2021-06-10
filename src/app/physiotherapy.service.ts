import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import {Physiotherapy} from 'src/app/models';


@Injectable({ providedIn: 'root' })
export class PhysiotherapyService {

    private therapyUrl = 'http://127.0.0.1:8000/api/Physiotherapy/';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }


  getTherapys(): Observable<Physiotherapy[]> {
    return this.http.get<Physiotherapy[]>(this.therapyUrl)
  }
  
  getTherapy(id: string): Observable<Physiotherapy> {
    const url = `${this.therapyUrl}${id}`;
    return this.http.get<Physiotherapy>(url);
  }

  addTherapy(therapy: string) {
    return this.http.post(this.therapyUrl, therapy, this.httpOptions)
  }
  

  /** DELETE: delete the hero from the server */
  deleteTherapy(therapy: Physiotherapy | string): Observable<Physiotherapy> {
    const id = typeof therapy === 'string' ? therapy : therapy.id; 
    const url = `${this.therapyUrl}${id}`;
    return this.http.delete<Physiotherapy>(url, this.httpOptions)
  }
  
  /** PUT: update the hero on the server */
  updateTherapy(therapy: Physiotherapy): Observable<any> {
    return this.http.post(this.therapyUrl, therapy, this.httpOptions)
  }
  

}