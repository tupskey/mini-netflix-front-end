import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { FilmService } from './shared/films.service';

@Injectable({
  providedIn: 'root'
})

export class FilmGuard implements CanActivate {

  constructor(private router: Router,
    private filmService : FilmService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     const id = +route.url[1].path;
     if(isNaN(id) || id <= 0 || id > 8 || id === id){
      alert("Invalid Film Id");
      this.router.navigate(['/films']);
      return false;
     }
     return true;
 }
}
