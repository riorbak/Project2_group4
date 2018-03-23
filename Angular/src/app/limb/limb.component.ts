import { Component, OnInit, Input } from '@angular/core';
// import { FeedComponent } from '../feed';

@Component({
  selector: 'app-limb',
  templateUrl: './limb.component.html',
  styleUrls: ['./limb.component.css']
})
export class LimbComponent implements OnInit {

  @Input() count: number; //This will be the number of likes
  @Input() name: string;
  @Input() timeStamp: any;
  @Input() limbBody: string;
  @Input() limbId: number;


  constructor() { 
    
  }

  ngOnInit() {
  

  }

}
