import { Component, OnInit, Input } from '@angular/core';
// import { FeedComponent } from '../feed';

@Component({
  selector: 'app-limb',
  templateUrl: './limb.component.html',
  styleUrls: ['./limb.component.css']
})
export class LimbComponent implements OnInit {

  @Input() count: number = 0; //This will be the number of likes
  @Input() name: string = 'My Name';
  @Input() timeStamp: any = '1/01/00 00:00 AM';
  @Input() limbBody: string;
  @Input() limbId: number;


  constructor() { }

  ngOnInit() {

  }

}
