import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from '../backend/backend.service';
import {Limb} from '../objects';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {


  @Input() likes;
  @Input('owner') owner;
  @Input('id') id;
  temp: string;
  clickCount: number;
  color: string;

  constructor(private Server: BackendService) { }

  ngOnInit() {
    this.clickCount = 0;
    this.updateIcon(this.likes);
  }


  changeCount() {
    if (this.owner != localStorage.getItem('username')) {
      this.doLike(this.id);
      this.clickCount++;
      // if(this.clickCount % 2 == 1){
      //   this.count += 1;
      // } else {
      //   this.count -= 1;
      // }

    }
    else {
      alert("Don't like your own post, loser.");
    }
  }

  doLike(limbId: number) {
    this.Server.doLike(localStorage.getItem('username'), limbId).subscribe(res => {
      let prev_likes=this.likes;
      let result: Limb;
      result=<Limb>res;
      this.likes = result.likes;
      console.log(result.likes);
      if(prev_likes!=this.likes)
        this.updateIcon(this.likes);
    });
  }

  updateIcon(numCount: number) {
    if (numCount == 0) {
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
