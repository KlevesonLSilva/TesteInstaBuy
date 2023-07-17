import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private BASE_URL = 'https://api.instabuy.com.br/apiv3/';

  constructor(private http: HttpClient) { }

    getLayout(subdomain: string): Observable<any> {
    const url = `${this.BASE_URL}/layout`;
    const params = { subdomain: subdomain };

    return this.http.get(url, { params });
  }

  getItem(subdomain: string, slug: string): Observable<any> {
    const url = `${this.BASE_URL}item`;
    const params = {
      subdomain: subdomain,
      slug: slug
    };
    const headers = new HttpHeaders();
    return this.http.get(url, { params, headers });
    
  }

}
