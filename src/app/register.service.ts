import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Iregistration } from 'src/app/registration';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  // configurl="http://localhost:62152/api/Login"
  registrationUrl="";
  register(registrationdetails:Iregistration):Observable<boolean>
  {
    return this.http.post<boolean>(this.registrationUrl,registrationdetails);
  }
}
