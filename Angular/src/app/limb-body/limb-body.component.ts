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
      this.srcUrl = this.sanitization.bypassSecurityTrustUrl(this.media);
    }

  }


  openImgModal() {
    const modalRef = this.modalService.open(LimbMediaModalComponent);
    modalRef.componentInstance.media = this.media;
  }

}
