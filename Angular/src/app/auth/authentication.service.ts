import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
import { Auth0Lock } from 'auth0-lock';
import { appSettings } from '../appSettings';
import { BackendService } from '../backend/backend.service';
import { User } from '../objects';
@Injectable()
export class AuthenticationService {

  public userProfile: any;
  public errorMessage: any;

  auth0 = new auth0.WebAuth({
    clientID: '0ALaNaZnhA2AYZfI1OnEnjXsW9DBc7bL',
    domain: 'revature-limbo.auth0.com',
    responseType: 'token id_token',
    audience: 'https://revature-limbo.auth0.com/userinfo',
    redirectUri: appSettings.ANGULAR_URL + 'auth',
    scope: 'openid email'
  });


  constructor(public router: Router, private server: BackendService) { }

  public login(): void {
    this.auth0.authorize();
  }


  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
      } else if (err) {
        this.router.navigate(['/verify']);
        console.log(err);
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    this.setProfile();
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  public setProfile(): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access token must exist to fetch profile');
    }
    const self = this;

    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
        localStorage.setItem('profile', JSON.stringify(profile));
        this.initializeUser();
      }
    });
  }

  initializeUser() {
    let userProfile = { email: '' };
    var profile = localStorage.getItem('profile');
    userProfile = JSON.parse(profile);
    //this.userEmail = userProfile.email;
    let postResult = this.server.getUserByEmail(userProfile.email).subscribe(res => {
      let user: User = <User>res;
      console.log(user);
      if (!user.lastName) {
        this.router.navigate(['register']);
      }
      localStorage.setItem('username', user.username);
      localStorage.setItem('userObject', JSON.stringify(user));
    });
    localStorage.setItem('email', userProfile.email);
    this.router.navigate(['feed']);
  }

}
