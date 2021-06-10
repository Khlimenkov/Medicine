import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import {LabTest, NationalCl027} from 'src/app/models';


@Injectable({ providedIn: 'root' })
export class LabTestService {

    private labUrl = 'http://127.0.0.1:8000/api/LaboratoryTest/';
    private nationCl = 'http://127.0.0.1:8000/api/NationCl027/';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }


  getLabTests(): Observable<LabTest[]> {
    return this.http.get<LabTest[]>(this.labUrl)
  }
  
  getLabTest(id: string): Observable<LabTest> {
    const url = `${this.labUrl}${id}`;
    return this.http.get<LabTest>(url);
  }
  getNationCl (){
      return this.http.get<NationalCl027[]>(this.nationCl);
  }
 

  addLabTest(labtest: string) {
    return this.http.post(this.labUrl, labtest, this.httpOptions)
  }
  

  /** DELETE: delete the hero from the server */
  deleteLabTest(labtest: LabTest | string): Observable<LabTest> {
    const id = typeof labtest === 'string' ? labtest : labtest.id; 
    const url = `${this.labUrl}${id}`;
    return this.http.delete<LabTest>(url, this.httpOptions)
  }
  
  /** PUT: update the hero on the server */
  updateLabTest(labtest: LabTest): Observable<any> {
    return this.http.post(this.labUrl, labtest, this.httpOptions)
  }
  

}