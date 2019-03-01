import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { ILogin } from '../userLogin';
import { of } from 'rxjs';

describe('AuthenticationService', () => {

  let service:AuthenticationService;
  let spy:jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        AuthenticationService,
        {
          provide:HttpClient,
          useValue:jasmine.createSpyObj('HttpClient',['post'])
        }
      ]
    });
    service=TestBed.get(AuthenticationService);
    spy=TestBed.get(HttpClient).post;
   });
   
  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });
 
  it('should check the emitted value is correct',()=>{

    const testdata:ILogin={
      username:'test',
      password:'test123'
    };
    spy.and.returnValue(of(true));
    service.Login(testdata).subscribe(
      (result)=>{
        expect(result).toBeTruthy;
      }
    )
  });
});
