import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl, SafeStyle } from '@angular/platform-browser';
import { isNull } from 'util';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { LimbMediaModalComponent } from '../limb-media-modal/limb-media-modal.component';

@Component({
  selector: 'app-limb-body',
  templateUrl: './limb-body.component.html',
  styleUrls: ['./limb-body.component.css']
})
export class LimbBodyComponent implements OnInit {

  @Input() content: string;
  @Input() media;
  srcUrl: any;
  hasMedia: boolean;
  constructor(private sanitization: DomSanitizer, private modalService: NgbModal) { }

  ngOnInit() {
    // this.contents = "Some words and stuff";
    if(this.media != null){
      this.hasMedia = true;
    } else {
      this.hasMedia = false;
    }

    if(this.hasMedia){
      this.srcUrl= this.sanitization.bypassSecurityTrustUrl(this.media);
    }
    this.format_images();
  }


  openImgModal() {
    const modalRef = this.modalService.open(LimbMediaModalComponent);
    modalRef.componentInstance.media = this.srcUrl;
  }

  format_images()
  {
    console.log("Cont: "+this.content);
    if(this.content.includes("&&&http"))
    {
      this.hasMedia=true;
      let url=this.content.substring(this.content.lastIndexOf("&&&http")+3);
      console.log("URL:"+url);

      this.srcUrl=url;
      // var image=document.createElement("img");
      // image.src=url;
      // document.getElementById("limb-body").appendChild(image);

      //after done
      url="&&&"+url;
      this.content=this.content.replace(url,'');
    }

  }


}
