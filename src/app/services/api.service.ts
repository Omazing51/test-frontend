import { Injectable } from '@angular/core';
import {LoginI} from '../models/login.interface';
import {ResponseI} from '../models/response.interface';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:any = "https://localhost:7066/"
  constructor(private http:HttpClient) { }
  loginByEmail(form:LoginI):Observable<ResponseI>
  {
    let dir = this.url + "/login/users";
    return this.http.post<ResponseI>(dir,form);
  }
}
