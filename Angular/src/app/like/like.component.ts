import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {


  @Input() likes;
  temp: string;
  clickCount: number;
  color: string;

  constructor() { }

  ngOnInit() {
    this.clickCount = 0;
    this.updateIcon(this.likes);
    
  }

  changeCount() {
    this.clickCount++;
    // if(this.clickCount % 2 == 1){
    //   this.count += 1;
    // } else {
    //   this.count -= 1;
    // }
    this.likes++;
    this.updateIcon(this.likes);
    console.log(this.clickCount);
    console.log(this.likes);
  }

  updateIcon(numCount: number) {
    if(numCount == 0){
      this.temp = 'fa fa-thermometer-empty'; 
      this.color = 'color1';
    } else if (numCount == 1) {
      this.temp = 'fa fa-thermometer-quarter';
      this.color = 'color2'; 
    } else if (numCount == 2) {
      this.temp = 'fa fa-thermometer-half'; 
      this.color = 'color3';
    } else if (numCount == 3) {
      this.temp = 'fa fa-thermometer-three-quarters'; 
      this.color = 'color4';
    } else {
      this.temp = 'fa fa-thermometer-full'; 
      this.color = 'color5';
    }
  }

}
