import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AddFeedbackComponent } from './add-feedback/add-feedback.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    LoginComponent,
    AddFeedbackComponent,
    ViewFeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot
    ([
      {
        path:'register', component:UserRegistrationComponent
      },
      {
        path:'', component:LoginComponent
      },
      {
        path:'addfeedback',component:AddFeedbackComponent
      },
      {
        path:'viewfeedback',component:ViewFeedbackComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
