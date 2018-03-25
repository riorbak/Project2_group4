import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Limb } from '../objects';
import { User } from '../objects';
import { appSettings } from '../appSettings';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class BackendService
{

  constructor(private http: HttpClient) { }

  postLimb( limb : Limb, username : string )
  {
    let url : string = appSettings.BACKEND_URL + '/boers/'+username+'/limbs/new';
    return this.http.post(url,JSON.stringify(limb),httpOptions)
    .pipe(
      catchError(this.handleError('postLimb', []))
    );
  }

  postNewUser( user : User )
  {
    let url : string = appSettings.BACKEND_URL + 'boers/new';
    return this.http.post(url,user,httpOptions)
    .pipe(
      catchError(this.handleError('postNewUser', []))
    );
  }

  postUpdateUser( user : User )
  {
    let url : string = 'http://localhost:8080/boers/update';
    return this.http.post(url,user,httpOptions)
    .pipe(
      catchError(this.handleError('postNewUser', []))
    );
  }

  getAllUsers()
  {
    let url : string = 'http://localhost:8080/boers';
    return this.http.get(url,httpOptions)
    .pipe(
      catchError(this.handleError('getAllUsers', []))
    );
  }

  getUserByUsername(username : string)
  {
    let url : string = 'http://localhost:8080/boers/' + username;
    return this.http.get(url,httpOptions)
    .pipe(
      catchError(this.handleError('getUser', []))
    );
  }

  getUser( fetchedEmail: String )
  {
    let url : string = appSettings.BACKEND_URL + 'boers/email';
    let userEmail = {
      email: fetchedEmail
    };
    return this.http.post(url, userEmail,  httpOptions);
  }


  private handleError<T> (operation = 'operation', result?: T) 
  {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }

}