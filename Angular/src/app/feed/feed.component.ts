import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { Router } from '@angular/router';
import { User } from '../objects'
import { BackendService } from '../backend/backend.service';


// import { LimbComponent } from './limb';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  public userEmail: string;
  constructor(public auth: AuthenticationService, public router: Router, private server: BackendService) { }

  ngOnInit() {
    // if (!this.auth.userProfile) {
    //   this.router.navigate(['login']);
    
    // }
    let userProfile = {email: ''};
    var profile = localStorage.getItem('profile');
    userProfile = JSON.parse(profile);
    this.userEmail = userProfile.email;
    let postResult = this.server.getUser(this.userEmail).subscribe(res => {
      let user: User = <User>res;
      if (!user.lastName) {
        this.router.navigate(['register']);
      }
      localStorage.setItem('username', user.username);
    });
    localStorage.setItem('email', this.userEmail);

  }

}
