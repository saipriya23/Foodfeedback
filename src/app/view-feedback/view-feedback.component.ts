import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ViewfeedbackService } from '../Services/viewfeedback.service';
import { IViewfeedback } from '../viewfeedback';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {
 viewFeedback:FormGroup;
 feedback:IViewfeedback;

  constructor(private formBuilder:FormBuilder,
              private ViewFeedbackService:ViewfeedbackService) { }

  ngOnInit() {
    this.viewFeedback=this.formBuilder.group({
      date:['',Validators.required],
      meals:['',Validators.required]
    });
}
  showFeedback(){
    this.ViewFeedbackService.viewfeedback(this.viewFeedback.value)
    .subscribe(
      data=>this.feedback=data
    )
  }
}
