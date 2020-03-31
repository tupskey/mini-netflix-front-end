import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login.component';
import { SignUpComponent } from './signup.component';



@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    
    RouterModule.forChild([
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignUpComponent}
    ]),
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  providers: [

  ]
})

export class UserModule {

}
