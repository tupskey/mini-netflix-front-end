import { Injectable } from "@angular/core";
import { IFilm } from './films.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class FilmService{
 filmUrl = 'http://localhost:8080';
 headers = new HttpHeaders().set('Content-Type', 'application/json')
  constructor(private http: HttpClient){

  }

  getFilms():Observable<IFilm[]>{
    return this.http.get<IFilm[]>(`${this.filmUrl}/films`, {headers: this.headers})
  }


  getFilm(id):Observable<any>{
    return this.http.get(`${this.filmUrl}/films/${id}`, {headers: this.headers})
    .pipe(map((res) => {
      return res;
    }),
    catchError(this.handleError)
    )
  }

  getFavorites(){
    return this.http.get(`${this.filmUrl}/favorites`, {headers: this.headers})
    .pipe(map((res) => {
      return res;
    }),
    catchError(this.handleError)
    )
  }

  getFavId(id){
    return this.http.get(`${this.filmUrl}/favorites/${id}`, {headers: this.headers})
    .pipe(map((res)=> {
      return res;
    }),
      catchError(this.handleError)
    )
  }

  addFavorite(id, data): Observable<IFilm> {
    return this.http.post<IFilm>(`${this.filmUrl}/favorites/${id}`, data, {headers: this.headers})
  }

  removeFavorite(id):Observable<IFilm>{
    return this.http.delete<IFilm>(`${this.filmUrl}/favorites/${id}`)
  }

  handleError(err: HttpErrorResponse) {

    let errorMessage = '';
    if(err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    }else{
      errorMessage = `Server returned code..: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}




