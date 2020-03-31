import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { IUser } from './user.model';
import { Observable, throwError, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable()

export class AuthService {
  userUrl = 'http://localhost:3000/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser: IUser;

  constructor(private http: HttpClient){
  }

 public get isLoggedIn(): boolean {
   return (localStorage.getItem('access_token') !== null);
  }

  // setUserInfo(user){
  //   localStorage.setItem('userinfo', JSON.stringify(user));
  // }

  removeUserInfo(){
    localStorage.removeItem('access_token')
  }

  register(user: IUser):Observable<any>{
    return this.http.post(`${this.userUrl}/signup`, user, {headers: this.headers})
  }

  // loginUser(username: string, password: string){
  //   let logInfo = {username: username, password: password}
  //   return this.http.post(`${this.userUrl}/login`, logInfo, {headers: this.headers})
  //   .pipe(map(user=> {
  //     localStorage.setItem('userinfo', JSON.stringify(user));
  //     return user;
  //   }))

  // }

  // loginUser(username: string, password: string) {
  //   let logInfo = {username: username, password: password }
  //   return this.http.post(`${this.userUrl}/login`, logInfo, {headers: this.headers})
  //   .pipe(tap(data=> {
  //    this.currentUser = <IUser>data['user'];
  //   }))
  //   .pipe(catchError(err => {
  //     return of(false)
  //   }))
  //  }

loginUser(username: string, password: string) {
  let logInfo = {username: username, password: password}
  return this.http.post<{token: string}>(`${this.userUrl}/login`, logInfo)
  .pipe(map(result=> {
    localStorage.setItem('access_token', result.token)
  }))
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
