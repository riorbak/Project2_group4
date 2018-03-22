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

  

}
