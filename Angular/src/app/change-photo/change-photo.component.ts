import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeHtml, SafeUrl, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-change-photo',
  templateUrl: './change-photo.component.html',
  styleUrls: ['./change-photo.component.css']
})
export class ChangePhotoComponent implements OnInit {

  @Input() email;
  @Input() type;
  @Input() url: any;
  @Input() newImage;

  constructor(public activeModal: NgbActiveModal, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // console.log(this.type);
    // if(this.type == "Profile"){
    //   this.url = "/assets/images/cat.png";
    // } else if (this.type == 'Cover'){
    //   this.url =  "/assets/images/kitten_background.png";
    // } else {
    //   this.url = "/assets/images/kitten_background.png";
    // }
// The above may work if i send a regular url from the database
    // console.log("change-photo this.url inside ngOnInit: " + this.url);

    
  }


  closeModal(){
    this.activeModal.close();
  }


  changeLabel() {
    let input: any;
    let files = [];
    let filename: any;
    input = document.getElementById("newProfileImg");
    files = input.files;
    filename = files[0].name;
    let label: any;
    document.getElementById("inputImgLabel").innerHTML = '<i class="fa fa-upload" style="padding-right:.5em"></i>' + filename;
    this.url = window.URL.createObjectURL(files[0]);
    //  will persist new photo here.
  }

  submitPhoto() {
    let formData : FormData=new FormData;
    //formData.append()
    if (this.type == "Profile") {
      //do profile things
    }
    else {
      //do cover photo things
    }
  }
  


}
