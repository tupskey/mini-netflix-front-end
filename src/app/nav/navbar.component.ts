import { Component } from '@angular/core';
import { AuthService } from '../users/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
  styles: [`
  .nav.navbar-nav {font-size: 15px;}
  #media (max-width: 120px) {#searchForm {display: none}}
  li > a.active { color: red; }
  li > a:hover { color: white; background-color: red; }
  .nav-item{color: black}
  .container-fluid{background-color: black;}

  `]
})

export class NavBarComponent{

constructor(private auth: AuthService, private router: Router){

}

logOut(){
  this.auth.removeUserInfo();
  this.router.navigate(['/user/login'])
}

}
