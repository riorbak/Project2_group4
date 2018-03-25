import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { Router } from '@angular/router';


// import { LimbComponent } from './limb';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  public userEmail: string;
  constructor(public auth: AuthenticationService, public router: Router) { }
 
  ngOnInit() {
    if(!this.auth.userProfile){
      this.router.navigate(['login']);
    }
    this.userEmail = this.auth.userProfile.email;
    localStorage.setItem('email', this.userEmail);
    
  //   const accessToken = localStorage.getItem('access_token');
  //   if (this.auth.userProfile) {
  //     this.profile = this.auth.userProfile;
  //   } else {
  //     this.auth.getProfile((err, profile) => {
  //       this.profile = profile;
  //       localStorage.setItem('profile', profile);
  //       console.log(this.profile);        
  //     });
  //   }
   }

}
