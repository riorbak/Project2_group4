import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { Router } from '@angular/router';
import { BackendService } from '../backend/backend.service';
import { User } from '../objects';

@Component({
  selector: 'app-authentication-lander',
  templateUrl: './authentication-lander.component.html',
  styleUrls: ['./authentication-lander.component.css']
})
export class AuthenticationLanderComponent implements OnInit {


  constructor(public auth: AuthenticationService, public router: Router, public server: BackendService) {
    this.auth.handleAuthentication();
  }

  ngOnInit() {
  }



}
