import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { state } from '@angular/animations';
import { AuthService } from './shared/auth.service';

@Injectable()

export class FilmGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router){}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot)
 :
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
        // return this.checkLoggedIn();
        if(this.auth.isLoggedIn()){
            return true;
        }else{
          
        this.router.navigate(['/user/login'], {queryParams: {returnUrl: state.url }})
        return false;
        }
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