import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Limb } from '../objects';
import { User } from '../objects';
import { appSettings } from '../appSettings';
import { Router } from '@angular/router';
import {EmptyObservable} from 'rxjs/observable/EmptyObservable';
import { Form } from '@angular/forms';

const acceptHeader = {
  headers: new HttpHeaders({ 'Accept': 'application/json' })
};

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const ImagehttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
};

@Injectable()
export class BackendService
{

  public users : Observable<User[]>;
  constructor(private http: HttpClient, private router:Router) { 
      this.users = this.getAllUsers();
  }

  postLimb( limb : Limb, username : string )
  {
    let url : string = appSettings.BACKEND_URL + 'boers/'+username+'/limbs/new';
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
    let url : string =  appSettings.BACKEND_URL +'boers/update';
    return this.http.post(url,user,httpOptions)
    .pipe(
      catchError(this.handleError('postNewUser', []))
    );
  }

  getAllUsers() : Observable<User[]>
  {
    let url : string =  appSettings.BACKEND_URL + 'boers';
    return this.http.get<User[]>(url,httpOptions)
    .pipe(
      catchError(this.handleError('getAllUsers', []))
    );
  }

  getAllLimbs() {
    let url : string = appSettings.BACKEND_URL + 'limbs/'
    return this.http.get(url,httpOptions)
    .pipe(
      catchError(this.handleError('getAllLimbs', []))
    );
  }

  getLimbsByUserName(username : string) {
    let url : string = appSettings.BACKEND_URL + 'boers/' + username + '/limbs' 
    return this.http.get(url,httpOptions)
    .pipe(
      catchError(this.handleError('getLimbsByUsername', []))
    );
  }

  getUserByUsername(username : string)
  {
    let url : string = appSettings.BACKEND_URL + 'boers/' + username;
    return this.http.get(url,httpOptions)
    .pipe(
      catchError(this.handleError('getUser', []))
    );
  }

  getUserByEmail( fetchedEmail: String )
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

  public doLike(userName : string, limbId : number) {
    let url : string = appSettings.BACKEND_URL + "limbs/" + limbId + '/' + userName + '/1';
    console.log(url);
    return this.http.get(url, httpOptions)
      .pipe(
        catchError(this.handleError('doLike', []))
      ); 
  }

  uploadPhoto(userName:string, imageType:string, file : File) {
    //let form : Form = new Form();
    let formData : FormData = new FormData();
    formData.append('inputImg', file, file.name);
    let url:string = appSettings.BACKEND_URL + 'boers/' + userName;
    if (imageType == "Profile"){
      url +='/profile-img';
    else if (imageType == "Cover")
      url +='/cover-img';
    else 
      url = appSettings.BACKEND_URL + 'upload';
    } else {
      url +='/cover-img';
    }
    console.log("profile photo upload: " + url);
      return this.http.post(url, formData)
      .pipe(
        catchError(this.handleError('uploadPhoto', []))
      );
  }

  searchUsers(term: string): Observable<User[]> {
    console.log(term);
    if(!term)  
    {
      term="garbled junk that isn't a username!!!";
    }
    return this.users.map(users => users.filter( user => user.username.includes(term)));
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