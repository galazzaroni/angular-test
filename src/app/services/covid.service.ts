import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  private url = 'https://api.covid19api.com/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public getSummary(): Observable<any> {
    return this.http.get(this.url+'summary', this.httpOptions);
  }

  public getByCountry(country): Observable<any> {
    return this.http.get(this.url+'country/'+country, this.httpOptions);
  }
}
