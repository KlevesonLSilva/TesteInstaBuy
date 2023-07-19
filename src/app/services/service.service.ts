import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private BASE_URL = 'https://api.instabuy.com.br/apiv3/';
  private Url_Imagem = 'https://assets.instabuy.com.br/ib.item.image.medium/m-'
  private Url_Banner = 'https://assets.instabuy.com.br/ib.store.banner/bnr-'

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
    
    return this.http.get(url, { params });
    
  }

  getImagemUrl(imagem: string): string {
    const imageUrl = `${this.Url_Imagem}${imagem}`;
    return imageUrl;
  }
  getBannerUrl(imagem: string): string {
    const imageUrl = `${this.Url_Banner}${imagem}`;
    return imageUrl;
  }

}
