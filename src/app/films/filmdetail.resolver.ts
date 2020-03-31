import { Injectable} from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { FilmService } from './shared/films.service';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IFilm } from './shared/films.model';
import { HttpErrorResponse } from '@angular/common/http';




@Injectable()

export class FilmDetailResolver implements Resolve<IFilm>{
  film: IFilm ;
    constructor(private filmService : FilmService,
      private router: Router){}

  resolve(route: ActivatedRouteSnapshot):Observable<IFilm>{
    const id = +route.paramMap.get('id');
   return this.filmService.getFilm(id).pipe( film => film  );
  }

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';
    if(err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    }else{
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
