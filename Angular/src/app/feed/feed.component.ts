import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';

// import { LimbComponent } from './limb';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  profile: any;
  constructor(public auth: AuthenticationService) { }
 
  ngOnInit() {

    this.auth.handleAuthentication();
    const accessToken = localStorage.getItem('access_token');
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        localStorage.setItem('profile', profile);
        console.log(this.profile);
        
        
      });
    }

  }

}
