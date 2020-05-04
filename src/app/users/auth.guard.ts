import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../films/shared/auth.service';
import { Observable } from 'rxjs';
import { state } from '@angular/animations';

@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router){}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        // return this.checkLoggedIn();
        if(this.auth.isLoggedIn){
            return true;
        }
        this.router.navigate(['/user/login'], {queryParams: {returnUrl: state.url }})
        return false;
    }

    // checkLoggedIn(){
    //     if(this.auth.isLoggedIn){
    //         return true;
    //     }
    //     else{
    //         this.router.navigate(['/user/login'], {queryParams: { returnUrl: state.url }});
    //         return false;
    //     }
    // }

}