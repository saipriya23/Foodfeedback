import { TestBed } from '@angular/core/testing';

import { AddfeedbackService } from './addfeedback.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { IFeedback } from '../feedback';

describe('AddfeedbackService', () => {
  let service:AddfeedbackService;
  let spy:jasmine.Spy;

  beforeEach(() =>{ TestBed.configureTestingModule({
    providers:[
      AddfeedbackService,
      {
        provide:HttpClient,
        useValue:jasmine.createSpyObj('HttpClient',['post'])
      }
    ]
  });
  service=TestBed.get(AddfeedbackService);
  spy=TestBed.get(HttpClient).post;
});

  it('should be created', () => {
    const service: AddfeedbackService = TestBed.get(AddfeedbackService);
    expect(service).toBeTruthy();
  });
   
  it('should check the values are correct',()=>{

    const testData:IFeedback = {
      date:new Date('2019-12-01'),
      meals:'lunch',
      rating:4,
      comments:'Good'
    };
    spy.and.returnValue(of(true));
    service.Feedback(testData).subscribe(
      (result)=>{
        expect(result).toBeTruthy();
      });
  });

});
