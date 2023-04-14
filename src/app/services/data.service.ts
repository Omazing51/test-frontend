import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SecurityService } from './security.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient,
    private securityService: SecurityService) { }

    /* Metodo GET */
    get<T>(url: string, httpParams?: any): Observable<HttpResponse<T>> 
    {
      const httpHeaders: HttpHeaders = this.getHeaders();
      
        return this.http.get<T>(url, {
          headers: httpHeaders,
          params: httpParams,
          observe: 'response' 
        });
    }

    /* Metodo POST */
    post<T>(url: string, data: any): Observable<HttpResponse<T>> 
    {
      const httpHeaders: HttpHeaders = this.getHeaders();

      return this.http.post<T>(url, data,
        {
          headers: httpHeaders,
          observe: 'response'
        });
    }

    /* Metodo PUT */
    put<T>(url: string, data: any): Observable<HttpResponse<T>> 
    {
      const httpHeaders: HttpHeaders = this.getHeaders();

      return this.http.put<T>(url, data,
        {
          headers: httpHeaders,
          observe: 'response'
        });
    }
    
    getHeaders(): HttpHeaders 
    {
      let httpHeaders: HttpHeaders = new HttpHeaders();

      const token = this.securityService.GetToken();
      if(token) 
      {
        httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token);
      }

      return httpHeaders;
    }
}
