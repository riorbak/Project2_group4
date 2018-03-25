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
      //TESTING
      // let limb=new Limb();
      // this.postLimb(limb);
      //let user=new User();
      //this.postNewUser(user);
      this.getAllUsers();
      console.log("hi");
  }

  //TESTING
  postLimb(limb : Limb): void 
  {
    this.Server.postLimb(limb).subscribe( res=>{
      let x : Limb=<Limb>res;
      console.log("thing 1"+x.timeStamp);
    });
    console.log("thing 2");    
  }

  postNewUser(user : User): void 
  {
    this.Server.postNewUser(user).subscribe( res=>{
      let x : User=<User>res;
      console.log("thing 1"+x.username);
    });
    console.log("thing 2");    
  }

  getAllUsers()
  {
      this.Server.getAllUsers().subscribe( res=>{
      console.log(res);
    });
  }


}