import { Component, OnInit} from '@angular/core';
import { AuthService } from '../films/shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['']
})

export class LoginComponent implements OnInit{
  username: string;
  password: string;
  loginInvalid: boolean = false;
  returnUrl: string;
  errorMessage = 'Invalid username and password...'

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute){

  }

  ngOnInit() {
    this.auth.removeUserInfo();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(formValue){
    this.auth.loginUser(formValue.email, formValue.password).subscribe(resp => {
        this.router.navigateByUrl(this.returnUrl);
    },error=> {
      this.loginInvalid = true;
    })
  }

  onCancel() {
    this.router.navigate(['/'])
  }
}
