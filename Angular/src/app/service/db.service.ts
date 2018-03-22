import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { LimbComponent } from '../limb/limb.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class DbService 
{

  constructor(private http: HttpClient) { }

  postLimb( Limb : LimbComponent )
  {
    let url : string = 'http://localhost:8080/CashFlowServlet/CFservlet';
    return this.http.post(url,Limb,httpOptions)
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
