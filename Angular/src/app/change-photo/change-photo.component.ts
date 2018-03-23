import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-change-photo',
  templateUrl: './change-photo.component.html',
  styleUrls: ['./change-photo.component.css']
})
export class ChangePhotoComponent implements OnInit {

  @Input() email;
  @Input() type;
  @Input() url;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
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

  }


}
