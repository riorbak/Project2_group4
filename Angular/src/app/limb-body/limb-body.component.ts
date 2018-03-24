import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl, SafeStyle } from '@angular/platform-browser';
import { isNull } from 'util';

@Component({
  selector: 'app-limb-body',
  templateUrl: './limb-body.component.html',
  styleUrls: ['./limb-body.component.css']
})
export class LimbBodyComponent implements OnInit {

  @Input() contents: string;
  @Input() media;
  srcUrl: any;
  hasMedia: boolean;
  constructor(private sanitization: DomSanitizer) { }

  ngOnInit() {
    // this.contents = "Some words and stuff";
    if(this.media != null){
      this.hasMedia = true;
    } else {
      this.hasMedia = false;
    }

    if(this.hasMedia){
      this.srcUrl = this.sanitization.bypassSecurityTrustUrl(this.media);
    }

  }



}
