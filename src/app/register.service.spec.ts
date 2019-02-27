import { TestBed } from '@angular/core/testing';
import { RegisterService } from './register.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Iregistration } from './registration';

describe('RegisterService', () => {

  let service: RegisterService;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RegisterService,
        {
          provide: HttpClient,
          useValue: jasmine.createSpyObj('HttpClient', ['post'])
        }
      ]
    });
    service = TestBed.get(RegisterService);
    spy = TestBed.get(HttpClient).post;
  });

  it('should be created', () => {
    const service: RegisterService = TestBed.get(RegisterService);
    expect(service).toBeTruthy();
  });

  it('should check the emitted value is correct', () => {

    const testData: Iregistration = {
      employeeId:'test',
      firstName:'test',
      lastName:'test',
      userName:'test',
      email:'test',
      password:'test'
    };
    spy.and.returnValue(of(true));
    service.register(testData).subscribe(
      (result) => {
      expect(result).toBeTruthy();
      }
    )
  });
  
});
