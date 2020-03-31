import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()

export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router){}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean  | UrlTree{
        // return this.checkLoggedIn();
        if(this.auth.isLoggedIn){
            return true;
        }
        this.router.navigate(['/user/login'])
        return false;
    }

    // checkLoggedIn(){
    //     if(this.auth.isLoggedIn()){
    //         return true;
    //     }
    //     else{
    //         this.router.navigate(['/user/signup'])
    //         return false;
    //     }
    // }

}