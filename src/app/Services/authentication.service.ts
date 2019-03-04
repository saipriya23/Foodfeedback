import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import { ILogin } from '../userLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

   loginurl="https://localhost:44308/api/login";
   Login(userdetails:ILogin):Observable<Boolean>
   {
     return this.http.post<Boolean>(this.loginurl,userdetails);
   }
}
  