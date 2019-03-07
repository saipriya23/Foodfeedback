import { TestBed } from '@angular/core/testing';

import { ViewfeedbackService } from './viewfeedback.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { IViewfeedback } from '../viewfeedback';

describe('ViewfeedbackService', () => {

   let service:ViewfeedbackService;
   let spy:jasmine.Spy;

  beforeEach(() => {TestBed.configureTestingModule({
    providers:[
      ViewfeedbackService,
      {
        provide:HttpClient,
        useValue:jasmine.createSpyObj('HttpClient',['get'])
      }
    ]
  });
  service=TestBed.get(ViewfeedbackService);
  spy=TestBed.get(HttpClient).get;    
});
  
  it('should be created', () => {
    const service: ViewfeedbackService = TestBed.get(ViewfeedbackService);
    expect(service).toBeTruthy();
  });

  it('should check the values are correct',()=>{
    const testData:IViewfeedback={
      date:new Date('2019-12-01'),
      meals:'lunch'
    };
    spy.and.returnValue((of(true)));
    service.viewfeedback(testData).subscribe(
      (result)=>{
        expect(result).toBeTruthy();
      });
     });
    
});
