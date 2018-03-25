import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeHtml, SafeUrl, SafeStyle } from '@angular/platform-browser';


@Component({
  selector: 'app-limb-media-modal',
  templateUrl: './limb-media-modal.component.html',
  styleUrls: ['./limb-media-modal.component.css']
})
export class LimbMediaModalComponent implements OnInit {

  @Input() media;
  srcUrl: any;

  constructor(private sanitization: DomSanitizer, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.srcUrl = this.sanitization.bypassSecurityTrustUrl(this.media);
  }

  closeModal(){
    this.activeModal.close();
  }


}
