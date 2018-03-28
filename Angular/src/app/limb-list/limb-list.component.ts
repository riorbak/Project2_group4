import { Component, Input, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LimbComponent } from '../limb/limb.component';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';

import { Limb } from '../objects';
import { BackendService } from '../backend/backend.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-limb-list',
  templateUrl: './limb-list.component.html',
  styleUrls: ['./limb-list.component.css']
})
export class LimbListComponent implements OnInit {
  constructor (private Server: BackendService,private route: ActivatedRoute) {
   }

  @Input() parameter: number;
  // list: Array<LimbComponent>; 
  list: Limb[] = [];
  id: number;

  getAllLimbs() {
    this.Server.getAllLimbs().subscribe(res => {
      let tod: string;
      for (var i in res) {
        if (res[i].postTime.hour > 12) {
          res[i].postTime.hour = res[i].postTime.hour - 12;
          tod = "PM";
        } else {
          tod = "AM";
        }
        if(res[i].postTime.minute < 10){
          res[i].postTime.minute = "0"+res[i].postTime.minute;
        }
        res[i].postTime=res[i].postTime.monthValue+"/"+res[i].postTime.dayOfMonth+"/"+res[i].postTime.year+" "+res[i].postTime.hour +":"+res[i].postTime.minute + " " + tod;
        this.list.push(<Limb>res[i]);
        
      }
      this.list.reverse();
      // console.log(this.list);
    });
  }

  getLimbsByUser(userName: string) {
    this.Server.getLimbsByUserName(userName).subscribe(res => {
      let tod: string;
      for (var i in res) {
        if (res[i].postTime.hour > 12) {
          res[i].postTime.hour = res[i].postTime.hour - 12;
          tod = "PM";
        } else {
          tod = "AM";
        }
        if(res[i].postTime.minute < 10){
          res[i].postTime.minute = "0"+res[i].postTime.minute;
        }
        res[i].postTime=res[i].postTime.monthValue+"/"+res[i].postTime.dayOfMonth+"/"+res[i].postTime.year+" "+res[i].postTime.hour +":"+res[i].postTime.minute + " " + tod;
        this.list.push(<Limb>res[i]);
      }
      this.list.reverse();
      // console.log(this.list);
    });
  }


  @Input() editingOpen;
  // requestUrl: any;

  // private http: HttpClient

ngOnInit() 
{
  console.log("parameter is "+this.parameter);
  if(this.parameter==1)
    this.getAllLimbs();
  else
  {
    this.getLimbsByUser(this.route.snapshot.paramMap.get('username'))
  }
}

}
