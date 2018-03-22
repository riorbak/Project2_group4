import { Component, OnInit, Input } from '@angular/core';
// import { FeedComponent } from '../feed';

@Component({
  selector: 'app-limb',
  templateUrl: './limb.component.html',
  styleUrls: ['./limb.component.css']
})
export class LimbComponent implements OnInit {

  count: number = 0; //This will be the number of likes
  name: string = 'My Name';
  timeStamp: any = '1/01/00 00:00 AM';


  constructor() { }

  ngOnInit() {

  }

}
