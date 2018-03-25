import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Limb } from '../limb/mock-limb';
import { User } from '../limb/mock-user'
import { appSettings } from '../appSettings';
import { Router } from '@angular/router';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class BackendService
{

  constructor(private http: HttpClient, private router:Router) { }

  postLimb( limb : Limb)
  {
    let url : string = appSettings.BACKEND_URL + '/boers/GStar/limbs/new';
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
      catchError(this.handleError('postLimb', []))
    );
  }

  getUser( fetchedEmail: String )
  {
    let url : string = appSettings.BACKEND_URL + 'boers/email';
    let userEmail = {
      email: fetchedEmail
    };
    return this.http.post(url, userEmail,  httpOptions)
    .pipe(
      catchError(this.handleUserNotFoundError('ErrorFindingUser'))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) 
  {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }

  private handleUserNotFoundError<T> (operation = 'operation', result?: T) 
  {
    return (error: any): Observable<T> => {
      this.router.navigate(['register']); 
      return of(result as T);
    };
  }

}