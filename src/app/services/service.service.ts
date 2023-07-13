import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

    getLayout(subdomain: string): Observable<any> {
    const url = `https://api.instabuy.com.br/apiv3/layout`;
    const params = { subdomain: subdomain };

    return this.http.get(url, { params });
  }

}
