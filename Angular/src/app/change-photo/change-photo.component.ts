import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer, SafeHtml, SafeUrl, SafeStyle } from '@angular/platform-browser';
import { Server } from 'selenium-webdriver/safari';
import { BackendService } from '../backend/backend.service';
import { User } from '../objects';

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

  constructor(public activeModal: NgbActiveModal, private sanitizer: DomSanitizer, private server: BackendService) { }

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


  closeModal() {
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

  }

  submitPhoto() {
    let input: any;
    let files = [];
    let filename: any;
    input = document.getElementById("newProfileImg");
    files = input.files;

    let theFile: File = files[0];

    //formData.append()
    if (this.type == "Profile") {
      this.server.uploadPhoto(localStorage.getItem('username'), 'Profile', theFile).subscribe(res => {
        this.updateUser();
      });
    }

    else if (this.type == "Cover") {
      this.server.uploadPhoto(localStorage.getItem('username'), 'Cover', theFile).subscribe(res => {
        this.updateUser();
      });
    }
    this.closeModal();
  }

updateUser() {
      //get new user object with update image urls
      this.server.getUserByUsername(localStorage.getItem('userName')).subscribe(res => {
        let user: User = <User>res;
        localStorage.setItem('userObject', JSON.stringify(user));
      });
}

}
