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
  id: any;
  edited : boolean;
  edited_video : boolean;

  constructor(private sanitization: DomSanitizer, private modalService: NgbModal) { }

  ngOnInit() {
    this.format_media();
  }


  openImgModal() {
    const modalRef = this.modalService.open(LimbMediaModalComponent);
    modalRef.componentInstance.media = this.srcUrl;
  }

  format_media()
  {
    // console.log("Cont: "+this.content);
    this.edited=false;
    this.edited_video=false;
    if(this.content.includes("&&&http"))
    {
      this.edited=true;
      let url=this.content.substring(this.content.lastIndexOf("&&&http")+3);
      // console.log("URL:"+url);

      this.srcUrl=url;
      // var image=document.createElement("img");
      // image.src=url;
      // document.getElementById("limb-body").appendChild(image);

      //after done
      url="&&&"+url;
      this.content=this.content.replace(url,'');
    }

    //youtube check
    let res = this.content.replace( /\n/g, " " ).split( " " );
    var i=0;
    let breakout : boolean=false;
    let element;
    while(!breakout)
    {
        element=res[i];
        console.log(element);

        if(this.validateYouTubeUrl(element))
        {
          this.edited_video=true;
          breakout=true;
          this.content=this.content.replace(element,"");
          
          this.id=element.substring(element.lastIndexOf("?v=")+3);

        }

        ++i;
        if(i > res.length-1)
        {
          breakout=true;
        }
    }

  }

  validateYouTubeUrl(url:string) : boolean
  {
          if (url != undefined || url != '') {
              var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
              var match = url.match(regExp);
              if (match && match[2].length == 11) {
                  return true;
              }
              else {
                  return false;
              }
          }
  }



}
