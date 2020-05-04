import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../../users/user.model';
import { Observable, throwError, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable()

export class AuthService {
  userUrl = 'http://localhost:8080';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser: IUser;

  constructor(private http: HttpClient){
  }


isLoggedIn(): boolean {
  let userdata = localStorage.getItem('access_token')
  if(userdata) {
    return true;
  }
  else{
    return false;
  }
}


  removeUserInfo(){
    localStorage.removeItem('access_token')
  }

  register(user: IUser):Observable<any>{
    return this.http.post(`${this.userUrl}/users/signup`, user, {headers: this.headers})
  }


loginUser(username: string, password: string) {
  let logInfo = {username: username, password: password}
  return this.http.post<{token: string}>(`${this.userUrl}/users/login`, logInfo)
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
