import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    wrongCredentials = false;
    get val() { return this.loginForm.controls; }

  constructor( private formBuilder: FormBuilder,   
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  }
  onSubmit() {
    this.submitted = true;
     this.loading = true;
      this.authenticationService.Login(this.loginForm.value)
      .subscribe(
       data =>
        {          
          if(data===true){
            this.router.navigate(['/feedbackOnFood']);
            let userdetails = JSON.stringify(this.val.username.value);
            localStorage.setItem("UserName",userdetails);
          }
          else{
            this.wrongCredentials = true;
          }
        }
      );
  }
  
  register(){
    this.router.navigate(['/register'])
  }
}
