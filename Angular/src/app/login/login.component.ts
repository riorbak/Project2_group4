import { Component, OnInit } from '@angular/core';
import { DbService } from '../service/db.service';
import { LimbComponent } from '../limb/limb.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit 
{
  constructor(private Server: DbService) { }

  ngOnInit() 
  { 
      let Limb=new LimbComponent();
      this.postLimb(Limb);
      console.log("hi");
  }

  postLimb(Limb : LimbComponent): void 
  {
    this.Server.postLimb(Limb)
        .subscribe();    
  }

}
