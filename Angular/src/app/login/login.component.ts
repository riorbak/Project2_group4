import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend/backend.service';
import { AuthenticationService } from '../auth/authentication.service';
import { User } from '../objects';
import { Limb } from '../objects';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit 
{
  
  constructor(private Server: BackendService,public auth: AuthenticationService) { }
  ngOnInit() 
  { }

  //TESTING
  postLimb(limb : Limb, username : string): void 
  {
    this.Server.postLimb(limb,username).subscribe( res=>{
      console.log(res);
      let x : Limb=<Limb>res;
    });  
  }

  postNewUser(user : User): void 
  {
    this.Server.postNewUser(user).subscribe( res=>{
      let x : User=<User>res;
      console.log(res);
    });  
  }

  postUpdateUser( user : User )
  {
    this.Server.postUpdateUser(user).subscribe( res=>{
      let x : User=<User>res;
    });
  }

  getAllUsers()
  {
      this.Server.getAllUsers().subscribe( res=>{
      console.log(res);
    });
  }

  getUser(username : string)
  {
    this.Server.getUserByUsername(username).subscribe( res=>{
      console.log(res);
    });
  }


}