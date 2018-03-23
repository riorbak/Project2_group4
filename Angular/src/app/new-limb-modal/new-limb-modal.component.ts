import { Component, Input, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-new-limb-modal',
  templateUrl: './new-limb-modal.component.html',
  styleUrls: ['./new-limb-modal.component.css']
})
export class NewLimbModalComponent implements OnInit {

  @Input() name;

  constructor(
    public activeModal: NgbActiveModal
  ) {}


  ngOnInit() {
    
  }

  changeLabel() {
    let input: any;
    let files = [];
    let filename: any;
    input = document.getElementById("newLimbImg");
    files = input.files;
    filename = files[0].name;
    let label: any;
    document.getElementById("inputImgLabel").innerHTML = '<i class="fa fa-upload" style="padding-right:.5em"></i>' + filename;
  }

  closeModal()
  {
    this.activeModal.close();
  }

  detectlinks()
  {
    let paragraph=document.getElementById("youtube_link");
    paragraph.style.display="block";
    let youtube_count = 0;
    let text = (<HTMLInputElement>document.getElementById("limbTextArea")).value;
    let res = text.replace( /\n/g, " " ).split( " " )
    res.forEach(element => 
    {
        console.log(element);
        if(this.validateYouTubeUrl(element))
        {
          ++youtube_count;
          console.log("youtube link:"+element);
        }
    });

    if(youtube_count==0)
      paragraph.style.display="none";
    else if(youtube_count==1)
      paragraph.innerHTML=youtube_count+" youtube link detected";
    else
      paragraph.innerHTML=youtube_count+" youtube links detected";

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
