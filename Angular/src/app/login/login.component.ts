import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend/backend.service';
import { Limb } from '../limb/mock-limb';
import { LimbInterface } from '../limb/limb-interface';
import { AuthenticationService } from '../auth/authentication.service'
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
      let limb=new Limb();
      this.postLimb(limb);
      console.log("hi");
  }

  postLimb(limb : Limb): void 
  {
    this.Server.postLimb(limb).subscribe( res=>{
      let x : Limb=<Limb>res;
      console.log("thing 1"+x.timeStamp);
    });
    console.log("thing 2");    
  }

}