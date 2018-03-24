import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthenticationService) { }

  ngOnInit() {
    localStorage.removeItem('profile');
  }

}
