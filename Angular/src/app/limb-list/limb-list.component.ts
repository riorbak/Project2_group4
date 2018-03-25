import { Component, Input, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LimbComponent } from '../limb/limb.component';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';

import { Limb } from '../objects';
import { BackendService } from '../backend/backend.service';



@Component({
  selector: 'app-limb-list',
  templateUrl: './limb-list.component.html',
  styleUrls: ['./limb-list.component.css']
})
export class LimbListComponent implements OnInit {
  constructor (private Server: BackendService) {
    this.getAllLimbs();
   }
// list: Array<LimbComponent>; 
list: Limb[] = [];

getAllLimbs()
{
    this.Server.getAllLimbs().subscribe( res=>{
      for (var i in res) {
        res[i].postTime=res[i].postTime.month+res[i].postTime.dayOfMonth+res[i].postTime.year;
        this.list.push(<Limb>res[i]);
      }
      console.log(this.list);
  });
}


@Input() editingOpen;
// requestUrl: any;

// private http: HttpClient

ngOnInit() 
{
  
}

}
