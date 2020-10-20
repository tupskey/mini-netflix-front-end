import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,  } from '@angular/forms';
import { AuthService } from '../films/shared/auth.service';
import { Router } from '@angular/router';
import {MatButton} from '@angular/material/button'


@Component({
  selector: 'app-sign',
  templateUrl: './signup.component.html',
  styles: ['']
})

export class SignUpComponent implements OnInit {
  registerForm: FormGroup;

constructor(private fb: FormBuilder,
  private authService: AuthService,
  private router: Router){

}
  ngOnInit(): void{
    this.registerForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      username: [''],
      password: [''],
      email: ['']
    });
  }

  onSubmit():void{
      this.authService.register(this.registerForm.value)
      .subscribe(()=>{
        alert('ok');
        this.router.navigate(['/login']);
        console.log(this.registerForm.value);
      }
      )
  }

  cancel(): void{
    this.router.navigate(['/films']);
  }




}
