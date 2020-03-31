import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { FilmService } from './shared/films.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IFilm } from './shared/films.model';

@Injectable()

export class FilmResolver implements Resolve<any>{

    constructor(private filmService: FilmService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.filmService.getFilms().pipe(map (films => films))
  }
}
