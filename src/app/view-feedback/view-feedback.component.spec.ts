import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFeedbackComponent } from './view-feedback.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';

describe('ViewFeedbackComponent', () => {
  let component: ViewFeedbackComponent;
  let fixture: ComponentFixture<ViewFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ReactiveFormsModule,FormsModule,RouterTestingModule],
      declarations: [ ViewFeedbackComponent ],
      providers:[
        {
          provide:HttpClient,
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when emmpty',()=>{
    expect(component.viewFeedback.valid).toBeFalsy();
  });

  it('date field validity', () => {
    let errors = {};
    let date = component.viewFeedback.controls['date'];
    errors = date.errors || {};
    expect(errors['required']).toBeTruthy();  
  });

  it('meals field validity',()=>{
    let errors={};
    let meal=component.viewFeedback.controls['meals'];
    errors=meal.errors || {};
    expect(errors['required']).toBeTruthy();
  });
  
});
