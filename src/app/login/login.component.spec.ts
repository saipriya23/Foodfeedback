import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,FormsModule,RouterTestingModule],
      declarations: [ LoginComponent ],
      providers:[
        {
          provide:HttpClient,
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validate the username',()=>{
    let username=component.loginForm.controls['username'];
    expect(username.valid).toBeFalsy;
  });

  it('validate the password',()=>{
    let password=component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy;
  });

  it('username required',()=>{
    let errors = {};
    let username = component.loginForm.controls['username'];
    errors = username.errors || {};
    expect(errors['required']).toBeTruthy();  
  });

  it('password required',()=>{
    let errors = {};
    let username = component.loginForm.controls['password'];
    errors = username.errors || {};
    expect(errors['required']).toBeTruthy();  
  });

  it('submitting a form emits a user', () => {
    expect(component.loginForm.valid).toBeFalsy();
    component.loginForm.controls['username'].setValue("test@cesltd.com");
    component.loginForm.controls['password'].setValue("123456789");
    expect(component.loginForm.valid).toBeTruthy();
 });

});
