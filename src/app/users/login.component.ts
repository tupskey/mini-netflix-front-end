import { Component} from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['']
})

export class LoginComponent{
  username: string;
  password: string;
  loginInvalid: boolean = false;

  constructor(private auth: AuthService, private router: Router){

  }
  login(formValue){
    this.auth.loginUser(formValue.email, formValue.password).subscribe(resp=> {
      this.router.navigate(['/films'])
    })
  }
}
