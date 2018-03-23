import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';

// import { LimbComponent } from './limb';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(public auth: AuthenticationService) { }

  ngOnInit() {
    
    this.auth.handleAuthentication();
  }

}
