import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-limb-body',
  templateUrl: './limb-body.component.html',
  styleUrls: ['./limb-body.component.css']
})
export class LimbBodyComponent implements OnInit {

  @Input() contents: string;

  constructor() { }

  ngOnInit() {
    this.contents = "Some words and stuff";
  }

}
