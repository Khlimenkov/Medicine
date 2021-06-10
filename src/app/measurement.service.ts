import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import {CatalogMeasurement, Measurement, NationalCl027} from 'src/app/models';


@Injectable({ providedIn: 'root' })
export class MeasurementService {

    private measurUrl = 'http://127.0.0.1:8000/api/Measurement/';
    private catalogUrl = 'http://127.0.0.1:8000/api/CatalogMeasurement/';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }


  getMeasurements(): Observable<Measurement[]> {
    return this.http.get<Measurement[]>(this.measurUrl)
  }
  
  getMeasurement(id: string): Observable<Measurement> {
    const url = `${this.measurUrl}${id}`;
    return this.http.get<Measurement>(url);
  }
  getcatalogUrl (){
      return this.http.get<CatalogMeasurement[]>(this.catalogUrl);
  }
 

  addMeasurement(measurement: string) {
    return this.http.post(this.measurUrl, measurement, this.httpOptions)
  }
  

  /** DELETE: delete the hero from the server */
  deleteMeasurement(measurement: Measurement | string): Observable<Measurement> {
    const id = typeof measurement === 'string' ? measurement : measurement.id; 
    const url = `${this.measurUrl}${id}`;
    return this.http.delete<Measurement>(url, this.httpOptions)
  }
  
  /** PUT: update the hero on the server */
  updateMeasurement(measurement: Measurement): Observable<any> {
    return this.http.post(this.measurUrl, measurement, this.httpOptions)
  }
  

}