import { Component, OnInit, Input } from '@angular/core';
// import { FeedComponent } from '../feed';

@Component({
  selector: 'app-limb',
  templateUrl: './limb.component.html',
  styleUrls: ['./limb.component.css']
})
export class LimbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  text : string = "testing sending text";
  

}
