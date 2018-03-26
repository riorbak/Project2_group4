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
  { 
      localStorage.removeItem('profile');
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
      let user=new User();
      user.username = 'GStar';
      user.email='scott.g.bennett@gmail.com';
      user.firstName='Scott';
      user.lastName='Bennett';
      //user.bdate='Sun Mar 25 2018 00:00:00 GMT-0400 (EDT)';
      
      
      console.log("User is: " + JSON.stringify(user));
      this.postNewUser(user);
      // console.log(JSON.stringify(this.Server.getUser("GStar")));
      // let limb=new Limb();
      // limb.content="hi"
      // limb.count=2;
      // limb.limbId=3;
      // limb.media="this is my url";
      // limb.name="f";
      // limb.timeStamp="00/00/00 00:00 AM";
      // this.postLimb(limb,'Gstar');
  }

  //TESTING
  postLimb(limb : Limb, username : string): void 
  {
    this.Server.postLimb(limb,username).subscribe( res=>{
      console.log(res);
      let x : Limb=<Limb>res;
      console.log("thing 1"+x.timeStamp);
    });
    //console.log("thing 2");    
  }

  postNewUser(user : User): void 
  {
    this.Server.postNewUser(user).subscribe( res=>{
      let x : User=<User>res;
      console.log(res);
    });
    console.log("thing 2");    
  }

  postUpdateUser( user : User )
  {
    this.Server.postUpdateUser(user).subscribe( res=>{
      let x : User=<User>res;
      console.log("thing 1"+x.firstName);
    });
    console.log("thing 2"); 
  }

  getAllUsers()
  {
      this.Server.getAllUsers().subscribe( res=>{
      console.log(res);
    });
  }

  getUser(username : string)
  {
    this.Server.getUser(username).subscribe( res=>{
      console.log(res);
    });
  }


}