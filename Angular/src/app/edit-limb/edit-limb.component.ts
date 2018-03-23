import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-limb',
  templateUrl: './edit-limb.component.html',
  styleUrls: ['./edit-limb.component.css']
})
export class EditLimbComponent implements OnInit {

  @Input() limbId;

  constructor(public activeModal: NgbActiveModal) {

   }

  ngOnInit() {
   
  }

  closeModal(){
    this.activeModal.close();
  }
}
