import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LimbComponent } from '../limb/limb.component';
// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';

import { Limb } from '../limb/mock-limb';


@Component({
  selector: 'app-limb-list',
  templateUrl: './limb-list.component.html',
  styleUrls: ['./limb-list.component.css']
})
export class LimbListComponent implements OnInit {

// list: Array<LimbComponent>; 
list: Limb[] = [
  {
    count: 0,
    name: 'My Name',
    timeStamp: '00/00/00 00:00 AM',
    limbBody: 'Please work....',
    limbId: 1
  },
  {
    count: 1,
    name: 'Your Name',
    timeStamp: '00/00/00 00:00 AM',
    limbBody: 'I believe in this test...',
    limbId: 2
  },
  {
    count: 2,
    name: 'His Name',
    timeStamp: '00/00/00 00:00 AM',
    limbBody: 'We can do it!',
    limbId: 3
  },
  {
    count: 3,
    name: 'Her Name',
    timeStamp: '00/00/00 00:00 AM',
    limbBody: 'I believe in us!',
    limbId: 4
  }
];
// requestUrl: any;

// private http: HttpClient
constructor() {

}

ngOnInit() {



}

  // getListOfLimbs(): Observable<LimbComponent[]>{
  //   return this.http.get<LimbComponent[]>(this.requestUrl);
  // }

}
