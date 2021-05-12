import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Patient } from 'src/app/patient';
import { Address } from 'src/app/patient';

@Injectable({ providedIn: 'root' })
export class PatientService {

    private patientsUrl = 'http://127.0.0.1:8000/api/Patient/';
    private addressUrl = 'http://127.0.0.1:8000/api/Address/'; // URL to web api

  httpOptions = {
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

  /** GET hero by id. Return `undefined` when id not found */
  // getHeroNo404<Data>(id: string): Observable<Patient> {
  //   const url = `${this.patientsUrl}/?id=${id}`;
  //   return this.http.get<Patient[]>(url)
  //     .pipe(
  //       map(heroes => heroes[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         this.log(`${outcome} hero id=${id}`);
  //       }),
  //       catchError(this.handleError<Hero>(`getHero id=${id}`))
  //     );
  // }

  /** GET hero by id. Will 404 if id not found */
  getPatient(id: string): Observable<Patient> {
    const url = `${this.patientsUrl}${id}`;
    return this.http.get<Patient>(url);
  }
  getAdress(id:string): Observable<Address> {
    const adrUrl = `${this.addressUrl}${id}`;
    return this.http.get<Address>(adrUrl);
  }
  /* GET heroes whose name contains search term */
//   searchHeroes(term: string): Observable<Hero[]> {
//     if (!term.trim()) {
//       // if not search term, return empty hero array.
//       return of([]);
//     }
//     return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
//       tap(x => x.length ?
//          this.log(`found heroes matching "${term}"`) :
//          this.log(`no heroes matching "${term}"`)),
//       catchError(this.handleError<Hero[]>('searchHeroes', []))
//     );
//   }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
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
    return this.http.post(this.patientsUrl, patient, this.httpOptions)
  }

}