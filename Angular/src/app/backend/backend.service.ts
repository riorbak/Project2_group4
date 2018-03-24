import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Limb } from '../objects';
import { User } from '../objects';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class BackendService
{

  constructor(private http: HttpClient) { }

  postLimb( limb : Limb)
  {
    let url : string = 'http://localhost:8080/CashFlowServlet/CFservlet';
    return this.http.post(url,limb,httpOptions)
    .pipe(
      catchError(this.handleError('postLimb', []))
    );
  }

  postNewUser( user : User )
  {
    let url : string = 'http://localhost:8080/boers/new';
    return this.http.post(url,user,httpOptions)
    .pipe(
      catchError(this.handleError('postLimb', []))
    );
  }


  private handleError<T> (operation = 'operation', result?: T) 
  {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }

}