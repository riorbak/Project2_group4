import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend/backend.service';
import { Limb } from '../limb/mock-limb';
import { AuthenticationService } from '../auth/authentication.service'
import { User } from '../limb/mock-user'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit 
{
  constructor(private Server: BackendService,public auth: AuthenticationService) { }
  ngOnInit() 
  { 
      localStorage.removeItem('profile');
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
      // let limb=new Limb();
      // this.postLimb(limb);
      let user=new User();
      this.postNewUser(user);
      console.log(JSON.stringify(this.Server.getUser("GStar")));
  }

  postLimb(limb : Limb): void 
  {
    this.Server.postLimb(limb).subscribe( res=>{
      let x : Limb=<Limb>res;
      console.log("thing 1"+x.timeStamp);
    });
    //console.log("thing 2");    
  }

  postNewUser(user : User): void 
  {
    this.Server.postNewUser(user).subscribe( res=>{
      let x : User=<User>res;
      console.log("thing 1"+x.username);
    });
    console.log("thing 2");    
  }

}