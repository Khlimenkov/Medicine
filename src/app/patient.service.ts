import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Patient } from 'src/app/models';
import { Address } from 'src/app/models';

@Injectable({ providedIn: 'root' })
export class PatientService {

    private patientsUrl = 'http://127.0.0.1:8000/api/Patient/';
    private addressUrl = 'http://127.0.0.1:8000/api/Address/'; // URL to web api

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  /** GET heroes from the server */
  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.patientsUrl)
  }
  getAdresses(): Observable<Address[]> {
    return this.http.get<Address[]>(this.addressUrl)
  }

  
  getPatient(id: string): Observable<Patient> {
    const url = `${this.patientsUrl}${id}`;
    return this.http.get<Patient>(url);
  }
  getAdress(id:string): Observable<Address> {
    const adrUrl = `${this.addressUrl}${id}`;
    return this.http.get<Address>(adrUrl);
  }

  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.patientsUrl, patient, this.httpOptions)
  }

  /** DELETE: delete the hero from the server */
  deletePatient(patient: Patient | string): Observable<Patient> {
    const id = typeof patient === 'string' ? patient : patient.id; 
    const url = `${this.patientsUrl}${id}`;
    return this.http.delete<Patient>(url, this.httpOptions)
  }

  /** PUT: update the hero on the server */
  updatePatient(patient: Patient): Observable<any> {
    return this.http.put(this.patientsUrl, patient, this.httpOptions)
  }

}