import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  get f() { return this.registerForm.controls; }
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor( private formBuilder: FormBuilder,private registerService:RegisterService,private router:Router) { }

   ngOnInit() {
    this.registerForm = this.formBuilder.group({
      employeeid: ['',Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(cesltd)\.com$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
      this.submitted = true;
       if (this.registerForm.invalid) {
           return;
        }
        this.loading=true;
        this.registerService.register(this.registerForm.value)
          .subscribe(
                data => {
                    this.router.navigate(['/login']);
                },
           );
   }
}
