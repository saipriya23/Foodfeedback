import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationComponent } from './user-registration.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule],
      declarations: [ UserRegistrationComponent ],
       providers: [
         {
            provide: HttpClient,
         }
       ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('email field validity', () => {
    let email = component.registerForm.controls['email']; 
    expect(email.valid).toBeFalsy();

  });
  it('email field validity', () => {
    let errors = {};
    let email = component.registerForm.controls['email'];
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy(); 

    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy(); 

    email.setValue("test@cesltd.com");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
  });

  it('employeeid field validity', () => {
    let errors = {};
    let employeeid = component.registerForm.controls['employeeid'];
    errors = employeeid.errors || {};
    expect(errors['required']).toBeTruthy();  
  });

  it('firstname field validity', () => {
    let errors = {};
    let firstname = component.registerForm.controls['firstName'];
    errors = firstname.errors || {};
    expect(errors['required']).toBeTruthy();  
  });

  it('lastname field validity', () => {
    let errors = {};
    let lastname = component.registerForm.controls['lastName'];
    errors = lastname.errors || {};
    expect(errors['required']).toBeTruthy();  
  });

  it('username field validity', () => {
    let errors = {};
    let username = component.registerForm.controls['username'];
    errors = username.errors || {};
    expect(errors['required']).toBeTruthy();  
  });

  it('password field validity', () => {
    let errors = {};
    let password = component.registerForm.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy(); 
    
    password.setValue("1234");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    password.setValue("1234567");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();   
  });

});
