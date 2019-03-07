import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import { IFeedback } from '../feedback';


@Injectable({
  providedIn: 'root'
})
  export class AddfeedbackService {

  constructor(private http:HttpClient) { }

   feedbackurl="https://localhost:44308/api/feedback";
   Feedback(feedbackdetails:IFeedback):Observable<IFeedback>
   {
     return this.http.post<IFeedback>(this.feedbackurl,feedbackdetails);
   }
}
  