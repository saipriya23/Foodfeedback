import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { IViewfeedback } from '../viewfeedback';


@Injectable({
  providedIn: 'root'
})
  export class ViewfeedbackService {

  constructor(private http:HttpClient) { }

   feedbackurl="https://localhost:44308/api/viewfeedback";
   viewfeedback(viewdetails:IViewfeedback):Observable<IViewfeedback>
  {
    return this.http.get<IViewfeedback>(this.feedbackurl);
  }
}