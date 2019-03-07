import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeedbackComponent } from './add-feedback.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AddfeedbackService } from '../Services/addfeedback.service';

describe('AddFeedbackComponent', () => {
  let component: AddFeedbackComponent;
  let fixture: ComponentFixture<AddFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,FormsModule,RouterTestingModule],
      declarations: [ AddFeedbackComponent ],
      providers:[
        {
          provide:HttpClient,
          useValue:jasmine.createSpyObj('HttpClient',['post'])
        },
        {
          provide: Router,
          useValue:jasmine.createSpyObj('Router',['navigate'])
        },
        {
          provide:AddfeedbackService,
          useValue:jasmine.createSpyObj('AddfeedbackService',['Feedback'])
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('form invalid when empty', () => {
    expect(component.addFeedback.valid).toBeFalsy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('date field validity', () => {
    let errors = {};
    let date = component.addFeedback.controls['date'];
    errors = date.errors || {};
    expect(errors['required']).toBeTruthy();  
  });

  it('meals field validity',()=>{
    let errors={};
    let meal=component.addFeedback.controls['meals'];
    errors=meal.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('rating field validity',()=>{
    let errors={};
    let rating=component.addFeedback.controls['rating'];
    errors=rating.errors || {};
    expect(errors['required']).toBeTruthy();
  });

   it('comments field validity',()=>{
      let errors={};
      let comments=component.addFeedback.controls['comment'];
      errors=comments.errors||{};
      expect(errors['required']).toBeTruthy();
      });
     
});
