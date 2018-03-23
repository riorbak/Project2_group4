import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LimbComponent } from '../limb/limb.component';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-limb-list',
  templateUrl: './limb-list.component.html',
  styleUrls: ['./limb-list.component.css']
})
export class LimbListComponent implements OnInit {

  list: Array<LimbComponent>; 
  requestUrl: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  getListOfLimbs(): Observable<LimbComponent[]>{
    return this.http.get<LimbComponent[]>(this.requestUrl);
  }

}
