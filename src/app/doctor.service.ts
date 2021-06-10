import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import {MedicalStaff, TreatmentStage } from 'src/app/models';


@Injectable({ providedIn: 'root' })
export class DoctorService {

    private doctorsUrl = 'http://127.0.0.1:8000/api/MedicalStaff/';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }


  getDoctors(): Observable<MedicalStaff[]> {
    return this.http.get<MedicalStaff[]>(this.doctorsUrl)
  }
  
  getDoctor(id: string): Observable<MedicalStaff> {
    const url = `${this.doctorsUrl}${id}`;
    return this.http.get<MedicalStaff>(url);
  }
  
 

  addDoctor(doctor: string) {
    return this.http.post(this.doctorsUrl, doctor, this.httpOptions)
  }
  

  /** DELETE: delete the hero from the server */
   deleteDoctor(doctor: MedicalStaff | string): Observable<MedicalStaff> {
    const id = typeof doctor === 'string' ? doctor : doctor.id; 
    const url = `${this.doctorsUrl}${id}`;
    return this.http.delete<MedicalStaff>(url, this.httpOptions)
  }
  
  /** PUT: update the hero on the server */
   updateDoctor(treatment: TreatmentStage): Observable<any> {
    return this.http.post(this.doctorsUrl, treatment, this.httpOptions)
  }
  

}