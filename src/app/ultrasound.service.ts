import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import {Physiotherapy, UltraSoundTherapy} from 'src/app/models';


@Injectable({ providedIn: 'root' })
export class UltrasoundService {

    private therapyUrl = 'http://127.0.0.1:8000/api/ElectroUltrasoundTherapy/';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

W
  getTherapys(): Observable<UltraSoundTherapy[]> {
    return this.http.get<UltraSoundTherapy[]>(this.therapyUrl)
  }
  
  getTherapy(id: string): Observable<UltraSoundTherapy> {
    const url = `${this.therapyUrl}${id}`;
    return this.http.get<UltraSoundTherapy>(url);
  }

  addTherapy(therapy: string) {
    return this.http.post(this.therapyUrl, therapy, this.httpOptions)
  }
  

  /** DELETE: delete the hero from the server */
  deleteTherapy(therapy: UltraSoundTherapy | string): Observable<UltraSoundTherapy> {
    const id = typeof therapy === 'string' ? therapy : therapy.id; 
    const url = `${this.therapyUrl}${id}`;
    return this.http.delete<UltraSoundTherapy>(url, this.httpOptions)
  }
  
  /** PUT: update the hero on the server */
  updateTherapy(therapy: UltraSoundTherapy): Observable<any> {
    return this.http.post(this.therapyUrl, therapy, this.httpOptions)
  }
  

}