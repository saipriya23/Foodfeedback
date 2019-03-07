import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddfeedbackService } from '../Services/addfeedback.service';
import { IFeedback } from '../feedback';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent implements OnInit {
  addFeedback:FormGroup;
  feedbackStatus=false;
  feedback:IFeedback;

  constructor(private formBuilder:FormBuilder,
              private feedbackService:AddfeedbackService,
              private route:Router){ }

  ngOnInit() {
    this.addFeedback = this.formBuilder.group({
      date: ['',Validators.required],
      meals:['',Validators.required],
      rating:['',Validators.required],
      comment:['',Validators.required] 
    });
    this.giveFeedback();
  }
  giveFeedback(){
    this.route.navigate(['/addfeedback']);
  }

  viewFeedback(){
    this.route.navigate(['/viewfeedback']);
  }
  save() {
    this.feedbackService.Feedback(this.addFeedback.value)
     .subscribe(
       data=>this.feedback=data
       )
     this.feedbackStatus=true;
  } 
}

